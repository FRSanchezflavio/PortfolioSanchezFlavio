import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Bienvenido a mi Portfolio</h1>
                <p>Soy un desarrollador full stack apasionado por crear aplicaciones web modernas y eficientes.</p>
                <a href="#projects" className="btn">Ver Proyectos</a>
            </div>
        </section>
    );
};

export default HeroSection;