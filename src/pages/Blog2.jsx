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
    documentTitle: "Mastering Client Communication: Tips for Freelancers",
    author: "Jordan Lee",
    date: "July 15, 2025",
    readTime: "7 min read",
    categories: ["Communication", "Freelancing"],
    title: "Mastering Client Communication: Tips for Freelancers",
    imageAlt: "Freelancer working",
    excerpt:
      "Effective communication with clients can be the difference between success and failure for freelancers. Building clear, consistent, and respectful dialogue fosters trust and ensures project goals are met efficiently.",
    sections: [
      {
        title: "Set Clear Expectations Early",
        color: mainHeadingColors[0],
        content:
          "Outline deliverables, timelines, and responsibilities upfront. This reduces misunderstandings and gives clients a roadmap for project progress."
      },
      {
        title: "Maintain Regular Updates",
        color: mainHeadingColors[1],
        points: [
          "Share weekly or milestone-based progress reports.",
          "Notify clients promptly of any delays or obstacles.",
          "Ask for feedback regularly to remain aligned."
        ]
      },
      {
        title: "Choose the Right Communication Channels",
        color: mainHeadingColors[2],
        content:
          "Use tools best suited for both you and your clients, whether emails, video calls, or project management apps. Flexibility can enhance collaboration."
      },
      {
        title: "Practice Active Listening",
        color: mainHeadingColors[3],
        content:
          "Truly understand client needs by paying close attention, asking clarifying questions, and reflecting back what you hear. This helps prevent scope creep and fosters positive relationships."
      }
    ],
    closingNote:
      "Mastering communication is an ongoing process but investing in it builds credibility, repeat business, and a thriving freelance career.",
    backToBlog: "← Back to Blog"
  },

  ar: {
    documentTitle: "إتقان التواصل مع العملاء: نصائح للمستقلين",
    author: "جوردان لي",
    date: "15 يوليو 2025",
    readTime: "7 دقائق قراءة",
    categories: ["الاتصالات", "العمل الحر"],
    title: "إتقان التواصل مع العملاء: نصائح للمستقلين",
    imageAlt: "مستقل يعمل",
    excerpt:
      "التواصل الفعال مع العملاء يمكن أن يكون الفارق بين النجاح والفشل للمستقلين. بناء حوار واضح ومتسق ومحترم يعزز الثقة ويضمن تحقيق أهداف المشروع بكفاءة.",
    sections: [
      {
        title: "حدد توقعات واضحة مبكرًا",
        color: mainHeadingColors[0],
        content:
          "حدد المهام والمواعيد والمسؤوليات منذ البداية. هذا يقلل من سوء الفهم ويوفر للعميل خارطة طريق لتقدم المشروع."
      },
      {
        title: "حافظ على تحديثات منتظمة",
        color: mainHeadingColors[1],
        points: [
          "شارك تقارير تقدم أسبوعية أو متعلقة بالمراحل.",
          "أخبر العملاء فوراً بأي تأخيرات أو عقبات.",
          "اطلب feedback بانتظام للبقاء على المسار الصحيح."
        ]
      },
      {
        title: "اختر قنوات الاتصال المناسبة",
        color: mainHeadingColors[2],
        content:
          "استخدم الأدوات المناسبة لك ولعملائك، سواء البريد الإلكتروني، المكالمات الفيديو، أو تطبيقات إدارة المشاريع. المرونة تعزز التعاون."
      },
      {
        title: "مارس الاستماع الفعّال",
        color: mainHeadingColors[3],
        content:
          "افهم احتياجات العميل بإنصات دقيق، طرح أسئلة توضيحية، ورد على ما تسمعه. هذا يساعد في منع تغييرات متكررة ويرسخ العلاقات الإيجابية."
      }
    ],
    closingNote:
      "إتقان التواصل هو عملية مستمرة ولكن الاستثمار فيه يبني المصداقية والأعمال المتكررة ومسيرة حرة ناجحة.",
    backToBlog: "← العودة إلى المدونة"
  },

  he: {
    documentTitle: "שליטה בתקשורת עם לקוחות: טיפים לפרילנסרים",
    author: "ג'ורדן לי",
    date: "15 ביולי 2025",
    readTime: "7 דקות קריאה",
    categories: ["תקשורת", "פרילנסינג"],
    title: "שליטה בתקשורת עם לקוחות: טיפים לפרילנסרים",
    imageAlt: "פרילנסר עובד",
    excerpt:
      "תקשורת אפקטיבית עם לקוחות יכולה להיות ההבדל בין הצלחה לכישלון לפרילנסרים. בניית דיאלוג ברור, עקבי ומכבד מחזקת אמון ומבטיחה עמידה ביעדי הפרויקט ביעילות.",
    sections: [
      {
        title: "הגדר ציפיות ברורות מוקדם",
        color: mainHeadingColors[0],
        content:
          "הגדירו את התDeliverables, הזמנים והאחרויות מראש. זה מפחית אי הבנות ומספק ללקוחות מפת דרכים לתקדמות הפרויקט."
      },
      {
        title: "שמור על עדכונים סדירים",
        color: mainHeadingColors[1],
        points: [
          "שתף דוחות התקדמות שבועיים או מבוססי אבני דרך.",
          "עדכן את הלקוחות במהירות על עיכובים או מכשולים.",
          "בקש משוב באופן קבוע כדי לשמור על התאמה."
        ]
      },
      {
        title: "בחר את ערוצי התקשורת הנכונים",
        color: mainHeadingColors[2],
        content:
          "השתמש בכלים המתאימים לך וללקוחותיך, אם במייל, שיחות וידאו או אפליקציות ניהול פרויקטים. גמישות יכולה לשפר שיתוף פעולה."
      },
      {
        title: "תרגל הקשבה אקטיבית",
        color: mainHeadingColors[3],
        content:
          "הבן באמת את צרכי הלקוח על ידי הקשבה מדוקדקת, שאלת שאלות הבהרה, והחזרת מה ששמעת. זה מסייע במניעת חריגות ומקדם יחסים חיוביים."
      }
    ],
    closingNote:
      "שליטה בתקשורת היא תהליך מתמשך אך השקעה בו בונה אמינות, עסק חוזר וקריירה עצמאית פורחת.",
    backToBlog: "← חזרה לבלוג"
  },

  fr: {
    documentTitle: "Maîtriser la communication client : conseils pour freelances",
    author: "Jordan Lee",
    date: "15 juillet 2025",
    readTime: "7 min de lecture",
    categories: ["Communication", "Freelance"],
    title: "Maîtriser la communication client : conseils pour freelances",
    imageAlt: "Freelance au travail",
    excerpt:
      "Une communication efficace avec les clients peut faire la différence entre le succès et l'échec pour les freelances. Construire un dialogue clair, cohérent et respectueux favorise la confiance et garantit que les objectifs du projet sont atteints efficacement.",
    sections: [
      {
        title: "Définir des attentes claires dès le début",
        color: mainHeadingColors[0],
        content:
          "Décrivez clairement les livrables, les échéances et les responsabilités. Cela réduit les malentendus et offre aux clients une feuille de route pour l'avancement du projet."
      },
      {
        title: "Maintenir des mises à jour régulières",
        color: mainHeadingColors[1],
        points: [
          "Partagez des rapports de progression hebdomadaires ou basés sur des étapes.",
          "Informez rapidement les clients de tout retard ou obstacle.",
          "Demandez régulièrement des retours pour rester aligné."
        ]
      },
      {
        title: "Choisir les bons canaux de communication",
        color: mainHeadingColors[2],
        content:
          "Utilisez les outils les mieux adaptés à vous et vos clients, que ce soit les emails, les appels vidéo, ou les applications de gestion de projet. La flexibilité peut améliorer la collaboration."
      },
      {
        title: "Pratiquer l’écoute active",
        color: mainHeadingColors[3],
        content:
          "Comprenez vraiment les besoins des clients en prêtant attention, en posant des questions de clarification et en reformulant ce que vous entendez. Cela aide à prévenir les dérives de périmètre et favorise des relations positives."
      }
    ],
    closingNote:
      "Maîtriser la communication est un processus continu, mais y investir construit la crédibilité, les affaires répétées et une carrière freelance florissante.",
    backToBlog: "← Retour au blog"
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
              src="images/blog7.jpg"
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
            lineHeight: 1.8
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

export default Blog1;
