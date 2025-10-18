import { ArrowRight, Download, Code2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-police-darker via-police-dark to-police-blue flex items-center justify-center overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-police-blue rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-8 right-10 w-72 h-72 bg-police-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-police-blue bg-opacity-20 border border-police-gold border-opacity-30 rounded-full w-fit">
              <span className="w-2 h-2 bg-police-gold rounded-full animate-pulse"></span>
              <span className="text-sm text-police-gold font-semibold uppercase tracking-wider">
                Bienvenido
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-6xl font-bold text-police-light leading-tight">
              Flavio
              <br />
              <span className="bg-gradient-to-r from-police-gold via-yellow-400 to-police-gold bg-clip-text text-transparent">
                Sánchez
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-police-light opacity-80">
              Desarrollador Full Stack & Analista de Datos
            </p>

            {/* Descripción */}
            <p className="text-lg text-police-light opacity-70 leading-relaxed max-w-lg">
              Oficial de Policía del Departamento de Inteligencia Criminal -
              Tucumán. Especializado en el desarrollo de soluciones tecnológicas
              para análisis criminal intelligence y aplicaciones web modernas
              con React y Node.js.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm border border-police-gold border-opacity-30 group"
              >
                Ver Proyectos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-police-gold font-bold rounded-lg border-2 border-police-gold hover:bg-police-gold hover:text-police-dark transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Contacto
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 bg-police-blue bg-opacity-20 text-police-light font-bold rounded-lg border border-police-blue border-opacity-30 hover:bg-opacity-40 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                <Download className="w-5 h-5" />
                CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-police-blue border-opacity-20">
              <div>
                <div className="text-3xl font-bold text-police-gold">5+</div>
                <p className="text-sm text-police-light opacity-60">
                  Años Experiencia
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-police-gold">20+</div>
                <p className="text-sm text-police-light opacity-60">
                  Proyectos
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-police-gold">100%</div>
                <p className="text-sm text-police-light opacity-60">
                  Dedicación
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Card principal */}
              <div className="absolute inset-0 bg-gradient-to-br from-police-blue via-shield-blue to-police-dark rounded-2xl border border-police-gold border-opacity-20 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Code2 className="w-16 h-16 text-police-gold mx-auto mb-4" />
                  <p className="text-police-gold font-bold uppercase tracking-wider">
                    Full Stack
                  </p>
                  <p className="text-police-light text-sm opacity-60 mt-2">
                    Developer
                  </p>
                </div>
              </div>

              {/* Card flotante 1 */}
              <div className="absolute -top-8 -right-8 w-40 h-32 bg-gradient-to-br from-police-accent to-red-700 rounded-xl border border-police-gold border-opacity-30 shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-xs font-bold uppercase">Data</p>
                  <p className="text-white text-xs opacity-75">Analysis</p>
                </div>
              </div>

              {/* Card flotante 2 */}
              <div className="absolute -bottom-8 -left-8 w-40 h-32 bg-gradient-to-br from-police-blue to-shield-blue rounded-xl border border-police-gold border-opacity-30 shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <Code2 className="w-8 h-8 text-police-gold mx-auto mb-2" />
                  <p className="text-police-gold text-xs font-bold uppercase">
                    React &
                  </p>
                  <p className="text-police-gold text-xs">Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea animada inferior */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-police-light opacity-60 uppercase tracking-widest">
            Scroll para explorar
          </span>
          <div className="w-6 h-10 border-2 border-police-gold rounded-full flex justify-center">
            <span className="w-1 h-2 bg-police-gold rounded-full mt-2 animate-bounce"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
