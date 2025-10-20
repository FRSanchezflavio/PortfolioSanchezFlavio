# 🗄️ Guía Completa para Configurar PostgreSQL

## 📋 Tabla de Contenidos

1. [Verificar Estado Actual](#verificar-estado-actual)
2. [Instalación de PostgreSQL](#instalación-de-postgresql)
3. [Configuración Inicial](#configuración-inicial)
4. [Crear Base de Datos y Usuario](#crear-base-de-datos-y-usuario)
5. [Configurar el Proyecto](#configurar-el-proyecto)
6. [Verificar Configuración](#verificar-configuración)
7. [Solución de Problemas](#solución-de-problemas)

---

## 1. 🔍 Verificar Estado Actual

### Paso 1.1: Verificar si PostgreSQL está instalado

Abre **PowerShell como Administrador** y ejecuta:

```powershell
# Verificar si PostgreSQL está instalado
Get-Service -Name "*postgresql*" -ErrorAction SilentlyContinue

# Verificar si psql está disponible
where.exe psql
```

### Paso 1.2: Verificar servicios de PostgreSQL

```powershell
# Ver todos los servicios de PostgreSQL
Get-Service | Where-Object {$_.Name -like "*postgresql*"}
```

---

## 2. 💾 Instalación de PostgreSQL (si no está instalado)

### Paso 2.1: Descargar PostgreSQL

1. Ve a: https://www.postgresql.org/download/windows/
2. Descarga la versión más reciente (15.x o 16.x)
3. Ejecuta el instalador como **Administrador**

### Paso 2.2: Durante la instalación

1. **Puerto**: Deja el puerto por defecto `5432`
2. **Superusuario**: El usuario será `postgres`
3. **Contraseña**: Anota la contraseña que elijas (ej: `postgres123`)
4. **Componentes**: Instala todos los componentes
5. **Directorio**: Usa el directorio por defecto

### Paso 2.3: Verificar instalación

```powershell
# Verificar que el servicio esté ejecutándose
Get-Service -Name "*postgresql*"

# Verificar que psql esté disponible
psql --version
```

---

## 3. ⚙️ Configuración Inicial

### Paso 3.1: Iniciar el servicio PostgreSQL

```powershell
# Iniciar servicio (reemplaza XX con tu versión)
Start-Service -Name "postgresql-x64-15"

# O usar net start
net start postgresql-x64-15
```

### Paso 3.2: Verificar que el servicio esté corriendo

```powershell
# Ver estado del servicio
Get-Service -Name "*postgresql*" | Select-Object Name, Status
```

---

## 4. 🏗️ Crear Base de Datos y Usuario

### Paso 4.1: Conectar como superusuario

Abre **Command Prompt** o **PowerShell** y ejecuta:

```cmd
psql -U postgres -h localhost
```

**Nota**: Te pedirá la contraseña que configuraste durante la instalación.

### Paso 4.2: Crear la base de datos

Una vez conectado a PostgreSQL, ejecuta estos comandos uno por uno:

```sql
-- Crear la base de datos
CREATE DATABASE portfolio_db;
```

### Paso 4.3: Crear el usuario

```sql
-- Crear usuario con contraseña
CREATE USER portfolio_user WITH PASSWORD 'mi-contraseña';
```

### Paso 4.4: Configurar permisos del usuario

```sql
-- Configuraciones del usuario
ALTER ROLE portfolio_user SET client_encoding TO 'utf8';
ALTER ROLE portfolio_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE portfolio_user SET default_transaction_deferrable TO on;

-- Otorgar permisos en la base de datos
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;

-- Conectar a la base de datos para dar permisos en el schema
\c portfolio_db;

-- Otorgar permisos en el schema public
GRANT ALL ON SCHEMA public TO portfolio_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO portfolio_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO portfolio_user;
```

### Paso 4.5: Verificar la configuración

```sql
-- Listar bases de datos
\l

-- Listar usuarios
\du

-- Salir de psql
\q
```

---

## 5. 🔧 Configurar el Proyecto

### Paso 5.1: Actualizar archivo .env

El archivo `server/.env` debe tener:

```env
DATABASE_URL="postgresql://portfolio_user:mi-contraseña@localhost:5432/portfolio_db"
```

### Paso 5.2: Instalar dependencias del servidor

```bash
cd "c:\Users\flavi\OneDrive\Escritorio\PortfolioSanchezFlavio\portfolio-fullstack\server"
npm install
```

### Paso 5.3: Generar cliente de Prisma

```bash
npm run db:generate
```

### Paso 5.4: Aplicar el schema a la base de datos

```bash
npm run db:push
```

---

## 6. ✅ Verificar Configuración

### Paso 6.1: Probar conexión con el usuario del proyecto

```cmd
psql -U portfolio_user -d portfolio_db -h localhost
```

### Paso 6.2: Verificar que las tablas se crearon

```sql
-- Ver las tablas
\dt

-- Ver la estructura de la tabla Message
\d "Message"

-- Salir
\q
```

### Paso 6.3: Probar el servidor

```bash
cd server
npm run dev
```

---

## 7. 🚨 Solución de Problemas

### Problema 1: "El servicio PostgreSQL no se inicia"

```powershell
# Reiniciar el servicio
Restart-Service -Name "*postgresql*"

# Ver logs del evento
Get-EventLog -LogName Application -Source "*PostgreSQL*" -Newest 5
```

### Problema 2: "psql no se reconoce como comando"

```powershell
# Agregar a PATH (reemplaza con tu ruta de instalación)
$env:PATH += ";C:\Program Files\PostgreSQL\15\bin"

# Para que sea permanente, usa:
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Program Files\PostgreSQL\15\bin", [EnvironmentVariableTarget]::User)
```

### Problema 3: "Error de autenticación"

1. Verifica que estés usando la contraseña correcta
2. Asegúrate de que el servicio esté ejecutándose
3. Intenta con: `psql -U postgres -h 127.0.0.1`

### Problema 4: "Puerto 5432 no disponible"

```powershell
# Verificar qué está usando el puerto
netstat -an | findstr :5432
```

### Problema 5: "No se puede conectar a localhost"

Edita el archivo `pg_hba.conf` (usualmente en `C:\Program Files\PostgreSQL\15\data\`):

Busca esta línea:

```
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
```

Y asegúrate de que esté descomentada.

---

## 🎯 Comandos de Emergencia

### Resetear completamente PostgreSQL

```powershell
# Detener servicio
Stop-Service -Name "*postgresql*"

# Eliminar datos (¡CUIDADO! Esto borra todo)
Remove-Item "C:\Program Files\PostgreSQL\15\data" -Recurse -Force

# Reinicializar cluster
& "C:\Program Files\PostgreSQL\15\bin\initdb.exe" -D "C:\Program Files\PostgreSQL\15\data" -U postgres

# Iniciar servicio
Start-Service -Name "*postgresql*"
```

### Cambiar contraseña del usuario postgres

```sql
-- Conectar como postgres y ejecutar:
ALTER USER postgres PASSWORD 'nueva_contraseña';
```

---

## 📞 Contacto y Ayuda

Si sigues teniendo problemas:

1. **Verifica los logs**: `C:\Program Files\PostgreSQL\15\data\log\`
2. **Servicios de Windows**: `services.msc`
3. **Variables de entorno**: Verifica que `PATH` incluya PostgreSQL

**¡Importante!**: Guarda esta guía y las contraseñas que uses en un lugar seguro.
