// ===== uvibes-homepage/src/components/LogosBand.tsx =====

// ===== Notes =====
// Ce composant "LogosBand" est une bande de logos défilants en continu (infinite scroll).
// Il renforce la crédibilité de la plateforme en affichant les logos des partenaires.


// ====== Code ======

// Liste des logos/partenaires à afficher dans la bande défilante
const logos = [
  { name: "Airbus", file: "/images/airbus_logo.png" },
  { name: "Doctolib", file: "/images/doctolib_logo.png" },
  { name: "BlaBlaCar", file: "/images/blablacar_logo.png" },
  { name: "Total", file: "/images/total_logo.png" },
  { name: "Leka", file: "/images/leka_logo.png" },
  { name: "Swile", file: "/images/swile_logo.png" },
  { name: "Orange", file: "/images/orange_logo.png" },
  { name: "EDF", file: "/images/edf_logo.png" },
  { name: "Kiabi", file: "/images/kiabi_logo.png" },
  { name: "Uvibes", file: "/images/uvibes_logo.png" },
];


export default function LogosBand() {
  return (
    <section className="logos-band">
      <div className="logos-band-inner">

        <div className="logos-track-wrapper">
          <div className="logos-track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="logo-item">
                <img src={logo.file} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}