import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { 
  FaArrowRight, 
  FaRocket, 
  FaUsers, 
  FaAward, 
  FaChartLine,
  FaEye,
  FaUserFriends,
  FaBook,
  FaBullseye
} from 'react-icons/fa';

import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Home Alternative - ForStackly Business Solutions',
    hero: {
      title: 'Connecting Skills, Creating Opportunities',
      paragraph: 'We are a community of freelancers committed to delivering seamless, creative, and result-driven solutions. From design to development, writing to marketing — we handle projects with expertise so you can focus on growing your business.',
      button: 'Reach Out Today',
      videoSrc: 'images/video2.mp4',
    },
    orbitSection: {
      heading: 'Core Tech Skills',
      paragraph: 'Here are the tools & technologies I use to deliver modern digital experiences.',
      skills: [
        { name: "React", delay: "0s" },
        { name: "Figma", delay: "-4.3s" },
        { name: "SQL", delay: "-8.6s" },
        { name: "Node.js", delay: "-12.9s" },
        { name: "UI/UX", delay: "-17.2s" },
        { name: "Git", delay: "-21.5s" },
        { name: "MongoDB", delay: "-25.8s" },
      ]
    },
    servicesSection: {
      heading: 'Freelance Services',
      servicesList: [
        {
          title: "Personalized Web Design",
          imgSrc: "images/freelancer3.jpg",
          desc: "Create unique, responsive websites tailored to your personal brand or client needs.",
        },
        {
          title: "Content Creation & Copywriting",
          imgSrc: "images/freelancer4.jpg",
          desc: "Craft engaging articles, blog posts, and marketing copy to grow your audience and impact.",
        },
        {
          title: "Social Media Management",
          imgSrc: "images/freelancer5.jpg",
          desc: "Strategically manage your social presence to build your network and boost visibility.",
        },
        {
          title: "Video Editing & Production",
          imgSrc: "images/freelancer6.jpg",
          desc: "Produce professional videos that engage your audience and elevate your brand.",
        },
        {
          title: "Mobile App Development",
          imgSrc: "images/freelancer7.jpg",
          desc: "Design and develop intuitive mobile apps for iOS and Android platforms.",
        },
        {
          title: "SEO & Digital Marketing",
          imgSrc: "images/freelancer8.jpg",
          desc: "Improve website visibility and boost your search engine rankings with proven SEO strategies.",
        }
      ],
      learnMoreLabel: "Learn More"
    },
    filtersSection: {
      titleMain: 'Explore Our',
      titleHighlight: 'Services',
      filterLabels: {
        language: 'Select Skill',
        technology: 'Select Technology',
        serviceType: 'Select Service Type',
      },
      filters: {
        languages: ["JavaScript", "Python", "Java", "C", "C++"],
        technologies: ["Marketing", "SEO", "Artificial Intelligence", "Cloud Computing", "DevOps"],
        serviceTypes: ["Branding", "Content Creation", "Development", "Automation", "Web Development", "Infrastructure"],
      }
    },
    noEvents: {
      message: "No matching services found. Try adjusting your filters.",
      altText: "No Results"
    },
    buttons: {
      loadMore: "Load More",
    },
    infographic: {
      title: "Value Distribution Across Platforms",
      description: "While each platform has a unique mission, we can see common themes emerge. This chart shows how the core values are distributed, highlighting the industry's emphasis on empowering freelancers and ensuring client success.",
      cardTitles: {
        breakdown: "Value Focus Breakdown",
        takeaways: "Key Takeaways"
      },
      takeaways: [
        {
          icon: <FaRocket className="takeaway-icon" />,
          title: "Empowerment is Key",
          desc: "Platforms universally prioritize giving freelancers the tools and freedom to build their own businesses.",
        },
        {
          icon: <FaBullseye className="takeaway-icon" />,
          title: "Client Success Drives the Market",
          desc: "A strong focus on customer satisfaction and quality outcomes is essential for marketplace health.",
        }
      ],
      pieData: [
        { name: 'Empowerment & Freedom', value: 22 },
        { name: 'Quality & Excellence', value: 18 },
        { name: 'Community & Teamwork', value: 12 },
        { name: 'Innovation & Change', value: 18 },
        { name: 'Trust & Transparency', value: 14 },
        { name: 'Customer Focus', value: 16 },
      ],
      colors: [
        "var(--primary-color)",
        "var(--secondary-color)",
        "var(--warning-color)",
        "var(--danger-color)",
        "var(--info-color)",
        "var(--accent-color)",
      ]
    },
    cta: {
      heading: 'Ready to Transform Your Business?',
      paragraph: 'Get started today with a free consultation and discover how we can help you achieve your goals.',
      btnStart: 'Start Your Journey',
      btnLearnMore: 'Learn More About Us',
    }
  },
  ar: {
    pageTitle: 'صفحة بديلة - حلول فورستاكلي للأعمال',
    hero: {
      title: 'ربط المهارات، خلق الفرص',
      paragraph: 'نحن مجتمع من المستقلين ملتزمين بتقديم حلول سلسة، إبداعية، ونتائج مميزة. من التصميم إلى التطوير، ومن الكتابة إلى التسويق — نحن نتعامل مع المشاريع بخبرة لتتمكن من التركيز على نمو عملك.',
      button: 'تواصل معنا اليوم',
      videoSrc: 'images/video2.mp4',
    },
    orbitSection: {
      heading: 'المهارات التقنية الأساسية',
      paragraph: 'هذه هي الأدوات والتقنيات التي أستخدمها لتقديم تجارب رقمية عصرية.',
      skills: [
        { name: "React", delay: "0s" },
        { name: "Figma", delay: "-4.3s" },
        { name: "SQL", delay: "-8.6s" },
        { name: "Node.js", delay: "-12.9s" },
        { name: "UI/UX", delay: "-17.2s" },
        { name: "Git", delay: "-21.5s" },
        { name: "MongoDB", delay: "-25.8s" },
      ]
    },
    servicesSection: {
      heading: 'خدمات المستقلين',
      servicesList: [
        {
          title: "تصميم ويب مخصص",
          imgSrc: "images/freelancer3.jpg",
          desc: "إنشاء مواقع فريدة واستجابة مخصصة لهوية علامتك التجارية أو احتياجات العميل.",
        },
        {
          title: "إنشاء المحتوى والكتابة الإعلانية",
          imgSrc: "images/freelancer4.jpg",
          desc: "كتابة مقالات جذابة، منشورات مدونة، ونصوص تسويقية لتنمية جمهورك وتأثيرك.",
        },
        {
          title: "إدارة وسائل التواصل الاجتماعي",
          imgSrc: "images/freelancer5.jpg",
          desc: "إدارة الحضور الاجتماعي بشكل استراتيجي لبناء شبكتك وزيادة الرؤية.",
        },
        {
          title: "تحرير وإنتاج الفيديو",
          imgSrc: "images/freelancer6.jpg",
          desc: "إنتاج فيديوهات احترافية تجذب جمهورك وترتقي بعلامتك التجارية.",
        },
        {
          title: "تطوير تطبيقات الهواتف المحمولة",
          imgSrc: "images/freelancer7.jpg",
          desc: "تصميم وتطوير تطبيقات سهلة الاستخدام لمنصة iOS و Android.",
        },
        {
          title: "SEO والتسويق الرقمي",
          imgSrc: "images/freelancer8.jpg",
          desc: "تحسين ظهور المواقع الإلكترونية ورفع تصنيفات محركات البحث باستخدام استراتيجيات مُجربة.",
        }
      ],
      learnMoreLabel: "تعرف أكثر"
    },
    filtersSection: {
      titleMain: 'استكشف',
      titleHighlight: 'خدماتنا',
      filterLabels: {
        language: 'اختر المهارة',
        technology: 'اختر التقنية',
        serviceType: 'اختر نوع الخدمة',
      },
      filters: {
        languages: ["جافاسكريبت", "بايثون", "جافا", "سي", "سي++"],
        technologies: ["التسويق", "SEO", "الذكاء الاصطناعي", "الحوسبة السحابية", "DevOps"],
        serviceTypes: ["العلامة التجارية", "إنشاء المحتوى", "التطوير", "الأتمتة", "تطوير الويب", "البنية التحتية"],
      }
    },
    noEvents: {
      message: "لم يتم العثور على خدمات مطابقة. حاول تعديل عوامل التصفية.",
      altText: "لا توجد نتائج"
    },
    buttons: {
      loadMore: "عرض المزيد",
    },
    infographic: {
      title: "توزيع القيم عبر المنصات",
      description: "بينما لكل منصة مهمة فريدة، يمكننا رؤية موضوعات مشتركة تبرز بشكل واضح. يُظهر هذا المخطط كيف يتم توزيع القيم الأساسية، مع تسليط الضوء على تركيز الصناعة على تمكين المستقلين وضمان نجاح العملاء.",
      cardTitles: {
        breakdown: "تفصيل تركيز القيم",
        takeaways: "أهم الملاحظات"
      },
      takeaways: [
        {
          icon: <FaRocket className="takeaway-icon" />,
          title: "التمكين هو الأساس",
          desc: "تعطي المنصات الأولوية في كل مكان للأدوات والحرية التي تمكن المستقلين من بناء أعمالهم الخاصة.",
        },
        {
          icon: <FaBullseye className="takeaway-icon" />,
          title: "نجاح العميل يحرك السوق",
          desc: "التركيز القوي على رضا العملاء والنتائج عالية الجودة ضروري لصحة السوق.",
        }
      ],
      pieData: [
        { name: 'التمكين والحرية', value: 22 },
        { name: 'الجودة والتميز', value: 18 },
        { name: 'المجتمع والعمل الجماعي', value: 12 },
        { name: 'الابتكار والتغيير', value: 18 },
        { name: 'الثقة والشفافية', value: 14 },
        { name: 'تركيز العميل', value: 16 },
      ],
      colors: [
        "var(--primary-color)",
        "var(--secondary-color)",
        "var(--warning-color)",
        "var(--danger-color)",
        "var(--info-color)",
        "var(--accent-color)",
      ]
    },
    cta: {
      heading: 'هل أنت مستعد لتحويل عملك؟',
      paragraph: 'ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.',
      btnStart: 'ابدأ رحلتك',
      btnLearnMore: 'تعرف علينا أكثر',
    }
  },
  he: {
    pageTitle: 'דף חלופי - פתרונות עסקיים של פורסטאקלי',
    hero: {
      title: 'חיבור כישורים, יצירת הזדמנויות',
      paragraph: 'אנו קהילה של עצמאיים המחויבים לספק פתרונות חלקים, יצירתיים ומונעי תוצאות. מעיצוב לפיתוח, כתיבה לשיווק — אנו מטפלים בפרויקטים במומחיות על מנת שתוכל למקד בצמיחת העסק שלך.',
      button: 'צור קשר עוד היום',
      videoSrc: 'images/video2.mp4',
    },
    orbitSection: {
      heading: 'כישורי טכנולוגיה עיקריים',
      paragraph: 'הנה הכלים והטכנולוגיות בהם אני משתמש כדי לספק חוויות דיגיטליות מודרניות.',
      skills: [
        { name: "React", delay: "0s" },
        { name: "Figma", delay: "-4.3s" },
        { name: "SQL", delay: "-8.6s" },
        { name: "Node.js", delay: "-12.9s" },
        { name: "UI/UX", delay: "-17.2s" },
        { name: "Git", delay: "-21.5s" },
        { name: "MongoDB", delay: "-25.8s" },
      ]
    },
    servicesSection: {
      heading: 'שירותי פרילנסרים',
      servicesList: [
        {
          title: "עיצוב אתרים מותאם אישית",
          imgSrc: "images/freelancer3.jpg",
          desc: "יצירת אתרים ייחודיים ותגובתיים המותאמים למותג האישי שלך או לצרכי הלקוח.",
        },
        {
          title: "יצירת תוכן וכתיבת טקסטים",
          imgSrc: "images/freelancer4.jpg",
          desc: "כתיבת מאמרים, פוסטים ושיווק מגניב להרחבת הקהל והשפעה.",
        },
        {
          title: "ניהול מדיה חברתית",
          imgSrc: "images/freelancer5.jpg",
          desc: "ניהול אסטרטגי של הנוכחות החברתית שלך לבניית רשת והגברת חשיפה.",
        },
        {
          title: "עריכת והפקת וידאו",
          imgSrc: "images/freelancer6.jpg",
          desc: "הפקת וידאו מקצועית שמרתקת את הקהל שלך ומקבלת את המותג שלך לגבהים חדשים.",
        },
        {
          title: "פיתוח אפליקציות מובייל",
          imgSrc: "images/freelancer7.jpg",
          desc: "עיצוב ופיתוח אפליקציות אינטואיטיביות לפלטפורמות iOS ו-Android.",
        },
        {
          title: "שיווק דיגיטלי וקידום אתרים",
          imgSrc: "images/freelancer8.jpg",
          desc: "שיפור הנראות ומיקום האתר במנועי החיפוש באמצעות אסטרטגיות SEO מוכחות.",
        }
      ],
      learnMoreLabel: "למידע נוסף"
    },
    filtersSection: {
      titleMain: 'גלו את',
      titleHighlight: 'השירותים',
      filterLabels: {
        language: 'בחר מיומנות',
        technology: 'בחר טכנולוגיה',
        serviceType: 'בחר סוג שירות',
      },
      filters: {
        languages: ["JavaScript", "Python", "Java", "C", "C++"],
        technologies: ["שיווק", "SEO", "בינה מלאכותית", "מחשוב ענן", "DevOps"],
        serviceTypes: ["מיתוג", "יצירת תוכן", "פיתוח", "אוטומציה", "פיתוח ווב", "תשתיות"],
      }
    },
    noEvents: {
      message: "לא נמצאו שירותים תואמים. נסה להתאים את המסננים.",
      altText: "אין תוצאות"
    },
    buttons: {
      loadMore: "טען עוד",
    },
    infographic: {
      title: "התפלגות הערכים בפלטפורמות",
      description: "לכל פלטפורמה יש מטרה ייחודית, ואפשר לראות נושאים משותפים בולטים. התרשים מציג כיצד הערכים העיקריים מתפלגים, עם הדגשה על דגש התעשייה להעצמת מתכנתים עצמאיים והבטחת הצלחת לקוחות.",
      cardTitles: {
        breakdown: "פירוט פוקוס הערכים",
        takeaways: "תובנות מרכזיות"
      },
      takeaways: [
        {
          icon: <FaRocket className="takeaway-icon" />,
          title: "העצמה היא המפתח",
          desc: "פלטפורמות שמות אופן אוניברסלי את הכלים והחופש להעצים מתכנתים עצמאיים לבנות את עסקיהם.",
        },
        {
          icon: <FaBullseye className="takeaway-icon" />,
          title: "הצלחת הלקוח מניעה את השוק",
          desc: "מיקוד חזק בשביעות רצון הלקוחות ותוצאות איכותיות הינו חיוני לבריאות השוק.",
        }
      ],
      pieData: [
        { name: 'העצמה וחופש', value: 22 },
        { name: 'איכות ומצוינות', value: 18 },
        { name: 'קהילה ועבודת צוות', value: 12 },
        { name: 'חדשנות ושינוי', value: 18 },
        { name: 'אמון ושקיפות', value: 14 },
        { name: 'מיקוד בלקוח', value: 16 },
      ],
      colors: [
        "var(--primary-color)",
        "var(--secondary-color)",
        "var(--warning-color)",
        "var(--danger-color)",
        "var(--info-color)",
        "var(--accent-color)",
      ]
    },
    cta: {
      heading: 'מוכן לשנות את העסק שלך?',
      paragraph: 'התחל היום עם ייעוץ חינם וגלה כיצד נוכל לעזור לך להשיג את המטרות שלך.',
      btnStart: 'התחל את המסע שלך',
      btnLearnMore: 'למידע נוסף עלינו',
    }
  }
}

