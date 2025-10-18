import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const techColors: Record<string, string> = {
    React: 'bg-blue-500 bg-opacity-20 text-blue-300',
    TypeScript: 'bg-blue-600 bg-opacity-20 text-blue-200',
    'Node.js': 'bg-green-500 bg-opacity-20 text-green-300',
    'Prisma ORM': 'bg-purple-500 bg-opacity-20 text-purple-300',
    PostgreSQL: 'bg-indigo-500 bg-opacity-20 text-indigo-300',
    Express: 'bg-yellow-600 bg-opacity-20 text-yellow-300',
    'Tailwind CSS': 'bg-cyan-500 bg-opacity-20 text-cyan-300',
    Vite: 'bg-purple-600 bg-opacity-20 text-purple-200',
  }

  return (
    <div className="group relative h-full bg-gradient-to-br from-police-blue via-shield-blue to-police-dark border border-police-gold border-opacity-20 rounded-lg overflow-hidden hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-police-gold/20 flex flex-col">
      {/* Imagen */}
      <div className="relative w-full h-48 overflow-hidden bg-police-darker">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-police-dark via-transparent to-transparent group-hover:from-police-dark/70 transition-all duration-300"></div>

        {/* Badge de categoría */}
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 bg-police-accent text-white text-xs font-bold uppercase tracking-wider rounded">
            {project.category === 'analysis'
              ? 'Análisis'
              : project.category === 'web'
              ? 'Web'
              : project.category === 'api'
              ? 'API'
              : 'Base Datos'}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 bg-police-gold text-police-dark text-xs font-bold uppercase tracking-wider rounded">
              ⭐ Destacado
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-xl font-bold text-police-gold mb-2 group-hover:text-yellow-300 transition-colors">
          {project.title}
        </h3>

        {/* Descripción corta */}
        <p className="text-police-light text-sm opacity-75 mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs font-semibold rounded uppercase tracking-wider border border-opacity-30 ${
                techColors[tech] ||
                'bg-police-blue bg-opacity-20 text-police-light border-police-blue'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-semibold rounded text-police-light opacity-60">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Impacto */}
        <div className="mb-4 pb-4 border-t border-police-gold border-opacity-20">
          <p className="text-xs text-police-light opacity-60 uppercase tracking-wider font-bold mb-1">
            Impacto
          </p>
          <p className="text-sm text-police-light opacity-75">{project.impact}</p>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-xs border border-police-gold border-opacity-30 group/btn"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            Ver
          </a>
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-police-blue bg-opacity-20 text-police-light font-bold rounded-lg border border-police-blue border-opacity-30 hover:border-opacity-50 transition-all duration-300 uppercase tracking-wider text-xs"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-police-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}