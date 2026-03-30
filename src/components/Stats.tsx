// === uvibes-homepage/src/components/Stats.tsx ===

// ===== Notes =====
// Ce composant "Stats" est conçu pour afficher des statistiques ou des chiffres clés liés au produit ou service.
// Il peut être utilisé pour mettre en avant des données impressionnantes ou des résultats tangibles qui renforcent la crédibilité du produit ou service.



// ====== Code ======

// Définition du type d'une statistique individuelle
interface Stat {
  label: string;
  value: string;
}

// Définition des types des props (données) que le composant Stats attend de recevoir
interface StatsProps {
  stats: Stat[];
}


export default function Stats({ stats }: StatsProps) {
  return (
    <section className="section stats">

      <div className="stats-header">
        <div className="section-label">Chiffres clés</div>
        <h2 className="section-title">Des résultats concrets</h2>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}