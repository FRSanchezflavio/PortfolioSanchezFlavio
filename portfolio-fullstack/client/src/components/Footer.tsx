import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/FRSanchezflavio',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/flavio-sanchez',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:flavio@example.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+54381XXXXXXX',
      label: 'Teléfono',
    },
  ]

  return (
    <footer className="bg-gradient-to-t from-police-darker via-police-dark to-transparent border-t border-police-blue border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Información */}
          <div>
            <h3 className="text-police-gold font-bold text-lg mb-4 uppercase tracking-wider">
              Flavio Sánchez
            </h3>
            <p className="text-police-light text-sm opacity-75 leading-relaxed">
              Desarrollador Full Stack & Analista de Datos<br />
              <span className="text-police-gold text-xs">
                Departamento de Inteligencia Criminal - Tucumán
              </span>
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-police-light font-bold mb-4 uppercase tracking-wider text-sm">
              Navegación
            </h4>
            <ul className="space-y-2">
              {['Inicio', 'Acerca de', 'Proyectos'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-police-light text-sm hover:text-police-gold transition-colors duration-300"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologías */}
          <div>
            <h4 className="text-police-light font-bold mb-4 uppercase tracking-wider text-sm">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Prisma'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-police-blue bg-opacity-20 text-police-gold text-xs rounded border border-police-blue border-opacity-30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-police-light font-bold mb-4 uppercase tracking-wider text-sm">
              Conecta
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg bg-police-blue bg-opacity-20 border border-police-blue border-opacity-30 flex items-center justify-center text-police-gold hover:bg-police-accent hover:border-police-accent transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:text-white" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-police-blue border-opacity-20 pt-8">
          {/* Copyright y legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-police-light opacity-60">
            <p>
              © {currentYear} Flavio Sánchez. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-police-gold transition-colors">
                Privacidad
              </a>
              <a href="#terms" className="hover:text-police-gold transition-colors">
                Términos
              </a>
              <a href="#contact" className="hover:text-police-gold transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Badge */}
          <div className="mt-6 pt-6 border-t border-police-blue border-opacity-10 flex justify-center">
            <div className="inline-flex items-center gap-2 text-xs text-police-light opacity-50">
              <span className="w-2 h-2 bg-police-gold rounded-full animate-pulse"></span>
              Construido con React, TypeScript y Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
