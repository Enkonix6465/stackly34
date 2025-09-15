import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  FaUsers, 
  FaRocket, 
  FaShieldAlt, 
  FaCogs, 
  FaRobot,
  FaCalendarCheck, 
  FaBuilding, 
  FaTasks, 
  FaAward,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaGlobe,
  FaBriefcase,
  FaPalette,
  FaUtensils,
  FaLock,
  FaTrophy,
  FaServer,
  FaCloud,
  FaTools,
  FaQuoteLeft,
  FaCloudUploadAlt,
} from 'react-icons/fa';

import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'ForStackly - Professional Business Solutions',
    hero: {
      title: 'Empowering Freelance Success',
      paragraph: 'From startups and small businesses to global brands, we connect you with the right talent to bring projects to life. Your ideas, our network — together we create work that matters.',
      button: 'Reach Out Today',
      videoSrc: 'images/video1.mp4',
    },
    aboutme: {
      heading: 'About Me',
      intro: "I'm a passionate web developer dedicated to creating high-quality, user-friendly digital products. With a keen eye for detail and a love for elegant code, I turn complex challenges into beautiful, simple solutions.",
      photoAlt: "My Photo",
      skillsHeading: 'My Expertise',
      skillNames: ["React", "Node.js", "UI/UX Design", "Tailwind CSS"],
    },
    servicesPreview: {
      heading: 'Helping Freelancers Succeed',
      paragraph: 'From bespoke website design to comprehensive project management, I provide end-to-end solutions that help freelancers shine and succeed.',
      list: [
        'Personalized Website & Portfolio Creation',
        'Branding & Graphic Design',
        'Content Strategy & Copywriting',
        'Social Media Marketing',
        'SEO & Analytics Consulting',
        'Virtual Event Planning & Hosting',
      ],
      btnText: 'Explore All Services',
      imageAlt: 'Team collaboration',
    },
    featuresSection: {
      heading: 'Empowering Your Freelance Success',
      subtitle: 'Innovative solutions and creative services tailored for solo professionals and entrepreneurs.',
      features: [
        {
          icon: FaRocket,
          title: 'Fast task Delivery',
          description: 'Meet tight deadlines and deliver high-quality projects swiftly to keep your clients happy and returning.',
          color: '#FF6B6B',
        },
        {
          icon: FaPalette,
          title: 'Creative Design',
          description: 'Bring your creative visions to life through thoughtful, user-focused UI/UX design.',
          color: '#4FD1C5',
        },
        {
          icon: FaTools,
          title: 'Full Stack',
          description: 'End-to-end development services tailored to your unique business needs.',
          color: '#D69E2E',
        },
      ],
    },
    stats: [
      { number: 120, suffix: '+', label: 'Projects Completed', icon: FaTasks },
      { number: 80, suffix: '+', label: 'Happy Clients', icon: FaUsers },
      { number: 5, suffix: '+', label: 'Years Experience', icon: FaBriefcase },
      { number: 15, suffix: '+', label: 'Countries Served', icon: FaGlobe },
    ],
    testimonialsSection: {
      heading: 'Client Testimonials',
      subheading: 'Hear what my amazing clients have to say about my work.',
      testimonials: [
        {
          quote: "Working with them was a game-changer. The final product exceeded our expectations and was delivered on time.",
          author: "Jane Doe",
          title: "CEO, Tech Solutions Inc.",
        },
        {
          quote: "Professional, creative, and a pleasure to work with. They captured our vision perfectly.",
          author: "John Smith",
          title: "Founder, Innovate Co.",
        },
        {
          quote: "Highly recommended! The attention to detail and communication throughout the project was outstanding.",
          author: "Sarah Lee",
          title: "Marketing Director, Creative Hub",
        },
      ],
    },
    cta: {
      heading: 'Ready to Transform Your Business?',
      paragraph: 'Get started today with a free consultation and discover how we can help you achieve your goals.',
      btnStart: 'Start Your Journey',
      btnLearnMore: 'Learn More About Us',
    },
  },
  ar: {
    pageTitle: 'ForStackly - حلول الأعمال المهنية',
    hero: {
      title: 'تمكين نجاح العاملين المستقلين',
      paragraph: 'من الشركات الناشئة والصغيرة إلى العلامات التجارية العالمية، نربطك بالمواهب المناسبة لإحياء المشاريع. أفكارك، شبكتنا — معاً نخلق عملاً ذا معنى.',
      button: 'تواصل معنا اليوم',
      videoSrc: 'images/video1.mp4',
    },
    aboutme: {
      heading: 'عني',
      intro: 'أنا مطور ويب شغوف مكرس لإنشاء منتجات رقمية عالية الجودة وسهلة الاستخدام. مع اهتمام خاص بالتفاصيل وحب للبرمجة الأنيقة، أحول التحديات المعقدة إلى حلول جميلة وبسيطة.',
      photoAlt: 'صورتي',
      skillsHeading: 'خبراتي',
      skillNames: ["React", "Node.js", "تصميم UI/UX", "Tailwind CSS"],
    },
    servicesPreview: {
      heading: 'مساعدة المستقلين على النجاح',
      paragraph: 'من تصميم مواقع مخصص إلى إدارة مشاريع شاملة، أقدم حلولاً كاملة تساعد المستقلين على التألق والنجاح.',
      list: [
        'إنشاء مواقع شخصية ومحافظ أعمال مخصصة',
        'العلامة التجارية والتصميم الجرافيكي',
        'استراتيجية المحتوى والكتابة الإعلانية',
        'التسويق عبر وسائل التواصل الاجتماعي',
        'الاستشارات في تحسين محركات البحث وتحليل البيانات',
        'تخطيط واستضافة الفعاليات الافتراضية',
      ],
      btnText: 'استكشف جميع الخدمات',
      imageAlt: 'تعاون الفريق',
    },
    featuresSection: {
      heading: 'تمكين نجاحك كمستقل',
      subtitle: 'حلول مبتكرة وخدمات إبداعية مصممة للمحترفين وأصحاب الأعمال المنفردين.',
      features: [
        {
          icon: FaRocket,
          title: 'تسليم المهام بسرعة',
          description: 'الالتزام بالمواعيد النهائية وتسليم مشاريع عالية الجودة بسرعة للحفاظ على رضا العملاء وعودتهم.',
          color: '#FF6B6B',
        },
        {
          icon: FaPalette,
          title: 'تصميم إبداعي',
          description: 'تحويل رؤاك الإبداعية إلى واقع من خلال تصميم واجهات مستخدم وتجربة مستخدم مدروسة.',
          color: '#4FD1C5',
        },
        {
          icon: FaTools,
          title: 'تطوير شامل',
          description: 'خدمات تطوير كاملة مخصصة لاحتياجات عملك الفريدة.',
          color: '#D69E2E',
        },
      ],
    },
    stats: [
      { number: 120, suffix: '+', label: 'المشاريع المكتملة', icon: FaTasks },
      { number: 80, suffix: '+', label: 'العملاء السعداء', icon: FaUsers },
      { number: 5, suffix: '+', label: 'سنوات الخبرة', icon: FaBriefcase },
      { number: 15, suffix: '+', label: 'الدول التي تم خدمتها', icon: FaGlobe },
    ],
    testimonialsSection: {
      heading: 'آراء العملاء',
      subheading: 'استمع إلى ما يقوله عملائي المذهلون عن عملي.',
      testimonials: [
        {
          quote: "العمل معهم كان محوريًا. المنتج النهائي تجاوز توقعاتنا وتم تسليمه في الوقت المحدد.",
          author: "جين دو",
          title: "الرئيس التنفيذي، حلول التقنية",
        },
        {
          quote: "محترفون ومبدعون وسعدت بالعمل معهم. لقد جسدوا رؤيتنا تمامًا.",
          author: "جون سميث",
          title: "المؤسس، إنوفيت كو.",
        },
        {
          quote: "أنصح بهم بشدة! كان الاهتمام بالتفاصيل والتواصل طوال المشروع رائعًا.",
          author: "ساره لي",
          title: "مديرة التسويق، كرييتف هاب",
        },
      ],
    },
    cta: {
      heading: 'هل أنت مستعد لتحويل عملك؟',
      paragraph: 'ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.',
      btnStart: 'ابدأ رحلتك',
      btnLearnMore: 'تعرف علينا أكثر',
    },
  },
  he: {  // Added Hebrew translations
    pageTitle: 'ForStackly - פתרונות עסקיים מקצועיים',
    hero: {
      title: 'העצמת הצלחה עצמאית',
      paragraph: 'מסטארט-אפים ועסקים קטנים ועד מותגים גלובליים, אנו מחברים אתכם לכישרון הנכון להחיות פרויקטים. הרעיונות שלכם, הרשת שלנו — ביחד יוצרים עבודה שיש לה משמעות.',
      button: 'צור קשר עוד היום',
      videoSrc: 'images/video1.mp4',
    },
    aboutme: {
      heading: 'עליי',
      intro: 'אני מפתח אתרים נלהב המוקדש ליצירת מוצרים דיגיטליים איכותיים וידידותיים למשתמש. עם עין חדה לפרטים ואהבה לקוד אלגנטי, אני הופך אתגרים מורכבים לפתרונות יפים ופשוטים.',
      photoAlt: 'התמונה שלי',
      skillsHeading: 'המומחיות שלי',
      skillNames: ["React", "Node.js", "עיצוב UI/UX", "Tailwind CSS"],
    },
    servicesPreview: {
      heading: 'מסייע לעצמאים להצליח',
      paragraph: 'מעיצוב אתרים מותאם אישית ועד ניהול פרויקטים מקיף, אני מספק פתרונות מקצה לקצה שעוזרים לעצמאים להבליט ולהצליח.',
      list: [
        'יצירת אתרים ופורטפוליו מותאמים אישית',
        'מיתוג ועיצוב גרפי',
        'אסטרטגיית תוכן וכתיבת תוכן',
        'שיווק ברשתות חברתיות',
        'ייעוץ SEO וניתוח',
        'תכנון ואירוח אירועים וירטואליים',
      ],
      btnText: 'גלו את כל השירותים',
      imageAlt: 'שיתוף פעולה בצוות',
    },
    featuresSection: {
      heading: 'מניעים את ההצלחה העצמאית שלך',
      subtitle: 'פתרונות חדשניים ושירותים יצירתיים המותאמים לאנשי מקצוע עצמאיים ויזמים.',
      features: [
        {
          icon: FaRocket,
          title: 'משלוח מהיר של משימות',
          description: 'עמידה בזמנים הדוקים ומסירת פרויקטים באיכות גבוהה במהירות כדי לשמור על שביעות רצון הלקוחות.',
          color: '#FF6B6B',
        },
        {
          icon: FaPalette,
          title: 'עיצוב יצירתי',
          description: 'מימוש החזונות היצירתיים שלך באמצעות עיצוב UI/UX ממוקד משתמש.',
          color: '#4FD1C5',
        },
        {
          icon: FaTools,
          title: 'פיתוח Full Stack',
          description: 'שירותי פיתוח מקצה לקצה המותאמים לצרכי העסק הייחודיים שלך.',
          color: '#D69E2E',
        },
      ],
    },
    stats: [
      { number: 120, suffix: '+', label: 'פרויקטים שהושלמו', icon: FaTasks },
      { number: 80, suffix: '+', label: 'לקוחות מרוצים', icon: FaUsers },
      { number: 5, suffix: '+', label: 'שנות ניסיון', icon: FaBriefcase },
      { number: 15, suffix: '+', label: 'מדינות שבהן שירות', icon: FaGlobe },
    ],
    testimonialsSection: {
      heading: 'המלצות לקוחות',
      subheading: 'שמעו מהלקוחות המדהימים שלי על העבודה שלי.',
      testimonials: [
        {
          quote: "העבודה איתם שינתה את המשחק. המוצר הסופי עבר את הציפיות והוגש בזמן.",
          author: "ג'יין דו",
          title: "מנכ\"ל, Tech Solutions Inc.",
        },
        {
          quote: "מקצועיים, יצירתיים, ומהנים לעבוד איתם. הם קלטו את החזון שלנו בצורה מושלמת.",
          author: "ג'ון סמית'",
          title: "מייסד, Innovate Co.",
        },
        {
          quote: "מומלץ בחום! תשומת הלב לפרטים והתקשורת לאורך כל הפרויקט היו יוצאות דופן.",
          author: "שרה לי",
          title: "מנהלת שיווק, Creative Hub",
        },
      ],
    },
    cta: {
      heading: 'מוכן לשנות את העסק שלך?',
      paragraph: 'התחל היום עם ייעוץ חינם וגלה כיצד נוכל לעזור לך להשיג את המטרות שלך.',
      btnStart: 'התחל את המסע שלך',
      btnLearnMore: 'למידע נוסף עלינו',
    }
  }
};

