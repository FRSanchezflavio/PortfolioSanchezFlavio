// ========== TIPOS PRINCIPALES ==========

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  liveUrl: string;
  repositoryUrl: string;
  technologies: string[];
  category: 'analysis' | 'web' | 'api' | 'database';
  featured: boolean;
  startDate: string;
  endDate?: string;
  impact: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'analysis';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  responsibilities: string[];
  technologies?: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'phone';
  url: string;
  icon: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
  error?: string;
}
