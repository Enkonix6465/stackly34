import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheck,
  FaArrowRight,
  FaUsers,
  FaCogs,
  FaCloud,
  FaTools,
  FaServer,
  FaPalette,
  FaCameraRetro
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    documentTitle: "DevOps & CI/CD Services - Stackly Solutions",
    heroTitle: "DevOps & CI/CD Services",
    heroText: "Empower your software development lifecycle with automation, monitoring, and scalable infrastructure.",
    heroBtn: "Get Started Today",
    heroVideo: "images/video9.mp4",

    featuresHeader: "Core DevOps Capabilities",
    featuresSubtext: "Build efficient, reliable, and continuous delivery pipelines with our expert services.",
    devopsFeatures: [
      {
        icon: FaCogs,
        title: "Automated Deployment Pipelines",
        description: "Build, test, and deploy your applications rapidly and consistently with CI/CD pipelines."
      },
      {
        icon: FaServer,
        title: "Infrastructure as Code",
        description: "Manage infrastructure using code for reproducibility, scalability, and simplified maintenance."
      },
      {
        icon: FaCloud,
        title: "Cloud Integration",
        description: "Seamlessly connect popular cloud platforms to automate your workflows and enhance scalability."
      },
      {
        icon: FaTools,
        title: "Continuous Monitoring",
        description: "Gain real-time insights into application and infrastructure health to quickly detect issues."
      },
      {
        icon: FaCameraRetro,
        title: "DevOps Analytics & Reporting",
        description: "Visualize pipeline performance and team metrics to drive continuous improvement."
      },
      {
        icon: FaPalette,
        title: "Custom DevOps Strategy",
        description: "Tailored solutions aligning DevOps best practices with your unique business needs."
      }
    ],

    benefitsHeader: "Why Choose Our DevOps Services?",
    benefitsSubtext: "Unlock faster development, improved collaboration, and system reliability with our tailored DevOps approach.",
    benefits: [
      "Accelerate software delivery through automation",
      "Improve reliability and reduce deployment risks",
      "Increase development and operational collaboration",
      "Optimize infrastructure management with code",
      "Monitor continuously for faster feedback loops",
      "Adapt and scale easily with cloud-native tools"
    ],
    benefitsImgAlt: "DevOps & CI/CD Visual",
    benefitsBtn: "Contact Us",

    galleryHeader: "Core Cloud Services Visual Gallery",
    gallerySub: "Explore our cloud infrastructure through these visuals showcasing our robust solutions.",

    ctaTitle: "Ready to Accelerate Your Delivery?",
    ctaText: "Connect with our experts to streamline your DevOps and CI/CD workflows.",
    ctaStartBtn: "Start Now",
    ctaLearnBtn: "Learn More About Us"
  },

  ar: {
    documentTitle: "خدمات DevOps و CI/CD - ستاكلي سوليوشنز",
    heroTitle: "خدمات DevOps و CI/CD",
    heroText: "مكن دورة حياة تطوير البرامج الخاصة بك بالأتمتة والمراقبة والبنية التحتية القابلة للتوسع.",
    heroBtn: "ابدأ اليوم",
    heroVideo: "images/video9.mp4",

    featuresHeader: "قدرات DevOps الأساسية",
    featuresSubtext: "قم ببناء خطوط تسليم مستمرة وموثوقة وفعالة مع خدماتنا الاحترافية.",
    devopsFeatures: [
      {
        icon: FaCogs,
        title: "خطوط نشر مؤتمتة",
        description: "بناء واختبار ونشر تطبيقاتك بسرعة وبثبات باستخدام خطوط CI/CD."
      },
      {
        icon: FaServer,
        title: "البنية التحتية كرمز",
        description: "إدارة البنية التحتية باستخدام الكود لتحقيق التكرار والقابلية للتوسع وسهولة الصيانة."
      },
      {
        icon: FaCloud,
        title: "تكامل السحابة",
        description: "ربط منصات السحابة الشعبية بسلاسة لأتمتة سير العمل وتعزيز القابلية للتوسع."
      },
      {
        icon: FaTools,
        title: "مراقبة مستمرة",
        description: "الحصول على رؤى في الوقت الحقيقي حول صحة التطبيقات والبنية التحتية لاكتشاف المشكلات بسرعة."
      },
      {
        icon: FaCameraRetro,
        title: "تحليلات DevOps والتقارير",
        description: "تصور أداء خطوط الأنابيب ومقاييس الفريق لتحفيز التحسين المستمر."
      },
      {
        icon: FaPalette,
        title: "استراتيجية DevOps مخصصة",
        description: "حلول مخصصة تتوافق مع أفضل ممارسات DevOps واحتياجات عملك الفريدة."
      }
    ],

    benefitsHeader: "لماذا تختار خدمات DevOps لدينا؟",
    benefitsSubtext: "افتح أسرع تطوير، وتحسين التعاون، وموثوقية النظام مع نهج DevOps المصمم خصيصًا لك.",
    benefits: [
      "تسريع تسليم البرمجيات من خلال الأتمتة",
      "تحسين الموثوقية وتقليل مخاطر النشر",
      "زيادة التعاون بين التطوير والتشغيل",
      "تحسين إدارة البنية التحتية باستخدام الكود",
      "المراقبة المستمرة لتسريع ردود الفعل",
      "التكيف والتوسع بسهولة بأدوات السحابة الأصلية"
    ],
    benefitsImgAlt: "صورة DevOps وCI/CD",
    benefitsBtn: "اتصل بنا",

    galleryHeader: "معرض صور خدمات السحابة الأساسية",
    gallerySub: "استكشف بنية تحتية سحابية من خلال هذه الصور التي تعرض حلولنا القوية.",

    ctaTitle: "هل أنت مستعد لتسريع التسليم؟",
    ctaText: "تواصل مع خبرائنا لتبسيط سير عمل DevOps وCI/CD الخاص بك.",
    ctaStartBtn: "ابدأ الآن",
    ctaLearnBtn: "تعرف علينا أكثر"
  },

  he: {
    documentTitle: "שירותי DevOps ו-CI/CD - Stackly Solutions",
    heroTitle: "שירותי DevOps ו-CI/CD",
    heroText: "העצם את מחזור חיי פיתוח התוכנה שלך עם אוטומציה, ניטור ותשתית ניתנת להרחבה.",
    heroBtn: "התחל היום",
    heroVideo: "images/video9.mp4",

    featuresHeader: "יכולות DevOps מרכזיות",
    featuresSubtext: "בנה צינורות אספקה רציפים, אמינים ויעילים עם השירותים המומחים שלנו.",
    devopsFeatures: [
      {
        icon: FaCogs,
        title: "צינורות פריסה אוטומטיים",
        description: "בנה, בדוק ופרוס את האפליקציות שלך במהירות ובאופן עקבי עם צינורות CI/CD."
      },
      {
        icon: FaServer,
        title: "תשתית כקוד",
        description: "ניהול תשתית באמצעות קוד לשחזור, סקלאביליות ותחזוקה פשוטה."
      },
      {
        icon: FaCloud,
        title: "אינטגרציה בענן",
        description: "חבר בקלות פלטפורמות ענן פופולריות לאוטומציה של תהליכים ולשיפור הסקלאביליות."
      },
      {
        icon: FaTools,
        title: "ניטור מתמשך",
        description: "קבל תובנות בזמן אמת לגבי בריאות האפליקציה והתשתית לזיהוי בעיות מהיר."
      },
      {
        icon: FaCameraRetro,
        title: "אנליטיקות DevOps ודיווח",
        description: "הדמיית ביצועי צינורות ומדדי צוות לקידום שיפור מתמיד."
      },
      {
        icon: FaPalette,
        title: "אסטרטגיית DevOps מותאמת אישית",
        description: "פתרונות מותאמים המתאימים את מיטב שיטות DevOps לצרכי העסק הייחודיים שלך."
      }
    ],

    benefitsHeader: "למה לבחור בשירותי DevOps שלנו?",
    benefitsSubtext: "פתח פיתוח מהיר יותר, שיתוף פעולה משופר ואמינות מערכת עם גישת DevOps מותאמת שלנו.",
    benefits: [
      "האץ את אספקת התוכנה באמצעות אוטומציה",
      "שפר אמינות והפחת סיכוני פריסה",
      "הגדל שיתוף פעולה בין פיתוח לתפעול",
      "אופטימיזציה של ניהול תשתית עם קוד",
      "ניטור מתמשך להאצת משובי זמן",
      "התאמה והרחבה קלה עם כלי ענן מקוריים"
    ],
    benefitsImgAlt: "ויזואל של DevOps ו-CI/CD",
    benefitsBtn: "צור קשר",

    galleryHeader: "גלריית תמונות שירותי ענן מרכזיים",
    gallerySub: "חקור את תשתית הענן שלנו דרך תמונות המדגימות את הפתרונות החזקים שלנו.",

    ctaTitle: "מוכן להאיץ את האספקה שלך?",
    ctaText: "צור קשר עם המומחים שלנו כדי לפשט את זרמי העבודה של DevOps ו-CI/CD שלך.",
    ctaStartBtn: "התחל עכשיו",
    ctaLearnBtn: "למד עוד עלינו"
  },

  fr: {
    documentTitle: "Services DevOps & CI/CD - Stackly Solutions",
    heroTitle: "Services DevOps & CI/CD",
    heroText: "Dynamisez votre cycle de vie du développement logiciel avec l'automatisation, la surveillance et une infrastructure évolutive.",
    heroBtn: "Commencer Aujourd'hui",
    heroVideo: "images/video9.mp4",

    featuresHeader: "Capacités DevOps Clés",
    featuresSubtext: "Construisez des pipelines de livraison continue efficaces, fiables avec nos services experts.",
    devopsFeatures: [
      {
        icon: FaCogs,
        title: "Pipelines de Déploiement Automatisés",
        description: "Construisez, testez et déployez vos applications rapidement et de manière cohérente avec les pipelines CI/CD."
      },
      {
        icon: FaServer,
        title: "Infrastructure as Code",
        description: "Gérez l'infrastructure via le code pour la reproductibilité, l'évolutivité, et une maintenance simplifiée."
      },
      {
        icon: FaCloud,
        title: "Intégration Cloud",
        description: "Connectez en toute transparence les plateformes cloud populaires pour automatiser vos flux de travail et améliorer l'évolutivité."
      },
      {
        icon: FaTools,
        title: "Surveillance Continue",
        description: "Obtenez des insights en temps réel sur la santé des applications et infrastructures pour détecter rapidement les problèmes."
      },
      {
        icon: FaCameraRetro,
        title: "Analytique et Reporting DevOps",
        description: "Visualisez les performances des pipelines et les métriques d’équipe pour favoriser l’amélioration continue."
      },
      {
        icon: FaPalette,
        title: "Stratégie DevOps Personnalisée",
        description: "Des solutions sur mesure alignant les meilleures pratiques DevOps avec les besoins uniques de votre entreprise."
      }
    ],

    benefitsHeader: "Pourquoi Choisir Nos Services DevOps?",
    benefitsSubtext: "Débloquez un développement plus rapide, une collaboration améliorée et la fiabilité du système avec notre approche DevOps sur mesure.",
    benefits: [
      "Accélérez la livraison logicielle grâce à l'automatisation",
      "Améliorez la fiabilité et réduisez les risques de déploiement",
      "Augmentez la collaboration entre développement et opérations",
      "Optimisez la gestion de l'infrastructure avec du code",
      "Surveillez continuellement pour des boucles de rétroaction plus rapides",
      "Adaptez et évoluez facilement avec des outils cloud natifs"
    ],
    benefitsImgAlt: "Visuel DevOps & CI/CD",
    benefitsBtn: "Contactez Nous",

    galleryHeader: "Galerie Visuelle des Services Cloud Clés",
    gallerySub: "Explorez notre infrastructure cloud à travers ces visuels présentant nos solutions robustes.",

    ctaTitle: "Prêt à Accélérer Votre Livraison ?",
    ctaText: "Contactez nos experts pour rationaliser vos workflows DevOps et CI/CD.",
    ctaStartBtn: "Commencer Maintenant",
    ctaLearnBtn: "En Savoir Plus Sur Nous"
  }
};

const Service1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.documentElement.dir = ["ar", "he"].includes(language) ? "rtl" : "ltr";
    document.title = t.documentTitle || "DevOps & CI/CD Services - Stackly Solutions";
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
              <Link to="/contact" className="hero-button">{t.heroBtn}</Link>
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
              {t.devopsFeatures.map((feature, index) => {
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
                    <div className="feature-icon"><Icon /></div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="btn-learn-wrapper">
              <Link to="/contact" className="btn-learn">{t.heroBtn} <FaArrowRight /></Link>
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
                  <img src="images/freelancerservices4.jpg" alt={t.benefitsImgAlt} />
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

@media (max-width: 600px) {
  .gallery-row,
  .gallery-row.reverse {
    flex-direction: column !important; /* Stack big image above grid */
    gap: 200px;
  }

  .gallery-big {
    width: 100%;
    height: 200px;
    margin-top: 16px; /* Adds gap above big image on mobile */
  }

  .gallery-grid {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .gallery-grid img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }
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
