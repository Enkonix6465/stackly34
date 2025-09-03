import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRobot,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
  FaCheck,
  FaArrowRight,
  FaCameraRetro,
  FaPalette
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    documentTitleAI: "AI & Automation - Stackly Solutions",
    heroTitleAI: "AI & Automation Solutions",
    heroTextAI: "Harness the power of artificial intelligence to transform your business processes and accelerate growth.",
    heroVideoAI: "images/video7.mp4",
    heroBtnAI: "Get Started",

    featuresHeaderAI: "Transformative AI Features",
    featuresSubtextAI: "Innovative technology designed to empower and automate your business.",
    aiFeatures: [
      { icon: FaRobot, title: "Intelligent Automation", description: "Streamline your business processes with cutting-edge AI-driven automation solutions." },
      { icon: FaCogs, title: "Machine Learning Models", description: "Leverage custom-designed ML models to gain actionable insights and improve decision-making." },
      { icon: FaUsers, title: "User Behavior Analytics", description: "Analyze customer behavior patterns to personalize experiences and optimize engagement." },
      { icon: FaChartLine, title: "Predictive Analytics", description: "Forecast trends and outcomes using advanced predictive algorithms." },
      { icon: FaLightbulb, title: "Innovation & Optimization", description: "Innovate continuously by applying AI to optimize operations and resource allocation." },
      { icon: FaHandshake, title: "Seamless Integration", description: "Easily incorporate AI and automation into existing systems with expert guidance." }
    ],

    benefitsHeaderAI: "Why Choose AI & Automation?",
    benefitsSubtextAI: "Unlock growth and efficiency with tailored AI and automation strategies designed to future-proof your business.",
    benefitsAI: [
      "Increase efficiency and reduce operational costs",
      "Gain deeper insights through data-driven analytics",
      "Improve customer engagement with personalization",
      "Scale operations smoothly with automated workflows",
      "Drive innovation to stay competitive in your industry",
      "Enhance decision-making with AI-powered predictions"
    ],
    benefitsImgAltAI: "AI & Automation Visual",
    benefitsBtnAI: "Contact Our Experts",

    galleryHeaderAI: "Core Cloud Services Visual Gallery",
    gallerySubAI: "Explore our cloud infrastructure through these visuals showcasing our robust solutions.",

    ctaTitleAI: "Ready to Innovate with AI?",
    ctaTextAI: "Contact us for a personalized consultation to advance your automation journey.",
    ctaStartBtnAI: "Start Your Journey",
    ctaLearnBtnAI: "Learn More About Us",

    // Data & Analytics - BI Section
    documentTitleBI: "Data & Analytics - Stackly Solutions",
    heroTitleBI: "Data & Analytics Solutions",
    heroTextBI: "Empower your organization with data-driven strategies and impactful insights.",
    heroBtnBI: "Get Started",
    heroVideoBI: "images/video8.mp4",

    featuresHeaderBI: "Key Features of Our BI Services",
    featuresSubtextBI: "Unlock the power of your data with our comprehensive BI offerings.",
    biFeatures: [
      { icon: FaChartLine, title: "Data Visualization", description: "Turn complex data into insightful, interactive visual reports for easier decision-making." },
      { icon: FaUsers, title: "Customer Analytics", description: "Gain deep understanding of your customer behavior and preferences using advanced analytics." },
      { icon: FaCogs, title: "Automated Reporting", description: "Simplify your reporting with automated dashboards and real-time updates." },
      { icon: FaLightbulb, title: "Predictive Insights", description: "Leverage AI-powered predictions to forecast sales, trends, and risk factors." },
      { icon: FaHandshake, title: "Strategic Consulting", description: "Expert guidance to align BI initiatives with your business goals." },
      { icon: FaCameraRetro, title: "Data Storytelling", description: "Create compelling narratives with your data to engage stakeholders." }
    ],

    benefitsHeaderBI: "Benefits of Business Intelligence",
    benefitsSubtextBI: "Drive better outcomes with insights that accelerate growth, reduce risks, and enhance customer engagement.",
    benefitsBI: [
      "Make data-driven decisions confidently",
      "Increase business agility with timely insights",
      "Identify growth opportunities through analytics",
      "Enhance customer satisfaction with targeted actions",
      "Reduce costs with improved operational efficiency",
      "Empower teams with accessible business data"
    ],
    benefitsImgAltBI: "Business Intelligence Visual",
    benefitsBtnBI: "Contact Us",

    galleryHeaderBI: "BI Services Portfolio",
    gallerySubBI: "Showcase of websites we have developed across industries.",

    ctaTitleBI: "Ready to Unlock Your Data Potential?",
    ctaTextBI: "Get in touch with our experts to start your Business Intelligence transformation.",
    ctaStartBtnBI: "Contact Us",
    ctaLearnBtnBI: "Learn More About Us",
  },

  ar: {
    documentTitleAI: "الذكاء الاصطناعي والأتمتة - ستاكلي سوليوشنز",
    heroTitleAI: "حلول الذكاء الاصطناعي والأتمتة",
    heroTextAI: "استفد من قوة الذكاء الاصطناعي لتحويل عمليات عملك وتسريع النمو.",
    heroVideoAI: "images/video7.mp4",
    heroBtnAI: "ابدأ الآن",

    featuresHeaderAI: "ميزات الذكاء الاصطناعي التحولية",
    featuresSubtextAI: "تكنولوجيا مبتكرة تهدف لتمكين أعمالك وأتمتتها.",
    aiFeatures: [
      { icon: FaRobot, title: "الأتمتة الذكية", description: "تبسيط عمليات الأعمال من خلال حلول أتمتة مدعومة بالذكاء الاصطناعي." },
      { icon: FaCogs, title: "نماذج التعلم الآلي", description: "الاستفادة من نماذج التعلم الآلي المخصصة للحصول على رؤى قابلة للتنفيذ وتحسين اتخاذ القرار." },
      { icon: FaUsers, title: "تحليل سلوك المستخدم", description: "تحليل أنماط سلوك العملاء لتخصيص التجارب وتحسين التفاعل." },
      { icon: FaChartLine, title: "التحليلات التنبؤية", description: "التنبؤ بالاتجاهات والنتائج باستخدام خوارزميات تنبؤية متقدمة." },
      { icon: FaLightbulb, title: "الابتكار والتحسين", description: "الابتكار المستمر عبر تطبيق الذكاء الاصطناعي لتحسين العمليات وتخصيص الموارد." },
      { icon: FaHandshake, title: "دمج سلس", description: "دمج الذكاء الاصطناعي والأتمتة بسهولة في الأنظمة الحالية مع الدعم الخبير." }
    ],

    benefitsHeaderAI: "لماذا تختار الذكاء الاصطناعي والأتمتة؟",
    benefitsSubtextAI: "افتح آفاق النمو والكفاءة باستراتيجيات أتمتة وذكاء اصطناعي مصممة لمستقبل عملك.",
    benefitsAI: [
      "زيادة الكفاءة وتقليل التكاليف التشغيلية",
      "الحصول على رؤى أعمق من خلال تحليلات البيانات",
      "تحسين تفاعل العملاء بالتخصيص",
      "توسيع العمليات بسلاسة عبر سير عمل آلي",
      "دفع الابتكار للحفاظ على المنافسة",
      "تعزيز اتخاذ القرار بالتنبؤات المدعومة بالذكاء الاصطناعي"
    ],
    benefitsImgAltAI: "صورة الذكاء الاصطناعي والأتمتة",
    benefitsBtnAI: "تواصل مع خبرائنا",

    galleryHeaderAI: "معرض خدمات السحابة الأساسية",
    gallerySubAI: "استكشف بنية تحتية سحابية من خلال هذه الصور التي تعرض حلولنا القوية.",

    ctaTitleAI: "هل أنت مستعد للابتكار مع الذكاء الاصطناعي؟",
    ctaTextAI: "اتصل بنا للحصول على استشارة شخصية لتطوير رحلة الأتمتة الخاصة بك.",
    ctaStartBtnAI: "ابدأ رحلتك",
    ctaLearnBtnAI: "تعرف علينا أكثر",

    documentTitleBI: "البيانات والتحليلات - ستاكلي سوليوشنز",
    heroTitleBI: "حلول البيانات والتحليلات",
    heroTextBI: "مكن منظمتك باستراتيجيات قائمة على البيانات ورؤى مؤثرة.",
    heroBtnBI: "ابدأ الآن",
    heroVideoBI: "images/video8.mp4",

    featuresHeaderBI: "الميزات الرئيسية لخدمات ذكاء الأعمال لدينا",
    featuresSubtextBI: "اكتشف قوة بياناتك من خلال عروض ذكاء الأعمال الشاملة.",
    biFeatures: [
      { icon: FaChartLine, title: "تصوير البيانات", description: "حوّل البيانات المعقدة إلى تقارير مرئية تفاعلية تساعد في اتخاذ القرار." },
      { icon: FaUsers, title: "تحليلات العملاء", description: "فهم عميق لسلوك العملاء وتفضيلاتهم باستخدام تحليلات متقدمة." },
      { icon: FaCogs, title: "التقارير المؤتمتة", description: "تبسيط تقاريرك باستخدام لوحات تحكم مؤتمتة وتحديثات في الوقت الحقيقي." },
      { icon: FaLightbulb, title: "الرؤى التنبؤية", description: "استخدم التنبؤات المدعومة بالذكاء الاصطناعي لتوقع المبيعات والاتجاهات والمخاطر." },
      { icon: FaHandshake, title: "الاستشارات الاستراتيجية", description: "إرشادات خبراء لتوافق مبادرات ذكاء الأعمال مع أهداف عملك." },
      { icon: FaCameraRetro, title: "سرد البيانات", description: "إنشاء سرد مقنع ببياناتك لجذب أصحاب المصلحة." }
    ],

    benefitsHeaderBI: "فوائد ذكاء الأعمال",
    benefitsSubtextBI: "حقق نتائج أفضل مع رؤى تسرع النمو، تقلل المخاطر، وتعزز التفاعل مع العملاء.",
    benefitsBI: [
      "اتخذ قرارات تعتمد على البيانات بثقة",
      "زد من مرونة الأعمال باستخدام رؤى في الوقت المناسب",
      "حدد فرص النمو من خلال التحليلات",
      "حسن رضا العملاء بالإجراءات المستهدفة",
      "قلل التكاليف من خلال تحسين الكفاءة التشغيلية",
      "مكن الفرق ببيانات الأعمال المتاحة"
    ],
    benefitsImgAltBI: "صورة ذكاء الأعمال",
    benefitsBtnBI: "اتصل بنا",

    galleryHeaderBI: "معرض خدمات ذكاء الأعمال",
    gallerySubBI: "عرض للمواقع التي طورناها عبر الصناعات.",

    ctaTitleBI: "هل أنت مستعد لاكتشاف إمكانيات بياناتك؟",
    ctaTextBI: "تواصل مع خبرائنا لبدء تحول ذكاء الأعمال الخاص بك.",
    ctaStartBtnBI: "اتصل بنا",
    ctaLearnBtnBI: "تعرف أكثر",
  },

  he: {
    documentTitleAI: "AI ואוטומציה - Stackly Solutions",
    heroTitleAI: "פתרונות AI ואוטומציה",
    heroTextAI: "נצל את כוח הבינה המלאכותית כדי לשנות את תהליכי העסק שלך ולהאיץ את הצמיחה.",
    heroVideoAI: "images/video7.mp4",
    heroBtnAI: "התחל",

    featuresHeaderAI: "תכונות AI משנות משחק",
    featuresSubtextAI: "טכנולוגיה חדשנית שנועדה להעצים ולאוטומט את העסק שלך.",
    aiFeatures: [
      { icon: FaRobot, title: "אוטומציה אינטליגנטית", description: "ייעול תהליכים עסקיים עם פתרונות אוטומציה מבוססי AI." },
      { icon: FaCogs, title: "מודלי למידת מכונה", description: "השתמש במודלים מותאמים לקבלת תובנות ואופטימיזציה של ההחלטות." },
      { icon: FaUsers, title: "אנליטיקת התנהגות משתמשים", description: "ניתוח דפוסי התנהגות לקוחות להתאמה אישית והגברת המעורבות." },
      { icon: FaChartLine, title: "אנליטיקה חזויה", description: "חיזוי מגמות ותוצאות באמצעות אלגוריתמים מתקדמים." },
      { icon: FaLightbulb, title: "חדשנות ואופטימיזציה", description: "חדשנות מתמדת באמצעות יישום AI לאופטימיזציה של משאבים ותפעול." },
      { icon: FaHandshake, title: "אינטגרציה חלקה", description: "השילוב והניהול המקצועי של AI ואוטומציה במערכות קיימות." }
    ],

    benefitsHeaderAI: "למה לבחור ב-AI ובאוטומציה?",
    benefitsSubtextAI: "שחרר צמיחה ויעילות עם אסטרטגיות AI ואוטומציה מותאמות לעתיד העסק שלך.",
    benefitsAI: [
      "הגברת היעילות והפחתת עלויות תפעול",
      "קבלת תובנות עמוקות יותר באמצעות ניתוח נתונים",
      "שיפור מעורבות הלקוחות עם התאמה אישית",
      "סקייל מהיר של תהליכים עם אוטומציה",
      "קידום חדשנות לשמירת יתרון תחרותי",
      "שיפור קבלת החלטות עם חיזוי מונע AI"
    ],
    benefitsImgAltAI: "ויזואל של AI ואוטומציה",
    benefitsBtnAI: "צור קשר עם המומחים",

    galleryHeaderAI: "גלריית שירותי ענן מרכזיים",
    gallerySubAI: "גלה את תשתית הענן שלנו דרך תמונות המציגות את הפתרונות החזקים שלנו.",

    ctaTitleAI: "מוכן לחדש עם AI?",
    ctaTextAI: "צור קשר לקבלת ייעוץ מותאם לקידום מסע האוטומציה שלך.",
    ctaStartBtnAI: "התחל את המסע שלך",
    ctaLearnBtnAI: "למד עוד עלינו",

    documentTitleBI: "נתונים וניתוחים - Stackly Solutions",
    heroTitleBI: "פתרונות נתונים וניתוחים",
    heroTextBI: "העצם את הארגון שלך עם אסטרטגיות מבוססות נתונים ותובנות משמעותיות.",
    heroBtnBI: "התחל",
    heroVideoBI: "images/video8.mp4",

    featuresHeaderBI: "תכונות מרכזיות של שירותי BI שלנו",
    featuresSubtextBI: "שחרר את כוח הנתונים שלך עם שירותי BI מקיפים שלנו.",
    biFeatures: [
      { icon: FaChartLine, title: "תצוגת נתונים", description: "הפוך נתונים מורכבים לדוחות חזותיים אינטראקטיביים שיעזרו בקבלת החלטות." },
      { icon: FaUsers, title: "אנליטיקת לקוחות", description: "הבנה עמוקה של התנהגות והעדפות הלקוחות שלך באמצעות אנליטיקה מתקדמת." },
      { icon: FaCogs, title: "דיווח אוטומטי", description: "הפשט את הדיווח עם לוחות בקרה אוטומטיים ועדכונים בזמן אמת." },
      { icon: FaLightbulb, title: "תובנות חזויות", description: "מנף תחזיות מופעלות בינה מלאכותית לחיזוי מכירות, מגמות וגורמי סיכון." },
      { icon: FaHandshake, title: "ייעוץ אסטרטגי", description: "הכוונה מקצועית להתאמת יוזמות BI עם יעדי העסק שלך." },
      { icon: FaCameraRetro, title: "סיפור סיפורי נתונים", description: "צור סיפורים מרתקים עם הנתונים שלך כדי למעורבות בעלי העניין." }
    ],

    benefitsHeaderBI: "יתרונות של בינה עסקית",
    benefitsSubtextBI: "קדם תוצאות טובות יותר עם תובנות שמאיצות צמיחה, מפחיתות סיכונים ומשפרות מעורבות לקוחות.",
    benefitsBI: [
      "קבל החלטות מונחות נתונים בביטחון",
      "הגבר את הגמישות העסקית עם תובנות בזמן",
      "זהה הזדמנויות צמיחה באמצעות אנליטיקה",
      "שפר את שביעות רצון הלקוחות עם פעולות ממוקדות",
      "הפחת עלויות עם שיפור היעילות התפעולית",
      "העצם צוותים עם נתוני עסק נגישה"
    ],
    benefitsImgAltBI: "ויזואל של BI",
    benefitsBtnBI: "צור קשר",

    galleryHeaderBI: "פורטפוליו שירותי BI",
    gallerySubBI: "תצוגה של אתרים שפיתחנו בתעשיות שונות.",

    ctaTitleBI: "מוכן לשחרר את הפוטנציאל של הנתונים שלך?",
    ctaTextBI: "צור קשר עם המומחים שלנו כדי להתחיל את טרנספורמציית הבינה העסקית שלך.",
    ctaStartBtnBI: "צור קשר",
    ctaLearnBtnBI: "למידע נוסף",
  },

  fr: {
    documentTitleAI: "IA & Automatisation - Stackly Solutions",
    heroTitleAI: "Solutions d'IA et d'automatisation",
    heroTextAI: "Exploitez la puissance de l'intelligence artificielle pour transformer vos processus métier et accélérer la croissance.",
    heroVideoAI: "images/video7.mp4",
    heroBtnAI: "Commencer",

    featuresHeaderAI: "Fonctionnalités IA Transformatrices",
    featuresSubtextAI: "Technologie innovante conçue pour autonomiser et automatiser votre entreprise.",
    aiFeatures: [
      { icon: FaRobot, title: "Automatisation Intelligente", description: "Rationalisez vos processus métier avec des solutions d'automatisation AI de pointe." },
      { icon: FaCogs, title: "Modèles d'Apprentissage Automatique", description: "Exploitez des modèles ML personnalisés pour obtenir des insights exploitables et améliorer la prise de décision." },
      { icon: FaUsers, title: "Analyse du Comportement Utilisateur", description: "Analysez les comportements clients pour personnaliser les expériences et optimiser l'engagement." },
      { icon: FaChartLine, title: "Analyse Prédictive", description: "Prévoyez les tendances et résultats avec des algorithmes prédictifs avancés." },
      { icon: FaLightbulb, title: "Innovation & Optimisation", description: "Innovez continuellement en appliquant l'IA pour optimiser les opérations et l'allocation des ressources." },
      { icon: FaHandshake, title: "Intégration Transparente", description: "Incorporez facilement l'IA et l'automatisation dans les systèmes existants avec un accompagnement expert." }
    ],

    benefitsHeaderAI: "Pourquoi Choisir l'IA et l'Automatisation?",
    benefitsSubtextAI: "Débloquez la croissance et l'efficacité avec des stratégies d'IA et d'automatisation personnalisées pour pérenniser votre entreprise.",
    benefitsAI: [
      "Augmentez l'efficacité et réduisez les coûts opérationnels",
      "Obtenez des insights approfondis grâce à l'analyse des données",
      "Améliorez l'engagement client grâce à la personnalisation",
      "Échellez les opérations avec des workflows automatisés",
      "Stimulez l'innovation pour rester compétitif",
      "Améliorez la prise de décision avec des prédictions basées sur l'IA"
    ],
    benefitsImgAltAI: "Visuel IA & Automatisation",
    benefitsBtnAI: "Contactez Nos Experts",

    galleryHeaderAI: "Galerie Visuelle des Services Cloud Essentiels",
    gallerySubAI: "Explorez notre infrastructure cloud à travers ces visuels présentant nos solutions robustes.",

    ctaTitleAI: "Prêt à Innover avec l'IA ?",
    ctaTextAI: "Contactez-nous pour une consultation personnalisée afin d'avancer dans votre parcours d'automatisation.",
    ctaStartBtnAI: "Commencez Votre Parcours",
    ctaLearnBtnAI: "En Savoir Plus Sur Nous",

    documentTitleBI: "Données & Analyses - Stackly Solutions",
    heroTitleBI: "Solutions de Données et d'Analyses",
    heroTextBI: "Donnez à votre organisation le pouvoir des stratégies basées sur les données et des insights impactants.",
    heroBtnBI: "Commencer",
    heroVideoBI: "images/video8.mp4",

    featuresHeaderBI: "Fonctionnalités clés de nos services BI",
    featuresSubtextBI: "Libérez la puissance de vos données avec nos offres complètes de BI.",
    biFeatures: [
      { icon: FaChartLine, title: "Visualisation des Données", description: "Transformez des données complexes en rapports visuels interactifs pour une prise de décision facilitée." },
      { icon: FaUsers, title: "Analyse Client", description: "Comprenez en profondeur le comportement et les préférences de vos clients grâce à l'analytique avancée." },
      { icon: FaCogs, title: "Rapports Automatisés", description: "Simplifiez vos rapports avec des tableaux de bord automatisés et des mises à jour en temps réel." },
      { icon: FaLightbulb, title: "Perspectives Prédictives", description: "Exploitez les prédictions alimentées par l'IA pour prévoir les ventes, tendances et facteurs de risque." },
      { icon: FaHandshake, title: "Consultation Stratégique", description: "Une expertise pour aligner les initiatives BI avec vos objectifs commerciaux." },
      { icon: FaCameraRetro, title: "Narration des Données", description: "Créez des récits convaincants avec vos données pour engager les parties prenantes." }
    ],

    benefitsHeaderBI: "Avantages de l'intelligence d'affaires",
    benefitsSubtextBI: "Obtenez de meilleurs résultats grâce à des insights qui accélèrent la croissance, réduisent les risques et améliorent l'engagement client.",
    benefitsBI: [
      "Prenez des décisions basées sur les données avec confiance",
      "Augmentez l'agilité commerciale avec des insights en temps opportun",
      "Identifiez les opportunités de croissance grâce à l'analytique",
      "Améliorez la satisfaction client avec des actions ciblées",
      "Réduisez les coûts grâce à une meilleure efficacité opérationnelle",
      "Donnez du pouvoir aux équipes avec des données accessibles"
    ],
    benefitsImgAltBI: "Visuel Intelligence d'Affaires",
    benefitsBtnBI: "Contactez-nous",

    galleryHeaderBI: "Portefeuille de services BI",
    gallerySubBI: "Présentation des sites web que nous avons développés dans diverses industries.",

    ctaTitleBI: "Prêt à Débloquer le Potentiel de Vos Données ?",
    ctaTextBI: "Contactez nos experts pour démarrer votre transformation BI.",
    ctaStartBtnBI: "Contactez-nous",
    ctaLearnBtnBI: "En Savoir Plus",
  }
};

