import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context.jsx/LanguageContext";

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad" // Purple
];

const translations = {
  en: {
    documentTitle: "Time Management Hacks for the Solo Entrepreneur",
    author: "Sarah Collins",
    date: "June 12, 2025",
    readTime: "6 min read",
    categories: ["Entrepreneurship", "Productivity"],
    title: "Time Management Hacks for the Solo Entrepreneur",
    imageAlt: "Time Management",
    excerpt:
      "Solo entrepreneurs face unique challenges managing time across diverse responsibilities. These hacks help boost productivity without burnout.",
    sections: [
      {
        title: "Prioritize with the Eisenhower Matrix",
        color: mainHeadingColors[0],
        content:
          "Categorize tasks by urgency and importance to focus energy on what matters most, reducing stress and procrastination."
      },
      {
        title: "Block Time for Deep Work",
        color: mainHeadingColors[1],
        content:
          "Designate uninterrupted time slots for focused tasks to enhance quality and efficiency."
      },
      {
        title: "Use Technology Tools",
        color: mainHeadingColors[2],
        content:
          "Leverage apps for task management, reminders, and automation to keep organized and reduce manual effort."
      },
      {
        title: "Take Regular Breaks",
        color: mainHeadingColors[3],
        content:
          "Incorporate short breaks to maintain energy levels and prevent burnout."
      }
    ],
    closingNote:
      "Implementing these strategies can help solo entrepreneurs maximize productivity and maintain healthy work-life balance.",
    backToBlog: "← Back to Blog"
  },
  ar: {
    documentTitle: "حيل إدارة الوقت لرائد الأعمال المستقل",
    author: "سارة كولينز",
    date: "١٢ يونيو ٢٠٢٥",
    readTime: "٦ دقائق قراءة",
    categories: ["ريادة الأعمال", "الإنتاجية"],
    title: "حيل إدارة الوقت لرائد الأعمال المستقل",
    imageAlt: "إدارة الوقت",
    excerpt:
      "يواجه رواد الأعمال الفرديون تحديات فريدة في إدارة الوقت عبر مهام متعددة. تساعد هذه الحيل على زيادة الإنتاجية دون الإرهاق.",
    sections: [
      {
        title: "حدد الأولويات بمصفوفة أيزنهاور",
        color: mainHeadingColors[0],
        content:
          "صنف المهام حسب العجلة والأهمية للتركيز على ما يهم، مما يقلل الضغط والتسويف."
      },
      {
        title: "خصص وقتًا للعمل العميق",
        color: mainHeadingColors[1],
        content:
          "حدد فترات زمنية خالية من الانقطاع للمهام المركزة لتعزيز الجودة والكفاءة."
      },
      {
        title: "استخدم أدوات تكنولوجية",
        color: mainHeadingColors[2],
        content:
          "استخدم تطبيقات لإدارة المهام والتنبيهات والأتمتة لتنظيم العمل وتقليل الجهد اليدوي."
      },
      {
        title: "خذ فترات راحة منتظمة",
        color: mainHeadingColors[3],
        content:
          "أدخل استراحات قصيرة للحفاظ على الطاقة ومنع الإرهاق."
      }
    ],
    closingNote:
      "يمكن أن تساعد هذه الاستراتيجيات رواد الأعمال الفرديين على تعزيز الإنتاجية والحفاظ على توازن صحي بين العمل والحياة.",
    backToBlog: "← العودة إلى المدونة"
  },
  he: {
    documentTitle: "טריקים לניהול זמן עבור עצמאים",
    author: "שרה קולינס",
    date: "12 ביוני 2025",
    readTime: "6 דקות קריאה",
    categories: ["יזמות", "פרודוקטיביות"],
    title: "טריקים לניהול זמן עבור עצמאים",
    imageAlt: "ניהול זמן",
    excerpt:
      "עצמאים מתמודדים עם אתגרים ייחודיים בניהול זמן בין משימות מגוונות. טריקים אלו עוזרים להגדיל פרודוקטיביות מבלי להתיש.",
    sections: [
      {
        title: "תעדוף עם מטריצת אייזנהאור",
        color: mainHeadingColors[0],
        content:
          "מיינו משימות לפי דחיפות וחשיבות למיקוד באנרגיה למה שחשוב ביותר, תוך הפחתת לחץ ודחיינות."
      },
      {
        title: "חסום זמן לעבודה עמוקה",
        color: mainHeadingColors[1],
        content:
          "הקצה משבצות זמן ללא הפרעות למשימות מרוכזות לשיפור איכות ויעילות."
      },
      {
        title: "השתמש בכלים טכנולוגיים",
        color: mainHeadingColors[2],
        content:
          "נצל אפליקציות לניהול משימות, תזכורות ואוטומציה לשמירה על ארגון ולהפחתת מאמץ ידני."
      },
      {
        title: "קח הפסקות קבועות",
        color: mainHeadingColors[3],
        content:
          "שלב הפסקות קצרות לשמירה על רמות אנרגיה ומניעת שחיקה."
      }
    ],
    closingNote:
      "טמיעה של אסטרטגיות אלו יכולה לעזור לעצמאים למקסם את הפרודוקטיביות ולשמור על איזון בריא בין עבודה לחיים.",
    backToBlog: "← חזרה לבלוג"
  },
  fr: {
    documentTitle: "Astuces de gestion du temps pour entrepreneurs solos",
    author: "Sarah Collins",
    date: "12 juin 2025",
    readTime: "6 min de lecture",
    categories: ["Entrepreneuriat", "Productivité"],
    title: "Astuces de gestion du temps pour entrepreneurs solos",
    imageAlt: "Gestion du temps",
    excerpt:
      "Les entrepreneurs solos font face à des défis uniques pour gérer leur temps entre diverses responsabilités. Ces astuces aident à accroître la productivité sans épuisement.",
    sections: [
      {
        title: "Priorisez avec la matrice Eisenhower",
        color: mainHeadingColors[0],
        content:
          "Classez les tâches par urgence et importance pour vous concentrer sur l'essentiel, réduisant stress et procrastination."
      },
      {
        title: "Bloquez des plages de travail profond",
        color: mainHeadingColors[1],
        content:
          "Réservez des plages de temps ininterrompues pour des tâches de concentration afin d'améliorer qualité et efficacité."
      },
      {
        title: "Utilisez des outils technologiques",
        color: mainHeadingColors[2],
        content:
          "Exploitez des applications de gestion des tâches, rappels et automatisation pour rester organisé et réduire l'effort manuel."
      },
      {
        title: "Prenez des pauses régulières",
        color: mainHeadingColors[3],
        content:
          "Intégrez des pauses courtes pour maintenir votre énergie et éviter l'épuisement."
      }
    ],
    closingNote:
      "Mettre en œuvre ces stratégies peut aider les entrepreneurs solos à maximiser leur productivité et à maintenir un équilibre sain entre vie professionnelle et personnelle.",
    backToBlog: "← Retour au blog"
  }
};

