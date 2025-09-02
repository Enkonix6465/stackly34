import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaClock,
  FaArrowRight,
  FaThumbsUp,
  FaShare,
  FaComment
} from "react-icons/fa";
import { useLanguage } from "../context.jsx/LanguageContext";

const translations = {
  en: {
    documentTitle: "Freelancer Blog - Insights & Tips",
    heroTitle: "Freelancer’s Blog",
    heroSubtitle: "Insights, tips, and stories for the modern freelancer.",
    heroBtn: "Contact Me",
    blogNoArticlesText: "No articles match your search.",
    postsSectionTitleAll: "Latest Articles",
    postsSectionTitleCategorySuffix: "Articles",

    spotlightTitle: "In The Spotlight",
    spotlightSubtitle: "Handpicked Articles",
    spotlightDescription:
      "A curated selection of our most insightful posts. Click a title below to learn more.",

    ctaTitle: "Ready to Transform Your Business?",
    ctaText:
      "Get started today with a free consultation and discover how we can help you achieve your goals.",
    ctaStartBtn: "Start Your Journey",
    ctaLearnBtn: "Learn More About Us",

    posts: [
      {
        id: 1,
        category: "Branding",
        title: "Building Your Online Presence: A Freelancer’s Guide",
        author: "Alex Freelancer",
        readTime: "7 min",
        excerpt:
          "Learn how to craft an authentic and compelling personal brand that attracts clients and showcases your unique skills.",
        url: "/blog1",
        date: "2025-07-01",
        image: "images/blog1.jpg",
        featured: true
      },
      {
        id: 2,
        category: "Communication",
        title: "Mastering Client Communication: Tips for Freelancers",
        author: "Linda Freelancer",
        readTime: "6 min",
        excerpt:
          "Unlock best practices for clear, professional communication that fosters trust and repeat business.",
        url: "/blog2",
        date: "2025-06-15",
        image: "images/blog2.jpg",
        featured: false
      },
      {
        id: 3,
        category: "Productivity",
        title: "Time Management Hacks for the Solo Entrepreneur",
        author: "Neil Freelance",
        readTime: "8 min",
        excerpt:
          "Discover effective strategies to maximize productivity without burnout when working as a freelancer.",
        url: "/blog3",
        date: "2025-05-30",
        image: "images/blog3.jpg",
        featured: false
      },
      {
        id: 4,
        category: "Networking",
        title: "Growing Your Network and Finding New Opportunities",
        author: "Max Freelance",
        readTime: "5 min",
        excerpt:
          "Tips and tools to expand your professional connections and land exciting freelance projects.",
        url: "/blog4",
        date: "2025-05-10",
        image: "images/blog4.jpg",
        featured: true
      },
      {
        id: 5,
        category: "Finance",
        title: "Financial Fundamentals: Managing Your Freelance Income",
        author: "Sarah Freelancer",
        readTime: "7 min",
        excerpt:
          "Practical advice for budgeting, invoicing, and tax planning tailored to freelancers.",
        url: "/blog5",
        date: "2025-04-25",
        image: "images/blog5.jpg",
        featured: false
      }
    ],

    featuredBadgeText: "Featured",

    postMetaLabels: {
      author: "By",
      date: "Date",
      readTime: "min read"
    },

    commentsPlaceholder: "Write a comment...",
    postButtonsTitles: {
      like: "Like",
      comment: "Comment",
      share: "Share"
    }
  },

  ar: {
    documentTitle: "مدونة المستقلين - رؤى ونصائح",
    heroTitle: "مدونة المستقلين",
    heroSubtitle: "رؤى، نصائح، وقصص للمستقل العصري.",
    heroBtn: "اتصل بي",
    blogNoArticlesText: "لا توجد مقالات تطابق بحثك.",
    postsSectionTitleAll: "أحدث المقالات",
    postsSectionTitleCategorySuffix: "مقالات",

    spotlightTitle: "في دائرة الضوء",
    spotlightSubtitle: "مقالات مختارة",
    spotlightDescription:
      "تشكيلة مختارة من أبرز مقالاتنا. انقر على العنوان أدناه لتعلم المزيد.",

    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaText:
      "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    ctaStartBtn: "ابدأ رحلتك",
    ctaLearnBtn: "تعرف علينا أكثر",

    posts: [
      {
        id: 1,
        category: "العلامة التجارية",
        title: "بناء حضورك على الإنترنت: دليل المستقل",
        author: "أليكس فريلانسر",
        readTime: "٧ دقائق",
        excerpt:
          "تعلم كيفية صياغة علامة تجارية شخصية أصيلة وجذابة تجذب العملاء وتبرز مهاراتك الفريدة.",
        url: "/blog1",
        date: "2025-07-01",
        image: "images/blog1.jpg",
        featured: true
      },
      {
        id: 2,
        category: "الاتصالات",
        title: "إتقان التواصل مع العملاء: نصائح للمستقلين",
        author: "ليندا فريلانسر",
        readTime: "٦ دقائق",
        excerpt:
          "اكتشف أفضل الممارسات للتواصل الواضح والمهني الذي يعزز الثقة ويشجع على العمل المتكرر.",
        url: "/blog2",
        date: "2025-06-15",
        image: "images/blog2.jpg",
        featured: false
      },
      {
        id: 3,
        category: "الإنتاجية",
        title: "حيل إدارة الوقت لرائد الأعمال المستقل",
        author: "نيل فريلانسر",
        readTime: "٨ دقائق",
        excerpt:
          "اكتشف استراتيجيات فعالة لتعظيم الإنتاجية دون الاحتراق أثناء العمل كمستقل.",
        url: "/blog3",
        date: "2025-05-30",
        image: "images/blog3.jpg",
        featured: false
      },
      {
        id: 4,
        category: "التواصل",
        title: "توسيع شبكة علاقاتك والعثور على فرص جديدة",
        author: "ماكس فريلانسر",
        readTime: "٥ دقائق",
        excerpt:
          "نصائح وأدوات لتوسيع اتصالاتك المهنية والحصول على مشاريع مستقلة مثيرة.",
        url: "/blog4",
        date: "2025-05-10",
        image: "images/blog4.jpg",
        featured: true
      },
      {
        id: 5,
        category: "المالية",
        title: "الأساسيات المالية: إدارة دخلك كمستقل",
        author: "سارة فريلانسر",
        readTime: "٧ دقائق",
        excerpt:
          "نصائح عملية للميزانية، الفواتير، والتخطيط الضريبي مصممة للمستقلين.",
        url: "/blog5",
        date: "2025-04-25",
        image: "images/blog5.jpg",
        featured: false
      }
    ],

    featuredBadgeText: "مميز",

    postMetaLabels: {
      author: "بواسطة",
      date: "التاريخ",
      readTime: "دقائق قراءة"
    },

    commentsPlaceholder: "اكتب تعليقًا...",
    postButtonsTitles: {
      like: "إعجاب",
      comment: "تعليق",
      share: "مشاركة"
    }
  },

  he: {
    documentTitle: "בלוג פרילנסר - תובנות וטיפים",
    heroTitle: "בלוג פרילנסר",
    heroSubtitle: "תובנות, טיפים וסיפורים לפרילנסר המודרני.",
    heroBtn: "צור קשר",
    blogNoArticlesText: "אין מאמרים התואמים את החיפוש שלך.",
    postsSectionTitleAll: "המאמרים האחרונים",
    postsSectionTitleCategorySuffix: "מאמרים",

    spotlightTitle: "במוקד",
    spotlightSubtitle: "מאמרים נבחרים",
    spotlightDescription:
      "אוסף נבחר של הפוסטים התובנתיים ביותר שלנו. לחץ על כותרת למידע נוסף.",

    ctaTitle: "מוכן לשנות את העסק שלך?",
    ctaText:
      "התחל היום עם ייעוץ חינם וגלה כיצד נוכל לעזור לך להשיג את יעדיך.",
    ctaStartBtn: "התחל את המסע שלך",
    ctaLearnBtn: "למידע נוסף",

    posts: [
      {
        id: 1,
        category: "מיתוג",
        title: "בניית הנוכחות המקוונת שלך: מדריך לפרילנסר",
        author: "אלכס פרילנסר",
        readTime: "7 דקות",
        excerpt:
          "למד כיצד ליצור מותג אישי אותנטי ומשכנע שמושך לקוחות ומציג את הכישורים הייחודיים שלך.",
        url: "/blog1",
        date: "2025-07-01",
        image: "images/blog1.jpg",
        featured: true
      },
      {
        id: 2,
        category: "תקשורת",
        title: "שליטה בתקשורת עם לקוחות: טיפים לפרילנסרים",
        author: "לינדה פרילנסר",
        readTime: "6 דקות",
        excerpt:
          "פתח שיטות עבודה מומלצות לתקשורת ברורה ומקצועית שמטפחת אמון ועסק חוזר.",
        url: "/blog2",
        date: "2025-06-15",
        image: "images/blog2.jpg",
        featured: false
      },
      {
        id: 3,
        category: "פרודוקטיביות",
        title: "טריקים לניהול זמן לעצמאי",
        author: "ניל פרילנסר",
        readTime: "8 דקות",
        excerpt:
          "גלה אסטרטגיות יעילות למקסום פרודוקטיביות מבלי להתיש בעת עבודה כעצמאי.",
        url: "/blog3",
        date: "2025-05-30",
        image: "images/blog3.jpg",
        featured: false
      },
      {
        id: 4,
        category: "רשתות",
        title: "הרחבת הרשת ומציאת הזדמנויות חדשות",
        author: "מקס פרילנסר",
        readTime: "5 דקות",
        excerpt:
          "טיפים וכלים להרחבת קשריך המקצועיים ולשיגור פרויקטים עצמאיים מרתקים.",
        url: "/blog4",
        date: "2025-05-10",
        image: "images/blog4.jpg",
        featured: true
      },
      {
        id: 5,
        category: "פיננסים",
        title: "יסודות פיננסיים: ניהול הכנסתם של פרילנסרים",
        author: "שרה פרילנסר",
        readTime: "7 דקות",
        excerpt:
          "עצות מעשיות לתכנון תקציב, הנפקת חשבוניות ותכנון מס המותאמות לפרילנסרים.",
        url: "/blog5",
        date: "2025-04-25",
        image: "images/blog5.jpg",
        featured: false
      }
    ],

    featuredBadgeText: "מבוקש",

    postMetaLabels: {
      author: "מאת",
      date: "תאריך",
      readTime: "דקות קריאה"
    },

    commentsPlaceholder: "כתוב תגובה...",
    postButtonsTitles: {
      like: "אהבתי",
      comment: "תגובה",
      share: "שיתוף"
    }
  },

  fr: {
    documentTitle: "Blog Freelance - Conseils & Astuces",
    heroTitle: "Blog du Freelance",
    heroSubtitle: "Idées, conseils et histoires pour le freelance moderne.",
    heroBtn: "Contactez-moi",
    blogNoArticlesText: "Aucun article ne correspond à votre recherche.",
    postsSectionTitleAll: "Derniers articles",
    postsSectionTitleCategorySuffix: "Articles",

    spotlightTitle: "Sous les projecteurs",
    spotlightSubtitle: "Articles sélectionnés",
    spotlightDescription:
      "Une sélection de nos articles les plus instructifs. Cliquez sur un titre ci-dessous pour en savoir plus.",

    ctaTitle: "Prêt à transformer votre entreprise ?",
    ctaText:
      "Commencez dès aujourd'hui avec une consultation gratuite et découvrez comment nous pouvons vous aider à atteindre vos objectifs.",
    ctaStartBtn: "Commencez votre parcours",
    ctaLearnBtn: "En savoir plus sur nous",

    posts: [
      {
        id: 1,
        category: "Branding",
        title: "Construire votre présence en ligne : guide du freelance",
        author: "Alex Freelancer",
        readTime: "7 min",
        excerpt:
          "Apprenez à créer une marque personnelle authentique et attrayante qui attire des clients et met en valeur vos compétences uniques.",
        url: "/blog1",
        date: "2025-07-01",
        image: "images/blog1.jpg",
        featured: true
      },
      {
        id: 2,
        category: "Communication",
        title: "Maîtriser la communication client : conseils pour freelances",
        author: "Linda Freelancer",
        readTime: "6 min",
        excerpt:
          "Découvrez les meilleures pratiques pour une communication claire et professionnelle qui favorise la confiance et la fidélisation.",
        url: "/blog2",
        date: "2025-06-15",
        image: "images/blog2.jpg",
        featured: false
      },
      {
        id: 3,
        category: "Productivité",
        title: "Astuces de gestion du temps pour entrepreneur solo",
        author: "Neil Freelance",
        readTime: "8 min",
        excerpt:
          "Découvrez des stratégies efficaces pour maximiser la productivité sans épuisement lorsque vous travaillez en freelance.",
        url: "/blog3",
        date: "2025-05-30",
        image: "images/blog3.jpg",
        featured: false
      },
      {
        id: 4,
        category: "Réseautage",
        title: "Développer votre réseau et trouver de nouvelles opportunités",
        author: "Max Freelance",
        readTime: "5 min",
        excerpt:
          "Conseils et outils pour étendre vos connexions professionnelles et décrocher des projets freelance passionnants.",
        url: "/blog4",
        date: "2025-05-10",
        image: "images/blog4.jpg",
        featured: true
      },
      {
        id: 5,
        category: "Finance",
        title: "Fondamentaux financiers : gérer vos revenus de freelance",
        author: "Sarah Freelancer",
        readTime: "7 min",
        excerpt:
          "Conseils pratiques pour la budgétisation, la facturation et la planification fiscale adaptés aux freelances.",
        url: "/blog5",
        date: "2025-04-25",
        image: "images/blog5.jpg",
        featured: false
      }
    ],

    featuredBadgeText: "En vedette",

    postMetaLabels: {
      author: "Par",
      date: "Date",
      readTime: "min de lecture"
    },

    commentsPlaceholder: "Écrire un commentaire...",
    postButtonsTitles: {
      like: "J'aime",
      comment: "Commenter",
      share: "Partager"
    }
  }
};

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function getBlogReadInfo(postId, defaultReadTime, defaultDate, interactions) {
  try {
    const post = interactions[postId] || {};
    return {
      lastViewed: post.lastViewed,
      readTime: post.readTime || defaultReadTime,
      date: defaultDate
    };
  } catch {
    return { lastViewed: null, readTime: defaultReadTime, date: defaultDate };
  }
}