const FeatureCard = ({ Icon, title, description, color, delay }) => (
  <motion.div
    className="feature-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.05, boxShadow: `0 12px 40px ${color}80` }}
    style={{ borderColor: 'transparent' }}
  >
    <div className="feature-icon" style={{ backgroundColor: color }}>
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to="/services" className="feature-link">
      Learn More <FaArrowRight />
    </Link>
  </motion.div>
);

const Home1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.title = t.pageTitle;
    document.documentElement.dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  }, [language, t.pageTitle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % t.testimonialsSection.testimonials.length);
        setTransitioning(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.testimonialsSection.testimonials.length]);

  const FaCheckIcon = () => <span className="mock-icon-check">✔️</span>;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src={t.hero.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.hero.title}</h1>
            <p className="hero-paragraph animate-fade-up">{t.hero.paragraph}</p>
            <Link to="/contact" className="hero-button animate-fade-up-delayed">{t.hero.button}</Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="aboutme-section">
        <div className="aboutme-inner">
          <h2 className="aboutme-heading">{t.aboutme.heading}</h2>
          <p className="aboutme-intro">{t.aboutme.intro}</p>
          <div className="aboutme-grid">
            <div className="aboutme-photo-col">
              <div className="aboutme-glow">
                <img src="images/freelancer1.jpg" alt={t.aboutme.photoAlt} className="aboutme-photo-img" />
              </div>
            </div>
            <div className="aboutme-skill-col">
              <h3 className="aboutme-skills-heading">{t.aboutme.skillsHeading}</h3>
              {[95, 85, 90, 98].map((level, i) => (
                <div className="aboutme-skill-item" key={t.aboutme.skillNames[i]}>
                  <div className="aboutme-skill-label-row">
                    <span>{t.aboutme.skillNames[i]}</span>
                    <span className="aboutme-skill-level">{level}%</span>
                  </div>
                  <div className="aboutme-bar-bg">
                    <div className="aboutme-bar" style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-preview">
        <div className="container">
          <div className="grid-2">
            <motion.div
              className="services"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>{t.servicesPreview.heading}</h2>
              <p>{t.servicesPreview.paragraph}</p>
              <ul className="section-list">
                {t.servicesPreview.list.map((item, idx) => (
                  <li key={idx}><FaCheckIcon /> {item}</li>
                ))}
              </ul>
              <div className="section-btn-container">
                <Link to="/services" className="btn">{t.servicesPreview.btnText}</Link>
              </div>
            </motion.div>
            <motion.div
              className="services-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-image">
                <img src="images/freelancer2.jpg" alt={t.servicesPreview.imageAlt} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* Features Section */}
<section className="features-section">
  <div className="container mx-auto px-4">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>{t.featuresSection.heading}</h2>
      <p>{t.featuresSection.subtitle}</p>
    </motion.div>
    <div className="features-grid">
      {t.featuresSection.features.map(({ icon: Icon, title, description, color }, idx) => (
        <FeatureCard
          key={idx}
          Icon={Icon}
          title={title}
          description={description}
          color={color}
          delay={idx * 0.15}
        />
      ))}
    </div>
  </div>
</section>


      {/* Stats Section */}
     <section className="stats" ref={ref}>
  <div className="container">
    <div className="stats-grid">
      {t.stats.map(({ number, suffix, label, icon: Icon }, idx) => (
        <motion.div
          className="stat-item"
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Icon className="stat-icon" />
          <h3>
            {inView ? <CountUp start={0} end={number} duration={2.5} separator="," /> : "0"}
            {suffix}
          </h3>
          <p>{label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-inner">
          <h2 className="testimonials-heading">{t.testimonialsSection.heading}</h2>
          <p className="testimonials-subheading">{t.testimonialsSection.subheading}</p>
          <div className="testimonials-fade-wrapper">
            <div className={`testimonial-card-unique ${transitioning ? 'testimonial-card-enter' : 'testimonial-card-enter-active'}`}>
              <p className="testimonial-text">&quot;{t.testimonialsSection.testimonials[currentIndex].quote}&quot;</p>
              <p className="testimonial-author-name">{t.testimonialsSection.testimonials[currentIndex].author}</p>
              <p className="testimonial-author-title">{t.testimonialsSection.testimonials[currentIndex].title}</p>
            </div>
            <div className="testimonial-dots">
              {t.testimonialsSection.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`testimonial-dot${currentIndex === idx ? ' active' : ''}`}
                  onClick={() => {
                    setTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setTransitioning(false);
                    }, 400);
                  }}
                />
              ))}
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
              <h2>{t.cta.heading}</h2>
              <p>{t.cta.paragraph}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  {t.cta.btnStart} <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-large">
                  {t.cta.btnLearnMore}
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

        {/*features-section */}
.features-section {
  background: var(--sidebar-bg);
  padding: 72px 24px;
}

.section-header {
  margin-bottom: 60px;
  text-align: center;
}

.section-header h2 {
  font-size: 3rem;
  margin-bottom: 18px;
  color: var(--heading-color);
  font-weight: 900;
  letter-spacing: 0.05em;
}

.section-header p {
  font-size: 1.4rem;
  color: var(--text-muted);
  margin: 0 auto;
  max-width: 700px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 36px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: var(--card-bg);
  color: var(--text-color);
  border-radius: 1.25rem;
  padding: 36px 28px 44px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.35s;
  cursor: pointer;
  min-height: 390px;
  border: none;
}

.feature-card:hover {
  box-shadow: 0 16px 48px rgba(0, 123, 255, 0.25);
  transform: translateY(-15px) scale(1.07);
}

.feature-icon {
  font-size: 58px;
  background-color: currentColor;
  color: var(--card-bg);
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  filter: drop-shadow(0 0 16px currentColor);
  transition: background-color 0.3s, filter 0.3s, transform 0.3s;
}

.feature-card:hover .feature-icon {
  filter: drop-shadow(0 0 30px currentColor);
  transform: scale(1.25);
}

.feature-card h3 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 900;
  color: var(--heading-color);
}

