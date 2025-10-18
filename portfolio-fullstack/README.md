# Portfolio Full Stack

Este es un proyecto de portfolio desarrollado como una aplicación full stack utilizando TypeScript, React y Express. El objetivo de este proyecto es mostrar mis habilidades como desarrollador y proporcionar una plataforma para que los visitantes se pongan en contacto conmigo.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: el cliente y el servidor.

### Cliente

La parte del cliente está construida con React y utiliza Vite como bundler. La estructura de carpetas es la siguiente:

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes reutilizables de la aplicación.
  - `pages/`: Páginas de la aplicación.
  - `hooks/`: Hooks personalizados.
  - `context/`: Contexto para la gestión del estado global.
  - `styles/`: Estilos globales.
  - `types/`: Tipos personalizados.

### Servidor

La parte del servidor está construida con Express y TypeScript. La estructura de carpetas es la siguiente:

- `src/`: Contiene el código fuente del servidor.
  - `routes/`: Definición de rutas de la API.
  - `controllers/`: Lógica de negocio para manejar las solicitudes.
  - `services/`: Servicios para manejar la lógica de envío de correos electrónicos.
  - `models/`: Modelos de datos.
  - `middleware/`: Middleware para manejar errores.
  - `utils/`: Funciones utilitarias.

## Requisitos

Asegúrate de tener instalado Node.js y npm en tu máquina.

## Instalación

1. Clona el repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   cd portfolio-fullstack
   ```

2. Instala las dependencias del cliente:

   ```
   cd client
   npm install
   ```

3. Instala las dependencias del servidor:

   ```
   cd ../server
   npm install
   ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

1. Inicia el servidor:

   ```
   cd server
   npm run dev
   ```

2. En otra terminal, inicia el cliente:

   ```
   cd client
   npm run dev
   ```

Ahora deberías poder acceder a la aplicación en `http://localhost:3000` (o el puerto que hayas configurado).

## Despliegue

Para desplegar la aplicación, puedes utilizar el script de despliegue incluido en el proyecto. Asegúrate de tener configurado tu entorno de producción y ejecuta:

```
cd scripts
sh deploy.sh
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.