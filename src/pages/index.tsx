// === uvibes-homepage/src/pages/index.tsx ===


// ========================= Notes =========================

// Chaque fichier dans le dossier "pages" de Next.js correspond à une route de l'application (URL). 
// "index.tsx" correspond à la route racine ("/") de l'application.
// Cela signifie que ce composant sera rendu lorsque les utilisateurs accèdent à la page d'accueil de votre site.


// ===== Imports =====
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogosBand from '../components/LogosBand';
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import CTA from "../components/CTA";


// ========================= Code =========================

export default function HomePage() {

  // Données pour la section "Problème" qui met en avant les difficultés rencontrées sans la plateforme
  const problemItems = [
    {
      icon: "📧",
      text: "Dans les emails",
      description: "Les informations critiques enfouies dans des fils interminables, impossibles à retrouver."
    },
    {
      icon: "🗓️",
      text: "Dans les réunions",
      description: "Des heures de discussions qui s'évaporent sans trace ni suivi concret."
    },
    {
      icon: "🧠",
      text: "Ou dans la tête des collaborateurs",
      description: "L'expertise part avec chaque départ, sans jamais avoir été transmise."
    }
  ];

  // Données pour la section "Solution" qui présente les avantages de la plateforme
  const solutionItems = [
    {
      title: "Poser des questions simplement",
      description: "En quelques secondes, sollicitez l'ensemble de vos équipes sur n'importe quel sujet."
    },
    {
      title: "Partager des conseils utiles",
      description: "Centralisez bonnes pratiques et retours d'expérience dans un espace structuré."
    },
    {
      title: "Valoriser les experts internes",
      description: "Identifiez et mettez en lumière les talents cachés de votre organisation."
    }
  ];

  // Données pour la section "Features" qui présente les fonctionnalités clés de la plateforme
  const featuresData = [
    {
      title: "Fil de conseils",
      description: "Publiez et consultez des conseils en temps réel.",
      icon: "🧵"
    },
    {
      title: "Recherche intelligente",
      description: "Trouvez rapidement les réponses déjà partagées.",
      icon: "🔍"
    },
    {
      title: "Profils experts",
      description: "Identifiez facilement les personnes ressources.",
      icon: "👤"
    },
    {
      title: "Notifications ciblées",
      description: "Recevez uniquement les contenus pertinents.",
      icon: "🔔"
    }
  ];

  // Données pour la section "Testimonials" qui présente les témoignages clients
  const testimonialsData = [
    {
      name: "Sophie Laurent",
      role: "DRH, entreprise cliente",
      quote: "Avant, on perdait énormément d'informations. Aujourd'hui, tout est centralisé et accessible.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      featured: true
    },
    {
      name: "Alice Martin",
      role: "Chef de projet",
      quote: "Une solution qui transforme la collaboration en entreprise",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      featured: false
    },
    {
      name: "Bob Dupont",
      role: "Développeur senior",
      quote: "Un outil simple mais redoutablement efficace",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      featured: false
    },
    {
      name: "Anthony Silva",
      role: "Community Manager",
      quote: "Le futur du knowledge sharing",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      featured: true
    }
  ];

  // Données pour la section "Stats" qui présente les statistiques clés de la plateforme
  const statsItems = [
    { value: "50 000+", label: "utilisateurs" },
    { value: "120", label: "entreprises clientes" },
    { value: "+35%", label: "de gain de temps moyen" },
    { value: "4.8/5", label: "satisfaction utilisateur" }
  ];

  // Données pour la section "Partners" qui présente les partenaires de la plateforme
  const partnerCategories = [
    {
      category: "Grandes entreprises",
      partners: [
        { name: "Airbus", logo: "/images/airbus_logo.png" },
        { name: "Total", logo: "/images/total_logo.png" },
      ],
    },
    {
      category: "Scale-ups",
      partners: [
        { name: "Doctolib", logo: "/images/doctolib_logo.png" },
        { name: "BlaBlaCar", logo: "/images/blablacar_logo.png" },
      ],
    },
    {
      category: "PME Innovantes",
      partners: [
        { name: "Uvibes", logo: "/images/uvibes_logo.png" },
        { name: "Ladurée", logo: "/images/laduree_logo.png" },
      ],
    }
  ];

  return (
    <>
      <Navbar />

      <main className="main">

        <div className="container">
          <Hero
            title="Transformez l'expérience collaborateur grâce au partage de connaissances"
            subtitle="Une plateforme simple pour permettre à vos équipes d'échanger conseils, bonnes pratiques et retours d'expérience au quotidien."
            ctaText="Demander une démo"
          />
        </div>


        <div className="container">
          <Problem items={problemItems} />
          <Solution items={solutionItems} />
          <Features features={featuresData} />
          <Stats stats={statsItems} />
          <Partners categories={partnerCategories} />
          <LogosBand />
          <Testimonials testimonials={testimonialsData} />
          <CTA
            title="Prêt à transformer votre entreprise ?"
            subtitle="Rejoignez 120 entreprises."
            buttonText="Demander une démo"
          />
        </div>

      </main>

      <Footer />
    </>
  );
}