const FlipCard = ({ title, imgSrc, desc, learnMoreLabel }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imgSrc} alt={title} className="service-image" />
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p>{desc}</p>
          <Link to="/services" className="btn btn-primary">{learnMoreLabel}</Link>
        </div>
      </div>
    </div>
  );
};

function CustomLegend({ colors, data }) {
  return (
    <div className="custom-legend">
      {data.map((entry, idx) => (
        <div className="custom-legend-item" key={entry.name}>
          <span className="custom-legend-dot" style={{ background: colors[idx] }} />
          {entry.name}
        </div>
      ))}
    </div>
  );
}

const Home2 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const events = [
    {
      img: "images/freelancer9.jpg",
      title: {
        en: "Freelance Business Bootcamp - Market Your Services",
        ar: "معسكر تدريبي للأعمال المستقلة - تسويق خدماتك",
        he: "סדנת עסקים לפרילנסרים - שיווק השירותים שלך"
      },
      language: "javascript",
      technology: "marketing",
      serviceType: "branding",
      description: {
        en: "Learn how to effectively market and grow your freelance business with proven branding strategies.",
        ar: "تعلم كيفية تسويق وتنمية عملك المستقل باستخدام استراتيجيات العلامة التجارية المثبتة.",
        he: "למד כיצד לשווק ולהרחיב את העסק הפרילנס שלך עם אסטרטגיות מיתוג מוכחות."
      }
    },
    {
      img: "images/freelancer10.jpg",
      title: {
        en: "Content Marketing for Freelancers",
        ar: "تسويق المحتوى للمستقلين",
        he: "שיווק תוכן לפרילנסרים"
      },
      language: "java",
      technology: "seo",
      serviceType: "content creation",
      description: {
        en: "Master content marketing skills to attract more clients and improve your online presence.",
        ar: "أتقن مهارات تسويق المحتوى لجذب المزيد من العملاء وتحسين وجودك على الإنترنت.",
        he: "שלוט בכישורי שיווק תוכן כדי למשוך יותר לקוחות ולשפר את הנוכחות שלך באינטרנט."
      }
    },
    {
      img: "images/freelancer11.jpg",
      title: {
        en: "Freelance Tech Talks - Expand Your Skillset",
        ar: "محاضرات تقنية للمستقلين - توسيع مهاراتك",
        he: "שיחות טכנולוגיה לפרילנסרים - הרחבת כישוריך"
      },
      language: "python",
      technology: "machine learning",
      serviceType: "development",
      description: {
        en: "Interactive sessions on trending tech skills such as AI, ML, and full-stack development.",
        ar: "جلسات تفاعلية حول مهارات التكنولوجيا الرائجة مثل الذكاء الاصطناعي وتعلم الآلة والتطوير الكامل.",
        he: "מפגשים אינטראקטיביים על מיומנויות טכנולוגיות פופולריות כגון AI, ML ופיתוח פול סטאק."
      }
    },
    {
      img: "images/freelancer12.jpg",
      title: {
        en: "AI & Automation for Freelancers",
        ar: "الذكاء الاصطناعي والأتمتة للمستقلين",
        he: "AI ואוטומציה לפרילנסרים"
      },
      language: "c",
      technology: "ai",
      serviceType: "automation",
      description: {
        en: "Explore AI tools and automation workflows to enhance your freelance productivity.",
        ar: "استكشف أدوات الذكاء الاصطناعي وسير العمل الآلي لتعزيز إنتاجيتك كمستقل.",
        he: "חקור כלי AI ותהליכי אוטומציה כדי לשפר את הפרודוקטיביות שלך."
      }
    },
    {
      img: "images/freelancer13.jpg",
      title: {
        en: "Modern Frontend Workshop - React & JavaScript",
        ar: "ورشة عمل الواجهة الحديثة - React وجافاسكريبت",
        he: "סדנת Frontend מודרנית - React & JavaScript"
      },
      language: "javascript",
      technology: "frontend",
      serviceType: "web development",
      description: {
        en: "Hands-on workshop covering modern frontend development techniques with React.",
        ar: "ورشة عمل تطبيقية تغطي تقنيات التطوير الحديثة للواجهة الأمامية باستخدام React.",
        he: "סדנא מעשית על טכניקות פיתוח frontend מודרניות עם React."
      }
    },
    {
      img: "images/freelancer14.jpg",
      title: {
        en: "Cloud Solutions for Freelancers",
        ar: "الحلول السحابية للمستقلين",
        he: "פתרונות ענן לפרילנסרים"
      },
      language: "c++",
      technology: "cloud computing",
      serviceType: "infrastructure",
      description: {
        en: "Learn how freelancers can leverage cloud platforms to scale projects efficiently and securely.",
        ar: "تعلم كيف يمكن للمستقلين الاستفادة من منصات السحابة لتوسيع المشاريع بكفاءة وأمان.",
        he: "למד כיצד פרילנסרים יכולים לנצל פלטפורמות ענן להרחבת פרויקטים בצורה יעילה ובטוחה."
      }
    }
  ];

  const filteredEvents = events.filter(evt => {
    const matchesLanguage = selectedLanguage ? evt.language === selectedLanguage : false;
    const matchesTechnology = selectedTechnology ? evt.technology === selectedTechnology : false;
    const matchesService = selectedService ? evt.serviceType === selectedService : false;
    if (!selectedLanguage && !selectedTechnology && !selectedService) return true;
    return matchesLanguage || matchesTechnology || matchesService;
  });

  const visibleEvents = filteredEvents.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (visibleCount >= filteredEvents.length) {
      alert(t.noEvents.message);
      return;
    }
    setVisibleCount(prev => Math.min(prev + 3, filteredEvents.length));
  };

  useEffect(() => {
    document.title = t.pageTitle;
    document.documentElement.dir = ['ar', 'he'].includes(language) ? 'rtl' : 'ltr';
  }, [language, t.pageTitle]);

  return (
    <div className="home2-page">
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

      {/* Orbit Skills Section */}
      <section className="orbit__section">
        <div className="orbit__bg-grid" />
        <h2 className="orbit__heading">{t.orbitSection.heading}</h2>
        <p className="orbit__para">{t.orbitSection.paragraph}</p>
        <div className="orbit__wrapper">
          <div className="orbit__container">
            <div className="orbit__center-bubble">Skills</div>
            <div className="orbit__path" />
            {t.orbitSection.skills.map(({ name, delay }) => (
              <div key={name} className="orbit__bubble" style={{ animationDelay: delay }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="section-title">{t.servicesSection.heading}</h2>
          <div className="services-grid">
            {t.servicesSection.servicesList.map(({ title, imgSrc, desc }, idx) => (
              <FlipCard key={idx} title={title} imgSrc={imgSrc} desc={desc} learnMoreLabel={t.servicesSection.learnMoreLabel} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Filters */}
      <section className="upcoming-events-section">
        <div className="upcoming-events-container">
          <div className="upcoming-events-title">
            <span className="events-main-title">{t.filtersSection.titleMain}</span>
            <span className="events-highlight-title">{t.filtersSection.titleHighlight}</span>
          </div>
          <div className="events-filters">
            <div className="filter-card">
              <select
                className="filter-select"
                aria-label="Select Skill"
                value={selectedLanguage}
                onChange={e => setSelectedLanguage(e.target.value)}
              >
                <option value="">{t.filtersSection.filterLabels.language}</option>
                {t.filtersSection.filters.languages.map(lang => (
                  <option key={lang.toLowerCase()} value={lang.toLowerCase()}>{lang}</option>
                ))}
              </select>
            </div>
            <div className="filter-card">
              <select
                className="filter-select"
                aria-label="Select Technology"
                value={selectedTechnology}
                onChange={e => setSelectedTechnology(e.target.value)}
              >
                <option value="">{t.filtersSection.filterLabels.technology}</option>
                {t.filtersSection.filters.technologies.map(tech => (
                  <option key={tech.toLowerCase()} value={tech.toLowerCase()}>{tech}</option>
                ))}
              </select>
            </div>
            <div className="filter-card">
              <select
                className="filter-select"
                aria-label="Select Service Type"
                value={selectedService}
                onChange={e => setSelectedService(e.target.value)}
              >
                <option value="">{t.filtersSection.filterLabels.serviceType}</option>
                {t.filtersSection.filters.serviceTypes.map(serv => (
                  <option key={serv.toLowerCase()} value={serv.toLowerCase()}>{serv}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="event-section">
        <div className="event-grid">
          {visibleEvents.length > 0 ? visibleEvents.map((evt, idx) => (
            <div className="event-card" key={idx}>
              <img src={evt.img} alt={evt.title[language] || evt.title.en} className="event-img" />
              <div className="event-content">
                <h3 className="event-title">{evt.title[language] || evt.title.en}</h3>
                <p className="event-description">{evt.description[language] || evt.description.en}</p>
              </div>
            </div>
          )) : (
            <div className="no-events">
              <img src="images/no-results.jpg" alt={t.noEvents.altText} className="no-results-img"/>
              <p>{t.noEvents.message}</p>
            </div>
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <button onClick={handleLoadMore} className="load-more-btn">{t.buttons.loadMore}</button>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="infographic-section">
        <h2 className="infographic-title">{t.infographic.title}</h2>
        <p className="infographic-desc">{t.infographic.description}</p>
        <div className="infographic-grid">
          <div className="infographic-card infographic-chart-horizontal">
            <h3 className="infographic-card-title">{t.infographic.cardTitles.breakdown}</h3>
            <div className="infographic-chart-row">
              <div className="infographic-pie-container-horizontal">
                <PieChart width={150} height={150}>
                  <Pie 
                    data={t.infographic.pieData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={44} 
                    outerRadius={65} 
                    paddingAngle={5} 
                    stroke="var(--card-bg)" 
                    strokeWidth={3}
                  >
                    {t.infographic.pieData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={t.infographic.colors[idx % t.infographic.colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      background: "var(--text-color)",
                      color: "var(--text-color)",
                      borderRadius: 8,
                      fontWeight: 500
                    }}
                  />
                </PieChart>
              </div>
              <CustomLegend colors={t.infographic.colors} data={t.infographic.pieData} />
            </div>
          </div>

          <div className="infographic-card infographic-takeaways">
            <h3 className="infographic-card-title">{t.infographic.cardTitles.takeaways}</h3>
            {t.infographic.takeaways.map((item, i) => (
              <div className="takeaway-row" key={i}>
                <span className="takeaway-icon-box">{item.icon}</span>
                <span className="takeaway-content">
                  <span className="takeaway-title">{item.title}:</span>
                  <span className="takeaway-desc"> {item.desc}</span>
                </span>
              </div>
            ))}
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


{/* orbit */}
:root {
  --orbit-bg: #f8f9fa;
  --orbit-text: #111827;
  --orbit-path: #d1d5db;
  --orbit-bubble-bg: #fff;
  --orbit-bubble-grad: #e6eef9;
  --orbit-bubble-shadow1: #d1d9e6;
  --orbit-bubble-shadow2: #fff;
  --orbit-center-shadow: rgba(59, 130, 246, 0.1);
  --orbit-blue: #3b82f6;
}

[data-theme='dark'], body.dark {
  --orbit-bg: #101629;
  --orbit-text: #e5e7eb;
  --orbit-path: #232a45;
  --orbit-bubble-bg: #181f38;
  --orbit-bubble-grad: #223060;
  --orbit-bubble-shadow1: #131a33;
  --orbit-bubble-shadow2: #1e2642;
  --orbit-center-shadow: rgba(59, 130, 246, 0.12);
  --orbit-blue: #3b82f6;
}

.orbit__section {
  position: relative;
  background: var(--bg-color);
  padding: 4rem 0;
  min-height: 600px;
}
  
   .orbit__heading {
          text-align: center;
          font-size: 2.1rem;
          font-weight: 700;
          color: var(--orbit-blue);
          margin-bottom: 0.6rem;
          letter-spacing: -0.5px;
        }
        .orbit__para {
          text-align: center;
          font-size: 1rem;
          color: var(--orbit-text);
          margin-bottom: 1.7rem;
          opacity: 0.87;
          font-weight: 500;
        }

:root {
  --orbit-bubble-border: linear-gradient(135deg, #8fd3f4 0%, #b6eaff 50%, #84fab0 100%);
}
[data-theme='dark'], body.dark {
  --orbit-bubble-border: linear-gradient(135deg, #3b82f6 0%, #99e5ff 60%, #1e293b 100%);
}

.orbit__bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 72px;
  height: 72px;
  background:
    linear-gradient(white, white) padding-box,
    var(--orbit-bubble-border) border-box,
    linear-gradient(145deg, var(--orbit-bubble-bg), var(--orbit-bubble-grad)) content-box;
  border-radius: 50%;
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--orbit-text);
  box-shadow: 0 3px 14px 0 rgba(59,130,246,0.10), 0 0px 0px 2px rgba(59,130,246,0.07) inset;
  animation: orbit 30s linear infinite;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  z-index: 5;
  user-select: none;
  font-size: 1rem;
  backdrop-filter: blur(1px);
}


.orbit__bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: 40px 40px;
  opacity: 0.32;
  z-index: 0;
  pointer-events: none;
}

.orbit__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  position: relative;
  z-index: 1;
}

.orbit__container {
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

/* Center bubble */
.orbit__center-bubble {
  width: 150px;
  height: 150px;
  background: var(--orbit-bubble-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--orbit-blue);
  box-shadow: 0 0 0 10px var(--orbit-center-shadow), 0 5px 15px rgba(0,0,0,0.1);
  z-index: 10;
  user-select: none;
}

/* Dotted path */
.orbit__path {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  height: 440px;
  border: 2px dashed var(--orbit-path);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.orbit__bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: linear-gradient(145deg, var(--orbit-bubble-bg), var(--orbit-bubble-grad));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: var(--orbit-text);
  box-shadow: 5px 5px 10px var(--orbit-bubble-shadow1),
              -5px -5px 10px var(--orbit-bubble-shadow2);
  animation: orbit 30s linear infinite;
  transition: transform 0.3s ease;
  z-index: 5;
  user-select: none;
}

.orbit__bubble:hover {
  transform: scale(1.1);
  z-index: 20;
}

/* Animate the orbit */
@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(220px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(220px) rotate(-360deg);
  }
}

/* Pause orbit on hover of the skill area */
.orbit__container:hover .orbit__bubble {
  animation-play-state: paused;
}

/* Responsive */
@media (max-width: 600px) {
  .orbit__container { width: 340px; height: 340px; }
  .orbit__center-bubble { width: 90px; height: 90px; font-size: 1.1rem;}
  .orbit__path { width: 270px; height: 270px; }
  .orbit__bubble { width: 60px; height: 60px; font-size: 0.9rem;}
}

@media (max-width: 350px) {
  .orbit__container { width: 250px; height: 250px;}
  .orbit__bubble { width: 40px; height: 40px;}
  .orbit__center-bubble { width: 50px; height: 50px; font-size: 0.7rem;}
}


{/*service styles*/}
.services-section {
  width: 100%;
  background: var(--bg-color);
  padding: 60px 20px;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 40px;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.flip-card {
  width: 100%;
  max-width: 350px;
  height: 280px;
  perspective: 1200px;
  cursor: pointer;
  border-radius: 15px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s;
  transform-style: preserve-3d;
  border-radius: 15px;
  box-shadow: var(--shadow);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  backface-visibility: hidden;
  overflow: hidden;
}

.flip-card-front {
  z-index: 2;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.4s ease;
}

.flip-card:hover .service-image {
  transform: scale(1.05);
}

.flip-card-back {
  background: var(--card-bg);
  color: var(--text-color);
  transform: rotateY(180deg);
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: inset 0 10px 16px rgba(0,0,0,0.1);
  border: 1px solid var(--border-color);
}

.flip-card-back h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--heading-color);
}

.flip-card-back p {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 20px;
  color: var(--text-muted);
}

.btn-primary {
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-block;
  align-self: center;
}

.btn-primary:hover {
  background-color: var(--accent-color);
}

@media (min-width: 768px) {
  .services-grid {
    justify-content: space-between;
  }
  .flip-card {
    width: 30%;
  }
}

@media (max-width: 480px) {
  .flip-card {
    max-width: 100%;
    height: 260px;
  }
  .flip-card-back h3 {
    font-size: 1.5rem;
  }
  .flip-card-back p {
    font-size: 0.9rem;
  }
}


{/*Filter section*/}

:root {
  --bg-primary: #f5f7fa;
  --bg-card: #ffffff;
  --text-primary: #1a1a1a;
  --text-accent: #224DB7;
  --border-color: #d1d5db;
  --shadow-color: rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] {
  --bg-primary: #0e1a34;
  --bg-card: #111827;
  --text-primary: #f5f5f5;
  --text-accent: #3b82f6;
  --border-color: #374151;
  --shadow-color: rgba(255, 255, 255, 0.08);
}

.upcoming-events-section {
  width: 100%;
  background: var(--primary-color);
  padding: 20px 0;
  color: var(--text-primary);
  transition: all 0.3s ease-in-out;
}

.upcoming-events-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.upcoming-events-title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.events-main-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.events-highlight-title {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

.events-filters {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-card {
  background: var(--bg-card);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px var(--shadow-color);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 4px 14px;
  transition: box-shadow 0.25s, border-color 0.3s;
}

.filter-card:hover {
  border-color: var(--border-color);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.filter-select {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  padding: 10px 36px 10px 12px;
  border-radius: 6px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3csvg fill='%23aaa' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
}

.filter-select option {
  background: var(--bg-primary);
  color: var(--text-primary);
}

@media (max-width: 990px) {
  .upcoming-events-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .events-filters {
    margin-top: 18px;
    gap: 16px;
  }
   .filter-select:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
  
  .filter-card {
    min-width: 100%;
  }
    
}/* === Theme Variables === */
:root {
  --bg: #111;
  --text: #f9f9f9;
}

body.light {
  --bg: #f9f9f9;
  --text: #111;
}

/* === Event Section === */
/* === Event Section === */
.event-section {
  padding: 60px 20px;
  background: var(--bg);
  transition: background 0.4s ease, color 0.4s ease;
}

/* === Grid Layout === */
.event-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* === Card Layout === */
.event-card {
  background: var(--card-bg);
  color: var(--text-color);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, background 0.4s ease, color 0.4s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

/* === Image === */
.event-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

/* === Content === */
.event-content {
  padding: 16px;
}

.event-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.event-date {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 6px;
}

.event-location {
  font-size: 14px;
  color: var(--muted-text);
}

/* === Badges === */
.badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 10px;
}

.badge.free {
  background: #0072ff;
  color: #fff;
}

.badge.paid {
  background: #ff5722;
  color: #fff;
}

/* === Light & Dark Theme === */
body.light {
  --bg: #f9f9f9;
  --card-bg: #fff;
  --text-color: #111;
  --accent-color: #0072ff;
  --muted-text: #555;
}

body.dark {
  --bg: #121212;
  --card-bg: #1e1e1e;
  --text-color: #f1f1f1;
  --accent-color: #00c6ff;
  --muted-text: #aaa;
}

.load-more-btn {
  background: #007bff;           /* Primary blue */
  color: #fff;                   /* White text */
  padding: 12px 28px;
  border: none;
  border-radius: 30px;           /* Rounded pill look */
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.3);
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: #0056b3;           /* Darker blue */
  transform: translateY(-2px);   /* Lift on hover */
  box-shadow: 0 8px 20px rgba(0, 86, 179, 0.4);
}

.load-more-btn:active {
  transform: translateY(0);      /* Reset on click */
  box-shadow: 0 4px 12px rgba(0, 86, 179, 0.3);
}

@media (max-width: 600px) {
  /* Layout changes: stack items vertically */
  .event-grid {
    grid-template-columns: 1fr !important;  /* single column */
    gap: 12px;
  }
  
  /* Smaller card heights */
  .event-card {
    max-height: 350px;  /* shorter height for mobile */
  }
  
  /* Smaller images */
  .event-img {
    height: 180px;
  }
  
  /* Adjust text spacing */
  .event-content {
    padding: 12px;
  }
  
  .event-title {
    font-size: 1.1rem;
  }
  
  .event-date,
  .event-location {
    font-size: 0.9rem;
  }
  
  /* Buttons and badges resize */
  .badge {
    font-size: 10px;
    padding: 3px 8px;
  }
  
  /* Adjust load more button for smaller screens */
  .load-more-btn {
    width: 100%;
    padding: 14px 0;
    font-size: 1rem;
  }
}

@media (max-width: 990px) {
  /* 2 columns instead of 3 on tablets */
  .event-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  /* Slightly smaller images */
  .event-img {
    height: 210px;
  }
  
  /* Text size tweaks */
  .event-title {
    font-size: 1.2rem;
  }
  
  .event-date,
  .event-location {
    font-size: 1rem;
  }
  
  /* Responsive adjustments to badge size */
  .badge {
    font-size: 11px;
    padding: 3px 9px;
  }
  
  /* Load more button size adjustment */
  .load-more-btn {
    padding: 12px 28px;
    font-size: 1rem;
    max-width: 250px;
    margin: 0 auto;
  }
  
  /* Flex direction for filters on smaller widths */
  .upcoming-events-container {
    flex-direction: column;
  }
  
  .events-filters {
    gap: 12px;
    margin-top: 20px;
  }
  
  .filter-card {
    width: 100%; /* full width filters on tablet */
  }
}




/* Icon style */
.feature-icon {
  width: 80px;
  height: 80px;
  background: rgba(255 255 255 / 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2.4rem;
  color: white;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

/* Headings & paragraphs */
.feature-card h3 {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
}

.feature-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  user-select: none;
}
  .features-section {
  position: relative;
  overflow: hidden; /* Important so bubbles don’t overflow */
  padding-bottom: 50px; /* Keep your existing padding */
  background: var(--card-bg);
}

.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So bubbles don’t block clicks */
  overflow: hidden;
  z-index: 0; /* Behind content */
}

.bubble {
  position: absolute;
  bottom: -100px;
  background-color: rgba(34, 77, 183, 0.15); /* Soft blue bubble */
  border-radius: 50%;
  opacity: 0.7;
  animation-name: bubbleRise;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.bubble:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.08); /* subtle white bubbles */
}

/* Different bubble sizes and horizontal positions for randomness */
.bubble:nth-child(n) {
  width: 30px;
  height: 30px;
  left: 10%;
  animation-duration: 10s;
  animation-delay: 0s;
}
.bubble:nth-child(2n) {
  width: 45px;
  height: 45px;
  left: 30%;
  animation-duration: 12s;
  animation-delay: 1.5s;
}
.bubble:nth-child(3n) {
  width: 20px;
  height: 20px;
  left: 50%;
  animation-duration: 8s;
  animation-delay: 3s;
}
.bubble:nth-child(4n) {
  width: 35px;
  height: 35px;
  left: 65%;
  animation-duration: 11s;
  animation-delay: 2.5s;
}
.bubble:nth-child(5n) {
  width: 40px;
  height: 40px;
  left: 80%;
  animation-duration: 9s;
  animation-delay: 1s;
}

/* Animate bubbles rising */
@keyframes bubbleRise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-120vh) scale(1.2);
    opacity: 0;
  }
}

{/*pie chart*/}

.infographic-section {
  background: var(--bg-color);
  padding: 70px 10px 40px 10px;
  text-align: center;
}
.infographic-title {
  font-weight: 700;
  font-size: 2.07rem;
  margin-bottom: 15px;
  color: var(--heading-color);
  letter-spacing: -0.6px;
}
.infographic-desc {
  max-width: 700px;
  margin: 0 auto 36px;
  color: var(--text-muted);
  font-size: 1.09rem;
  line-height: 1.6;
}

.infographic-grid {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  max-width: 960px;
  margin: 0 auto;
}

.infographic-card {
  background: var(--card-bg);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 27px 22px;
  min-width: 310px;
  max-width: 402px;
  margin: 0 auto 28px auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: background 0.3s, box-shadow 0.3s;
}
.infographic-card-title {
  font-size: 1.21rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 18px;
  text-align: left;
}

.infographic-chart-horizontal {
  min-width: 330px;
  width: 370px;
  max-width: 97vw;
  align-items: center;
  justify-content: flex-start;
}

.infographic-chart-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
.infographic-pie-container-horizontal {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.donut-legend-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0 8px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  min-width: 130px;
}
.donut-legend-item {
  display: flex;
  align-items: center;
  font-size: 0.98rem;
  color: var(--heading-color);
  font-weight: 500;
  white-space: nowrap;
}
.donut-legend-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 9px;
  margin-left: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,0.05);
}
.infographic-card.infographic-takeaways {
  max-width: 370px;
  min-width: 260px;
  justify-content: flex-start;
  gap: 12px;
}
.takeaway-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 13px;
}
.takeaway-icon-box {
  width: 2em;
  height: 2em;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}


.takeaway-icon {
  font-size: 1em;
  color: #fff;
  margin-top: 2px;
}
.takeaway-title {
  font-weight: 700;
  color: var(--text-color);
  font-size: 1.04em;
  letter-spacing: -0.5px;
}
.takeaway-desc {
  color: var(--text-color);
  margin-left: 2px;
  font-weight: 450;
}
@media (max-width: 900px) {
  .infographic-grid {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
  .infographic-card {
    min-width: 220px;
    width: 95vw;
    max-width: 98vw;
    padding: 20px 2vw 24px 2vw;
    align-items: flex-start;
  }
  .infographic-chart-row {
    flex-direction: row;
    gap: 10px;
  }
}
@media (max-width: 600px) {
  .infographic-chart-row {
    flex-direction: column;
    gap: 18px;
    align-items: center;
    justify-content: center;
  }
  .infographic-card {
    min-width: 0;
    width: 98vw;
    max-width: 99vw;
    padding: 10px 0 10px 0;
  }
  .donut-legend-list {
    min-width: 90px;
    font-size: 0.97rem;
    gap: 7px;
    align-items: flex-start;
  }
    
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

      `}</style>
    </div>
  );
};

export default Home2;
