import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import { Code2, BarChart3, Shield } from 'lucide-react';
import type { Project } from '../types';

export default function Home() {
  // Proyectos destacados
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'Sistema de Análisis Criminal',
      shortDescription:
        'Plataforma integrada para análisis de redes delictivas',
      description:
        'Plataforma web para el análisis de redes delictivas con visualización de grafos, análisis de patrones y generación de reportes automáticos.',
      imageUrl: 'https://via.placeholder.com/400x300?text=Criminal+Analysis',
      liveUrl: 'https://ejemplo.com',
      repositoryUrl: 'https://github.com/FRSanchezflavio',
      technologies: ['React', 'TypeScript', 'Node.js', 'Neo4j', 'D3.js'],
      category: 'analysis',
      featured: true,
      startDate: '2023-06-01',
      endDate: '2023-12-31',
      impact: 'Reducción del 40% en tiempo de análisis criminal',
    },
    {
      id: '2',
      title: 'Dashboard de Inteligencia',
      shortDescription: 'Panel de control con métricas en tiempo real',
      description:
        'Dashboard interactivo con métricas, indicadores y alertas en tiempo real para operaciones de inteligencia criminal.',
      imageUrl:
        'https://via.placeholder.com/400x300?text=Intelligence+Dashboard',
      liveUrl: 'https://ejemplo.com',
      repositoryUrl: 'https://github.com/FRSanchezflavio',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Charts.js'],
      category: 'web',
      featured: true,
      startDate: '2023-03-01',
      impact: 'Monitoreo en tiempo real de 500+ registros simultáneamente',
    },
    {
      id: '3',
      title: 'API RESTful de Reportes',
      shortDescription: 'Servidor backend para generación de reportes',
      description:
        'API desarrollada con Express y Prisma para gestionar reportes, usuarios y datos criminal intelligence.',
      imageUrl: 'https://via.placeholder.com/400x300?text=Reports+API',
      liveUrl: 'https://ejemplo.com/api',
      repositoryUrl: 'https://github.com/FRSanchezflavio',
      technologies: ['Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
      category: 'api',
      featured: false,
      startDate: '2023-01-01',
      impact: '1M+ requests mensuales procesados',
    },
  ];

  // Habilidades principales
  const skills = [
    {
      icon: Code2,
      title: 'Desarrollo Web',
      description: 'React, TypeScript, Node.js, Express',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description: 'Python, SQL, Power BI, Visualización',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Autenticación, Encriptación, CORS',
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Sección de Habilidades */}
      <section className="py-20 bg-police-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-police-light mb-4">
              Mis <span className="text-police-gold">Habilidades</span>
            </h2>
            <p className="text-lg text-police-light opacity-70 max-w-2xl mx-auto">
              Especializado en desarrollo full stack con enfoque en análisis de
              datos e inteligencia criminal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg hover:border-opacity-40 hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-police-light mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-police-light opacity-70">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección de Proyectos Destacados */}
      <section className="py-20 bg-gradient-to-b from-police-dark to-police-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-police-light mb-4">
              Proyectos <span className="text-police-gold">Destacados</span>
            </h2>
            <p className="text-lg text-police-light opacity-70 max-w-2xl mx-auto">
              Aquí puedes ver mis trabajos más relevantes y logros
              profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm border border-police-gold border-opacity-30"
            >
              Ver Todos los Proyectos →
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="py-20 bg-police-dark border-t border-b border-police-blue border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Años de Experiencia' },
              { number: '20+', label: 'Proyectos Completados' },
              { number: '100%', label: 'Dedicación' },
              { number: '1M+', label: 'Requests/Mes' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-police-gold to-yellow-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-police-light opacity-70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
