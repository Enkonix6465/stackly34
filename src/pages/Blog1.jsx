import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context.jsx/LanguageContext";

const mainHeadingColors = [
  "#007bff", // Blue
  "#e67e22", // Orange
  "#16a085", // Teal
  "#8e44ad", // Purple
];

const translations = {
  en: {
    documentTitle: "Building Your Online Presence: A Freelancer’s Guide",
    author: "Jamie Smith",
    date: "August 24, 2025",
    readTime: "6 min read",
    categories: ["Freelancing", "Personal Branding"],
    title: "Building Your Online Presence: A Freelancer’s Guide",
    excerpt:
      "In today’s digital age, having a strong online presence is essential for freelancers seeking to grow their client base and establish credibility. This guide offers practical steps to build your brand and effectively showcase your skills.",
    sections: [
      {
        title: "Optimize Your Portfolio",
        color: mainHeadingColors[0],
        points: [
          "Showcase Work: Display your best projects and testimonials prominently.",
          "User Experience: Ensure your website is easy to navigate and mobile-friendly.",
          "Clear Messaging: Communicate your value proposition succinctly.",
        ],
      },
      {
        title: "Engage on Social Media",
        color: mainHeadingColors[1],
        content:
          "Be active on platforms relevant to your industry to connect with potential clients and peers. Share insights, answer questions, and build a network around your expertise.",
      },
      {
        title: "Leverage Content Marketing",
        color: mainHeadingColors[2],
        content:
          "Publishing articles, videos, or podcasts related to your niche can establish you as a thought leader and draw organic traffic to your site.",
      },
      {
        title: "Build Client Relationships",
        color: mainHeadingColors[3],
        content:
          "Consistent communication, delivering on promises, and asking for feedback can turn one-time clients into long-term partners, fueling your freelance success.",
      },
    ],
    backToBlog: "← Back to Blog",
  },

  ar: {
    documentTitle: "بناء حضورك على الإنترنت: دليل المستقل",
    author: "جيمي سميث",
    date: "24 أغسطس 2025",
    readTime: "6 دقائق قراءة",
    categories: ["العمل الحر", "العلامة التجارية الشخصية"],
    title: "بناء حضورك على الإنترنت: دليل المستقل",
    excerpt:
      "في عصر الرقمية الحالي، وجود حضور قوي على الإنترنت أمر ضروري للمستقلين الساعين لتوسيع قاعدة عملائهم وبناء المصداقية. يقدم هذا الدليل خطوات عملية لبناء علامتك التجارية وعرض مهاراتك بشكل فعال.",
    sections: [
      {
        title: "حسّن ملفك الشخصي",
        color: mainHeadingColors[0],
        points: [
          "عرض الأعمال: عرض أفضل مشاريعك وشهادات العملاء بشكل بارز.",
          "تجربة المستخدم: تأكد من أن موقعك سهل التصفح ومتوافق مع الأجهزة المحمولة.",
          "رسالة واضحة: عبّر عن قيمة خدماتك بوضوح.",
        ],
      },
      {
        title: "شارك في وسائل التواصل الاجتماعي",
        color: mainHeadingColors[1],
        content:
          "كن نشطًا على المنصات ذات الصلة بمجالك للتواصل مع العملاء المحتملين والزملاء. شارك الأفكار، أجب على الأسئلة، وبنِ شبكة حول خبرتك.",
      },
      {
        title: "استفد من التسويق بالمحتوى",
        color: mainHeadingColors[2],
        content:
          "نشر المقالات، الفيديوهات، أو البودكاست المتعلقة بمجالك يمكن أن يجعلك رائد فكر ويجذب زيارات عضوية لموقعك.",
      },
      {
        title: "ابنِ علاقات العملاء",
        color: mainHeadingColors[3],
        content:
          "التواصل المستمر، الوفاء بالوعود، وطلب الملاحظات يمكن أن يحول العملاء لمرة واحدة إلى شركاء طويل الأمد، مما يدفع نجاحك كمستقل.",
      },
    ],
    backToBlog: "← العودة إلى المدونة",
  },

  he: {
    documentTitle: "בניית הנוכחות המקוונת שלך: מדריך לפרילנסר",
    author: "ג'יימי סמית",
    date: "24 באוגוסט 2025",
    readTime: "6 דקות קריאה",
    categories: ["פרילנסינג", "מיתוג אישי"],
    title: "בניית הנוכחות המקוונת שלך: מדריך לפרילנסר",
    excerpt:
      "בעידן הדיגיטלי של היום, החזקת נוכחות חזקה באינטרנט חיונית לפרילנסרים השואפים להגדיל את בסיס הלקוחות שלהם ולבנות אמינות. מדריך זה מציע צעדים מעשיים לבניית המותג שלך והצגת הכישורים שלך באופן אפקטיבי.",
    sections: [
      {
        title: "אופטימיזציית התיק עבודות שלך",
        color: mainHeadingColors[0],
        points: [
          "הצג עבודה: הצג את הפרויקטים וההמלצות הטובים ביותר שלך באופן בולט.",
          "חווית משתמש: ודא שהאתר שלך קל לניווט וידידותי למובייל.",
          "מסרים ברורים: תתקשר את הערך שאתה מציע בקיצור.",
        ],
      },
      {
        title: "השתתף ברשתות החברתיות",
        color: mainHeadingColors[1],
        content:
          "הייה פעיל בפלטפורמות הרלוונטיות לתעשייה שלך כדי להתחבר ללקוחות ועמיתים פוטנציאליים. שתף תובנות, ענה על שאלות, ובנה רשת סביב המומחיות שלך.",
      },
      {
        title: "נצל שיווק תוכן",
        color: mainHeadingColors[2],
        content:
          "פרסום מאמרים, סרטונים או פודקאסטים בתחום שלך יכול למצב אותך כמוביל דעה ולמשוך תנועה אורגנית לאתר שלך.",
      },
      {
        title: "בנה קשרי לקוחות",
        color: mainHeadingColors[3],
        content:
          "תקשורת עקבית, עמידה בהבטחות ובקשה למשוב יכולים להפוך לקוחות חד-פעמיים לשותפים ארוכי טווח, המניעים את ההצלחה שלך כפרילנסר.",
      },
    ],
    backToBlog: "← חזרה לבלוג",
  },

  fr: {
    documentTitle: "Construire votre présence en ligne : guide du freelance",
    author: "Jamie Smith",
    date: "24 août 2025",
    readTime: "6 min de lecture",
    categories: ["Freelance", "Personal Branding"],
    title: "Construire votre présence en ligne : guide du freelance",
    excerpt:
      "À l'ère numérique actuelle, avoir une forte présence en ligne est essentiel pour les freelances cherchant à développer leur clientèle et à établir leur crédibilité. Ce guide propose des étapes pratiques pour construire votre marque et présenter efficacement vos compétences.",
    sections: [
      {
        title: "Optimisez votre portfolio",
        color: mainHeadingColors[0],
        points: [
          "Mettez en valeur votre travail : affichez vos meilleurs projets et témoignages de manière visible.",
          "Expérience utilisateur : assurez-vous que votre site est facile à naviguer et adapté au mobile.",
          "Message clair : communiquez votre proposition de valeur de façon succincte.",
        ],
      },
      {
        title: "Engagez-vous sur les réseaux sociaux",
        color: mainHeadingColors[1],
        content:
          "Soyez actif sur les plateformes pertinentes pour votre secteur afin de vous connecter avec des clients potentiels et des pairs. Partagez des idées, répondez aux questions, et construisez un réseau autour de votre expertise.",
      },
      {
        title: "Exploitez le marketing de contenu",
        color: mainHeadingColors[2],
        content:
          "Publier des articles, vidéos ou podcasts liés à votre niche peut vous établir en tant que leader d’opinion et attirer du trafic organique vers votre site.",
      },
      {
        title: "Construisez des relations avec vos clients",
        color: mainHeadingColors[3],
        content:
          "Une communication cohérente, la livraison des engagements et la demande de feedback peuvent transformer des clients ponctuels en partenaires à long terme, alimentant ainsi votre succès freelance.",
      },
    ],
    backToBlog: "← Retour au blog",
  }
};

const Blog1 = () => {
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
              fontWeight: "700",
              color: "var(--heading-color)",
              marginBottom: "20px",
              lineHeight: "1.2"
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
              src="images/blog1.jpg"
              alt="Freelancer with laptop"
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
            <span>{t.author}</span>
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
                  background: idx === 0 ? "var(--primary-color)" : mainHeadingColors[idx % mainHeadingColors.length],
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
            lineHeight: "1.8"
          }}
        >
          <p style={{ marginBottom: "25px", fontSize: "1.1rem" }}>{t.excerpt}</p>

          {t.sections.map((section, idx) => (
            <div key={idx}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  color: section.color,
                  marginTop: idx === 0 ? "35px" : "20px",
                  marginBottom: "20px",
                  fontWeight: 700
                }}
              >
                {section.title}
              </h2>
              {section.points ? (
                <ul style={{ paddingLeft: "23px", marginBottom: "25px" }}>
                  {section.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "11px" }}>
                      <b>{point.split(":")[0]}:</b> {point.split(":")[1]}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ marginBottom: "25px" }}>{section.content}</p>
              )}
            </div>
          ))}
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
              fontWeight: "600",
              transition: "all 0.3s"
            }}
          >
            {t.backToBlog}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog1;
