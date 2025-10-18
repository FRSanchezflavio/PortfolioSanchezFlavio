import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../client/src/App';

describe('App Component', () => {
  test('renders the homepage', () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the projects page link', () => {
    render(<App />);
    const projectsLink = screen.getByText(/projects/i);
    expect(projectsLink).toBeInTheDocument();
  });

  test('renders the about page link', () => {
    render(<App />);
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
  });
});