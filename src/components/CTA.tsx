// ===== uvibes-homepage/src/components/CTA.tsx =====
import Image from 'next/image';

// ===== Notes =====
// Ce composant "CTA" (Call to Action) est conçu pour inciter les visiteurs à effectuer une action spécifique, comme s'inscrire, demander une démo, ou acheter un produit.
// Il peut être utilisé pour renforcer l'engagement des visiteurs et les guider vers la prochaine étape souhaitée dans le parcours client.



// ====== Code ======

// Définition des types des props (données) que le composant CTA attend de recevoir
interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick?: () => void;
}

export default function CTA({ title, subtitle, buttonText, onClick }: CTAProps) {
  return (
    <section className="section cta" id="contact">
      <div className="cta-inner">

        {/* Colonne gauche : texte et boutons */}
        <div className="cta-text">
          <div className="section-label">Prêt à démarrer ?</div>

          <h2 className="cta-title">{title}</h2>

          <p className="cta-subtitle">{subtitle}</p>

          {/* Boutons d'action */}
          <div className="cta-actions">
            <button className="btn-primary" onClick={onClick}>
              {buttonText}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-secondary">
              Nous contacter
            </button>
          </div>

        </div>

        {/* Colonne droite : image illustrative (masquée sur tablette/mobile) */}
        <div className="cta-image-wrapper">
          <Image
            src="/images/1_phone.jpg"
            alt="Illustration application mobile Uvibes"
            width={380}
            height={460}
            priority
            className="cta-image"
          />
        </div>

      </div>
    </section>
  );
}