.feature-card p {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 32px;
  line-height: 1.7;
  flex-grow: 1;
}

.feature-link {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}

.feature-link:hover {
  color: var(--accent-color);
  transform: translateX(12px);
}

/* Responsive tweaks */
@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 100vw;
    padding: 0 16px;
    gap: 24px;
  }
  .section-header h2 {
    font-size: 2.4rem;
  }
  .section-header p {
    font-size: 1.1rem;
    max-width: 90%;
  }
  .feature-card {
    min-height: auto;
    padding: 28px 20px 32px;
  }
  .feature-icon {
    font-size: 48px;
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
  }
  .feature-card h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }
  .feature-card p {
    font-size: 1rem;
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .features-section {
    padding: 56px 16px;
  }
  .feature-icon {
    font-size: 40px;
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }
  .feature-card h3 {
    font-size: 1.6rem;
  }
  .feature-card p {
    font-size: 0.9rem;
  }
}


        {/* About Me Section */}

        .aboutme-section {
          padding: 60px 0;
          background: #142133;
          color: #f3f6fb;
          font-family: 'Segoe UI',Arial,sans-serif;
        }
        .aboutme-container {
          max-width: 1050px;
          margin: 0 auto;
          padding: 0 22px;
        }
        .aboutme-heading {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 18px;
          letter-spacing: 1px;
        }
        .aboutme-intro {
          max-width: 780px;
          margin: 0 auto 48px;
          color: #d1dae2;
          line-height: 1.7;
          font-size: 1.23rem;
          text-align: center;
        }
        .aboutme-grid {
          display: flex;
          gap: 62px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .aboutme-photo-col {
          flex: 1 1 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 260px;
        }
        .aboutme-glow {
          width: 340px;
          height: 340px;
          background: #16202e;
          border-radius: 50%;
  display: flex;
  align-items: center;
}

{/*stats section*/}
.stats {
  background: linear-gradient(135deg, #5058c9ff, #3b77eeff, #2f83e3ff);
  color: #eef2f3;
  padding: 60px 20px;
  min-height: 350px;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 200px;
  padding: 30px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 36px rgba(255, 255, 255, 0.6);
}

.stat-icon {
  font-size: 4rem;
  color: #000000ff;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 6px #c2c0c0ff);
}

.stat-item h3 {
  font-size: 3.5rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
}

.stat-item p {
  font-size: 1.25rem;
  font-weight: 600;
  color: #d1d9db;
  margin: 0;
}

/* Mobile responsiveness tweaks */
@media (max-width: 992px) {
  .stats {
    padding: 50px 16px;
  }
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 25px;
  }
  .stat-item h3 {
    font-size: 2.5rem;
  }
  .stat-icon {
    font-size: 3rem;
  }
  .stat-item p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .stats {
    padding: 40px 12px;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .stat-item {
    padding: 24px 16px;
    border-radius: 1rem;
  }
  .stat-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  .stat-item h3 {
    font-size: 2rem;
  }
  .stat-item p {
    font-size: 1rem;
  }
}



{/* Services Section */}

.aboutme-section {
  width: 100vw;
  min-width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: var(--bg-color);
  color: var(--text-color);
  font-family: 'Segoe UI', Arial, sans-serif;
  padding: 60px 0;
}
.aboutme-inner {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 8px;
}
.aboutme-heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--heading-color);
  letter-spacing: 1px;
}
.aboutme-intro {
  max-width: 840px;
  margin: 0 auto 36px auto;
  color: var(--text-muted);
  line-height: 1.55;
  font-size: 1.09rem;
  text-align: center;
}
.aboutme-grid {
  display: flex;
  gap: 44px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-left: -102px;
  padding-top:30px;
}
.aboutme-photo-col {
  flex: 1 1 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
}
.aboutme-glow {
  width: 380px;
  height: 380px;
  background: var(--bg-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 68px 14px var(--primary-color), 0 0 140px 0 var(--primary-color);
  animation: glowme 2.2s infinite alternate;
  position: relative;
}
.aboutme-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: var(--card-bg);
  display: block;
}

