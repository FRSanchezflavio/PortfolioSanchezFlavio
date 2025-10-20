# Configuración de PostgreSQL

Este documento explica cómo configurar PostgreSQL para el portfolio.

## 🚀 Instalación de PostgreSQL

### Windows

1. Descargar e instalar desde: https://www.postgresql.org/download/windows/
2. Durante la instalación, recordar la contraseña del usuario `postgres`
3. Iniciar el servicio: `net start postgresql-x64-14` (ajustar versión)

### macOS

```bash
# Instalar con Homebrew
brew install postgresql

# Iniciar servicio
brew services start postgresql
```

### Linux (Ubuntu/Debian)

```bash
# Instalar PostgreSQL
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Iniciar servicio
sudo service postgresql start
```

## 🔧 Configuración de la Base de Datos

### Opción 1: Script Automático

```bash
cd scripts
chmod +x setup-database.sh
./setup-database.sh
```

### Opción 2: Configuración Manual

```bash
# Conectar a PostgreSQL
psql -U postgres

# En la consola psql, ejecutar:
CREATE DATABASE portfolio_db;
CREATE USER portfolio_user WITH PASSWORD 'mi-contraseña-segura';
ALTER ROLE portfolio_user SET client_encoding TO 'utf8';
ALTER ROLE portfolio_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE portfolio_user SET default_transaction_deferrable TO on;
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
GRANT ALL ON SCHEMA public TO portfolio_user;
\q
```

## 📝 Configuración del Proyecto

1. **Actualizar el archivo .env del servidor:**

```env
DATABASE_URL="postgresql://portfolio_user:mi-contraseña-segura@localhost:5432/portfolio_db"
```

2. **Instalar dependencias:**

```bash
cd server
npm install
```

3. **Generar cliente de Prisma:**

```bash
npm run db:generate
```

4. **Aplicar el esquema a la base de datos:**

```bash
npm run db:push
```

## 🛠️ Comandos Útiles

```bash
# Generar cliente de Prisma
npm run db:generate

# Aplicar cambios del esquema
npm run db:push

# Crear y aplicar migración
npm run db:migrate

# Abrir Prisma Studio (interfaz visual)
npm run db:studio

# Resetear base de datos
npm run db:reset
```

## 🔍 Verificación

Para verificar que todo funciona correctamente:

```bash
# Conectar a la base de datos
psql -U portfolio_user -d portfolio_db -h localhost

# Listar tablas
\dt

# Ver estructura de la tabla Message
\d "Message"
```

## 🚨 Solución de Problemas

### Error de conexión

- Verificar que PostgreSQL esté ejecutándose
- Comprobar credenciales en el archivo .env
- Asegurarse de que el puerto 5432 esté disponible

### Error de permisos

```sql
-- Conectar como postgres y ejecutar:
GRANT ALL ON SCHEMA public TO portfolio_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO portfolio_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO portfolio_user;
```

### Cambiar contraseña del usuario

```sql
ALTER USER portfolio_user WITH PASSWORD 'nueva-contraseña';
```

## 📊 Monitoreo

- **Prisma Studio**: `npm run db:studio` - Interfaz visual para la base de datos
- **Logs de PostgreSQL**: Ubicación varía según el sistema operativo
- **Conexiones activas**: `SELECT * FROM pg_stat_activity;`
