// ===== uvibes-homepage/src/components/Footer.tsx =====

// ===== Notes =====
// Ce composant "Footer" est le pied de page de la page d'accueil.
// Il affiche le logo de la marque, les liens de navigation, et la mention de copyright.


// ====== Code ======

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">

          {/* Logo */}
          <div className="footer-logo">
            <div className="footer-logo-icon">⚡</div>
            Sebivu ~ Révélez l'invisible
          </div>

          {/* Mention de copyright */}
          <p className="footer-copy">
            © {new Date().getFullYear()} Sebivu. Tous droits réservés.
          </p>

          {/* Liens de navigation */}
          <ul className="footer-links">
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>
      </div>
    </footer>
  );
}