@keyframes glowme {
  0%   { box-shadow: 0 0 40px var(--primary-color), 0 0 10px var(--primary-color);}
  50%  { box-shadow: 0 0 100px var(--primary-color), 0 0 30px var(--primary-color);}
  100% { box-shadow: 0 0 24px var(--primary-color), 0 0 30px var(--primary-color);}
}

.aboutme-skill-col {
  flex: 1 1 400px;
  min-width: 210px;
  max-width: 490px;
}

.aboutme-skills-heading {
  font-size: 1.28rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 28px;
  margin-top: 0;
}

.aboutme-skill-item {
  margin-bottom: 22px;
}
.aboutme-skill-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.05rem;
  margin-bottom: 6px;
}
.aboutme-skill-level {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1rem;
}
.aboutme-bar-bg {
  background: var(--sidebar-bg);
  border-radius: 18px;
  width: 100%;
  height: 13px;
  overflow: hidden;
}
.aboutme-bar {
  height: 13px;
  border-radius: 18px;
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--accent-color) 100%);
  transition: width 1s cubic-bezier(.13,.67,.43,.98);
}
.aboutme-glow:hover {
  transform: scale(1.08); /* scale up 8% on hover */
  box-shadow: 0 0 60px 12px var(--primary-color), 0 0 150px 10px var(--primary-color);
}

