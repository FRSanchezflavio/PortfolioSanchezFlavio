import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allProjects: Project[] = [
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
    {
      id: '4',
      title: 'Base de Datos Criminal',
      shortDescription: 'Sistema de almacenamiento y consulta de datos',
      description:
        'Base de datos relacional optimizada para almacenar y consultar información criminal intelligence.',
      imageUrl: 'https://via.placeholder.com/400x300?text=Database',
      liveUrl: 'https://ejemplo.com',
      repositoryUrl: 'https://github.com/FRSanchezflavio',
      technologies: ['PostgreSQL', 'Prisma ORM', 'Docker'],
      category: 'database',
      featured: false,
      startDate: '2023-02-01',
      impact: '100M+ registros almacenados de forma segura',
    },
    {
      id: '5',
      title: 'Portal Web Profesional',
      shortDescription: 'Sitio web moderno y responsivo',
      description:
        'Portal web completo con diseño moderno, formularios de contacto y galería de proyectos.',
      imageUrl: 'https://via.placeholder.com/400x300?text=Web+Portal',
      liveUrl: 'https://ejemplo.com',
      repositoryUrl: 'https://github.com/FRSanchezflavio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'web',
      featured: false,
      startDate: '2024-01-01',
      impact: '10k+ visitantes mensuales',
    },
    {
      id: '6',
      title: 'Sistema de Notificaciones',
      shortDescription: 'API para envío de alertas en tiempo real',
      description:
        'Servidor de notificaciones con soporte para múltiples canales (email, SMS, push).',
      imageUrl: 'https://via.placeholder.com/400x300?text=Notifications',
      liveUrl: 'https://ejemplo.com',
      repositoryUrl: 'https://github.com/FRSanchezflavio',
      technologies: ['Node.js', 'WebSocket', 'Redis', 'PostgreSQL'],
      category: 'api',
      featured: false,
      startDate: '2024-02-01',
      impact: '99.9% uptime, 1M+ notificaciones/día',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'analysis', label: 'Análisis' },
    { id: 'web', label: 'Web' },
    { id: 'api', label: 'API' },
    { id: 'database', label: 'Base Datos' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? allProjects
      : allProjects.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-police-darker via-police-dark to-police-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-police-light mb-4">
            Mis <span className="text-police-gold">Proyectos</span>
          </h1>
          <p className="text-xl text-police-light opacity-80 max-w-2xl mx-auto">
            Exploración completa de mis trabajos en desarrollo full stack y
            análisis de datos.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-police-dark border-b border-police-blue border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-police text-police-gold border border-police-gold border-opacity-50 shadow-lg'
                    : 'bg-police-blue bg-opacity-10 text-police-light border border-police-blue border-opacity-20 hover:border-opacity-40'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <p className="text-center text-police-light opacity-60 text-sm mt-4">
            Mostrando {filteredProjects.length} proyecto
            {filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-20 bg-gradient-to-b from-police-dark to-police-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-police-light opacity-60 text-lg">
                No hay proyectos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-police-dark border-t border-police-blue border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-police-light mb-4">
            ¿Interesado en trabajar juntos?
          </h2>
          <p className="text-lg text-police-light opacity-70 mb-8 max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y colaboraciones
            profesionales.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm border border-police-gold border-opacity-30"
          >
            Iniciar Proyecto
          </a>
        </div>
      </section>
    </div>
  );
}
