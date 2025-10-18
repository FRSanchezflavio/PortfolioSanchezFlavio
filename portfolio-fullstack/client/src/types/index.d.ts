// Este archivo define tipos personalizados utilizados en la aplicación.

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    repositoryUrl: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}