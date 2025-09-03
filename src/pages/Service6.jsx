import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaArrowRight,
  FaUsers,
  FaCogs,
  FaLaptopCode,
  FaTools,
  FaHeadset,
  FaShieldAlt
} from "react-icons/fa";
import { useLanguage } from "../context.jsx/LanguageContext";

const translations = {
  en: {
    documentTitle: "IT Consulting & Support - Stackly Services",
    heroTitle: "Freelance IT Support",
    heroText: "Reliable freelance IT support tailored to your business needs.",
    heroBtn: "Contact Us",
    heroVideo: "images/video11.mp4",

    featuresHeader: "Our Freelance IT Support Services",
    featuresSubtext: "Tech support services that adapt to your freelancing needs.",
    itConsultingFeatures: [
      {
        icon: FaCogs,
        title: "Flexible Support Solutions",
        description:
          "Adaptable IT support packages tailored to your freelancing business needs."
      },
      {
        icon: FaTools,
        title: "On-Demand Troubleshooting",
        description:
          "Quick remote support to resolve technical issues and minimize downtime."
      },
      {
        icon: FaUsers,
        title: "IT Infrastructure Management",
        description:
          "End-to-end management of your devices, software, and cloud resources."
      },
      {
        icon: FaLaptopCode,
        title: "Custom Software Setup",
        description: "Installation and configuration of personalized software tools."
      },
      {
        icon: FaShieldAlt,
        title: "Security & Data Protection",
        description:
          "Implement robust security measures to protect your data and client information."
      },
      {
        icon: FaHeadset,
        title: "24/7 Customer Support",
        description:
          "Reliable helpdesk and support available whenever you need assistance."
      }
    ],

    benefitsHeader: "Why Choose Our Freelance IT Support?",
    benefitsSubtext:
      "Expert IT support that grows with your freelance business, ensuring smooth technology operations.",
    benefits: [
      "Work with flexible IT support that fits your schedule",
      "Reduce downtime with fast and effective troubleshooting",
      "Manage IT assets effortlessly with expert guidance",
      "Enhance data security to safeguard your work and clients",
      "Save costs with scalable freelance IT services",
      "Focus on growing your freelance business without tech worries"
    ],
    benefitsImgAlt: "IT Consulting & Support",
    benefitsBtn: "Get Started",

    galleryHeader: "Freelance IT Support Gallery",
    gallerySub:
      "Explore examples of our tailored IT support solutions empowering freelancers and small businesses.",

    ctaTitle: "Ready to Launch Your Website?",
    ctaText:
      "Contact us today to kickstart your project and create a stunning online presence.",
    ctaStartBtn: "Start Your Project",
    ctaLearnBtn: "Learn More About Us"
  },

  ar: {
    documentTitle: "استشارات ودعم تكنولوجيا المعلومات - ستاكلي سيرفيسز",
    heroTitle: "دعم تكنولوجيا المعلومات المستقل",
    heroText: "دعم موثوق مخصص لاحتياجات عملك المستقل.",
    heroBtn: "اتصل بنا",
    heroVideo: "images/video11.mp4",

    featuresHeader: "خدمات دعم تكنولوجيا المعلومات المستقلة لدينا",
    featuresSubtext: "خدمات الدعم التقني التي تتكيف مع احتياجات العمل الحر الخاصة بك.",
    itConsultingFeatures: [
      {
        icon: FaCogs,
        title: "حلول دعم مرنة",
        description:
          "حزم دعم تقنية معلومات قابلة للتكيف ومصممة لاحتياجات عملك المستقل."
      },
      {
        icon: FaTools,
        title: "استكشاف الأخطاء وإصلاحها عند الطلب",
        description:
          "دعم سريع عن بُعد لحل المشكلات التقنية وتقليل فترة التوقف."
      },
      {
        icon: FaUsers,
        title: "إدارة البنية التحتية لتكنولوجيا المعلومات",
        description:
          "إدارة شاملة لأجهزتك وبرامجك وموارد السحابة الخاصة بك."
      },
      {
        icon: FaLaptopCode,
        title: "إعداد البرامج المخصصة",
        description: "تركيب وتكوين أدوات البرامج الشخصية."
      },
      {
        icon: FaShieldAlt,
        title: "الأمن وحماية البيانات",
        description:
          "تنفيذ تدابير أمان قوية لحماية بياناتك ومعلومات عملائك."
      },
      {
        icon: FaHeadset,
        title: "دعم العملاء 24/7",
        description: "مكتب مساعدة ودعم موثوق متاح دائمًا عند الحاجة."
      }
    ],

    benefitsHeader: "لماذا تختار دعم تكنولوجيا المعلومات المستقل لدينا؟",
    benefitsSubtext:
      "دعم تكنولوجيا المعلومات الخبير الذي ينمو مع عملك الحر، مما يضمن عمليات تقنية سلسة.",
    benefits: [
      "العمل مع دعم تقنية معلومات مرن يتناسب مع جدولك",
      "تقليل وقت التوقف من خلال استكشاف الأخطاء وإصلاحها السريع والفعال",
      "إدارة أصول تكنولوجيا المعلومات بسهولة مع التوجيه الخبير",
      "تعزيز أمان البيانات لحماية عملك وعملائك",
      "توفير التكاليف مع خدمات تكنولوجيا المعلومات المستقلة القابلة للتوسع",
      "التركيز على نمو عملك الحر بدون القلق بشأن التقنية"
    ],
    benefitsImgAlt: "استشارات ودعم تكنولوجيا المعلومات",
    benefitsBtn: "ابدأ الآن",

    galleryHeader: "معرض دعم تكنولوجيا المعلومات المستقل",
    gallerySub:
      "استكشف أمثلة عن حلول دعم تكنولوجيا المعلومات المخصصة التي تمكّن المستقلين والأعمال الصغيرة.",

    ctaTitle: "هل أنت مستعد لإطلاق موقعك؟",
    ctaText:
      "اتصل بنا اليوم لبدء مشروعك وإنشاء حضور عبر الإنترنت مميز.",
    ctaStartBtn: "ابدأ مشروعك",
    ctaLearnBtn: "تعرف علينا أكثر"
  },

  he: {
    documentTitle: "ייעוץ ותמיכה IT - Stackly Services",
    heroTitle: "תמיכת IT לעצמאיים",
    heroText: "תמיכת IT אמינה המותאמת לצרכי העסק שלך.",
    heroBtn: "צור קשר",
    heroVideo: "images/video11.mp4",

    featuresHeader: "שירותי תמיכת IT לעצמאיים שלנו",
    featuresSubtext: "שירותי תמיכה טכנית המותאמים לצרכי העבודה העצמאית שלך.",
    itConsultingFeatures: [
      {
        icon: FaCogs,
        title: "פתרונות תמיכה גמישים",
        description:
          "חבילות תמיכה IT גמישות המותאמות לצרכי העסק העצמאי שלך."
      },
      {
        icon: FaTools,
        title: "פתרון בעיות לפי דרישה",
        description:
          "תמיכה מרחוק מהירה לפתרון בעיות טכניות וצמצום זמני השבתה."
      },
      {
        icon: FaUsers,
        title: "ניהול תשתית IT",
        description:
          "ניהול מקצה לקצה של המכשירים, התוכנות ומשאבי הענן שלך."
      },
      {
        icon: FaLaptopCode,
        title: "התקנת תוכנה מותאמת",
        description: "התקנה וקונפיגורציה של כלים מותאמים אישית."
      },
      {
        icon: FaShieldAlt,
        title: "אבטחה והגנת מידע",
        description:
          "הטמעת אמצעי אבטחה חזקים להגנה על המידע שלך ושל הלקוחות."
      },
      {
        icon: FaHeadset,
        title: "תמיכה בלקוחות 24/7",
        description: "שירות עזרה ותמיכה אמין זמין תמיד בעת הצורך."
      }
    ],

    benefitsHeader: "למה לבחור בתמיכת IT העצמאית שלנו?",
    benefitsSubtext:
      "תמיכת IT מקצועית שגדלה יחד עם העסק שלך, ומבטיחה פעילות טכנולוגית חלקה.",
    benefits: [
      "עבודה עם תמיכת IT גמישה שמתאימה ללוח הזמנים שלך",
      "הפחתת זמני השבתה עם פתרון תקלות מהיר ויעיל",
      "ניהול נכסי IT בקלות עם הדרכה מקצועית",
      "שיפור אבטחת המידע להגנה על העבודה והלקוחות שלך",
      "חיסכון בעלויות עם שירותי IT עצמאיים הניתנים להרחבה",
      "מיקוד בצמיחת העסק העצמאי שלך ללא דאגות טכניות"
    ],
    benefitsImgAlt: "ייעוץ ותמיכת IT",
    benefitsBtn: "התחל עכשיו",

    galleryHeader: "גלריית תמונות לתמיכת IT לעצמאיים",
    gallerySub:
      "חקור דוגמאות לפתרונות תמיכת IT מותאמים המעצימים עצמאיים ועסקים קטנים.",

    ctaTitle: "מוכן להשיק את האתר שלך?",
    ctaText:
      "צור קשר היום כדי להתחיל את הפרויקט שלך וליצור נוכחות מקוונת מרהיבה.",
    ctaStartBtn: "התחל את הפרויקט שלך",
    ctaLearnBtn: "למד עוד עלינו"
  },

  fr: {
    documentTitle: "Consultation et Support IT - Stackly Services",
    heroTitle: "Support IT Freelance",
    heroText: "Support IT fiable adapté aux besoins de votre entreprise.",
    heroBtn: "Contactez-nous",
    heroVideo: "images/video11.mp4",

    featuresHeader: "Nos services de support IT freelance",
    featuresSubtext: "Services d'assistance technique qui s'adaptent à vos besoins freelance.",
    itConsultingFeatures: [
      {
        icon: FaCogs,
        title: "Solutions de support flexibles",
        description:
          "Forfaits de support IT adaptés aux besoins de votre entreprise freelance."
      },
      {
        icon: FaTools,
        title: "Dépannage à la demande",
        description:
          "Support à distance rapide pour résoudre les problèmes techniques et minimiser les interruptions."
      },
      {
        icon: FaUsers,
        title: "Gestion de l'infrastructure IT",
        description:
          "Gestion complète de vos appareils, logiciels et ressources cloud."
      },
      {
        icon: FaLaptopCode,
        title: "Installation de logiciels personnalisés",
        description: "Installation et configuration d'outils logiciels personnalisés."
      },
      {
        icon: FaShieldAlt,
        title: "Sécurité et protection des données",
        description:
          "Mise en œuvre de mesures de sécurité robustes pour protéger vos données et informations clients."
      },
      {
        icon: FaHeadset,
        title: "Support client 24/7",
        description:
          "Service d'assistance fiable disponible à tout moment en cas de besoin."
      }
    ],

    benefitsHeader: "Pourquoi choisir notre support IT freelance ?",
    benefitsSubtext:
      "Support IT expert qui évolue avec votre activité freelance pour assurer un fonctionnement technologique fluide.",
    benefits: [
      "Travaillez avec un support IT flexible adapté à votre emploi du temps",
      "Réduisez les temps d'arrêt grâce à un dépannage rapide et efficace",
      "Gérez facilement vos actifs IT avec des conseils d'experts",
      "Améliorez la sécurité des données pour protéger votre travail et vos clients",
      "Réduisez les coûts avec des services IT freelance évolutifs",
      "Concentrez-vous sur la croissance de votre entreprise freelance sans soucis techniques"
    ],
    benefitsImgAlt: "Consultation et support IT",
    benefitsBtn: "Commencer",

    galleryHeader: "Galerie du support IT freelance",
    gallerySub:
      "Découvrez des exemples de nos solutions de support IT personnalisées pour les freelances et les petites entreprises.",

    ctaTitle: "Prêt à lancer votre site web ?",
    ctaText:
      "Contactez-nous dès aujourd'hui pour démarrer votre projet et créer une présence en ligne exceptionnelle.",
    ctaStartBtn: "Lancez votre projet",
    ctaLearnBtn: "En savoir plus sur nous"
  }
};

