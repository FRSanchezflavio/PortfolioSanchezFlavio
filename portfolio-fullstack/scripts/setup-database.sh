#!/bin/bash

# Script para configurar PostgreSQL para el portfolio

echo "🔧 Configurando PostgreSQL para Portfolio..."

# Verificar si PostgreSQL está instalado
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL no está instalado."
    echo "💡 Por favor instala PostgreSQL primero:"
    echo "   - Windows: https://www.postgresql.org/download/windows/"
    echo "   - Mac: brew install postgresql"
    echo "   - Linux: sudo apt-get install postgresql"
    exit 1
fi

echo "✅ PostgreSQL encontrado"

# Solicitar credenciales si no están en variables de entorno
if [ -z "$POSTGRES_USER" ]; then
    read -p "Ingresa el usuario de PostgreSQL (por defecto 'postgres'): " POSTGRES_USER
    POSTGRES_USER=${POSTGRES_USER:-postgres}
fi

if [ -z "$DB_PASSWORD" ]; then
    read -s -p "Ingresa la contraseña para portfolio_user: " DB_PASSWORD
    echo
fi

# Comandos SQL
SQL_COMMANDS="
-- Crear base de datos
CREATE DATABASE portfolio_db;

-- Crear usuario
CREATE USER portfolio_user WITH PASSWORD '$DB_PASSWORD';

-- Configurar usuario
ALTER ROLE portfolio_user SET client_encoding TO 'utf8';
ALTER ROLE portfolio_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE portfolio_user SET default_transaction_deferrable TO on;

-- Otorgar permisos
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
GRANT ALL ON SCHEMA public TO portfolio_user;

-- Confirmar configuración
\l
\du
"

echo "🗄️ Creando base de datos y usuario..."

# Ejecutar comandos SQL
echo "$SQL_COMMANDS" | psql -U "$POSTGRES_USER" -h localhost

if [ $? -eq 0 ]; then
    echo "✅ Base de datos configurada exitosamente"
    echo "📝 Actualiza tu archivo .env con:"
    echo "   DATABASE_URL=\"postgresql://portfolio_user:$DB_PASSWORD@localhost:5432/portfolio_db\""
else
    echo "❌ Error configurando la base de datos"
    exit 1
fi

echo "🎉 Configuración completada!"