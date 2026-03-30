// ===== uvibes-homepage/src/components/Problem.tsx =====

// ===== Notes =====
// (J'ai nommé le composant "Problem" pour un meilleur repère par rapport au sujet. "Problème" n'apparaît pas sur la page.)
// Ce composant "Problem" est conçu pour présenter un problème ou un défi spécifique que le produit ou service résout. 
// Il peut être utilisé pour attirer l'attention des visiteurs sur les difficultés qu'ils rencontrent et les inciter à chercher
// une solution, que le produit ou service peut offrir.


// ===== Code ======

// Définition des types des props (données) que le composant Problem attend de recevoir
interface ProblemItem {
  icon: string;
  text: string;
  description: string;
}

interface ProblemProps {
  items: ProblemItem[];
}

export default function Problem({ items }: ProblemProps) {
  return (
    <section className="section problem">

      {/* En-tête de la section */}
      <div className="problem-header">
        <div className="section-label">Pourquoi Sebivu ?</div>

        <h2 className="section-title">
          Aujourd'hui, les connaissances restent bloquées :
        </h2>

      </div>

      {/* Grille des cartes de problèmes */}
      <div className="problem-grid">
        {items.map((item, index) => (
          <div key={index} className="problem-card">

            {/* Icône représentative du problème */}
            <div className="problem-icon-wrapper">
              {item.icon}
            </div>

            {/* Titre court du problème */}
            <p className="problem-text">{item.text}</p>

            {/* Description détaillée */}
            <p className="problem-description">{item.description}</p>

          </div>
        ))}

      </div>

      {/* Bannière résumant l'impact des problèmes */}
      <div className="problem-result-banner">
        <p className="problem-result-text">
          Résultat : <em>perte de temps</em>, <em>frustration</em>, et <em>manque d'efficacité</em>.
        </p>
      </div>

    </section>
  );
}

