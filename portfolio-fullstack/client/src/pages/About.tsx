import { Award, Briefcase, Code, Database, Shield, Users } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: '2019',
      title: 'Ingreso a la Policía Provincial',
      description: 'Inicio de carrera como oficial de policía',
    },
    {
      year: '2020',
      title: 'Departamento de Inteligencia Criminal',
      description: 'Asignación al Departamento de Inteligencia Criminal de Tucumán',
    },
    {
      year: '2021',
      title: 'Formación en Desarrollo Web',
      description: 'Certificación en desarrollo full stack y análisis de datos',
    },
    {
      year: '2022',
      title: 'Primer Proyecto de Inteligencia',
      description: 'Desarrollo del Sistema de Análisis Criminal Intelligence',
    },
    {
      year: '2023',
      title: 'Múltiples Proyectos',
      description:
        'Dashboard, API, y sistemas de análisis de datos para operaciones criminales',
    },
    {
      year: '2024',
      title: 'Especialización',
      description: 'Profundización en architecture de sistemas y machine learning',
    },
  ]

  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: Briefcase,
      skills: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Base de Datos',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Redis', 'Neo4j'],
    },
    {
      category: 'DevOps & Seguridad',
      icon: Shield,
      skills: ['Docker', 'AWS', 'GitHub Actions', 'SSL/TLS', 'JWT Auth'],
    },
    {
      category: 'Análisis de Datos',
      icon: Award,
      skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Machine Learning'],
    },
    {
      category: 'Liderazgo',
      icon: Users,
      skills: [
        'Gestión de Proyectos',
        'Team Leadership',
        'Mentoría',
        'Comunicación',
      ],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-police-darker via-police-dark to-police-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-police-light mb-6">
                Acerca de <span className="text-police-gold">Mí</span>
              </h1>
              <p className="text-xl text-police-light opacity-80 mb-4">
                Oficial de Policía Provincial Tucumán | Analista de Datos | Desarrollador
                Full Stack
              </p>
              <p className="text-lg text-police-light opacity-70 leading-relaxed">
                Combino mi experiencia policial con habilidades técnicas avanzadas para
                desarrollar soluciones tecnológicas que mejoren los procesos de
                inteligencia criminal.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-police-blue via-shield-blue to-police-dark rounded-lg border border-police-gold border-opacity-20 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-32 h-32 text-police-gold mx-auto mb-4 opacity-20" />
                  <p className="text-police-light font-bold text-lg">
                    Dedicado a la excelencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-20 bg-police-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-police-light mb-12 text-center">
            Mi <span className="text-police-gold">Historia</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-police-gold mb-6">
                Trayectoria Profesional
              </h3>
              <p className="text-police-light opacity-75 mb-4 leading-relaxed">
                Oficial de la Policía Provincial de Tucumán desde 2019, trabajando en el
                Departamento de Inteligencia Criminal. Mi rol combina trabajo de campo
                tradicional con análisis de datos y desarrollo de soluciones tecnológicas.
              </p>
              <p className="text-police-light opacity-75 mb-4 leading-relaxed">
                Especializado en identificar problemas operacionales y desarrollar
                aplicaciones web que optimicen procesos de análisis criminal intelligence.
              </p>
              <p className="text-police-light opacity-75 leading-relaxed">
                Manejo fluido de información sensible, comprensión profunda de seguridad
                de datos y arquitectura de sistemas escalables para millones de registros.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-police-gold mb-6">
                Mi Enfoque
              </h3>
              <ul className="space-y-4">
                {[
                  'Soluciones personalizadas que resuelven problemas reales',
                  'Código limpio, mantenible y documentado',
                  'Seguridad y privacidad como prioridad máxima',
                  'Escalabilidad desde el inicio del proyecto',
                  'Colaboración efectiva con equipos multidisciplinarios',
                  'Continuo aprendizaje y mejora profesional',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-police-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-police-light opacity-75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-police-dark to-police-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-police-light mb-12 text-center">
            Mi <span className="text-police-gold">Timeline</span>
          </h2>

          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-police-gold via-police-blue to-transparent"></div>

            {/* Eventos */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 p-6 rounded-lg hover:border-opacity-40 transition-all">
                      <span className="inline-block px-3 py-1 bg-police-accent text-white text-xs font-bold rounded mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-police-light mb-2">
                        {event.title}
                      </h3>
                      <p className="text-police-light opacity-70">{event.description}</p>
                    </div>
                  </div>

                  {/* Punto */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-police border-4 border-police-dark flex items-center justify-center">
                    <span className="w-4 h-4 bg-police-gold rounded-full"></span>
                  </div>

                  {/* Espaciador */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-20 bg-police-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-police-light mb-12 text-center">
            Mis <span className="text-police-gold">Habilidades</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg hover:border-opacity-40 hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-police rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                    <Icon className="w-6 h-6 text-police-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-police-light mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-police-blue bg-opacity-30 text-police-gold text-xs font-bold rounded border border-police-gold border-opacity-20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-police-blue via-police-dark to-police-blue border-t border-police-blue border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-police-light mb-4">
            ¿Quieres trabajar juntos?
          </h2>
          <p className="text-lg text-police-light opacity-70 mb-8 max-w-2xl mx-auto">
            Estoy disponible para consultas, proyectos y colaboraciones profesionales.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm border border-police-gold border-opacity-30"
          >
            Iniciar Conversación
          </a>
        </div>
      </section>
    </div>
  )
}