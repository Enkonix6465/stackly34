import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context.jsx/LanguageContext";

const mainHeadingColors = [
  "#1abc9c", // Turquoise
  "#e67e22", // Orange
  "#3498db", // Blue
  "#9b59b6", // Purple
];

const translations = {
  en: {
    documentTitle: "Growing Your Network and Finding Opportunities",
    author: "Max Patel",
    date: "March 5, 2025",
    readTime: "7 min read",
    categories: ["Networking", "Career Growth"],
    title: "Growing Your Network and Finding Opportunities",
    imageAlt: "Networking opportunities",
    excerpt:
      "Building a strong network is a key driver in opening new career or business opportunities. This guide explores how you can strategically grow and nurture your professional connections.",
    sections: [
      {
        title: "Attend Industry Events Regularly",
        color: mainHeadingColors[0],
        content:
          "Participate in conferences, meetups, and webinars to connect with like-minded professionals and stay current with industry trends.",
      },
      {
        title: "Leverage Online Platforms Effectively",
        color: mainHeadingColors[1],
        content:
          "Engage proactively on LinkedIn, industry forums, and other social media to showcase your expertise and build meaningful relationships.",
      },
      {
        title: "Practice Authentic Communication",
        color: mainHeadingColors[2],
        content:
          "Focus on building genuine, valuable interactions rather than transactional contacts—trust and credibility grow over time.",
      },
      {
        title: "Follow Up and Maintain Relationships",
        color: mainHeadingColors[3],
        content:
          "Regularly reconnect with contacts, offer help, and share insights to keep your network active and supportive.",
      },
    ],
    closingNote:
      "By approaching networking thoughtfully and strategically, you can continuously discover new opportunities for growth and success.",
    backToBlog: "← Back to Blog",
  },
  ar: {
    documentTitle: "توسيع شبكتك والعثور على فرص جديدة",
    author: "ماكس باتيل",
    date: "٥ مارس ٢٠٢٥",
    readTime: "٧ دقائق قراءة",
    categories: ["التواصل", "النمو المهني"],
    title: "توسيع شبكتك والعثور على فرص جديدة",
    imageAlt: "فرص التواصل",
    excerpt:
      "بناء شبكة قوية هو عامل رئيسي لفتح فرص مهنية أو تجارية جديدة. يستكشف هذا الدليل كيف يمكنك تطوير ورعاية علاقاتك المهنية بشكل استراتيجي.",
    sections: [
      {
        title: "احضر فعاليات الصناعة بانتظام",
        color: mainHeadingColors[0],
        content:
          "شارك في المؤتمرات، اللقاءات، والندوات لتتواصل مع محترفين متشابهين وتتابع أحدث اتجاهات المجال.",
      },
      {
        title: "استخدم المنصات عبر الإنترنت بفعالية",
        color: mainHeadingColors[1],
        content:
          "كن نشطًا بشكل استباقي على لينكدإن، المنتديات المهنية، ووسائل التواصل الاجتماعي لتبرز خبرتك وتبني علاقات ذات قيمة.",
      },
      {
        title: "مارس التواصل الأصيل",
        color: mainHeadingColors[2],
        content:
          "ركز على بناء تفاعلات حقيقية وذات قيمة بدلًا من الاتصالات العرضية - فالثقة والمصداقية تنمو مع الوقت.",
      },
      {
        title: "تابع وحافظ على العلاقات",
        color: mainHeadingColors[3],
        content:
          "أعد التواصل بانتظام مع جهات الاتصال، قدم المساعدة، وشارك الأفكار للحفاظ على نشاط ودعم شبكتك.",
      },
    ],
    closingNote:
      "من خلال التعامل مع بناء الشبكة بطريقة مدروسة واستراتيجية، يمكنك باستمرار اكتشاف فرص جديدة للنمو والنجاح.",
    backToBlog: "← العودة إلى المدونة",
  },
  he: {
    documentTitle: "להרחיב את הרשת ולמצוא הזדמנויות",
    author: "מקס פאטל",
    date: "5 במרץ 2025",
    readTime: "7 דקות קריאה",
    categories: ["רישות", "צמיחה מקצועית"],
    title: "להרחיב את הרשת ולמצוא הזדמנויות",
    imageAlt: "הזדמנויות רישות",
    excerpt:
      "בניית רשת חזקה היא גורם מרכזי לפתיחת הזדמנויות מקצועיות ועסקיות חדשות. מדריך זה בוחן איך ניתן לגדול ולתחזק קשרים מקצועיים בצורה אסטרטגית.",
    sections: [
      {
        title: "השתתף באירועים מקצועיים בקביעות",
        color: mainHeadingColors[0],
        content:
          "השתתף בכנסים, מפגשים וובינרים כדי להתחבר לאנשי מקצוע דומים ולהישאר מעודכן בטרנדים של התחום.",
      },
      {
        title: "נצל פלטפורמות מקוונות ביעילות",
        color: mainHeadingColors[1],
        content:
          "היה פעיל בלינקדאין, פורומים מקצועיים ורשתות חברתיות כדי להציג את מומחיותך ולבנות קשרים משמעותיים.",
      },
      {
        title: "תרגל תקשורת אותנטית",
        color: mainHeadingColors[2],
        content:
          "התמקד בבניית אינטראקציות אמתיות ובעלות ערך במקום קשרים עסקיים בלבד - אמון ומוניטין מתפתחים עם הזמן.",
      },
      {
        title: "עקוב ושמור על קשרים",
        color: mainHeadingColors[3],
        content:
          "קשר מחדש עם אנשי קשר באופן קבוע, הצע עזרה ושתף תובנות כדי לשמור על רשת תומכת ופעילה.",
      },
    ],
    closingNote:
      "על ידי גישה מחושבת ואסטרטגית לבניית הרשת, תוכל לגלות הזדמנויות חדשות לצמיחה והצלחה מתמשכת.",
    backToBlog: "← חזור לבלוג",
  },
  fr: {
    documentTitle: "Développer votre réseau et trouver des opportunités",
    author: "Max Patel",
    date: "5 mars 2025",
    readTime: "7 min de lecture",
    categories: ["Réseautage", "Développement de carrière"],
    title: "Développer votre réseau et trouver des opportunités",
    imageAlt: "Opportunités de réseautage",
    excerpt:
      "Construire un réseau solide est un levier clé pour ouvrir de nouvelles opportunités professionnelles ou commerciales. Ce guide explore comment vous pouvez développer et entretenir stratégiquement vos contacts professionnels.",
    sections: [
      {
        title: "Assister régulièrement à des événements du secteur",
        color: mainHeadingColors[0],
        content:
          "Participez à des conférences, rencontres et webinaires pour vous connecter avec des professionnels partageant les mêmes idées et rester à jour sur les tendances du secteur.",
      },
      {
        title: "Exploiter efficacement les plateformes en ligne",
        color: mainHeadingColors[1],
        content:
          "Engagez-vous activement sur LinkedIn, les forums professionnels et autres réseaux sociaux pour mettre en valeur votre expertise et construire des relations significatives.",
      },
      {
        title: "Pratiquer une communication authentique",
        color: mainHeadingColors[2],
        content:
          "Concentrez-vous sur la création d’interactions sincères et précieuses plutôt que sur des contacts transactionnels - la confiance et la crédibilité se construisent avec le temps.",
      },
      {
        title: "Assurer le suivi et entretenir les relations",
        color: mainHeadingColors[3],
        content:
          "Recontactez régulièrement vos relations, offrez votre aide et partagez vos connaissances pour maintenir un réseau actif et solidaire.",
      },
    ],
    closingNote:
      "En abordant le réseautage de manière réfléchie et stratégique, vous pouvez constamment découvrir de nouvelles opportunités de croissance et de succès.",
    backToBlog: "← Retour au blog",
  },
};

