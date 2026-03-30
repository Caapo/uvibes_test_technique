//  ===== uvibes-homepage/src/components/Solution.tsx =====
import Image from 'next/image';

// ===== Notes =====
// Ce composant "Solution" est conçu pour présenter la solution ou les avantages que le produit ou service offre pour résoudre le problème présenté dans le composant "Problem". 
// Il peut être utilisé pour mettre en avant les fonctionnalités clés, les bénéfices, ou les résultats que les utilisateurs peuvent attendre en utilisant le produit ou service.


// ===== Code ======

// Définition des types des props (données) que le composant Solution attend de recevoir
interface SolutionItem {
  title: string;
  description: string;
}

interface SolutionProps {
  items: SolutionItem[];
}

export default function Solution({ items }: SolutionProps) {
  return (
    <section className="section solution">
      <div className="solution-content">

        {/* Colonne gauche : texte */}
        <div className="solution-text">

          <div className="section-label">Nous avons décidé d'agir</div>

          <h2 className="section-title solution-title">
            Notre plateforme permet de :
          </h2>

          {/* Liste des avantages */}
          <ul className="solution-list">
            {items.map((item, index) => (
              <li key={index} className="solution-item">

                {/* Icône de validation */}
                <div className="solution-check">✓</div>

                <div className="solution-item-text">
                  <span className="solution-item-title">{item.title}</span>
                  <span className="solution-item-desc">{item.description}</span>
                </div>

              </li>
            ))}
          </ul>

          <p className="section-subtitle" style={{ marginBottom: '8px' }}>
            Tout ce dont vos équipes ont besoin pour collaborer intelligemment.
          </p>

        </div>

        {/* Colonne droite : image illustrative */}
        <div className="solution-image-wrapper">
          <div className="solution-image-glow" />
          <Image
            src="/images/descriptives_cards.jpg"
            alt="Illustration des fonctionnalités de la plateforme"
            width={560}
            height={440}
            className="solution-image"
          />
        </div>

      </div>
    </section>
  );
}