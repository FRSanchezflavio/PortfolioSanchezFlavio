import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <div className="projects-section">
                <h2>Mis Proyectos</h2>
                {/* Aquí puedes mapear tus proyectos y renderizar ProjectCard */}
                <ProjectCard />
            </div>
            <ContactForm />
        </div>
    );
};

export default Home;