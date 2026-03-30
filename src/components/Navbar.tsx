// ===== uvibes-homepage/src/components/Navbar.tsx =====

// ===== Notes =====
// Ce composant "Navbar" est la barre de navigation fixe en haut de la page.
// Cela facilite la navigation entre les différentes sections du site.


// ===== Imports =====
import { useEffect, useState } from 'react';


// ====== Code ======

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">

          {/* Logo */}
          <a href="/" className="navbar-logo">
            <div className="navbar-logo-icon">⚡</div>
            Sebivu
          </a>

          {/* Liens de navigation */}
          <ul className="navbar-links">
            <li><a href="#fonctionnalites">Fonctionnalités</a></li>
            <li><a href="#temoignages">Témoignages</a></li>
            <li><a href="#partenaires">Partenaires</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* CTA dans la navbar */}
          <button className="navbar-cta">Demander une démo</button>

          {/* Bouton hamburger */}
          <button className="navbar-mobile-toggle" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
}