/* Tablet */
@media (max-width: 1000px) {
  .aboutme-inner { max-width: 99vw; padding: 0 2vw; }
  .aboutme-grid { gap: 18px; }
  .aboutme-glow { width: 150px; height: 150px;}
}

@media (max-width: 700px) {
  .aboutme-section {
    padding: 3  0px 0 25px 0;
    min-width: 100vw;
  }
  .aboutme-inner { padding: 0 8px; }
  .aboutme-heading {
    font-size: 1.7rem;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }
  .aboutme-intro {
    font-size: 1.05rem;
    margin-bottom: 20px;
    line-height: 1.5;
    max-width: 95vw;
  }
  .aboutme-grid {
    flex-direction: column;
    gap: 34px;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    width: 100%;
    padding-top:50px;
  }
  .aboutme-photo-col,
  .aboutme-skill-col {
    min-width: 0;
    max-width: 100vw;
    flex-basis: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .aboutme-glow {
    width: 305px;
    height: 305px;
    margin-bottom: 16px;
    /* Remove white background to get rid of white ring! */
    background: transparent !important;
    border: none !important;
    box-shadow: 0 0 40px 8px var(--primary-color), 0 0 100px 0 var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: visible;
  }
  .aboutme-photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    background: transparent;
    border: none;
    /* Don't set fixed px, let it stretch to fill parent */
  }
  .aboutme-skills-heading {
    font-size: 1.12rem;
    margin-bottom: 20px;
  }
  .aboutme-skill-item {
    margin-bottom: 22px;
  }
  .aboutme-skill-label-row {
    font-size: 1.05rem;
  }
  .aboutme-skill-level {
    font-size: 1.05rem;
  }
  .aboutme-bar-bg {
    height: 12px;
  }
     .aboutme-skill-col {
    max-width: 94vw;      /* Make list almost as wide as the screen */
    width: 100vw;
    margin: 0 auto;
    padding: 0 2vw;
  }

  .aboutme-skill-label-row {
    font-size: 1.2rem;    /* Bolder text for mobile */
  }

  .aboutme-bar-bg,
  .aboutme-bar {
    height: 20px;         /* Thick bars for easy touch and bold look */
    border-radius: 12px;
  }
}
}



