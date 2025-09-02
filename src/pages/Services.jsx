import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { FiCode, FiLayout, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    heroTitle: "Our Services",
    heroText: "From intimate gatherings to grand celebrations, we provide end-to-end event planning, design, and execution to make every occasion unforgettable.",
    heroVideo: "images/video4.mp4",
    heroBtn: "Reach Out Today",

    servicesHeading: "My Freelance Services",
    servicesText: "I offer personalized IT and digital services designed to fit your unique needs—combining flexibility, creativity, and technical expertise. As a freelancer, I work directly with you to deliver practical, high-quality solutions that help your business grow.",
    servicesList: [
      "Cloud Migration & Management",
      "Cybersecurity & Risk Assessment",
      "Custom Software Development",
      "Data Analytics & AI Solutions",
      "24/7 IT Support & Monitoring",
      "DevOps Automation & Consulting",
      "Enterprise Network Architecture",
    ],

    itGridTitle: "What I Offer",
    itGridSubtitle: "Freelance digital services crafted to help you grow—flexible, creative, and tailored to your needs.",
    itServices: [
      {
        id: 1, title: "Website Development", color: "#2684ff", image: "images/freelancerservice1.jpg",
        description: "Custom websites built with modern, responsive designs tailored to your business or personal brand.",
        features: ["Responsive Web Design", "E‑Commerce Solutions", "Portfolio & Business Sites"], isNew: true
      },
      {
        id: 2, title: "Freelance Cybersecurity", color: "#27b47a", image: "images/freelancerservice2.jpg",
        description: "Security consulting and hands-on protection for small businesses and startups.",
        features: ["Vulnerability Testing", "Website/App Security", "Data Backup & Recovery"], isNew: true
      },
      {
        id: 3, title: "Automation & AI Tools", color: "#815cd3", image: "images/freelancerservice3.jpg",
        description: "Save time and boost efficiency with custom AI-based automations and smart tools.",
        features: ["Chatbots & Virtual Assistants", "Workflow Automation", "Data Analysis with AI"], isNew: true
      },
      {
        id: 4, title: "Data & Analytics", color: "#fd7e14", image: "images/freelancerservice4.jpg",
        description: "Simplifying data for freelancers, entrepreneurs, and small businesses to make better decisions.",
        features: ["Custom Dashboards", "Google Analytics Setup", "Customer Insights Reports"], isNew: true
      },
      {
        id: 5, title: "DevOps Projects", color: "#39bda7", image: "images/freelancerservice5.jpg",
        description: "Streamlined deployments and hosting setups tailored for small to mid-size projects.",
        features: ["CI/CD Setup", "Cloud Hosting Assistance", "Version Control (Git/GitHub)"], isNew: true
      },
      {
        id: 6, title: "Freelance IT Support", color: "#ff914d", image: "images/freelancerservice6.jpg",
        description: "On-demand technical support and consulting for freelancers, startups, and small businesses.",
        features: ["Website Maintenance", "Tech Consultations", "Software Troubleshooting"], isNew: true
      }
    ],

    portfolioTitle: "My Portfolio",
    portfolioDesc: "A selection of freelance projects I’ve delivered for clients",
    portfolioFilters: ["All", "Web Development", "Frontend", "App Development", "SEO", "Custom Software", "Web Design"],
    portfolioItems: [
      { id: 1, title: "Online Store for Fashion Brand", category: "Web Development", image: "images/freelancerservice7.jpg" },
      { id: 2, title: "Personal Portfolio for a Designer", category: "Frontend", image: "images/freelancerservice8.jpg" },
      { id: 3, title: "Task Management App for Freelancers", category: "App Development", image: "images/freelancerservice9.jpg" },
      { id: 4, title: "SEO Optimization for Travel Blog", category: "SEO", image: "images/freelancerservice10.jpg" },
      { id: 5, title: "CRM System for Local Business", category: "Custom Software", image: "images/freelancerservice11.jpg" },
      { id: 6, title: "Website Redesign for Startup", category: "Web Design", image: "images/freelancerservice12.jpg" }
    ],

    fsaServices: "MY SERVICES",
    fsaTitle: "Crafting Digital Experiences",
    fsaSubtitle: "I specialize in building modern, responsive, and user-friendly web applications. Click a service to learn more.",
    services: [
      {
        id: 1, title: "Web Development", color: "#6f78f6", plusColor: "#6f78f6",
        description: "From single-page applications to large-scale enterprise platforms, I build robust and scalable web solutions using the latest technologies like React, Node.js, and Python. My focus is on creating fast, secure, and maintainable code.",
        icon: <FiCode size={28} />
      },
      {
        id: 2, title: "UI/UX Design", color: "#22bf6c", plusColor: "#22bf6c",
        description: "I design intuitive and beautiful user interfaces that provide a seamless user experience. My process involves wireframing, prototyping, and user testing for accessibility and usability.",
        icon: <FiLayout size={28} />
      },
      {
        id: 3, title: "SEO & Marketing", color: "#ff5e7b", plusColor: "#ff5e7b",
        description: "Boost your online presence with SEO strategies, keyword research, and technical improvements to grow organic traffic and brand reach.",
        icon: <FiTrendingUp size={28} />
      },
      {
        id: 4, title: "Progressive Web Apps (PWA)", color: "#f39c12", plusColor: "#f39c12",
        description: "Developing fast, reliable, and engaging Progressive Web Apps that work offline and deliver native app-like experiences across all devices.",
        icon: <FiTrendingUp size={28} />
      },
      {
        id: 5, title: "Headless CMS Integration", color: "#8e44ad", plusColor: "#8e44ad",
        description: "Implementing headless CMS architectures for scalable content management, allowing greater flexibility and seamless delivery across platforms.",
        icon: <FiLayout size={28} />
      },
      {
        id: 6, title: "AI-Powered Web Solutions", color: "#27ae60", plusColor: "#27ae60",
        description: "Integrate AI-driven features such as chatbots, recommendation engines, and intelligent automation to enhance user engagement and productivity.",
        icon: <FiCode size={28} />
      }
    ],

    processSteps: [
      { step: '01', title: 'Discovery & Assessment', description: 'We thoroughly audit your IT environment and business needs, defining a tailored path forward for innovation and security.' },
      { step: '02', title: 'Solution Design', description: 'Our architects craft robust, scalable solutions—cloud, automation, or cyber—precisely mapped to your requirements.' },
      { step: '03', title: 'Agile Implementation', description: 'Seasoned engineers deploy and integrate next-gen technologies with professional project management and minimal disruption.' },
      { step: '04', title: 'Quality & Security Validation', description: 'Deep-dive testing and compliance checks ensure everything is reliable, secure, and future-proof before launch.' },
      { step: '05', title: 'User Enablement', description: 'We support your teams with clear documentation, hands-on training, and collaborative go-lives for fast adoption.' },
      { step: '06', title: 'Optimization & Support', description: 'Our experts monitor performance, troubleshoot in real time, and refine your IT landscape to unlock sustained value.' }
    ],

    ctaTitle: "Ready to Transform Your Business?",
    ctaText: "Get started today with a free consultation and discover how we can help you achieve your goals.",
    ctaStartBtn: "Start Your Journey",
    ctaLearnBtn: "Learn More About Us"
  },

  ar: {
    heroTitle: "خدماتنا",
    heroText: "من التجمعات الحميمة إلى الاحتفالات الكبرى، نقدم تخطيط وتنفيذ فعاليات متكاملة تجعل كل مناسبة لا تنسى.",
    heroVideo: "images/video4.mp4",
    heroBtn: "تواصل معنا اليوم",

    servicesHeading: "خدماتي المستقلة",
    servicesText: "أُقدم خدمات تقنية ومعلوماتية رقمية مخصصة تناسب احتياجاتك - أدمج بين المرونة والإبداع والخبرة الفنية. أعمل بشكل مباشر لتحقيق حلول عملية ومبتكرة بجودة عالية لنمو أعمالك.",
    servicesList: [
      "الهجرة والإدارة السحابية",
      "تقييم الأمن السيبراني والمخاطر",
      "تطوير البرمجيات حسب الطلب",
      "تحليلات البيانات وحلول الذكاء الاصطناعي",
      "الدعم الفني والمراقبة على مدار الساعة",
      "أتمتة DevOps والاستشارات",
      "هندسة الشبكات المؤسسية"
    ],

    itGridTitle: "ماذا أقدم",
    itGridSubtitle: "خدمات رقمية مستقلة لتنمية عملك—مرونة وإبداع وتخصيص لاحتياجاتك.",
    itServices: [
      {
        id: 1, title: "تطوير المواقع", color: "#2684ff", image: "images/freelancerservice1.jpg",
        description: "مواقع احترافية بتصميمات حديثة متجاوبة تناسب علامتك التجارية أو نشاطك الشخصي.",
        features: ["تصميم متجاوب", "حلول التجارة الإلكترونية", "مواقع للأعمال والمحافظ الشخصية"], isNew: true
      },
      {
        id: 2, title: "الأمن السيبراني المستقل", color: "#27b47a", image: "images/freelancerservice2.jpg",
        description: "استشارات أمنية وحماية تطبيقية عملية للأعمال الصغيرة والشركات الناشئة.",
        features: ["اختبار الثغرات", "حماية المواقع والتطبيقات", "نسخ احتياطي واستعادة البيانات"], isNew: true
      },
      {
        id: 3, title: "أدوات الأتمتة والذكاء الاصطناعي", color: "#815cd3", image: "images/freelancerservice3.jpg",
        description: "أدوات ذكية وأتمتة موفرة للوقت تزيد من الكفاءة عبر حلول مخصصة.",
        features: ["الروبوتات والدعم الافتراضي", "أتمتة سير العمل", "تحليل البيانات بالذكاء الاصطناعي"], isNew: true
      },
      {
        id: 4, title: "البيانات والتحليلات", color: "#fd7e14", image: "images/freelancerservice4.jpg",
        description: "تسهيل صنع القرار للمستقلين ورجال الأعمال من خلال تحليلات وتقارير ذكية.",
        features: ["لوحات تحكم مخصصة", "إعداد Google Analytics", "تقارير رؤى العملاء"], isNew: true
      },
      {
        id: 5, title: "مشاريع DevOps", color: "#39bda7", image: "images/freelancerservice5.jpg",
        description: "إعداد عمليات نشر واستضافة سلسة لمشاريع صغيرة ومتوسطة.",
        features: ["إعداد CI/CD", "مساعدة الاستضافة السحابية", "إدارة النسخ"], isNew: true
      },
      {
        id: 6, title: "الدعم الفني المستقل", color: "#ff914d", image: "images/freelancerservice6.jpg",
        description: "دعم تقني واستشارات حسب الطلب للمستقلين والشركات الناشئة.",
        features: ["صيانة المواقع", "الاستشارات التقنية", "حل مشاكل البرامج"], isNew: true
      }
    ],

    portfolioTitle: "معرض أعمالي",
    portfolioDesc: "مجموعة من المشاريع المستقلة التي أتممتها للعملاء",
    portfolioFilters: ["الكل", "تطوير المواقع", "الواجهة الأمامية", "تطوير التطبيقات", "SEO", "برمجيات مخصصة", "تصميم المواقع"],
    portfolioItems: [
      { id: 1, title: "متجر أونلاين للموضة", category: "تطوير المواقع", image: "images/freelancerservice7.jpg" },
      { id: 2, title: "المعرض الشخصي لمصمم", category: "الواجهة الأمامية", image: "images/freelancerservice8.jpg" },
      { id: 3, title: "تطبيق إدارة المهام للمستقلين", category: "تطوير التطبيقات", image: "images/freelancerservice9.jpg" },
      { id: 4, title: "تحسين SEO لمدونة سفر", category: "SEO", image: "images/freelancerservice10.jpg" },
      { id: 5, title: "نظام CRM للأعمال المحلية", category: "برمجيات مخصصة", image: "images/freelancerservice11.jpg" },
      { id: 6, title: "إعادة تصميم موقع لشركة ناشئة", category: "تصميم المواقع", image: "images/freelancerservice12.jpg" }
    ],

    fsaServices: "خدماتي",
    fsaTitle: "صنع تجارب رقمية",
    fsaSubtitle: "أختص في بناء تطبيقات ويب حديثة وسهلة الاستخدام. انقر على خدمة لمعرفة المزيد.",
    services: [
      { id: 1, title: "تطوير المواقع", color: "#6f78f6", plusColor: "#6f78f6", description: "من تطبيقات الصفحة الواحدة إلى منصات مؤسسية كبيرة، أبني حلول ويب قوية وقابلة للتوسع باستخدام أحدث التقنيات.", icon: <FiCode size={28} /> },
      { id: 2, title: "تصميم واجهة المستخدم/UX", color: "#22bf6c", plusColor: "#22bf6c", description: "أصمم واجهات مستخدم جميلة وسلسة توفر تجربة مستخدم مميزة.", icon: <FiLayout size={28} /> },
      { id: 3, title: "SEO والتسويق", color: "#ff5e7b", plusColor: "#ff5e7b", description: "أعزز وجودك الرقمي باستراتيجيات SEO، وبحث الكلمات الرئيسية، وتحسينات تقنية.", icon: <FiTrendingUp size={28} /> },
      { id: 4, title: "تطبيقات الويب التقدمية", color: "#f39c12", plusColor: "#f39c12", description: "تطوير تطبيقات ويب سريعة، موثوقة، ونشطة تعمل دون اتصال.", icon: <FiTrendingUp size={28} /> },
      { id: 5, title: "تكامل CMS بدون رأس", color: "#8e44ad", plusColor: "#8e44ad", description: "تنفيذ هيكليات CMS مرنة وقابلة للتوسع لتقديم المحتوى بسلاسة.", icon: <FiLayout size={28} /> },
      { id: 6, title: "حلول الويب المدعومة بالذكاء الاصطناعي", color: "#27ae60", plusColor: "#27ae60", description: "دمج ميزات مدعومة بالذكاء الاصطناعي مثل روبوتات الدردشة ومحركات التوصية.", icon: <FiCode size={28} /> }
    ],

    processSteps: [
      { step: '01', title: 'الاكتشاف والتقييم', description: 'ندقق بيئة تكنولوجيا المعلومات واحتياجات العمل لتحديد مسار مخصص للابتكار والأمان.' },
      { step: '02', title: 'تصميم الحل', description: 'نطور حلولًا قوية وقابلة للتوسع - سحابة، أتمتة، أو أمان، متوافقة تمامًا مع متطلباتك.' },
      { step: '03', title: 'التنفيذ المرن', description: 'نوظف مهندسين ذوي ניסיון גבוה لنشر ودمج التقنيات بآلية إدارة مشاريع مهنية مع أقل تعطيل.' },
      { step: '04', title: 'اختبار الجودة والأمان', description: 'نضمن الاعتمادية والأمان والاستعداد للمستقبل عبر اختبارات عميقة وفحوصات امتثال.' },
      { step: '05', title: 'تمكين المستخدم', description: 'ندعم الفرق بوثائق واضحة، تدريب عملي، وعمليات جمع تعاونية لتبني سريع.' },
      { step: '06', title: 'التحسين والدعم', description: 'نراقب الأداء، نعالج القضايا في الوقت الحقيقي، ونطور بيئة تكنولوجيا المعلومات لزيادة الفائدة المستمرة.' }
    ],

    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaText: "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    ctaStartBtn: "ابدأ رحلتك",
    ctaLearnBtn: "تعرف علينا أكثر"
  },

  he: {
    heroTitle: "השירותים שלנו",
    heroText: "מאירועים אינטימיים ועד לחגיגות גדולות, אנו מספקים תכנון, עיצוב וביצוע שכוללים את כל הפרטים כדי להפוך כל אירוע לבלתי נשכח.",
    heroVideo: "images/video4.mp4",
    heroBtn: "צור קשר היום",

    servicesHeading: "השירותים הפרילנסרים שלי",
    servicesText: "אני מציע שירותי IT ודיגיטל מותאמים אישית העונים על הצרכים הייחודיים שלך - משלב גמישות, יצירתיות ומומחיות טכנית. כפרילנסר אני עובד ישירות איתך כדי לספק פתרונות איכותיים ומעשיים המסייעים לצמיחת העסק שלך.",
    servicesList: [
      "הגירה וניהול ענן",
      "הערכה וסיכוני אבטחת סייבר",
      "פיתוח תוכנה מותאם אישית",
      "אנליטיקת נתונים ופתרונות AI",
      "תמיכה ומעקב IT 24/7",
      "אוטומציה וייעוץ DevOps",
      "ארכיטקטורת רשת ארגונית"
    ],

    itGridTitle: "מה אני מציע",
    itGridSubtitle: "שירותים דיגיטליים פרילנסרים שנועדו לעזור לך לצמוח - גמישים, יצירתיים ומותאמים אישית.",
    itServices: [
      { id: 1, title: "פיתוח אתרי אינטרנט", color: "#2684ff", image: "images/freelancerservice1.jpg", description: "בניית אתרים מותאמים אישית עם עיצובים מודרניים ותגובתיים המותאמים לעסק או המותג האישי שלך.", features: ["עיצוב תגובתי", "פתרונות מסחר אלקטרוני", "אתרי פורטפוליו ועסקים"], isNew: true },
      { id: 2, title: "אבטחת סייבר פרילנסרית", color: "#27b47a", image: "images/freelancerservice2.jpg", description: "ייעוץ אבטחה והגנה מעשית לעסקים קטנים וסטארטאפים.", features: ["בדיקות פגיעות", "אבטחת אתרים ואפליקציות", "גיבוי ושחזור נתונים"], isNew: true },
      { id: 3, title: "כלי אוטומציה ו-AI", color: "#815cd3", image: "images/freelancerservice3.jpg", description: "חומרה חכמה וכלי אוטומציה המייעלים חיסכון בזמן ומגבירים יעילות.", features: ["צ'אטבוטים ועוזרים וירטואליים", "אוטומציית תהליכים", "ניתוח נתונים חכם"], isNew: true },
      { id: 4, title: "נתונים ואנליטיקה", color: "#fd7e14", image: "images/freelancerservice4.jpg", description: "פישוט הנתונים לפרילנסרים, יזמים ועסקים קטנים לקבלת החלטות טובות יותר.", features: ["לוחות מחוונים מותאמים", "הגדרת Google Analytics", "דוחות תובנות ללקוח"], isNew: true },
      { id: 5, title: "פרויקטים של DevOps", color: "#39bda7", image: "images/freelancerservice5.jpg", description: "פריסת תוכן ואירוח מותאמים לפרויקטים קטנים עד בינוניים.", features: ["הקמת CI/CD", "סיוע באירוח בענן", "ניהול גרסאות (Git/GitHub)"], isNew: true },
      { id: 6, title: "תמיכה טכנית פרילנסרית", color: "#ff914d", image: "images/freelancerservice6.jpg", description: "תמיכה טכנית וייעוץ לפי דרישה לפרילנסרים, סטארטאפים ועסקים קטנים.", features: ["תחזוקת אתרים", "התייעצויות טכניות", "פתרון בעיות תוכנה"], isNew: true }
    ],

    portfolioTitle: "התיק שלי",
    portfolioDesc: "אוסף של פרויקטים לפרילנסרים שסיפקתי ללקוחות",
    portfolioFilters: ["הכל", "פיתוח אתרים", "קצה קדמי", "פיתוח אפליקציות", "SEO", "תוכנה מותאמת אישית", "עיצוב אתרים"],
    portfolioItems: [
      { id: 1, title: "חנות אופנה אונליין", category: "פיתוח אתרים", image: "images/freelancerservice7.jpg" },
      { id: 2, title: "פורטפוליו אישי למעצב", category: "קצה קדמי", image: "images/freelancerservice8.jpg" },
      { id: 3, title: "אפליקציית ניהול משימות לפרילנסרים", category: "פיתוח אפליקציות", image: "images/freelancerservice9.jpg" },
      { id: 4, title: "אופטימיזציית SEO לבלוג טיולים", category: "SEO", image: "images/freelancerservice10.jpg" },
      { id: 5, title: "מערכת CRM לעסק מקומי", category: "תוכנה מותאמת אישית", image: "images/freelancerservice11.jpg" },
      { id: 6, title: "עיצוב מחדש של אתר לסטארטאפ", category: "עיצוב אתרים", image: "images/freelancerservice12.jpg" }
    ],

    fsaServices: "השירותים שלי",
    fsaTitle: "יצירת חוויות דיגיטליות",
    fsaSubtitle: "אני מתמחה בבניית אפליקציות אינטרנט מודרניות, רספונסיביות וידידותיות למשתמש. לחץ על שירות כדי ללמוד עוד.",
    services: [
      { id: 1, title: "פיתוח אתרים", color: "#6f78f6", plusColor: "#6f78f6", description: "מתוכניות עמוד יחיד לפלטפורמות ארגוניות גדולות, אני בונה פתרונות אינטרנט חזקים וניתנים להרחבה תוך שימוש בטכנולוגיות החדשות ביותר.", icon: <FiCode size={28} /> },
      { id: 2, title: "עיצוב UI/UX", color: "#22bf6c", plusColor: "#22bf6c", description: "מחברת ממשקים אינטואיטיביים ויפים המספקים חווית משתמש טובה.", icon: <FiLayout size={28} /> },
      { id: 3, title: "SEO ושיווק", color: "#ff5e7b", plusColor: "#ff5e7b", description: "מגדיל את הנוכחות הדיגיטלית באסטרטגיות SEO ומחקר מילות מפתח.", icon: <FiTrendingUp size={28} /> },
      { id: 4, title: "אפליקציות ווב פרוגרסיביות", color: "#f39c12", plusColor: "#f39c12", description: "פיתוח אפליקציות מהירות ואמינות שפועלות במצב לא מקוון ומציעות חווית משתמש משופרת.", icon: <FiTrendingUp size={28} /> },
      { id: 5, title: "אינטגרציית CMS ראשונית", color: "#8e44ad", plusColor: "#8e44ad", description: "מערכות CMS המאפשרות גמישות גבוהה וניהול תוכן פשוט.", icon: <FiLayout size={28} /> },
      { id: 6, title: "פתרונות מבוססי AI", color: "#27ae60", plusColor: "#27ae60", description: "שילוב תכונות מבוססות AI כגון צ'אטבוטים ואוטומציה חכמה לשיפור חווית המשתמש.", icon: <FiCode size={28} /> }
    ],

    processSteps: [
      { step: '01', title: 'גילוי והערכה', description: 'בדיקות מעמיקות של סביבת ה-IT והצרכים העסקיים.' },
      { step: '02', title: 'תכנון פתרונות', description: 'פיתוח פתרונות ענן, אוטומציה ואבטחה מותאמים אישית.' },
      { step: '03', title: 'יישום אג׳ילי', description: 'הטמעת טכנולוגיות חדשות בניהול פרויקטים מוקפד.' },
      { step: '04', title: 'בדיקות איכות ואבטחה', description: 'בדיקות להבטחת אמינות ובטיחות לפני ההשקה.' },
      { step: '05', title: 'הכשרת משתמשים', description: 'תיעוד והדרכה לאימוץ מהיר.' },
      { step: '06', title: 'אופטימיזציה ותמיכה', description: 'מעקב, טיפול ושיפור סביבת ה-IT בזמן אמת.' }
    ],

    ctaTitle: "מוכן לשדרג את העסק שלך?",
    ctaText: "התחל היום עם ייעוץ חינם וגלה כיצד נוכל לעזור לך להשיג את היעדים שלך.",
    ctaStartBtn: "התחל את המסע שלך",
    ctaLearnBtn: "למד עוד עלינו"
  }
};

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openId, setOpenId] = useState(t.services[0].id);
  const [portfolioFilter, setPortfolioFilter] = useState(t.portfolioFilters[0]);

  useEffect(() => {
    document.documentElement.dir = ["ar", "he", "fa", "ur"].includes(language) ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const images = ["images/service1.jpg", "images/services2.jpg", "images/services3.jpg"];

  const filteredItems = portfolioFilter === t.portfolioFilters[0]
    ? t.portfolioItems
    : t.portfolioItems.filter(item => item.category === portfolioFilter);

  return (
    <div className="services-page" dir={document.documentElement.dir}>
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src={t.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.heroTitle}</h1>
            <p className="hero-paragraph animate-fade-up">{t.heroText}</p>
            <Link to="/contact" className="hero-button animate-fade-up-delayed">
              {t.heroBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-grid">
          {/* Left Slideshow */}
          <div className="services-image slideshow-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`IT Service Slide ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="slide-image"
              />
            </AnimatePresence>
          </div>
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="services-content"
          >
            <h2 className="services-heading">{t.servicesHeading}</h2>
            <p className="services-text">{t.servicesText}</p>
            <ul className="services-list">
              {t.servicesList.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="services-item"
                >
                  <span className="bullet"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="section it-grid-section">
        <div className="container">
          <motion.div
            className="it-section-header align-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t.itGridTitle}</h2>
            <p>{t.itGridSubtitle}</p>
          </motion.div>
          <div className="it-services-flex">
            {t.itServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="it-service-tile"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="it-img-box">
                  <img src={service.image} alt={service.title} />
                  {service.isNew && <span className="it-badge-new">New!</span>}
                </div>
                <div className="it-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="it-feature-list">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="it-feature-row">
                        <FaCheck className="it-check" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={`/service${service.id}`} className="it-link" style={{ color: service.color }}>
                    {(language === "ar" || language === "he") ? "تعرف على المزيد" : "Learn More"} <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-header text-center">
          <h2>{t.portfolioTitle}</h2>
          <p>{t.portfolioDesc}</p>
        </div>

        <div className="portfolio-filters">
          {t.portfolioFilters.map(cat => (
            <button key={cat} className={portfolioFilter === cat ? "active" : ""} onClick={() => setPortfolioFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FSA Section */}
      <section className="fsa-root">
        <div className="fsa-header">
          <div className="fsa-services">{t.fsaServices}</div>
          <h1 className="fsa-title">{t.fsaTitle}</h1>
          <p className="fsa-subtitle">{t.fsaSubtitle}</p>
        </div>
        <div className="fsa-cards">
          {t.services.map(({ id, title, color, plusColor, description, icon }) => (
            <div className="fsa-card" key={id}>
              <div className="fsa-card-row">
                <span className="fsa-iconbox" style={{ background: color }}>{icon}</span>
                <button
                  className="fsa-card-header"
                  onClick={() => setOpenId(id === openId ? null : id)}
                  aria-expanded={openId === id}
                  aria-controls={`fsa-panel-${id}`}
                  tabIndex={0}
                  style={{ outline: openId === id ? `2px solid ${color}` : "none" }}
                >
                  <span className="fsa-card-title">{title}</span>
                  <span className="fsa-card-close" style={{ color: plusColor, marginLeft: "auto", marginRight: "0" }} aria-label={openId === id ? "Close" : "Expand"}>
                    {openId === id ? "×" : "+"}
                  </span>
                </button>
              </div>
              <div className="fsa-card-panel" style={{ maxHeight: openId === id ? "200px" : "0px" }} id={`fsa-panel-${id}`}>
                {openId === id && <div className="fsa-card-desc">{description}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="container">
            <motion.div className="cta-content text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">{t.ctaStartBtn} <FaArrowRight /></Link>
                <Link to="/about" className="btn btn-outline btn-large">{t.ctaLearnBtn}</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home2-page {
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


{/*Our IT services*/}

.services-section {
color: var(--text-color);
  background: var(--bg-color);
  padding: 2rem 2rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.services-heading {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1.2rem;
  line-height: 1.1;
  transition: color 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
}


.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.services-image img {
  width: 100%;
  height: 450px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  object-fit: cover;
  background: var(--card-bg);
}

.services-content {
  text-align: left;
  justify-content: center;
  color: var(--text-color);
}

.services-text {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.05rem;
  text-align: justify;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-item {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--text-color);
}

.services-item .bullet {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--text-color);
  border-radius: 50%;
  margin-right: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem; /* Reduce gap between cards on mobile */
  }

  .services-section {
    padding: 1rem; /* Reduce section padding for mobile */
  }

  .services-heading {
    font-size: 1.1rem; /* Slightly smaller heading for mobile */
    margin-bottom: 1.5rem; /* Reduce spacing below the heading */
  }

  .services-content {
    text-align: center;
    padding: 0 0.5rem; /* Add horizontal padding for readability */
  }

  .services-text {
    font-size: 0.95rem; /* Decrease paragraph font size */
    margin-bottom: 1rem; /* Decrease space below paragraph */
  }

  .services-item {
    font-size: 0.95rem; /* Decrease feature bullet font size */
    margin-bottom: 0.5rem; /* Reduce margin between items */
  }

  .services-image img {
    height: 240px; /* Reduce image height for mobile */
  }
}




{/* Portfolio Section */}
.portfolio-section {
  position: relative;
  padding: 80px 24px;
  background: var(--bg-color);
  color: var(--text-color);
  overflow: hidden;
  border-radius: 18px;
}

/* Dynamic subtle moving dot background */
.portfolio-section::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(circle at center,
    var(--primary-color) 2px,
    transparent 3px);
  background-size: 40px 40px;
  animation: moveDots 30s linear infinite;
  opacity: 0.15; /* Increased opacity for visibility */
}

@media (prefers-color-scheme: dark) {
  .portfolio-section::before {
    background: radial-gradient(circle at center,
      var(--accent-color) 3px,
      transparent 4px);
    opacity: 0.2; /* Slightly higher in dark mode */
  }
}

@keyframes moveDots {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

/* Header */
.portfolio-header {
  text-align: center;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}
.portfolio-header h2 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--heading-color);
}
.portfolio-header p {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 0;
}

/* Filters */
.portfolio-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}
.portfolio-filters button {
  background: var(--card-bg);
  color: var(--text-color);
  border: 1.8px solid var(--border-color);
  padding: 10px 24px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.portfolio-filters button:hover,
.portfolio-filters button.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Portfolio Grid with responsive columns */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  position: relative;
  z-index: 1;
  justify-content: center; /* Center items if fewer than 3 */
}


@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns tablet */
  }
}

@media (max-width: 600px) {
  .portfolio-grid {
    grid-template-columns: 1fr; /* 1 column mobile */
  }
}

/* Portfolio cards */
.portfolio-card {
  background: var(--card-bg);
  border-radius: 22px;
  box-shadow: var(--shadow);
  border: 3px solid transparent;
  background-image: linear-gradient(var(--bg-color), var(--bg-color)),
                    linear-gradient(135deg, var(--primary-color), var(--accent-color));
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-image-source 0.3s ease;
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  box-shadow: var(--shadow-hover);
  border-image-slice: 1;
  border-image-source: linear-gradient(315deg, var(--primary-color), var(--accent-color));
  border-radius: 22px;
}

/* Image */
.portfolio-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  transition: transform 0.3s ease;
}

.portfolio-card:hover img {
  transform: scale(1.05);
}

/* Title and Category */
.portfolio-card h3 {
  font-size: 1.28rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 16px 16px 0 16px;
}

.portfolio-card p {
  font-size: 0.95rem;
  font-weight: 500;
  margin: 4px 16px 20px 16px;
  color: var(--text-muted);
}

/* Responsive font size for portfolio header */
@media (max-width: 768px) {
  .portfolio-header h2 {
    font-size: 1.9rem;
  }
  .portfolio-filters {
    gap: 10px;
  }
}



{/* IT services */}

    .it-grid-section {
  background: var(--bg-color);
  padding: 0 0;
}

.it-section-header.align-center {
  text-align: center;
  margin-bottom: 24px;
}
.it-section-header.align-center h2 {
  color: var(--heading-color);
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.it-section-header.align-center p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.it-services-flex {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 10px;
}

.it-service-tile {
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s cubic-bezier(.62,.02,.34,1.03);
  display: flex;
  flex-direction: column;
  position: relative;
}

.it-service-tile:hover {
  box-shadow: var(--shadow-hover);
}

.it-img-box {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}
.it-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(.62,.02,.34,1.03);
}
.it-service-tile:hover .it-img-box img {
  transform: scale(1.08);
}

.it-img-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.36);
  display: flex;
  align-items: center;
  justify-content: center;
}

.it-service-icon {
  font-size: 2.4rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.21));
}

.it-badge-new {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(255,21,21,0.09);
  color: #e60023;
  border: 1.5px solid #e60023;
  font-weight: 700;
  font-size: 1.07rem;
  padding: 7px 20px 6px 20px;
  border-radius: 1.7em;
  z-index: 2;
  box-shadow: 0 6px 26px 0 rgba(255,0,30,0.07);
  letter-spacing: 1px;
}

.it-card-content {
  padding: 30px 30px 20px 30px;
  background: var(--card-bg);
}
.it-card-content h3 {
  font-size: 1.32rem;
  color: var(--heading-color);
  font-weight: 800;
  margin-bottom: 14px;
}
.it-card-content p {
  color: var(--text-color);
  font-size: 1.07rem;
  line-height: 1.63;
  margin-bottom: 16px;
}
.it-feature-list {
  margin-bottom: 20px;
}
.it-feature-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 7px;
  font-size: 0.97rem;
  color: var(--text-color);
}
.it-check {
  color: var(--accent-color);
  font-size: 0.87rem;
}
.it-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.23s;
}
.it-link:hover {
  transform: translateX(7px);
}

/* Responsive */
@media (max-width: 768px) {
  .it-services-flex {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .it-card-content {
    padding: 20px 16px 18px 16px;
    text-align: left;
  }
  .it-section-header.align-center h2 {
    font-size: 1.6rem;
  }
}


.vertical-process-section {
  padding: 70px 15px 90px 15px;
  background: var(--bg-color);
  border-radius: 20px;
  box-shadow: var(--shadow);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.process-header {
  text-align: center;
  margin-bottom: 57px;
}

.process-header h2 {
  color: var(--heading-color);
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.process-header p {
  color: var(--text-muted);
  font-size: 1.15rem;
}

.vertical-steps-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 700px;
  margin: 0 auto;
}

/* The vertical timeline line */
.vertical-timeline {
  position: absolute;
  left: 46px;
  top: 0;
  bottom: 0;
  width: 5px;
  background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
  border-radius: 4px;
  opacity: 0.22;
  z-index: 0;
}

.vertical-step-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 32px 36px 32px 95px;
  background: var(--card-bg);
  border-radius: 15px;
  margin-bottom: 28px;
  box-shadow: var(--shadow);
  border-left: 8px solid transparent;
  transition: box-shadow 0.3s, transform 0.2s, background 0.2s, border-left 0.25s;
  z-index: 1;
}

.vertical-step-card:hover,
.vertical-step-card:focus-within {
  box-shadow: 0 8px 48px 2px var(--primary-color), 0 1px 14px rgba(0,0,0,0.17);
  transform: scale(1.04) translateY(-7px);
  background: rgba(100,150,255,0.05); /* A super subtle blue overlay for both themes */
  border-left: 8px solid var(--primary-color);
}


.vertical-step-number {
  position: absolute;
  left: 18px;
  top: 34px;
  font-size: 2.3rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  z-index: 2;
  line-height: 1;
  letter-spacing: 2px;
}

.vertical-step-content {
  flex: 1;
  z-index: 1;
}

.vertical-step-content h4 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 6px;
}

.vertical-step-content p {
  color: var(--text-color);
  font-size: 1.07rem;
  line-height: 1.7;
  text-align: justify;
}

/* Responsive */
@media (max-width: 700px) {
  .vertical-step-card {
    flex-direction: column;
    padding: 22px 12px 22px 65px;
  }
  .vertical-step-number {
    font-size: 1.5rem;
    left: 6px;
    top: 25px;
  }
  .vertical-timeline {
    left: 26px;
  }
}


{/*freelancer services */}
:root {
  --theme-purple: #6f78f6;
  --theme-green: #22bf6c;
  --theme-pink: #ff5e7b;
  --fsa-bg: #fafbff;
  --fsa-card: #fff;
  --fsa-text: #1a2236;
  --fsa-subtext: #555e75;
  --fsa-border: #e4e7ef;
  --fsa-shadow: 0 2px 16px rgba(60,60,64,0.07);
}

[data-theme="dark"] {
  --theme-purple: #867af7;
  --theme-green: #3ad78a;
  --theme-pink: #ff87a2;
  --fsa-bg: #161926;
  --fsa-card: #23273A;
  --fsa-text: #f5f7fb;
  --fsa-subtext: #b1b5c9;
  --fsa-border: #23273A;
  --fsa-shadow: 0 2px 18px rgba(10,32,64,0.19);
}

body {
  background: var(--fsa-bg);
  color: var(--fsa-text);
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.fsa-root {
  padding: 2.2rem 0 1.7rem 0;
  background: var(--bg-color);
}
.fsa-header {
  text-align: center;
  margin-bottom: 2.3rem;
}
.fsa-services {
  font-size: 0.93rem;
  color: var(--theme-purple);
  font-weight: 600;
  letter-spacing: 0.07em;
  margin-bottom: 0.7rem;
  text-transform: uppercase;
}
.fsa-title {
  font-size: 2.1rem;
  font-weight: 800;
  color: var(--fsa-text);
  margin: 0 0 1rem 0;
}
.fsa-subtitle {
  font-size: 1.12rem;
  color: var(--fsa-subtext);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 500;
}

/* Card Area */
.fsa-cards {
  max-width: 470px;
  margin: 1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.fsa-card {
  background: var(--fsa-card);
  border-radius: 14px;
  box-shadow: var(--fsa-shadow);
  border: 1.5px solid var(--fsa-border);
  overflow: hidden;
  min-height: 75px;
  outline: none;
  transition: box-shadow 0.2s, border 0.18s;
}
.fsa-card-row {
  display: flex;
  align-items: center;
  padding: 0.7rem 0.8rem 0.75rem 0.7rem;
}
.fsa-iconbox {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.7rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

/* Title/Plus Row */
.fsa-card-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  font-family: inherit;
}
.fsa-card-title {
  font-size: 1.11rem;
  font-weight: 700;
  color: var(--fsa-text);
}
.fsa-card-close {
  font-size: 1.5rem;
  font-weight: 400;
  transition: transform 0.22s;
  user-select: none;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 1;
}


/* Open/Closed Panel */
.fsa-card-panel {
  overflow: hidden;
  background: var(--fsa-card);
  transition: max-height 0.5s cubic-bezier(.42,0,.58,1);
}
.fsa-card-desc {
  font-size: 1.02rem;
  color: var(--fsa-subtext);
  font-weight: 500;
  padding: 0.35rem 1.2rem 1rem 4rem;
  letter-spacing: 0.01em;
  line-height: 1.58;
}

/* Responsive */
@media (max-width: 650px) {
  .fsa-cards {
    max-width: 97vw;
    padding: 0.2rem 0.1rem 1.2rem 0.1rem;
  }
  .fsa-card-row { padding: 0.65rem 0.6rem 0.64rem 0.62rem; }
  .fsa-card-desc { padding-left: 2.8rem; font-size: 0.97rem; }
}
@media (max-width: 420px) {
  .fsa-iconbox { width: 33px; height: 33px; border-radius: 7px; margin-right: 0.55rem; font-size: 1.16rem; }
  .fsa-title { font-size: 0.96rem; }
  .fsa-card-desc { font-size: 0.92rem; }
}




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

        .section-header {
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: var(--heading-color);
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .step-number {
            width: auto;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .service-content {
            padding: 20px;
          }

      `}</style>
    </div>
  );
};

export default Services;
