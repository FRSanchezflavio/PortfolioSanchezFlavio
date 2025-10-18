/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores profesionales policiales
        'police-dark': '#0f172a',      // Azul marino oscuro (fondo principal)
        'police-darker': '#020617',    // Negro azulado muy oscuro
        'police-blue': '#1e40af',      // Azul profesional
        'police-light': '#f8fafc',     // Blanco azulado (para texto)
        'police-accent': '#dc2626',    // Rojo policial (accents)
        'police-gold': '#d97706',      // Oro para detalles premium
        'shield-blue': '#0369a1',      // Azul escudo
        'badge-gold': '#fbbf24',       // Dorado para badges
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'police-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'police-md': '0 4px 8px rgba(0, 0, 0, 0.4)',
        'police-lg': '0 8px 16px rgba(0, 0, 0, 0.5)',
        'police-xl': '0 12px 24px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-police': 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
        'gradient-accent': 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