/* For very small screens */
@media (max-width: 400px) {
  .aboutme-inner { padding: 0 2px; }
  .aboutme-heading { font-size: 1.23rem; }
  .aboutme-glow { width: 88px; height: 88px; }
  .aboutme-photo-img { width: 100%; height: 100%; }
}


/* Section heading */

.section-preview {
  padding: 70px 0;
}
.section-preview .services h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-heading-color);
  text-align: left; /* Keep heading left-aligned */
}

/* Paragraph text */
.section-preview .services p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--secondary-text-color);
  text-align: justify; /* ✅ Text justified */
}

/* List container */
.section-preview .section-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
}

/* List items */
.section-preview .section-list li {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--primary-text-color);
  width: calc(50% - 1rem);
  text-align: left; /* Keep list items aligned left */
}

/* Icon inside list item */
.section-preview .section-list li svg {
  color: var(--accent-color);
  margin-right: 0.5rem;
  flex-shrink: 0;
}

/* Responsive full width list items on small screens */
@media (max-width: 576px) {
  .section-preview .section-list li {
    width: 100%;
    text-align: left;
  }
}

/* Button container */
.section-preview .section-btn-container {
  margin-top: 2rem;
  text-align: left;
}

/* Button style */
.section-preview .btn,
.section-preview .view-all-btn,
.section-preview .view-btn {
  background-color: var(--primary-color);
  color: var(--bg-color); /* adaptive text color */
  padding: 0.8rem 2rem;
  border-radius: 0px;
  text-decoration: none;
  font-weight: 600;
  border: none;
  transition:
    background-color 0.2s ease,
    transform 0.16s cubic-bezier(.19,1,.22,1),
    box-shadow 0.18s;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.10);
  cursor: pointer;
}

