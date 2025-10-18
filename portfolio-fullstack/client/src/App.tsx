import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <HeroSection />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;