function getInitialInteractions(posts) {
  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem("blogInteractions") || "{}");
  } catch {}
  const obj = {};
  posts.forEach((post) => {
    obj[post.id] = {
      likes: stored[post.id]?.likes || 0,
      comments: stored[post.id]?.comments || 0,
      shares: stored[post.id]?.shares || 0,
      showCommentInput: false,
      lastViewed: stored[post.id]?.lastViewed || null
    };
  });
  return obj;
}

function saveInteractions(data) {
  localStorage.setItem("blogInteractions", JSON.stringify(data));
}

const Blog = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [postInteractions, setPostInteractions] = useState(() =>
    getInitialInteractions(t.posts)
  );
  const [featuredPost, setFeaturedPost] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.dir = ["ar", "he"].includes(language) ? "rtl" : "ltr";
    document.title = t.documentTitle;
  }, [language, t.documentTitle]);

  useEffect(() => {
    const maxLikes = Math.max(...Object.values(postInteractions).map(x => x.likes), 0);
    let candidates = t.posts.filter(p => postInteractions[p.id]?.likes === maxLikes);
    if (candidates.length === 1) {
      setFeaturedPost(candidates[0]);
    } else if (candidates.length > 1) {
      let newestPost = candidates[0];
      let newestDate = postInteractions[newestPost.id]?.lastViewed
        ? new Date(postInteractions[newestPost.id].lastViewed)
        : new Date(newestPost.date);
      candidates.forEach(p => {
        let viewed = postInteractions[p.id]?.lastViewed
          ? new Date(postInteractions[p.id].lastViewed)
          : new Date(p.date);
        if (viewed > newestDate) {
          newestPost = p;
          newestDate = viewed;
        }
      });
      setFeaturedPost(newestPost);
    } else {
      setFeaturedPost(null);
    }
  }, [postInteractions, t.posts]);

  useEffect(() => {
    saveInteractions(postInteractions);
  }, [postInteractions]);

  const filteredPosts = t.posts.filter(post => {
    const categoryMatch = selectedCategory === "all" || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch && post.id !== (featuredPost?.id || -1);
  });

  const updateInteraction = (postId, field, increment = 1) => {
    setPostInteractions(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [field]: (prev[postId][field] || 0) + increment,
        lastViewed: new Date().toISOString()
      }
    }));
  };

  const handleLike = postId => updateInteraction(postId, "likes");
  const handleShare = postId => updateInteraction(postId, "shares");
  const toggleCommentInput = postId =>
    setPostInteractions(prev => ({
      ...prev,
      [postId]: { ...prev[postId], showCommentInput: !prev[postId].showCommentInput }
    }));
  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    updateInteraction(postId, "comments");
    setPostInteractions(prev => ({
      ...prev,
      [postId]: { ...prev[postId], showCommentInput: false }
    }));
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const onSelectPost = index => {
    if (index === activeIndex) return;
    setFadeState("fade-out");
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      setFadeState("fade-in");
    }, 400);
  };

  const activePost = t.posts[activeIndex];

  return (
    <div className="blog-page">
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="/images/video11.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.heroTitle}</h1>
            <p className="hero-paragraph animate-fade-up">{t.heroSubtitle}</p>
            <Link to="/contact" className="hero-button animate-fade-up">
              {t.heroBtn}
            </Link>
          </div>
        </div>
      </section>

      <div className="blog-main container">
        <div className="blog-grid">
          <motion.main
            className="blog-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {featuredPost && (
              <motion.article
                className="featured-post"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="featured-badge">{t.featuredBadgeText}</div>
                <div className="post-image">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <div className="post-overlay">
                    <div className="post-category">{featuredPost.category}</div>
                  </div>
                </div>
                <div className="post-content">
                  {(() => {
                    const info = getBlogReadInfo(
                      featuredPost.id,
                      featuredPost.readTime,
                      featuredPost.date,
                      postInteractions
                    );
                    return (
                      <div className="post-meta">
                        <span className="post-author">
                          <FaUser /> {t.postMetaLabels.author} {featuredPost.author}
                        </span>
                        <span className="post-date">
                          <FaCalendar /> {info.lastViewed ? formatDate(info.lastViewed) : info.date}
                        </span>
                        <span className="post-read-time">
                          <FaClock /> {info.readTime} {t.postMetaLabels.readTime}
                        </span>
                      </div>
                    );
                  })()}
                  <h2>{featuredPost.title}</h2>
                  <p>{featuredPost.excerpt}</p>
                  <div className="post-actions">
                    <Link to={`/blog${featuredPost.id}`} className="btn btn-primary">
                      Read More <FaArrowRight />
                    </Link>
                    <div className="post-buttons">
                      <button
                        className="action-btn"
                        onClick={() => handleLike(featuredPost.id)}
                        title={t.postButtonsTitles.like}
                      >
                        <FaThumbsUp /> {postInteractions[featuredPost.id]?.likes || 0}
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => toggleCommentInput(featuredPost.id)}
                        title={t.postButtonsTitles.comment}
                      >
                        <FaComment /> {postInteractions[featuredPost.id]?.comments || 0}
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleShare(featuredPost.id)}
                        title={t.postButtonsTitles.share}
                      >
                        <FaShare /> {postInteractions[featuredPost.id]?.shares || 0}
                      </button>
                    </div>
                  </div>
                  {postInteractions[featuredPost.id]?.showCommentInput && (
                    <form onSubmit={e => handleCommentSubmit(featuredPost.id, e)} className="comment-form">
                      <input
                        type="text"
                        placeholder={t.commentsPlaceholder}
                        required
                        className="comment-input"
                      />
                      <button type="submit" className="btn btn-primary btn-small">
                        Post
                      </button>
                    </form>
                  )}
                </div>
              </motion.article>
            )}

            <div className="posts-section">
              <div className="section-header">
                <h2>
                  {selectedCategory === "all"
                    ? t.postsSectionTitleAll
                    : `${selectedCategory} ${t.postsSectionTitleCategorySuffix}`}
                </h2>
                <p>{filteredPosts.length} articles found</p>
              </div>
              <div className="posts-grid">
                {filteredPosts.map((post, idx) => {
                  const interaction = postInteractions[post.id];
                  const info = getBlogReadInfo(post.id, post.readTime, post.date, postInteractions);
                  return (
                    <motion.article
                      key={post.id}
                      className="post-card"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                        <div className="post-overlay">
                          <div className="post-category">
                            <FaTag /> {post.category}
                          </div>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-author">
                            <FaUser /> {t.postMetaLabels.author} {post.author}
                          </span>
                          <span className="post-date">
                            <FaCalendar /> {info.lastViewed ? formatDate(info.lastViewed) : info.date}
                          </span>
                          <span className="post-read-time">
                            <FaClock /> {info.readTime} {t.postMetaLabels.readTime}
                          </span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="post-actions">
                          <Link to={`/blog${post.id}`} className="read-more btn btn-primary">
                            Read More <FaArrowRight />
                          </Link>
                          <div className="post-buttons">
                            <button
                              className="action-btn"
                              onClick={() => handleLike(post.id)}
                              title={t.postButtonsTitles.like}
                            >
                              <FaThumbsUp /> {interaction?.likes || 0}
                            </button>
                            <button
                              className="action-btn"
                              onClick={() => toggleCommentInput(post.id)}
                              title={t.postButtonsTitles.comment}
                            >
                              <FaComment /> {interaction?.comments || 0}
                            </button>
                            <button
                              className="action-btn"
                              onClick={() => handleShare(post.id)}
                              title={t.postButtonsTitles.share}
                            >
                              <FaShare /> {interaction?.shares || 0}
                            </button>
                          </div>
                        </div>
                        {interaction?.showCommentInput && (
                          <form onSubmit={e => handleCommentSubmit(post.id, e)} className="comment-form">
                            <input
                              type="text"
                              placeholder={t.commentsPlaceholder}
                              required
                              className="comment-input"
                            />
                            <button type="submit" className="btn btn-primary btn-small">
                              Post
                            </button>
                          </form>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
              {filteredPosts.length === 0 && (
                <p style={{ textAlign: "center", marginTop: 30 }}>{t.blogNoArticlesText}</p>
              )}
            </div>
          </motion.main>
        </div>
      </div>

      <section className="spotlight-section">
        <div className="spotlight-container">
          <div className="spotlight-header">
            <h2>{t.spotlightTitle}</h2>
            <p>{t.spotlightSubtitle}</p>
            <p>{t.spotlightDescription}</p>
          </div>

          <div className="spotlight-content-wrapper">
            <div id="spotlight-content" className={`spotlight-content ${fadeState}`}>
              <p className="spotlight-category">{activePost.category}</p>
              <h3 className="spotlight-post-title">
                <a href={activePost.url} className="spotlight-link">
                  {activePost.title}
                </a>
              </h3>
              <div className="spotlight-post-meta">
                <span>
                  {t.postMetaLabels.author} {activePost.author}
                </span>
                <span className="bullet">•</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>

            <nav id="spotlight-nav" className="spotlight-nav">
              {t.posts.map((post, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`spotlight-tab ${idx === activeIndex ? "active" : ""}`}
                  onClick={() => onSelectPost(idx)}
                >
                  {post.title}
                </button>
              ))}
            </nav>
          </div>
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

/* BLOG MAIN CONTAINER */
.blog-main {
  background: var(--bg-color, #181818);
  padding: 80px 0;
  width: 100%;
}

/* FLEX CONTAINER, centers the blog content */
.blog-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* CONTENT SECTION: centers and constrains width */
.blog-content {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px 40px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* FEATURED POST */
.featured-post {
  background: var(--card-bg, #222);
  border-radius: 18px;
  box-shadow: 0 6px 30px rgba(40,40,40,0.08);
  border: 1px solid var(--border-color, #323232);
  margin-bottom: 30px;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
  position: relative;
}

.featured-post .post-image {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  background: #232323;
  display: flex;
  align-items: flex-end;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.featured-post .post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #ff6600;
  color: #fff;
  font-weight: 700;
  padding: 6px 22px;
  border-radius: 16px;
  font-size: 1rem;
  z-index: 2;
  letter-spacing: 0.02em;
}

.featured-post .post-category {
  position: absolute;
  left: 20px;
  bottom: 20px;
  background: #2563eb;
  color: white;
  padding: 8px 20px;
  border-radius: 23px;
  font-size: 1.03em;
  font-weight: 500;
  z-index: 2;
}

.featured-post .post-content {
  padding: 30px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.featured-post .post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 14px;
  font-size: 1.05em;
  color: var(--text-muted, #bbb);
}

.featured-post .post-meta span {
  display: flex;
  align-items: center;
  gap: 7px;
}

.featured-post h2 {
  color: var(--heading-color, #fff);
  font-size: 2.1rem;
  margin: 0 0 8px 0;
  font-weight: 800;
  line-height: 1.17;
  word-break: break-word;
}

.featured-post p {
  color: var(--text-color, #ccc);
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 1.14rem;
}

.featured-post .post-actions {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* POSTS GRID - centered and even padding */
.posts-section {
  width: 100%;
}

.section-header {
  margin-bottom: 37px;
  text-align: left;
}

.section-header h2 {
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--heading-color, #fff);
  margin-bottom: 7px;
}

.section-header p {
  color: var(--text-muted, #bbb);
  font-size: 1em;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;
}

@media (max-width: 900px) {
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

/* BLOG CARDS */
.post-card {
  background: var(--card-bg, #232323);
  border-radius: 16px;
  box-shadow: 0 3px 14px rgba(40,40,40,0.07);
  border: 1px solid var(--border-color, #232323);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.14s;
}

.post-card .post-image {
  width: 100%;
  height: 175px;
  position: relative;
  background: #232323;
  display: flex;
  align-items: flex-end;
}

.post-card .post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: block;
}

.post-card .post-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-left: 16px;
  padding-bottom: 10px;
  background: linear-gradient(to top, rgba(30,30,30,0.79) 38%, transparent 86%);
  box-sizing: border-box;
}
  

.post-card .post-category {
  background: #2563eb;
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 7px;         /* Icon and text spacing */
  font-size: 1em;
  font-weight: 500;
  padding: 5px 16px; /* LESS padding: compact look */
  border-radius: 999px; /* Fully rounded pill shape */
  box-shadow: 0 2px 9px rgba(0,0,0,0.15);
  min-height: 28px; /* Ensures a small pill even with icon */
  line-height: 1;
}

/* Make the SVG icon align with the text perfectly */
.post-card .post-category svg {
  font-size: 1.08em;
  margin-right: 4px;
  vertical-align: middle;
}


.post-card .post-content {
  padding: 22px 17px 20px 17px;
  gap: 6px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.post-card .post-meta {
  gap: 16px;
  margin-bottom: 11px;
  color: var(--text-muted, #bbb);
  font-size: 1em;
  display: flex;
  flex-wrap: wrap;
}

.post-card .post-meta span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.post-card h3 {
  color: var(--heading-color, #fff);
  font-size: 1.18rem;
  line-height: 1.22;
  margin: 0 0 6px 0;
  font-weight: 700;
  word-break: break-word;
}

.post-card p {
  color: var(--text-color, #bbb);
  font-size: 1.01em;
  margin: 0 0 12px 0;
  line-height: 1.56;
}

/* Actions & Buttons */
.post-actions,
.post-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.post-actions {
  margin-top: 10px;
  justify-content: space-between;
}

.read-more {
  color: var(--primary-color, #2563eb);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s, transform 0.2s;
}

.read-more:hover {
  color: #183b78;
  transform: translateX(3px);
}

.action-btn {
  border: 2px solid var(--border-color, #353535);
  border-radius: 50%;
  background: transparent;
  color: var(--text-muted, #bbb);
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.09em;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.action-btn:hover {
  border-color: var(--primary-color, #2563eb);
  color: var(--primary-color, #2563eb);
  background: rgba(34, 77, 183, 0.07);
}

/* COMMENT FORM */
.comment-form {
  margin-top: 7px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.comment-input {
  flex: 1;
  padding: 10px 12px;
  border-radius: 9px;
  border: 1.5px solid var(--border-color, #353535);
  font-size: 1rem;
  background: var(--input-bg, #191919);
  color: var(--text-color, #ddd);
  outline: none;
}

.comment-input:focus {
  border-color: var(--primary-color, #2563eb);
}

.btn-small {
  padding: 8px 18px;
  font-size: 0.95rem;
  border-radius: 17px;
  font-weight: 700;
  background: var(--primary-color, #2563eb);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-small:hover {
  background: #183b78;
}

/* Responsive styles */
@media (max-width: 700px) {
  .blog-content, .featured-post .post-content {
    padding: 10px !important;
  }
  .featured-post .post-image {
    height: 180px;
  }
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

/* =========================
   Knowledge Hub Section
   ========================= */
.knowledge-hub {
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  padding: 40px 20px;
}

.knowledge-title {
  font-size: 2.6rem;
  font-weight: 900;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.knowledge-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 50px;
}

/* ==== FLEX LAYOUT FOR DYNAMIC CENTERED CARDS ==== */
.knowledge-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.knowledge-card {
  position: relative;
  border-radius: 22px;
  padding: 50px 30px 40px;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  width: 350px;
  min-height: 280px;
}

.knowledge-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(135deg, #6a11cb, #2575fc, #ff7eb3);
  background-size: 300% 300%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  animation: borderShift 6s linear infinite;
}

@keyframes borderShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.knowledge-card:hover {
  transform: translateY(-12px) scale(1.04);
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
}

/* ==== ICON STYLES ==== */
.icon-badge {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  margin: 0 auto 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
}

.knowledge-stat {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.knowledge-text {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.5;
}

/* ==== MOTION EFFECTS FOR DYNAMIC CARDS ==== */
.knowledge-card.left {
  animation: bubbleLeft 5s ease-in-out infinite;
}

.knowledge-card.center {
  animation: pulseCenter 5s ease-in-out infinite;
  z-index: 2;
}

.knowledge-card.right {
  animation: bubbleRight 5s ease-in-out infinite;
}

@keyframes bubbleLeft {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(25px); }
}

@keyframes bubbleRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-25px); }
}

@keyframes pulseCenter {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}


{/*spotlight section styles */}

:root {
  /* Light theme colors */
  --background-color: #f9fafb;
  --text-color-primary: #111827;
  --text-color-secondary: #6b7280; /* Gray 500 */
  --color-indigo-primary: #6366f1;
  --color-indigo-hover: #4f46e5;
  --nav-background: #f3f4f6;
  --nav-border: #e5e7eb;
  --tab-active-background: #4f46e5;
  --tab-active-color: #ffffff;
  --box-shadow: rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] {
  /* Dark theme colors */
  --background-color: #121212;
  --text-color-primary: #e0e0e0;
  --text-color-secondary: #9ca3af;
  --color-indigo-primary: #818cf8;
  --color-indigo-hover: #6366f1;
  --nav-background: #1f2937;
  --nav-border: #374151;
  --tab-active-background: #6366f1;
  --tab-active-color: #e0e0e0;
  --box-shadow: rgba(0, 0, 0, 0.5);
}

/* Use variables in your styles */

.spotlight-section {
  padding: 4rem 1rem;
  background-color: var(--background-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: var(--text-color-primary);
}

.spotlight-container {
  max-width: 48rem;
  width: 100%;
  padding: 0 1rem;
}

.spotlight-header {
  text-align: center;
  margin-bottom: 3rem;
}

.spotlight-title {
  font-weight: 600;
  color: var(--color-indigo-primary);
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.05em;
}

.spotlight-subtitle {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-color-primary);
  margin-top: 0.5rem;
}

.spotlight-description {
  font-size: 1.125rem;
  color: var(--text-color-secondary);
  margin-top: 1rem;
}

.spotlight-content-wrapper {
  background: var(--background-color);
  border-radius: 1rem;
  box-shadow: 0 4px 20px var(--box-shadow);
  overflow: hidden;
}

.spotlight-content {
  padding: 2rem;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.spotlight-content.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.spotlight-content.fade-out {
  opacity: 0;
  transform: translateY(0.5rem);
}

.spotlight-category {
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-indigo-primary);
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.spotlight-post-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 1rem;
  color: var(--text-color-primary);
}

.spotlight-post-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.spotlight-post-link:hover {
  color: var(--color-indigo-hover);
}

.spotlight-post-meta {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-color-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bullet {
  font-weight: 900;
}

.spotlight-nav {
  background-color: var(--nav-background);
  border-top: 1px solid var(--nav-border);
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
  gap: 0.75rem;
  padding: 1rem;
}

.spotlight-tab {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  color: var(--text-color-primary);
  transition: background-color 0.3s, color 0.3s;
}

.spotlight-tab:hover {
  background-color: var(--nav-border);
}

.spotlight-tab.active {
  background-color: var(--tab-active-background);
  color: var(--tab-active-color);
}


{/* CTA Section */}
        .cta-section {
  position: relative;
  background: url('/images/agent1.jpg') center/cover no-repeat fixed; /* fixed background */
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



      `}</style>
    </div>
  );
};

export default Blog;