/* Button hover and focus */
.section-preview .btn:hover,
.section-preview .view-all-btn:hover,
.section-preview .view-btn:hover,
.section-preview .btn:focus,
.section-preview .view-all-btn:focus,
.section-preview .view-btn:focus {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  color: var(--bg-color);
  outline: none;
}

/* Visual container for image */
.section-preview .services-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image wrapper */
.section-preview .section-image {
  width: 100%;
  max-width: 550px;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

/* Image hover effect */
.section-preview .section-image:hover {
  transform: scale(1.02);
}

/* Image itself */
.section-preview .section-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

/* ============= RESPONSIVE ============= */

/* Tablet (≤ 992px) */
@media (max-width: 992px) {
  .section-preview .services h2 {
    text-align: left; /* Keep heading left-aligned */
  }

  .section-preview .services p {
    text-align: justify; /* Maintain justified text */
    margin-left: auto;
    margin-right: auto;
  }

  .section-preview .section-btn-container {
    text-align: left;
  }
}

/* Mobile (≤ 576px) */
@media (max-width: 576px) {
  .section-preview .services h2 {
    font-size: 1.6rem;
    text-align: left; /* Heading left-aligned */
  }

  .section-preview .services p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify; /* Maintain justified text */
  }

  .section-preview .section-btn-container {
    text-align: left;
  }

  .section-preview .section-list li {
    width: 100%;
    text-align: left;
  }
}


