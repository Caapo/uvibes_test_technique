// ===== uvibes-homepage/src/components/Hero.tsx =====
import Image from 'next/image';

// ===== Notes =====

// Ce composant "Hero" est une section d'introduction qui peut être réutilisée sur différentes pages du site. 
// Il prend des props (title, subtitle, ctaText) pour personnaliser le contenu affiché, ce qui le rend flexible et adaptable 
// à différents contextes. On peut l'utiliser dans la page d'accueil ou dans d'autres pages pour présenter des informations clés 
// et inciter les utilisateurs à agir (par exemple, en demandant une démo).


// ====== Code ======

// Définition des types des props (données) que le composant Hero attend de recevoir
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export default function Hero({ title, subtitle, ctaText }: HeroProps) {

  const titleParts = title.split("grâce au");

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Colonne gauche : texte et appel à l'action */}
        <div className="hero-left">

          {/* Badge d'accroche */}
          <div className="hero-badge animate-fade-up animate-delay-1">
            <div className="hero-badge-dot">✨</div>
            <span>Plateforme de knowledge sharing</span>
          </div>

          {/* Titre principal avec mise en valeur d'une partie */}
          <h1 className="hero-title animate-fade-up animate-delay-2">
            {titleParts[0]}
            <span className="hero-title-highlight">grâce au{titleParts[1]}</span>
          </h1>

          {/* Sous-titre descriptif */}
          <p className="hero-subtitle animate-fade-up animate-delay-3">
            {subtitle}
          </p>

          {/* Boutons d'action */}
          <div className="hero-actions animate-fade-up animate-delay-4">
            <button className="btn-primary">
              {ctaText}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-secondary">
              Nous contacter
            </button>
          </div>
        </div>

        {/* Colonne droite : image illustrative + badges flottants */}
        <div className="hero-right">
          <div className="hero-image-wrapper">

            {/* Halo lumineux derrière l'image */}
            <div className="hero-image-glow" />

            {/* Image principale */}
            <Image
              src="/images/2_phones.jpg"
              alt="Illustration plateforme Uvibes"
              width={500}
              height={560}
              priority
              className="hero-image"
            />


          </div>
        </div>

      </div>
    </section>
  );
}