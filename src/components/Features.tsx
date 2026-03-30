// === uvibes-homepage/src/components/Features.tsx ===

// ===== Notes =====
// Ce composant "Features" est conçu pour présenter les fonctionnalités clés du produit ou service.
// Il peut être utilisé pour mettre en avant les aspects uniques ou les avantages compétitifs du produit ou service,
// en fournissant des descriptions claires et concises de chaque fonctionnalité.


// ====== Code ======

// Définition du type d'une fonctionnalité individuelle
interface Feature {
  title: string;
  description: string;
  icon: string;
}

// Définition des types des props (données) que le composant Features attend de recevoir
interface FeatureProps {
  features: Feature[];
}

export default function Features({ features }: FeatureProps) {
  return (
    <section className="section features" id="fonctionnalites">

      {/* En-tête centré */}
      <div className="features-header">
        <div className="section-label">Fonctionnalités</div>
        <h2 className="section-title features-title">
          Tout ce qu'il vous faut pour libérer l'intelligence collective
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Des outils pensés pour s'intégrer naturellement dans vos habitudes de travail.
        </p>
      </div>

      {/* Grille des cartes de fonctionnalités */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">

            {/* Numéro en filigrane pour la profondeur visuelle */}
            <div className="feature-number">0{index + 1}</div>

            {/* Icône de la fonctionnalité */}
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>

            {/* Titre de la fonctionnalité */}
            <h3 className="feature-title">{feature.title}</h3>

            {/* Description détaillée */}
            <p className="feature-description">{feature.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}