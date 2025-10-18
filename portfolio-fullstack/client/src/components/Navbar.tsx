import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Acerca de' },
    { href: '/projects', label: 'Proyectos' },
  ]

  return (
    <nav className="bg-gradient-to-r from-police-darker via-police-dark to-police-darker border-b border-police-blue border-opacity-20 sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-police p-2 rounded-lg group-hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-police-gold" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-police-gold uppercase tracking-wider">
                Flavio Sánchez
              </span>
              <span className="text-xs text-police-light opacity-75">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-police-light hover:text-police-gold transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-police-gold to-police-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm border border-police-gold border-opacity-30"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-police-blue hover:bg-opacity-20 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-police-gold" />
            ) : (
              <Menu className="w-6 h-6 text-police-gold" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-police-blue border-opacity-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-police-light hover:text-police-gold hover:bg-police-blue hover:bg-opacity-10 rounded-lg transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-gradient-police text-police-gold font-bold rounded-lg text-center uppercase tracking-wider border border-police-gold border-opacity-30 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
