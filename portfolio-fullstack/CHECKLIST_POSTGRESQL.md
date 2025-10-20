# ✅ CHECKLIST: Configuración PostgreSQL

## 📋 Antes de Empezar

- [x] Tienes permisos de administrador en Windows
- [ ] Sabes la contraseña del usuario `postgres` (o la vas a crear)
- [x] Tienes acceso a internet para descargar PostgreSQL (si no está instalado)

---

## 🚀 PASOS A SEGUIR

### 1. Verificar PostgreSQL

- [x] Abrir **PowerShell como Administrador**
- [x] Ejecutar: `Get-Service -Name "*postgresql*"`
- [x] Ejecutar: `where.exe psql`

**¿PostgreSQL está instalado?**

- ✅ SÍ → Ir al paso 2
- ❌ NO → Instalar desde https://www.postgresql.org/download/windows/

### 2. Iniciar Servicio PostgreSQL

```powershell
# Encuentra el nombre exacto del servicio
Get-Service | Where-Object {$_.Name -like "*postgresql*"}

# Inicia el servicio (reemplaza con el nombre correcto)
Start-Service -Name "postgresql-x64-15"
```

- [x] Servicio iniciado correctamente
- [x] Estado: `Running`

### 3. Conectar como Administrador

```cmd
psql -U postgres -h localhost
```

- [ ] Conexión exitosa
- [ ] Apareció el prompt: `postgres=#`

### 4. Crear Base de Datos

```sql
CREATE DATABASE portfolio_db;
```

- [ ] Mensaje: `CREATE DATABASE`

### 5. Crear Usuario

```sql
CREATE USER portfolio_user WITH PASSWORD 'mi-contraseña';
```

- [ ] Mensaje: `CREATE ROLE`

### 6. Configurar Permisos

```sql
ALTER ROLE portfolio_user SET client_encoding TO 'utf8';
ALTER ROLE portfolio_user SET default_transaction_isolation TO 'read committed';
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
```

- [ ] Tres mensajes de `ALTER ROLE` y `GRANT`

### 7. Permisos en Schema

```sql
\c portfolio_db;
GRANT ALL ON SCHEMA public TO portfolio_user;
```

- [ ] Conectado a `portfolio_db`
- [ ] Permisos otorgados

### 8. Verificar Configuración

```sql
\l
\du
\q
```

- [ ] `portfolio_db` aparece en la lista
- [ ] `portfolio_user` aparece en la lista
- [ ] Saliste de psql

### 9. Probar Conexión del Proyecto

```cmd
psql -U portfolio_user -d portfolio_db -h localhost
```

- [ ] Conexión exitosa con el usuario del proyecto
- [ ] Prompt: `portfolio_db=>`

### 10. Configurar Proyecto

```bash
cd "c:\Users\flavi\OneDrive\Escritorio\PortfolioSanchezFlavio\portfolio-fullstack\server"
npm install
npm run db:generate
npm run db:push
```

- [ ] Dependencias instaladas
- [ ] Cliente Prisma generado
- [ ] Schema aplicado a la base de datos

### 11. Probar Servidor

```bash
npm run dev
```

- [ ] Servidor inicia sin errores
- [ ] Mensaje: `🚀 Server is running on http://localhost:5000`

---

## 🚨 Si Algo Sale Mal

### Error: "psql no se reconoce"

```powershell
$env:PATH += ";C:\Program Files\PostgreSQL\15\bin"
```

### Error: "Servicio no se inicia"

```powershell
Restart-Service -Name "*postgresql*"
```

### Error: "Autenticación falló"

- Verifica la contraseña del usuario `postgres`
- Intenta con: `psql -U postgres -h 127.0.0.1`

### Error: "Puerto 5432 ocupado"

```powershell
netstat -an | findstr :5432
```

---

## 📁 Archivos de Ayuda Creados

1. **`GUIA_POSTGRESQL_COMPLETA.md`** - Guía detallada completa
2. **`scripts/configurar-postgresql.bat`** - Script automático para Windows
3. **Este checklist** - Lista de verificación paso a paso

---

## 🎯 Resultado Final

Cuando todo esté configurado correctamente:

- ✅ PostgreSQL corriendo en puerto 5432
- ✅ Base de datos `portfolio_db` creada
- ✅ Usuario `portfolio_user` con permisos
- ✅ Proyecto conectado a PostgreSQL
- ✅ Servidor ejecutándose en http://localhost:5000

**¡Tu portfolio estará listo para usar PostgreSQL!** 🎉
