# GUÍA DE INSTALACIÓN Y CONFIGURACIÓN PASO A PASO

## ✅ PASO 1: INSTALAR DEPENDENCIAS

Abre una terminal en la carpeta raíz del proyecto (`portfolio-fullstack`) y ejecuta:

```bash
npm install
```

Luego instala las dependencias del cliente:

```bash
cd client
npm install
```

Y las del servidor:

```bash
cd ../server
npm install
```

## ✅ PASO 2: CONFIGURAR VARIABLES DE ENTORNO

### Cliente (client/.env.local)
```env
VITE_API_URL=http://localhost:3000/api
```

### Servidor (server/.env)
```env
NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-app
CONTACT_EMAIL=tu-email@gmail.com
FRONTEND_URL=http://localhost:5173
JWT_SECRET=tu-secreto-jwt-super-seguro
```

## ✅ PASO 3: CREAR COMPONENTES FALTANTES

Se proporcionarán los archivos de los componentes aún no creados:
- ProjectCard.tsx
- Home.tsx
- Projects.tsx
- About.tsx
- ThemeContext.tsx
- useContactForm.ts

## ✅ PASO 4: EJECUTAR EN DESARROLLO

Desde la carpeta raíz:

```bash
npm run dev
```

Esto iniciará:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## ✅ PASO 5: CONFIGURAR BASE DE DATOS

Asegúrate de tener PostgreSQL instalado y ejecutando:

```bash
# En la carpeta server
npx prisma migrate dev --name init
npx prisma generate
```

## ✅ PASO 6: COMPILAR Y DESPLEGAR

Para producción:

```bash
npm run build
npm start
```

---

**Próximos pasos:** Te guiaré para crear cada componente faltante con todo el detalle necesario.