const Service1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.documentElement.dir = ["ar", "he"].includes(language) ? "rtl" : "ltr";
    document.title = t.documentTitle || "IT Consulting & Support - Stackly Services";
  }, [language]);

  return (
    <div className="service-page">
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src={t.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-paragraph">{t.heroText}</p>
              <Link to="/contact" className="hero-button">
                {t.heroBtn}
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section features-section">
          <div className="container">
            <motion.div
              className="section-header text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t.featuresHeader}</h2>
              <p>{t.featuresSubtext}</p>
            </motion.div>

            <div className="features-grid">
              {t.itConsultingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="feature-card premium-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.03 }}
                  >
                    <div className="feature-icon">
                      <Icon />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="btn-learn-wrapper">
              <Link to="/contact" className="btn-learn">
                {t.heroBtn} <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section benefits-section">
          <div className="container">
            <div className="grid-2">
              <motion.div
                className="benefits-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>{t.benefitsHeader}</h2>
                <p>{t.benefitsSubtext}</p>
                <div className="benefits-list">
                  {t.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FaCheck className="check-icon" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">
                  {t.benefitsBtn} <FaArrowRight />
                </Link>
              </motion.div>

              <motion.div
                className="benefits-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="benefits-image">
                  <img src="images/freelancerservices5.jpg" alt={t.benefitsImgAlt} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section gallery-wrapper">
          <div className="container">
            <motion.div
              className="gallery-header"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="gallery-title">{t.galleryHeader}</h2>
              <p className="gallery-subtitle">{t.gallerySub}</p>
            </motion.div>

            <div className="gallery-container">
              {/* First Row */}
              <div className="gallery-row">
                <div className="gallery-big">
                  <img src="images/individual13.jpg" alt="Cloud infrastructure overview" />
                </div>
                <div className="gallery-grid">
                  <img src="images/individual2.jpg" alt="Server management" />
                  <img src="images/individual3.jpg" alt="Cloud security" />
                  <img src="images/individual4.jpg" alt="Server management" />
                  <img src="images/individual5.jpg" alt="Cloud security" />
                </div>
              </div>

              {/* Second Row */}
              <div className="gallery-row reverse">
                <div className="gallery-big">
                  <img src="images/individual6.jpg" alt="Global network map" />
                </div>
                <div className="gallery-grid">
                  <img src="images/individual7.jpg" alt="Compliance and Governance" />
                  <img src="images/individual8.jpg" alt="Custom cloud solutions" />
                  <img src="images/individual9.jpg" alt="Server management" />
                  <img src="images/individual10.jpg" alt="Cloud security" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-overlay">
            <div className="container">
              <motion.div
                className="cta-content text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaText}</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary btn-large">
                    {t.ctaStartBtn} <FaArrowRight />
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-large">
                    {t.ctaLearnBtn}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      <style jsx>{`
        .home-page {
          padding-top: 80px;
        }

       .hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;   /* ensures vertical centering inside overlay */
  text-align: center;
  color: #fff;
  max-width: 800px;
  z-index: 2;
  gap: 28px; /* space between title, text, and button */
}

.hero-title {
  color: #fff; /* ✅ force white text so it’s visible on dark video background in light mode */
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 0;
  opacity: 0;
  animation: slideIn 1s ease-out forwards 0.5s;
}


.hero-paragraph {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0;
  animation: fadeUp 1s ease-out forwards 1s;
}

.hero-button {
  margin-top: 0;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background-color: #224DB7;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  transition: background-color 0.3s, transform 0.3s;
  opacity: 0;
  animation: fadeUp 1s ease-out forwards 1.5s;
}

.hero-button:hover {
  background-color: #000;
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 700px) {
  .hero-content {
    max-width: 95vw;
    padding: 0 10px;
    gap: 18px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-paragraph {
    font-size: 1rem;
  }
  .hero-button {
    font-size: 1rem;
  }
}

/* Animations */
@keyframes slideIn {
  0% { opacity: 0; transform: translateY(-20px);}
  100% { opacity: 1; transform: translateY(0);}
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(45deg, #ffd700, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-visual {
          position: relative;
        }

        .hero-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border-radius: 200px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .hero-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .card-icon {
          font-size: 2rem;
          color: var(--primary-color);
        }

        .card-content h4 {
          color: var(--heading-color);
          margin: 0 0 5px 0;
          font-size: 1rem;
        }

        .card-content p {
          color: var(--text-muted);
          margin: 0;
          font-size: 0.9rem;
        }

.features-section {
    background: var(--sidebar-bg);
    padding: 80px 0;
  }

 .features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* always 3 columns */
  gap: 30px;
  margin-top: 60px;
}

    .feature-card {
    background: var(--card-bg, #111);
    border: 1px solid rgba(0, 123, 255, 0.4);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;   /* Center horizontally */
    justify-content: flex-start; /* Keep content top-aligned */
  }

  .feature-card.premium-card {
    position: relative;
    background: rgba(20, 20, 20, 0.9);
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
    color: #fff;
    z-index: 1;
  }

  .feature-card.premium-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(270deg, #4f9fff, #a855f7, #4f9fff);
    background-size: 600% 600%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderMove 6s linear infinite;
    z-index: -1;
  }

  @keyframes borderMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .feature-icon {
    font-size: 3rem;
    color: #4f9fff;
    margin-bottom: 20px;
  }

  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #fff;
  }

  .feature-card p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #bbb;
  }

  .btn-learn {
    margin-top: 40px;
  }
  .btn-learn-wrapper {
    display: flex;
    justify-content: center;  /* horizontal center */
    align-items: center;      /* vertical center */
    width: 100%;
    margin-top: 20px;         /* optional spacing */
  }

  .btn-learn {
    background: linear-gradient(90deg, #3b82f6, #a855f7);
    color: #fff;
    padding: 12px 28px;
    border: none;
    border-radius: 9999px;  /* pill shape */
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;               /* spacing between text & arrow */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-learn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
        }


        .benefits-section {
          background: var(--bg-color);
        }

        .benefits-content h2 {
          font-size: 2.5rem;
          color: var(--heading-color);
          margin-bottom: 20px;
        }

        .benefits-content p {
  font-size: 1.02rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: justify;                /* Justified paragraph */
  letter-spacing: 0.1px;              /* Slight letter spacing for professionalism */
}


        .benefits-list {
          margin-bottom: 40px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 1rem;
          color: var(--text-color);
        }

       .check-icon {
  color: var(--accent-color, #28a745);
  font-size: 1.15rem;                 /* Slightly larger for visibility */
  background: var(--accent-bg, #e0f7e9); /* Soft green for light mode */
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 0 6px var(--accent-color, #28a745); /* Glow/silhouette effect */
  transition: background 0.3s, color 0.3s;
}

  /* Light theme (optional, if you use a root variable) */
  :root {
  --accent-color: #111;     /* Black for icon color */
  --accent-bg: #eaeaea;     /* Light grey for background dot */
}


/* Dark theme (assuming body.dark is toggled for dark mode) */
body.dark .check-icon {
  color: #5cffb1;                          /* Bright green for dark */
  background: rgba(40,167,69,0.22);        /* Slightly brighter dot */
  box-shadow: 0 0 8px #5cffb1;
}


        .benefits-image {
          border-radius: 50px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .benefits-image img {
          width: 100%;
          height: 570px;
          object-fit: cover;
          border-radius: 50px;
        }

        .gallery-wrapper {
  background: var(--sidebar-bg); /* Uses sidebar background for both themes */
  padding: 80px 40px;
  font-family: "Segoe UI", sans-serif;
  transition: background-color 0.3s ease; /* Smooth transition on theme change */
}


.gallery-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 15px;
}

.gallery-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
}


.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gallery-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
}

.gallery-row.reverse {
  flex-direction: row-reverse;
}

.gallery-big img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex: 1;
}

.gallery-grid img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.03);
}

/* Responsive */
@media (max-width: 992px) {
  .gallery-row,
  .gallery-row.reverse {
    flex-direction: column;
  }
  .gallery-big img {
    height: 350px;
  }
  .gallery-grid img {
    height: 180px;
  }
}


     .cta-section {
  position: relative;
  background: url('/images/customer.jpg') center/cover no-repeat fixed; /* fixed background */
  padding: 0 0;
  color: white;
}

.cta-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  padding: 100px 0;
}

.cta-content {
  max-width: 700px;
  margin: auto;
  color:#fff;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color:#fff;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.btn-primary {
  background: #ff6600;
  color: white;
}

.btn-primary:hover {
  background: #e65c00;
}

.btn-outline {
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background: white;
  color: black;
}


.btn {
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.btn-primary {
  background: #224DB7;
  color: white;
}

.btn-primary:hover {
  background: #224DB7;
}

.btn-outline {
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background: white;
  color: black;
}
  .btn-primary, .btn-outline, .btn-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-primary svg {
  font-size: 1.3rem;
  vertical-align: middle;
}




        .faq-section {
          background: var(--sidebar-bg);
          padding: 0 0;
          padding-bottom: 40px;
          margin-top:-40px;
        }

        .faq-list {
          max-width: 800px;
          margin: 60px auto 0;
        }

        .faq-item {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .faq-item h4 {
          color: var(--heading-color);
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .faq-item p {
          color: var(--text-color);
          line-height: 1.6;
          margin: 0;
        }

       src/pages/Home2.jsx

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            width: auto;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
                      .gallery-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
  margin-bottom: 40px; /* Adds space between rows */
}
.gallery-row.reverse {
  flex-direction: row-reverse;
  padding-top: 20px; /* Adds top padding for reverse rows */
}
      `}</style>
      </div>
    </div>
  );
};

export default Service1;
