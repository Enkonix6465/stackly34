import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context.jsx/LanguageContext";

const mainHeadingColors = [
  "#1abc9c", // Turquoise
  "#e67e22", // Orange
  "#3498db", // Blue
  "#9b59b6" // Purple
];

const translations = {
  en: {
    documentTitle: "Financial Fundamentals: Managing Your Freelance Income",
    author: "Emily Turner",
    date: "August 18, 2025",
    readTime: "6 min read",
    categories: ["Finance", "Freelancing"],
    title: "Financial Fundamentals: Managing Your Freelance Income",
    imageAlt: "Freelance Income Management",
    excerpt:
      "Managing finances is a critical part of a successful freelance career. From budgeting to tax planning, understanding your money flow can empower you to grow and sustain your business.",
    sections: [
      {
        title: "Budget for Irregular Income",
        color: mainHeadingColors[0],
        content:
          "Freelancers often experience variable cash flow. Establish a budget that accommodates fluctuating earnings and prioritizes essential expenses."
      },
      {
        title: "Separate Business and Personal Finances",
        color: mainHeadingColors[1],
        content:
          "Maintaining distinct accounts helps track deductions accurately and gives clearer insight into profitability."
      },
      {
        title: "Plan for Taxes and Retirement",
        color: mainHeadingColors[2],
        content:
          "Set aside a percentage of each payment for taxes and explore retirement accounts tailored to self-employed professionals."
      },
      {
        title: "Utilize Financial Tools",
        color: mainHeadingColors[3],
        content:
          "Leverage budgeting apps, invoicing software, and financial advisors to streamline money management and stay on top of obligations."
      }
    ],
    closingNote:
      "With financial discipline and planning, freelancers can build not only successful projects but also a stable, rewarding career.",
    backToBlog: "← Back to Blog"
  },
  ar: {
    documentTitle: "الأساسيات المالية: إدارة دخل العمل الحر",
    author: "إميلي تيرنر",
    date: "١٨ أغسطس ٢٠٢٥",
    readTime: "٦ دقائق قراءة",
    categories: ["المالية", "العمل الحر"],
    title: "الأساسيات المالية: إدارة دخل العمل الحر",
    imageAlt: "إدارة دخل العمل الحر",
    excerpt:
      "إدارة الشؤون المالية جزء حيوي من نجاح مسيرة العمل الحر. من الميزانية إلى التخطيط الضريبي، فهم تدفق الأموال يمكن أن يمكنك من النمو واستدامة العمل.",
    sections: [
      {
        title: "الميزانية مع الدخل غير المنتظم",
        color: mainHeadingColors[0],
        content:
          "غالبًا ما يواجه المستقلون تقلبات في تدفق الأموال. ضع ميزانية تراعي التغيرات في الدخل وتعطي الأولوية للنفقات الضرورية."
      },
      {
        title: "فصل الشؤون المالية بين العمل والحياة الشخصية",
        color: mainHeadingColors[1],
        content:
          "الحفاظ على حسابات منفصلة يساعد في تتبع الخصومات بدقة ويوفر صورة أوضح عن الربحية."
      },
      {
        title: "التخطيط للضرائب والتقاعد",
        color: mainHeadingColors[2],
        content:
          "خصص نسبة من كل دفعة للضرائب واستكشف حسابات التقاعد المناسبة للعاملين لحسابهم الخاص."
      },
      {
        title: "استخدام الأدوات المالية",
        color: mainHeadingColors[3],
        content:
          "استخدم تطبيقات الميزانية وبرمجيات الفواتير والمستشارين الماليين لتسهيل إدارة الأموال والوفاء بالالتزامات."
      }
    ],
    closingNote:
      "مع الانضباط المالي والتخطيط السليم، يمكن للمستقلين بناء مشاريع ناجحة ومسيرة مهنية مستقرة ومجزية.",
    backToBlog: "← العودة إلى المدونة"
  },
  he: {
    documentTitle: "יסודות פיננסיים: ניהול הכנסות Freelance",
    author: "אמילי טרנר",
    date: "18 באוגוסט 2025",
    readTime: "6 דקות קריאה",
    categories: ["פיננסים", "פרילנס"],
    title: "יסודות פיננסיים: ניהול הכנסות Freelance",
    imageAlt: "ניהול הכנסות Freelance",
    excerpt:
      "ניהול כספים הוא חלק חיוני בקריירת Freelance מוצלחת. מתקצוב ועד תכנון מס, הבנת זרימת הכסף מאפשרת לך לצמוח ולתחזק את העסק.",
    sections: [
      {
        title: "תכנן תקציב להכנסות לא סדירות",
        color: mainHeadingColors[0],
        content:
          "לעיתים קרובות Freelancers חווים זרם מזומנים בלתי צפוי. קבע תקציב שמתאים להפרשי ההכנסות ומעמיד בראש סדר העדיפויות הוצאות חיוניות."
      },
      {
        title: "הפרד בין כספים עסקיים לאישיים",
        color: mainHeadingColors[1],
        content:
          "שמירה על חשבונות נפרדים מסייעת לעקוב אחר ניכויים במדויק ומספקת תמונה ברורה יותר של הרווחיות."
      },
      {
        title: "תכנן מסים ופנסיה",
        color: mainHeadingColors[2],
        content:
          "קבע אחוז מכל תשלום כדי לממן מסים וחקור תוכניות פנסיה המיועדות לעצמאים."
      },
      {
        title: "נצל כלים פיננסיים",
        color: mainHeadingColors[3],
        content:
          "השתמש באפליקציות לתקצוב, תוכנות חשבוניות ויועצים פיננסיים כדי לייעל את ניהול הכספים ולהישאר על המסלול."
      }
    ],
    closingNote:
      "באמצעות משמעת פיננסית ותכנון, יכולים Freelancers לבנות לא רק פרויקטים מוצלחים אלא גם קריירה יציבה ומספקת.",
    backToBlog: "← חזור לבלוג"
  },
  fr: {
    documentTitle: "Principes financiers : gérer vos revenus de freelance",
    author: "Emily Turner",
    date: "18 août 2025",
    readTime: "6 min de lecture",
    categories: ["Finance", "Freelance"],
    title: "Principes financiers : gérer vos revenus de freelance",
    imageAlt: "Gestion des revenus freelance",
    excerpt:
      "Gérer ses finances est une partie essentielle d'une carrière freelance réussie. De la budgétisation à la planification fiscale, comprendre vos flux financiers vous permet de développer et de pérenniser votre activité.",
    sections: [
      {
        title: "Budgeter avec un revenu irrégulier",
        color: mainHeadingColors[0],
        content:
          "Les freelances connaissent souvent des flux de trésorerie variables. Établissez un budget qui tient compte des recettes fluctuantes et priorise les dépenses essentielles."
      },
      {
        title: "Séparer comptes professionnels et personnels",
        color: mainHeadingColors[1],
        content:
          "Maintenir des comptes distincts aide à suivre précisément les déductions et offre une vision plus claire de la rentabilité."
      },
      {
        title: "Planifier impôts et retraite",
        color: mainHeadingColors[2],
        content:
          "Mettez de côté un pourcentage de chaque paiement pour les impôts et explorez les comptes retraite adaptés aux travailleurs indépendants."
      },
      {
        title: "Utiliser des outils financiers",
        color: mainHeadingColors[3],
        content:
          "Utilisez des applications de budgétisation, des logiciels de facturation et des conseillers financiers pour optimiser la gestion de votre argent et rester à jour dans vos obligations."
      }
    ],
    closingNote:
      "Avec discipline financière et planification, les freelances peuvent bâtir non seulement des projets réussis, mais aussi une carrière stable et gratifiante.",
    backToBlog: "← Retour au blog"
  }
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
        color: "var(--text-color)"
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
              lineHeight: 1.2
            }}
          >
            {t.title}
          </h1>
          <div
            style={{
              width: "100%",
              borderRadius: 15,
              overflow: "hidden",
              marginBottom: 20
            }}
          >
            <img
              src={t.imageAlt ? "images/blog8.jpg" : ""}
              alt={t.imageAlt}
              style={{
                width: "100%",
                height: 230,
                objectFit: "cover",
                display: "block",
                borderRadius: 12,
                background: "#eaeaea"
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
              marginBottom: 14
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
              flexWrap: "wrap"
            }}
          >
            {t.categories.map((cat, idx) => (
              <span
                key={idx}
                style={{
                  background: idx === 0 ? "var(--primary-color)" : (idx === 1 ? "#f39c12" : "grey"),
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
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
            borderRadius: 12,
            padding: 40,
            boxShadow: "var(--shadow)",
            lineHeight: 1.8
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
                  marginBottom: 20
                }}
              >
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
          <p>{t.closingNote}</p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: 40, textAlign: "center" }}
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

export default Blog4;