const Blog4 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.documentTitle;
    document.documentElement.dir = ["ar", "he"].includes(language) ? "rtl" : "ltr";
  }, [language, t.documentTitle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "120px 20px 60px",
        background: "var(--bg-color)",
        minHeight: "100vh",
        color: "var(--text-color)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 40 }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {t.title}
          </h1>
          <div
            style={{
              width: "100%",
              borderRadius: 15,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <img
              src={"images/blog7.jpg"}
              alt={t.imageAlt}
              style={{
                width: "100%",
                height: 230,
                objectFit: "cover",
                display: "block",
                borderRadius: 12,
                background: "#eaeaea",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: "0.95rem",
              color: "var(--secondary-color)",
              marginBottom: 14,
            }}
          >
            <span>{`By ${t.author}`}</span>
            <span>•</span>
            <span>{t.date}</span>
            <span>•</span>
            <span>{t.readTime}</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {t.categories.map((cat, idx) => (
              <span
                key={idx}
                style={{
                  background: idx === 0 ? "var(--primary-color)" : mainHeadingColors[idx % mainHeadingColors.length],
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: "var(--card-bg)",
            borderRadius: 12,
            padding: 40,
            boxShadow: "var(--shadow)",
            lineHeight: 1.8,
          }}
        >
          <p style={{ marginBottom: 25, fontSize: "1.1rem" }}>{t.excerpt}</p>
          {t.sections.map((section, idx) => (
            <div key={idx}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: section.color,
                  marginTop: idx === 0 ? 35 : 20,
                  marginBottom: 20,
                }}
              >
                {section.title}
              </h2>
              {section.content && <p>{section.content}</p>}
            </div>
          ))}
          <p>{t.closingNote}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 40,
            textAlign: "center",
          }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              background: "var(--primary-color)",
              color: "white",
              padding: "12px 30px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
          >
            {t.backToBlog}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog4;
