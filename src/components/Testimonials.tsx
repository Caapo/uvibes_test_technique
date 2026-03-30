// === uvibes-homepage/src/components/Testimonials.tsx ===
import Image from 'next/image';

// ===== Notes =====
// Ce composant "Testimonials" est conçu pour afficher des témoignages ou des avis de clients satisfaits.
// Il peut être utilisé pour renforcer la crédibilité du produit ou service en montrant des expériences positives d'autres utilisateurs.



// ==== Code ======

// Définition du type d'un témoignage individuel
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  featured: boolean;
}

// Définition des types des props (données) que le composant Testimonials attend de recevoir
interface TestimonialsProps {
  testimonials: Testimonial[];
}


export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section testimonials" id="temoignages">

      <div className="testimonials-header">
        <div className="section-label">Témoignages</div>
        <h2 className="section-title">Ils parlent de nous</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`testimonial-card ${t.featured ? 'featured' : ''}`}
          >

            <div className="testimonial-content">
              <span className="testimonial-quote-icon">“</span>
              <p className="testimonial-quote">{t.quote}</p>
            </div>

            <div className="testimonial-user">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />

              <div className="testimonial-user-info">
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}