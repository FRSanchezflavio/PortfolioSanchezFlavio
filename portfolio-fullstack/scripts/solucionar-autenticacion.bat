@echo off
setlocal EnableDelayedExpansion

:: ===============================================
::  Solucionar error: password authentication failed
::  Requiere permisos de Administrador
:: ===============================================

:: 1) Elevar a Administrador si no lo es
net session >nul 2>&1
if %errorlevel% neq 0 (
  echo [i] Solicitando permisos de Administrador...
  powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
  exit /b
)

echo.
echo ======= Paso 1: Detectar PostgreSQL instalado =======
echo.
for /d %%D in ("C:\Program Files\PostgreSQL\*") do (
  echo   - Detectado: %%~nxD
  set PGDIR="C:\Program Files\PostgreSQL\%%~nxD"
)

if not defined PGDIR (
  echo ❌ No se encontro PostgreSQL en "C:\Program Files\PostgreSQL\"
  echo    Instala PostgreSQL: https://www.postgresql.org/download/windows/
  pause
  exit /b 1
)

echo.
echo Ruta seleccionada: %PGDIR%
set PGBIN=%PGDIR%\bin
set PGDATA=%PGDIR%\data
set PGBHACONF=%PGDATA%\pg_hba.conf

if not exist %PGBHACONF% (
  echo ❌ No se encontro %PGBHACONF%
  echo    Si tienes multiples versiones, especifica la correcta:
  set /p PGDIR=Escribe la ruta de instalacion de PostgreSQL (ej. C:\Program Files\PostgreSQL\15): 
  set PGBIN=%PGDIR%\bin
  set PGDATA=%PGDIR%\data
  set PGBHACONF=%PGDATA%\pg_hba.conf
  if not exist %PGBHACONF% (
    echo ❌ Aun no se encuentra pg_hba.conf en %PGBHACONF%
    pause
    exit /b 1
  )
)

echo.
echo ======= Paso 2: Detectar servicio de PostgreSQL =======
echo.
set SVC=
for %%S in (postgresql-x64-16 postgresql-x64-15 postgresql-x64-14 postgresql-x64-13 postgresql-x64-12) do (
  sc query %%S >nul 2>&1 && set SVC=%%S
)

if not defined SVC (
  echo ❌ No se pudo detectar el nombre del servicio automaticamente.
  echo    Abre services.msc y localiza el servicio de PostgreSQL.
  set /p SVC=Escribe el nombre exacto del servicio (ej. postgresql-x64-15): 
)

echo Servicio: %SVC%

:: Funciones auxiliares
:restart_service
  echo [i] Reiniciando servicio %SVC%...
  net stop %SVC% >nul 2>&1
  net start %SVC% >nul 2>&1
  if %errorlevel% neq 0 (
    echo ❌ No se pudo reiniciar el servicio. Intentando con PowerShell...
    powershell -NoProfile -Command "Restart-Service -Name '%SVC%' -Force"
  )
  goto :eof

:psql_cmd
  set CMD=%~1
  "%PGBIN%\psql.exe" -U postgres -h 127.0.0.1 -p 5432 -c "%CMD%"
  exit /b %errorlevel%

:: 3) Backup de pg_hba.conf
if not exist "%PGBHACONF%.bak" (
  copy /Y %PGBHACONF% %PGBHACONF%.bak >nul
  echo [i] Backup creado: %PGBHACONF%.bak
) else (
  echo [i] Backup existente: %PGBHACONF%.bak
)

:: 4) Cambiar autenticacion a trust temporalmente

echo.
echo ======= Paso 3: Habilitar trust temporal =======
echo.
:: Usamos PowerShell para editar el archivo de forma segura
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$path='%PGBHACONF%'; ^
   $c=Get-Content -Raw -LiteralPath $path; ^
   $c = $c -replace '(?m)^\s*host\s+all\s+all\s+127\.0\.0\.1/32\s+\w+','host    all             all             127.0.0.1/32            trust'; ^
   $c = $c -replace '(?m)^\s*host\s+all\s+all\s+::1/128\s+\w+','host    all             all             ::1/128                 trust'; ^
   Set-Content -LiteralPath $path -Value $c -Encoding ascii; ^
   Write-Host 'pg_hba.conf actualizado a trust para localhost.'"

call :restart_service

:: 5) Cambiar contrasena del usuario postgres

echo.
echo ======= Paso 4: Cambiar contrasena de postgres =======
echo.
set /p NEWPASS=Ingresa NUEVA contrasena para el usuario postgres: 
if "%NEWPASS%"=="" (
  echo ❌ Contrasena vacia. Cancelando.
  goto :restore_auth
)

call :psql_cmd "ALTER USER postgres PASSWORD '%NEWPASS%';"
if %errorlevel% neq 0 (
  echo ❌ No se pudo cambiar la contrasena. Revisa que el servicio este arriba y el puerto 5432 libre.
  goto :end
) else (
  echo ✅ Contrasena actualizada correctamente.
)

:: 6) Revertir autenticacion a scram-sha-256
:restore_auth
echo.
echo ======= Paso 5: Revertir autenticacion a scram-sha-256 =======
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$path='%PGBHACONF%'; ^
   $c=Get-Content -Raw -LiteralPath $path; ^
   $c = $c -replace '(?m)^\s*host\s+all\s+all\s+127\.0\.0\.1/32\s+\w+','host    all             all             127.0.0.1/32            scram-sha-256'; ^
   $c = $c -replace '(?m)^\s*host\s+all\s+all\s+::1/128\s+\w+','host    all             all             ::1/128                 scram-sha-256'; ^
   Set-Content -LiteralPath $path -Value $c -Encoding ascii; ^
   Write-Host 'pg_hba.conf restaurado a scram-sha-256.'"

call :restart_service

:: 7) Probar conexion con nueva contrasena

echo.
echo ======= Paso 6: Probar conexion =======
echo.
"%PGBIN%\psql.exe" -U postgres -h 127.0.0.1 -p 5432 -c "\conninfo"
if %errorlevel% neq 0 (
  echo ❌ Sigue fallando la conexion. Revisa el archivo de logs en %PGDATA%\log\
) else (
  echo ✅ Conexion exitosa con la nueva contrasena.
)

echo.
:end
pause
exit /b