const Blog3 = () => {
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
        color: "var(--text-color)"
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "40px" }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: "20px",
              lineHeight: 1.2
            }}
          >
            {t.title}
          </h1>
          <div
            style={{
              width: "100%",
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "20px"
            }}
          >
            <img
              src="images/blog6.jpg"
              alt={t.imageAlt}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
                background: "#eaeaea"
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              marginBottom: "14px"
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
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "4px"
            }}
          >
            {t.categories.map((cat, idx) => (
              <span
                key={idx}
                style={{
                  background:
                    idx === 0
                      ? "var(--primary-color)"
                      : mainHeadingColors[idx % mainHeadingColors.length],
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem"
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
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "var(--shadow)",
            lineHeight: 1.8
          }}
        >
          <p style={{ marginBottom: "25px", fontSize: "1.1rem" }}>{t.excerpt}</p>

          {t.sections.map((section, idx) => (
            <div key={idx}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: section.color,
                  marginTop: idx === 0 ? "35px" : "20px",
                  marginBottom: "20px"
                }}
              >
                {section.title}
              </h2>
              {section.points ? (
                <ul style={{ paddingLeft: "23px", marginBottom: "25px" }}>
                  {section.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "11px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ marginBottom: "25px" }}>{section.content}</p>
              )}
            </div>
          ))}

          <p>{t.closingNote}</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              background: "var(--primary-color)",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease"
            }}
          >
            {t.backToBlog}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog3;
