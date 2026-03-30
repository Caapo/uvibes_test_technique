// ===== uvibes-homepage/src/components/Partners.tsx =====

// ===== Notes =====
// Ce composant "Partners" est conçu pour afficher les logos ou les noms des partenaires, clients, ou collaborateurs associés au produit ou service.
// Il peut être utilisé pour renforcer la crédibilité du produit ou service en montrant les entreprises ou organisations qui font confiance à la marque.



// ====== Code ======

// Définition du type d'un partenaire individuel
interface Partner {
  name: string;
  logo: string;
}

// Définition du type d'une catégorie de partenaires, qui contient une liste de partenaires
interface PartnerCategory {
  category: string;
  partners: Partner[];
}

// Définition des types des props (données) que le composant Partners attend de recevoir
interface PartnersProps {
  categories: PartnerCategory[];
}

export default function Partners({ categories }: PartnersProps) {
  return (
    <section className="section partners" id="partenaires">

      {/* En-tête de la section */}
      <div className="partners-header">
        <div className="section-label">Partenaires</div>
        <h2 className="section-title">Ils nous font confiance</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Des grandes entreprises aux scale-ups et PME innovantes, notre plateforme s'adapte à toutes les tailles d'organisation.
        </p>
      </div>

      {/* Liste des catégories de partenaires */}
      <div className="partner-categories">
        {categories.map((cat, idx) => (
          <div key={idx} className="partner-category">

            {/* Titre de la catégorie avec diviseur */}
            <h3 className="partner-category-title">{cat.category}</h3>

            {/* Grille des logos de partenaires */}
            <div className="partner-grid">
              {cat.partners.map((partner, index) => (
                <div key={index} className="partner-item">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="partner-logo"
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}