# 🎨 Portfolio - Cliente (Frontend)

## 📋 Información General

Este es el frontend del portfolio profesional policial desarrollado con:

- **React 18** - Librería de UI
- **TypeScript** - Type-safety
- **Vite** - Bundler ultrarrápido
- **Tailwind CSS** - Estilos utility-first
- **React Router** - Navegación
- **Lucide Icons** - Iconografía

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Variables de Entorno

Crear archivo `.env.local`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME="Portfolio Flavio Sánchez"
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

### 4. Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

## 📁 Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Footer.tsx      # Pie de página
│   ├── HeroSection.tsx # Sección principal
│   ├── ProjectCard.tsx # Tarjeta de proyecto
│   └── ContactForm.tsx # Formulario
├── pages/              # Páginas principales
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── About.tsx
├── hooks/              # Custom Hooks
│   └── useContactForm.ts
├── context/            # React Context
│   └── ThemeContext.tsx
├── types/              # TypeScript types
│   └── index.d.ts
├── styles/             # Estilos globales
│   └── global.css
├── App.tsx             # Componente raíz
└── main.tsx            # Punto de entrada
```

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🎨 Diseño Profesional Policial

### Paleta de Colores

```typescript
// Colores principales
--color-police-dark: #0f172a      // Azul marino principal
--color-police-blue: #1e40af      // Azul profesional
--color-police-gold: #d97706      // Dorado/Accent
--color-police-accent: #dc2626    // Rojo policial
--color-shield-blue: #0369a1      // Azul escudo

// Uso en CSS
<div className="bg-police-dark text-police-gold">
</div>
```

### Componentes Principales

#### Navbar

- Logo con escudo policial
- Menú responsive
- Links a todas las secciones
- Botón de contacto

#### HeroSection

- Presentación personal
- Estadísticas destacadas
- Cards flotantes
- Scroll indicator

#### ProjectCard

- Imagen con hover
- Tecnologías usadas
- Badges de categoría
- Links de acción

#### ContactForm

- Validación en cliente
- Campos requeridos
- Mensajes de estado
- Información de contacto

## 🔧 Configuración Tailwind CSS

El proyecto usa Tailwind con extensiones personalizadas:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'police-dark': '#0f172a',
      'police-blue': '#1e40af',
      'police-gold': '#d97706',
      'police-accent': '#dc2626',
      'shield-blue': '#0369a1',
    }
  }
}
```

Uso:

```tsx
<div className="bg-police-dark text-police-gold border-police-blue">
  Contenido
</div>
```

## 📱 Responsive Design

El sitio es completamente responsive:

- **Mobile** (< 640px) - 1 columna
- **Tablet** (640px - 1024px) - 2 columnas
- **Desktop** (> 1024px) - 3+ columnas

```tsx
// Ejemplo
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## 🔌 Integración con Backend

El cliente se comunica con el servidor mediante la URL en `.env`:

```typescript
// Ejemplo de petición
const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 🧪 Testing

### Ejecutar Tests

```bash
npm test
```

### Ejemplo de Test

```typescript
import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

test('Navbar renderiza correctamente', () => {
  render(<Navbar />)
  expect(screen.getByText('Flavio Sánchez')).toBeInTheDocument()
})
```

## 🎭 Tipos TypeScript

Todos los componentes usan TypeScript:

```typescript
// types/index.d.ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: 'analysis' | 'web' | 'api' | 'database'
  featured: boolean
}

// Uso en componentes
interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // ...
}
```

## 🚨 Errores Comunes

### "Module not found"

```bash
# Solución
rm -rf node_modules
npm install
```

### Cambios no reflejan en desarrollo

```bash
# Reiniciar Vite
# Presiona 'r' en la terminal
# O reinicia manualmente
```

### CORS errors

Asegúrate que el backend esté corriendo en `http://localhost:3000`

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.16.0",
  "typescript": "^5.2.0",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^0.263.1",
  "axios": "^1.5.0"
}
```

## 🔐 Variables de Entorno

```env
# Desarrollo
VITE_API_URL=http://localhost:3000/api

# Producción (Vercel, Netlify, etc)
VITE_API_URL=https://api.tunominio.com/api
```

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Drag and drop a Netlify
# O usar Netlify CLI
netlify deploy --prod --dir=dist
```

## 📚 Recursos

- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

## 💬 Soporte

Para problemas o preguntas, abre un issue en el repositorio.

---

**Versión:** 1.0.0  
**Última actualización:** 18/10/2025