const Service1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.documentElement.dir = ["ar", "he"].includes(language) ? "rtl" : "ltr";
    document.title = t.documentTitleAI || "AI & Automation - Stackly Solutions";
  }, [language]);

  return (
    <div className="service-page">
      <div className="home-page">

        {/* AI & Automation Hero Section */}
        <section className="hero-section">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src={t.heroVideoAI} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.heroTitleAI}</h1>
              <p className="hero-paragraph">{t.heroTextAI}</p>
              <Link to="/contact" className="hero-button">{t.heroBtnAI}</Link>
            </div>
          </div>
        </section>

        {/* AI & Automation Features Section */}
        <section className="section features-section">
          <div className="container">
            <motion.div
              className="section-header text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t.featuresHeaderAI}</h2>
              <p>{t.featuresSubtextAI}</p>
            </motion.div>

            <div className="features-grid">
              {t.aiFeatures.map((feature, index) => {
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
              <Link to="/contact" className="btn-learn">{t.heroBtnAI} <FaArrowRight /></Link>
            </div>
          </div>
        </section>

        {/* AI & Automation Benefits Section */}
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
                <h2>{t.benefitsHeaderAI}</h2>
                <p>{t.benefitsSubtextAI}</p>
                <div className="benefits-list">
                  {t.benefitsAI.map((benefit, idx) => (
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
                  {t.benefitsBtnAI} <FaArrowRight />
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
                  <img src="images/freelancerservices2.jpg" alt={t.benefitsImgAltAI} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data & Analytics - BI Hero Section */}
        <section className="hero-section">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src={t.heroVideoBI} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.heroTitleBI}</h1>
              <p className="hero-paragraph">{t.heroTextBI}</p>
              <Link to="/contact" className="hero-button">{t.heroBtnBI}</Link>
            </div>
          </div>
        </section>

        {/* Data & Analytics - BI Features Section */}
        <section className="section features-section">
          <div className="container">
            <motion.div
              className="section-header text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t.featuresHeaderBI}</h2>
              <p>{t.featuresSubtextBI}</p>
            </motion.div>

            <div className="features-grid">
              {t.biFeatures.map((feature, index) => {
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
              <Link to="/contact" className="btn-learn">{t.heroBtnBI} <FaArrowRight /></Link>
            </div>
          </div>
        </section>

        {/* Data & Analytics - BI Benefits Section */}
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
                <h2>{t.benefitsHeaderBI}</h2>
                <p>{t.benefitsSubtextBI}</p>
                <div className="benefits-list">
                  {t.benefitsBI.map((benefit, idx) => (
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
                  {t.benefitsBtnBI} <FaArrowRight />
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
                  <img src="images/freelancerservices3.jpg" alt={t.benefitsImgAltBI} />
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
              <h2>{t.galleryHeaderAI}</h2>
              <p>{t.gallerySubAI}</p>
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
        <section className="section cta-section">
          <div className="cta-overlay">
            <div className="container">
              <motion.div className="cta-content" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2>{t.ctaTitleAI}</h2>
                <p>{t.ctaTextAI}</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary btn-large">{t.ctaStartBtnAI} <FaArrowRight /></Link>
                  <Link to="/about" className="btn btn-outline btn-large">{t.ctaLearnBtnAI}</Link>
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
