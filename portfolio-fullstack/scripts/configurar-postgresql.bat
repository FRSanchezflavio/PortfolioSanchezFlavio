@echo off
echo.
echo ===============================================
echo    CONFIGURACION POSTGRESQL - PASO A PASO
echo ===============================================
echo.

REM Paso 1: Verificar PostgreSQL
echo [PASO 1] Verificando PostgreSQL...
where psql >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ PostgreSQL no encontrado
    echo 💡 Instala PostgreSQL desde: https://www.postgresql.org/download/windows/
    pause
    exit /b 1
) else (
    echo ✅ PostgreSQL encontrado
)

echo.
echo [PASO 2] Verificando servicios...
sc query | findstr postgresql >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Servicio PostgreSQL no encontrado
    echo 💡 Asegurate de que PostgreSQL esté instalado correctamente
    pause
    exit /b 1
) else (
    echo ✅ Servicio PostgreSQL encontrado
)

echo.
echo [PASO 3] Configuracion de base de datos...
echo.
echo IMPORTANTE: Necesitarás la contraseña del usuario 'postgres'
echo que configuraste durante la instalación de PostgreSQL.
echo.
set /p continuar="¿Continuar? (s/n): "
if /i not "%continuar%"=="s" (
    echo Cancelado por el usuario
    pause
    exit /b 0
)

echo.
echo [PASO 4] Creando base de datos y usuario...
echo.
echo Se abrirá psql. Ejecuta estos comandos:
echo.
echo 1. CREATE DATABASE portfolio_db;
echo 2. CREATE USER portfolio_user WITH PASSWORD 'mi-contraseña';
echo 3. ALTER ROLE portfolio_user SET client_encoding TO 'utf8';
echo 4. ALTER ROLE portfolio_user SET default_transaction_isolation TO 'read committed';
echo 5. GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
echo 6. \c portfolio_db;
echo 7. GRANT ALL ON SCHEMA public TO portfolio_user;
echo 8. \q
echo.
pause
echo.
echo Conectando a PostgreSQL...
psql -U postgres -h localhost

echo.
echo [PASO 5] Verificando conexión del proyecto...
echo Probando conexión con el usuario del proyecto...
psql -U portfolio_user -d portfolio_db -h localhost -c "\dt"

if %errorlevel% equ 0 (
    echo ✅ Configuración exitosa
    echo.
    echo SIGUIENTE PASO: Ve al directorio server y ejecuta:
    echo   cd server
    echo   npm install
    echo   npm run db:generate
    echo   npm run db:push
    echo   npm run dev
) else (
    echo ❌ Error en la configuración
    echo Revisa la GUIA_POSTGRESQL_COMPLETA.md para solucionar problemas
)

echo.
pause