{/* Testimonials Section */}

.testimonials-section {
      background: var(--bg-color);
      color: var(--text-color);
      padding: 64px 0 66px 0;
      width: 100vw;
    }
    .testimonials-inner {
      max-width: 820px;
      margin: 0 auto;
      padding: 0 16px;
      text-align: center;
    }
    .testimonials-heading {
      font-size: 2.4rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      margin-bottom: 12px;
      color: var(--heading-color);
    }
    .testimonials-subheading {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin-bottom: 46px;
    }
    .testimonials-fade-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .testimonial-card-unique {
      background: var(--card-bg);
      border: 2px solid var(--border-color);
      box-shadow: 0 6px 28px rgba(8,36,68,0.09);
      padding: 38px 28px 24px 28px;
      border-radius: 18px;
      margin-bottom: 18px;
      min-height: 170px;
      max-width: 650px;
      transform: scale(0.97);
      opacity: 0;
      transition: opacity 400ms, transform 400ms;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .testimonial-card-enter-active {
      opacity: 1;
      transform: scale(1);
    }
    .testimonial-text {
      font-size: 1.18rem;
      font-style: italic;
      color: var(--text-color);
      margin-bottom: 28px;
      word-break: break-word;
      line-height: 1.7;
    }
    .testimonial-author-name {
      font-weight: 700;
      color: var(--primary-color);
      font-size: 1.08rem;
      margin-bottom: 2px;
    }
    .testimonial-author-title {
      color: var(--text-muted);
      font-size: 0.97rem;
    }
    .testimonial-dots {
      display: flex;
      justify-content: center;
      margin-top: 14px;
      gap: 10px;
    }
    .testimonial-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: var(--border-color);
      transition: background 0.3s;
      cursor: pointer;
      outline: none;
      margin: 0 2px;
    }
    .testimonial-dot.active {
      background: var(--primary-color);
    }
    .testimonial-dot:hover {
      background: var(--primary-color);
    }
    @media (max-width: 600px) {
      .testimonials-section {
        padding: 36px 0 46px 0;
      }
      .testimonials-heading {
        font-size: 1.35rem;
      }
      .testimonial-card-unique, .testimonial-card-enter-active {
        padding: 16px 6vw 18px 6vw;
      }
      .testimonial-text {
        font-size: 1.02rem;
      }
    }

    
{/* cta section */}

        .cta-section {
  position: relative;
  background: url('/images/customer1.jpg') center/cover no-repeat fixed; /* fixed background */
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
  .btn-primary, .btn-outline, .btn-large {
  display: inline-flex;           /* Ensures horizontal layout! */
  align-items: center;            /* Vertically centers content */
  justify-content: center;        /* Centers content horizontally */
  gap: 8px;                       /* Space between text and icon */
}

.btn-primary svg {
  font-size: 1.3rem;
  vertical-align: middle;
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


        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
            .services-content h2 {
          font-size: 0.9rem;
          margin-bottom: 20px;
          margin-left: -20px;
        }

        .services-content p {
          font-size: 0.9rem;
          line-height: 1.6;
          text-align: justify;
          margin-bottom: 30px;
          color: var(--text-color);
        }

          .hero-text h1 {
            font-size: 2.5rem;
          }
            .section-header h2 {
          font-size: 1.9rem;
          margin-bottom: 15px;
        }
          .cta-content h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color:#fff;
}

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .hero-buttons,
          .cta-buttons {
            justify-content: center;
          }

          .services-content {
            text-align: center;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home1;
