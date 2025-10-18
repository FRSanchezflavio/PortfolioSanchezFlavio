#!/bin/bash

# Script para desplegar la aplicación full stack

# Variables
CLIENT_DIR="./client"
SERVER_DIR="./server"
BUILD_DIR="./build"
DEPLOY_DIR="/path/to/deploy"  # Cambiar a la ruta de despliegue deseada

# Construir el cliente
echo "Construyendo el cliente..."
cd $CLIENT_DIR
npm install
npm run build

# Mover los archivos construidos al directorio de despliegue
echo "Moviendo archivos del cliente al directorio de despliegue..."
mkdir -p $DEPLOY_DIR/client
cp -r $CLIENT_DIR/dist/* $DEPLOY_DIR/client/

# Construir el servidor
echo "Construyendo el servidor..."
cd $SERVER_DIR
npm install

# Mover los archivos del servidor al directorio de despliegue
echo "Moviendo archivos del servidor al directorio de despliegue..."
mkdir -p $DEPLOY_DIR/server
cp -r $SERVER_DIR/src/* $DEPLOY_DIR/server/

# Iniciar el servidor en el directorio de despliegue
echo "Iniciando el servidor..."
cd $DEPLOY_DIR/server
npm start

echo "Despliegue completado."