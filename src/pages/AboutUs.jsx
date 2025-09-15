import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { FaEye, FaBullseye, FaCogs, FaCloud, FaRobot, FaShieldAlt, FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    hero: {
      title: 'About Me',
      paragraph: 'I’m a passionate freelance professional dedicated to crafting compelling stories and delivering exceptional content that drives results.',
      button: 'Reach Out Today',
      videoSrc: 'images/video3.mp4',
    },
    feature: {
      heading: 'Core features that set us apart from the competition',
      subheading: 'Explore our standout features designed to deliver exceptional performance and value, distinguishing us from the competition.',
      features: [
        { title: 'Real-time analytics', desc: 'Gain actionable insights with our real-time analytics feature.' },
        { title: 'Customizable reports', desc: 'Streamline your workflows with automated reports.' },
        { title: 'Mobile accessibility', desc: 'Manage your work on the go with our mobile-friendly platform.' },
        { title: 'Enhanced security', desc: 'Protect your sensitive data with state-of-the-art security measures.' }
      ]
    },
    vision: {
      heading: 'Our Vision',
      subheading: 'To empower freelancers worldwide by providing seamless tools, secure platforms, and intuitive services—enabling them to grow their businesses with confidence and scale their unique talents globally.',
      missionHeading: 'Our Mission',
      missionSubheading: 'To provide top-notch freelance management solutions—combining project tracking, client communications, and payment security—to help independent professionals thrive efficiently and sustainably.'
    },
    values: {
      heading: 'My Core Values',
      subheading: 'The principles guiding my freelance journey',
      list: [
        { icon: FaCloud, title: 'Cloud Innovation', description: 'Leveraging scalable cloud solutions to power your digital transformation.' },
        { icon: FaShieldAlt, title: 'Cybersecurity', description: 'Implementing robust security measures to protect your data and assets.' },
        { icon: FaRobot, title: 'AI & Automation', description: 'Harnessing artificial intelligence to increase efficiency and reduce errors.' },
        { icon: FaCogs, title: 'Custom Solutions', description: 'Tailored software and systems engineered to meet your specific business needs.' }
      ]
    },
    team: {
      heading: 'Leadership',
      subheading: 'Innovation driven by dedicated leaders',
      members: [
        {
          name: 'Aarav Sharma',
          role: 'Freelance Full Stack Developer',
          bio: 'Specializes in creating scalable web applications and custom backend solutions for global clients.',
        },
        {
          name: 'Priya Mehta',
          role: 'Freelance UI/UX Designer',
          bio: 'Designs intuitive digital experiences, focusing on clean interfaces and user-centered solutions.',
        },
        {
          name: 'Rahul Verma',
          role: 'Freelance Cybersecurity Consultant',
          bio: 'Helps startups and businesses secure their applications and cloud infrastructure with best practices.',
        },
        {
          name: 'Ananya Iyer',
          role: 'Freelance Digital Marketing Specialist',
          bio: 'Works with brands to boost online presence through SEO, content marketing, and growth strategies.',
        }
      ]
    },
    timeline: {
      heading: 'Our Journey',
      subheading: 'Key milestones in our growth',
      milestones: [
        { year: "2015", event: "Started Freelance Journey", description: "Began freelancing with a focus on delivering impactful digital solutions for clients worldwide." },
        { year: "2017", event: "First Major Project", description: "Successfully delivered a high-value project that established credibility and long-term client relationships." },
        { year: "2019", event: "Skill Expansion", description: "Enhanced expertise by learning new tools and advanced frameworks to meet complex client requirements." },
        { year: "2021", event: "Specialization in AI & Automation", description: "Started offering AI-driven solutions and process automation to help clients scale efficiently." },
        { year: "2023", event: "Global Freelance Network", description: "Worked with clients across different countries, building a strong international portfolio." }
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
    hero: {
      title: 'عني',
      paragraph: 'أنا محترف مستقل متحمس مكرس لصياغة قصص مؤثرة وتقديم محتوى استثنائي يدفع النتائج.',
      button: 'تواصل معنا اليوم',
      videoSrc: 'images/video3.mp4',
    },
    feature: {
      heading: 'الميزات الأساسية التي تميزنا عن المنافسة',
      subheading: 'اكتشف الميزات البارزة المصممة لتقديم أداء وقيمة استثنائية تميزنا عن المنافسة.',
      features: [
        { title: 'تحليلات في الوقت الحقيقي', desc: 'احصل على رؤى عملية مع ميزة التحليلات في الوقت الحقيقي.' },
        { title: 'تقارير قابلة للتخصيص', desc: 'سهل سير عملك مع التقارير التلقائية.' },
        { title: 'الوصول عبر الجوال', desc: 'إدارة عملك أثناء التنقل مع منصتنا المتوافقة مع الجوال.' },
        { title: 'أمان معزز', desc: 'حماية بياناتك الحساسة بإجراءات أمان متطورة.' }
      ]
    },
    vision: {
      heading: 'رؤيتنا',
      subheading: 'تمكين المستقلين حول العالم من خلال توفير أدوات سلسة ومنصات آمنة وخدمات سهلة الاستخدام — مما يمكنهم من تنمية أعمالهم بثقة وتوسيع مواهبهم الفريدة عالميًا.',
      missionHeading: 'مهمتنا',
      missionSubheading: 'توفير حلول إدارة للمستقلين عالية الجودة — تجمع بين تتبع المشاريع، تواصل العملاء، وأمان الدفع — لمساعدة المحترفين المستقلين على النجاح بكفاءة واستدامة.'
    },
    values: {
      heading: 'قيمنا الجوهرية',
      subheading: 'المبادئ التي توجه رحلتي كمستقل',
      list: [
        { icon: FaCloud, title: 'الابتكار السحابي', description: 'الاستفادة من حلول سحابية قابلة للتوسع من أجل التحول الرقمي.' },
        { icon: FaShieldAlt, title: 'الأمن السيبراني', description: 'تنفيذ تدابير أمن قوية لحماية بياناتك وأصولك.' },
        { icon: FaRobot, title: 'الذكاء الاصطناعي والأتمتة', description: 'تسخير الذكاء الاصطناعي لزيادة الكفاءة وتقليل الأخطاء.' },
        { icon: FaCogs, title: 'حلول مخصصة', description: 'برمجيات وأنظمة مصممة خصيصاً لتلبية احتياجات عملك.' }
      ]
    },
    team: {
      heading: 'القيادة',
      subheading: 'الابتكار بقيادة قادة ملتزمين',
      members: [
        {
          name: 'أراف شارما',
          role: 'مطور برمجيات حر متكامل',
          bio: 'متخصص في إنشاء تطبيقات ويب قابلة للتوسع وحلول خلفية مخصصة لعملاء عالميين.',
        },
        {
          name: 'برِيا ميهتا',
          role: 'مصممة تجربة مستخدم/واجهة مستخدم حرة',
          bio: 'تصمم تجارب رقمية بديهية مع التركيز على واجهات نظيفة وحلول تتمحور حول المستخدم.',
        },
        {
          name: 'راهول فيرما',
          role: 'استشاري أمن سيبراني حر',
          bio: 'يساعد الشركات الناشئة والمؤسسات على تأمين تطبيقاتها وبنيتها التحتية السحابية وفق أفضل الممارسات.',
        },
        {
          name: 'أنانيا آير',
          role: 'متخصصة تسويق رقمي حرة',
          bio: 'تعزز حضور العلامات التجارية رقميًا عبر تحسين محركات البحث والتسويق بالمحتوى واستراتيجيات النمو.',
        }
      ]
    },
    timeline: {
      heading: 'رحلتنا',
      subheading: 'محطات رئيسية في نمونا',
      milestones: [
        {
          year: "2015",
          event: "بدء رحلة العمل الحر",
          description: "بدأت العمل الحر مع التركيز على تقديم حلول رقمية مؤثرة للعملاء حول العالم."
        },
        {
          year: "2017",
          event: "المشروع الرئيسي الأول",
          description: "تم إنجاز مشروع كبير بنجاح مما أسس لمصداقية وعلاقات طويلة الأمد مع العملاء."
        },
        {
          year: "2019",
          event: "توسيع المهارات",
          description: "تعزيز الخبرة بتعلم أدوات وإطارات جديدة لتلبية متطلبات العملاء المعقدة."
        },
        {
          year: "2021",
          event: "تخصص في الذكاء الاصطناعي والأتمتة",
          description: "بدء تقديم حلول الذكاء الاصطناعي والأتمتة لمساعدة العملاء على التوسع بكفاءة."
        },
        {
          year: "2023",
          event: "شبكة عالمية",
          description: "العمل مع عملاء من مختلف الدول وبناء محفظة دولية قوية."
        }
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
    hero: {
      title: 'עליי',
      paragraph: 'אני מקצוען פרילנסרים נלהב המוקדש לסיפורים ולתוכן יוצא דופן שמביא תוצאות.',
      button: 'צור קשר היום',
      videoSrc: 'images/video3.mp4',
    },
    feature: {
      heading: 'תכונות מרכזיות שמבדילות אותנו מהמתחרים',
      subheading: 'גלה את התכונות המובילות שלנו שמספקות ביצועים וערך יוצאי דופן ומבדילות אותנו.',
      features: [
        { title: 'אנליטיקה בזמן אמת', desc: 'קבל תובנות מעשיות עם אנליטיקה בזמן אמת.' },
        { title: 'דוחות מותאמים אישית', desc: 'ייעל את זרימות העבודה שלך עם דוחות אוטומטיים.' },
        { title: 'נגישות לנייד', desc: 'נהל את העבודה שלך בדרכים עם הפלטפורמה הניידת שלנו.' },
        { title: 'אבטחה משופרת', desc: 'הגן על המידע שלך עם אמצעי אבטחה מתקדמים.' }
      ]
    },
    vision: {
      heading: 'החזון שלנו',
      subheading: 'להעצים פרילנסרים בכל העולם ע״י כלים חלקים, פלטפורמות מאובטחות ושירותים אינטואיטיביים—לאפשר להם להרחיב את עסקיהם ולגדול בכישרונותיהם הייחודיים בעולם.',
      missionHeading: 'המשימה שלנו',
      missionSubheading: 'לתת פתרונות ניהול פרילנסרים מהשורה הראשונה—הכוללים מעקב אחר פרויקטים, תקשורת לקוחות ואבטחת תשלומים—כדי לעזור לאנשי מקצוע עצמאיים לשגשג ביעילות ובקיימות.'
    },
    values: {
      heading: 'הערכים שלי',
      subheading: 'העקרונות שמובילים את המסע שלי כפרילנסר',
      list: [
        { icon: FaCloud, title: 'חדשנות בענן', description: 'שימוש בפתרונות ענן הניתנים להרחבה להובלת הטרנספורמציה הדיגיטלית שלך.' },
        { icon: FaShieldAlt, title: 'סייבר סקיוריטי', description: 'יישום אבטחת מידע מתקדמת כדי להגן על הנתונים שלך.' },
        { icon: FaRobot, title: 'בינה מלאכותית ואוטומציה', description: 'הטמעת בינה מלאכותית לשיפור יעילות ולצמצום שגיאות.' },
        { icon: FaCogs, title: 'פתרונות מותאמים', description: 'תכנה ומערכות מותאמות אישית כדי לענות לצרכים העסקיים שלך.' }
      ]
    },
    team: {
      heading: 'הנהלה',
      subheading: 'חדשנות מונהגת ע״י מנהיגים מחויבים',
      members: [
        {
          name: 'אהרב שארמה',
          role: 'מפתח פול סטאק פרילנס',
          bio: 'מתמחה ביצירת יישומי ווב סקיילבוליים ופתרונות בקאנד מותאמים אישית ללקוחות בכל העולם.',
        },
        {
          name: 'פריה מהטה',
          role: 'מעצבת UI/UX פרילנס',
          bio: 'מעצבת חוויות דיגיטליות ידידותיות, עם דגש על ממשקים נקיים ופתרונות ממוקדי משתמש.',
        },
        {
          name: 'רהול ורמה',
          role: 'יועץ סייבר פרילנס',
          bio: 'מסייע לחברות וסטארטאפים לאבטח מערכותיהם בענן ובאפליקציות בהתאם למיטב הנהלים.',
        },
        {
          name: 'אנניה אייר',
          role: 'יועצת שיווק דיגיטלי פרילנס',
          bio: 'עובדת עם מותגים כדי לשפר נוכחות ברשת באמצעות SEO, תוכן ואסטרטגיות צמיחה.',
        }
      ]
    },
    timeline: {
      heading: 'המסע שלנו',
      subheading: 'אבני דרך עיקריות בצמיחתנו',
      milestones: [
        { year: "2015", event: "תחילת הדרך כפרילנסר", description: "התחלתי כפרילנסר עם דגש על פתרונות דיגיטליים משמעותיים ללקוחות בעולם." },
        { year: "2017", event: "פרויקט מרכזי ראשון", description: "הושלם בהצלחה פרויקט משמעותי, שנבנו בעקבותיו יחסים ארוכי טווח עם לקוחות." },
        { year: "2019", event: "הרחבת מיומנויות", description: "העמקת הידע וטכנולוגיות מתקדמות למענה לדרישות לקוח מורכבות." },
        { year: "2021", event: "התמחות ב-AI ואוטומציה", description: "מתן פתרונות מבוססי AI ואוטומציה המאפשרים ללקוחות להתרחב ביעילות." },
        { year: "2023", event: "כניסה לרשת גלובלית", description: "עבודה עם לקוחות ממדינות שונות — בניית תיק עבודות בינלאומי מוצלח." }
      ]
    },
    cta: {
      heading: 'מוכן לשדרג את העסק?',
      paragraph: 'התחל עוד היום בייעוץ חינם וגלה כיצד נוכל לעזור לך להגשים את היעדים שלך.',
      btnStart: 'התחל את המסע שלך',
      btnLearnMore: 'למידע נוסף עלינו',
    }
  }
};

const teamImages = [
  'images/freelancerabout1.jpg',
  'images/freelancerabout2.jpg',
  'images/freelancerabout4.jpg',
  'images/freelancerabout3.jpg'
];
const teamSocial = [
  {
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/login',
    github: 'https://github.com/'
  },
  {
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/login',
    github: 'https://github.com/'
  },
  {
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/login',
    github: 'https://github.com/'
  },
  {
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/login',
    github: 'https://github.com/'
  }
];

const AboutUs = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  useEffect(() => { document.title = t.hero.title; }, [t.hero.title]);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const marqueeRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = "paused";
    const handleMouseLeave = () => marquee.style.animationPlayState = "running";
    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    const observer = new IntersectionObserver(([entry]) => {
      marquee.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
    }, { threshold: 0.1 });
    observer.observe(marquee);
    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

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

      {/* Freelancer Feature Section */}
      <section className="freelancer-feature-section">
        <h2 className="freelancer-feature-heading">{t.feature.heading}</h2>
        <p className="freelancer-feature-subheading">{t.feature.subheading}</p>
        <div className="freelancer-feature-grid">
          <div className="freelancer-feature-col">
            <div className="freelancer-feature-card">
              <div className="freelancer-feature-icon analytics">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="11" width="3" height="7" rx="1.5" fill="#fff"/>
                  <rect x="10.5" y="6" width="3" height="12" rx="1.5" fill="#fff"/>
                  <rect x="17" y="3" width="3" height="15" rx="1.5" fill="#fff"/>
                </svg>
              </div>
              <div>
                <div className="freelancer-feature-title">{t.feature.features[0].title}</div>
                <div className="freelancer-feature-desc">{t.feature.features[0].desc}</div>
              </div>
            </div>
            <div className="freelancer-feature-card">
              <div className="freelancer-feature-icon reports">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="6" width="14" height="2" rx="1" fill="#fff"/>
                  <rect x="5" y="11" width="10" height="2" rx="1" fill="#fff"/>
                  <rect x="5" y="16" width="7" height="2" rx="1" fill="#fff"/>
                </svg>
              </div>
              <div>
                <div className="freelancer-feature-title">{t.feature.features[1].title}</div>
                <div className="freelancer-feature-desc">{t.feature.features[1].desc}</div>
              </div>
            </div>
          </div>
          <div className="freelancer-feature-center">
            <img className="freelancer-feature-image" src="images/freelancer15.jpg" alt="Freelancer at work" />
          </div>
          <div className="freelancer-feature-col">
            <div className="freelancer-feature-card">
              <div className="freelancer-feature-icon mobile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="2" width="10" height="20" rx="2" fill="#fff"/>
                  <rect x="10" y="18" width="4" height="2" rx="1" fill="#bbb"/>
                </svg>
              </div>
              <div>
                <div className="freelancer-feature-title">{t.feature.features[2].title}</div>
                <div className="freelancer-feature-desc">{t.feature.features[2].desc}</div>
              </div>
            </div>
            <div className="freelancer-feature-card">
              <div className="freelancer-feature-icon security">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3C7 5 5 7 5 12v3c0 1.6.5 2.2 2 3 1.2.6 3.6 1.3 5 1.5 1.4-.2 3.8-.9 5-1.5 1.5-.8 2-1.4 2-3v-3c0-5-2-7-7-9z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <div className="freelancer-feature-title">{t.feature.features[3].title}</div>
                <div className="freelancer-feature-desc">{t.feature.features[3].desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section ref={ref} className={`vision-mission-row ${inView ? 'active' : ''}`}>
        <div className="media-card video-card">
          <video autoPlay muted loop playsInline poster="/videos/poster.jpg" className={inView ? 'active' : ''}>
            <source src={t.hero.videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="content-card">
          <motion.div className="vision-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
            <div className="card-header">
              <FaEye className="card-icon" />
              <h3>{t.vision.heading}</h3>
            </div>
            <p className="justified-text">{t.vision.subheading}</p>
          </motion.div>
          <motion.div className="mission-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
            <div className="card-header">
              <FaBullseye className="card-icon" />
              <h3>{t.vision.missionHeading}</h3>
            </div>
            <p className="justified-text">{t.vision.missionSubheading}</p>
          </motion.div>
        </div>
      </section>

      {/* Values section */}
      <section className="values-section full-width">
        <div className="sectionss-header text-center">
          <h2>{t.values.heading}</h2>
          <p>{t.values.subheading}</p>
        </div>
        <div className="values-marquee-outer">
          <div className="values-marquee-inner" ref={marqueeRef}>
            {[...t.values.list, ...t.values.list].map((value, idx) => (
              <div className="value-card" key={idx}>
                <value.icon className="value-icon" />
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section team-section full-width">
        <div className="sections-header text-center">
          <h2>{t.team.heading}</h2>
          <p>{t.team.subheading}</p>
        </div>
        <div className="team-grid">
          {t.team.members.map((member, idx) => (
            <div className="team-card leader-card" key={idx} onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}>
              <div className="team-image leader-image">
                <img src={teamImages[idx]} alt={member.name} />
                <div className={'leader-overlay' + (openIndex === idx ? ' open' : '')}>
                  <div className="leader-overlay-content">
                    <h4>{member.name}</h4>
                    <span className="team-role">{member.role}</span>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-social">
                      <a href={teamSocial[idx].linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                      <a href={teamSocial[idx].twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                      <a href={teamSocial[idx].github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline section */}
      <section className="section timeline-section full-width">
        <motion.div className="section-header text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>{t.timeline.heading}</h2>
          <p>{t.timeline.subheading}</p>
        </motion.div>
        <div className="timeline">
          {t.timeline.milestones.map((milestone, index) => (
            <motion.div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h4>{milestone.event}</h4>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="container">
            <motion.div className="cta-content text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2>{t.cta.heading}</h2>
              <p>{t.cta.paragraph}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">{t.cta.btnStart} <FaArrowRight /></Link>
                <Link to="/about" className="btn btn-outline btn-large">{t.cta.btnLearnMore}</Link>
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

        {/*about freelancer*/}

:root {
  --feature-bg: #fafbfd;
  --card-bg: #fff;
  --card-border-gradient: linear-gradient(135deg, #715dfa 0%, #5ac5ff 100%);
  --card-inside-bg: #f5f8fe;
  --heading-color: #222;
  --icon-analytics: linear-gradient(135deg, #193273 0%, #317adf 100%);
  --icon-reports: linear-gradient(135deg, #4b3e8a 0%, #8d5bfb 100%);
  --icon-mobile: linear-gradient(135deg, #217591 0%, #30c0d0 100%);
  --icon-security: linear-gradient(135deg, #686eb6 0%, #fb8f00 100%);
  --feature-title: #263253;
  --feature-desc: #667085;
  --feature-subheading: #555;
  --feature-shadow: 0 10px 30px rgba(67, 60, 149, 0.15);
  --feature-img-shadow: 0 6px 28px rgba(30,40,80,0.08);
}

[data-theme="dark"] {
  --feature-bg: #16191f;
  --card-bg: #222733;
  --card-border-gradient: linear-gradient(135deg, #958fed 0%, #62e0e8 100%);
  --card-inside-bg: #2a2f44;
  --heading-color: #fff;
  --icon-analytics: linear-gradient(135deg, #1d3860 0%, #317adf 100%);
  --icon-reports: linear-gradient(135deg, #6955d5 0%, #958fed 100%);
  --icon-mobile: linear-gradient(135deg, #178086 0%, #30c0d0 100%);
  --icon-security: linear-gradient(135deg, #958fed 0%, #ce8f3d 100%);
  --feature-title: #d7dffa;
  --feature-desc: #aab0c7;
  --feature-subheading: #a1a8bb;
  --feature-shadow: 0 10px 30px rgba(30, 35, 60, 0.4);
  --feature-img-shadow: 0 6px 32px rgba(10,24,44,0.2);
}

.freelancer-feature-section {
  padding: 54px 0 48px;
  background: var(--feature-bg);
  text-align: center;
}

.freelancer-feature-heading {
  font-size: 2.18rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--heading-color);
  letter-spacing: -0.5px;
}

.freelancer-feature-subheading {
  color: var(--feature-subheading);
  font-size: 1.16rem;
  margin-bottom: 33px;
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
}

.freelancer-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 39px 52px;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
}

/* Left and right columns */
.freelancer-feature-col {
  display: flex;
  flex-direction: column;
  gap: 27px;
}

/* Gradient border card */
.freelancer-feature-card {
  position: relative;
  padding: 20px 24px;
  background: var(--card-inside-bg);
  border-radius: 24px;
  box-shadow: var(--feature-shadow);
  color: var(--feature-desc);
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}
/* Gradient border: double background trick */
.freelancer-feature-card::before {
  content: "";
  position: absolute;
  top: -3px; bottom: -3px;
  left: -3px; right: -3px;
  background: var(--card-border-gradient);
  border-radius: 27px;
  z-index: 0;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

/* Content above gradient */
.freelancer-feature-card > * {
  position: relative;
  z-index: 1;
}

.freelancer-feature-card .freelancer-feature-icon {
  border-radius: 14px;
  font-size: 1.5rem;
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: 0 6px 12px rgba(39, 52, 140, 0.24);
  background: var(--icon-analytics); /* default icon background */
}

/* Icon colors */
.freelancer-feature-icon.analytics { background: var(--icon-analytics); }
.freelancer-feature-icon.reports { background: var(--icon-reports); }
.freelancer-feature-icon.mobile { background: var(--icon-mobile); }
.freelancer-feature-icon.security { background: var(--icon-security); }

.freelancer-feature-card .freelancer-feature-title {
  margin: 0 0 5px 0;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--feature-title);
  letter-spacing: -0.02em;
}

.freelancer-feature-card .freelancer-feature-desc {
  margin: 0;
  font-size: 1rem;
  color: var(--feature-desc);
  opacity: 0.9;
}

.freelancer-feature-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 230px;
  min-height: 310px;
}

.freelancer-feature-center img {
  border-radius: 20px;
  width: 280px;
  height: 310px;
  object-fit: cover;
  box-shadow: var(--feature-img-shadow);
}

/* Responsive */
@media (max-width: 1100px) {
  .freelancer-feature-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 32px;
  }
  .freelancer-feature-center {
    grid-column: 1 / -1;
    min-width: 180px;
  }
}

@media (max-width: 700px) {
  .freelancer-feature-grid {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .freelancer-feature-col, .freelancer-feature-center {
    width: 100%;
    min-width: 0;
  }
  .freelancer-feature-center img {
    width: 80vw;
    height: 220px;
  }
  .freelancer-feature-section {
    padding: 24px 0 16px;
  }
}


          {/*about story */}
          :root {
  --aboutit-bg: #fff;
  --aboutit-card-bg: #f4f8fb;
  --aboutit-sidebar-bg: #f0f1fa;
  --aboutit-shadow: 0 2px 16px 0 rgba(40,52,80,.10);
  --aboutit-shadow-hover: 0 8px 32px rgba(30,58,138,0.15), 0 1.5px 10px rgba(40,52,80,0.11);
  --aboutit-heading: #1e2b5c;
  --aboutit-text: #16181f;
}
[data-theme="dark"] {
  --aboutit-bg: #171923;
  --aboutit-card-bg: #24263b;
  --aboutit-sidebar-bg: #181c29;
  --aboutit-shadow: 0 2px 16px 0 rgba(10,20,40,.22);
  --aboutit-shadow-hover: 0 8px 32px rgba(100,130,200,0.22), 0 1.5px 10px rgba(20,29,50,0.2);
  --aboutit-heading: #e3ebfc;
  --aboutit-text: #e2e6f3;
}

.aboutit-section {
  background: var(--aboutit-bg);
  padding-bottom: 60px;
  margin: 0 auto 58px auto;
  max-width: 1600px;
  transition: background 0.3s, color 0.3s;
}
.aboutit-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 56px;
  background: var(--aboutit-card-bg);
  border-radius: 28px;
  box-shadow: var(--aboutit-shadow);
  padding: 0 40px;
  margin-bottom: 30px;
  position: relative;
  min-height: 500px;
}

.aboutit-image-stack {
  position: relative;
  min-width: 340px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.aboutit-card-main {
  position: absolute;
  width: 450px;
  height: 410px;
  left: 0;
  top: 0;
  box-shadow: var(--aboutit-shadow-hover);
  border-radius: 24px;
  background: var(--aboutit-card-bg);
  overflow: hidden;
  animation: aboutit-float-main 5s ease-in-out infinite;
}
.aboutit-card-small {
  position: absolute;
  width: 410px;
  height: 335px;
  left: 200px;
  top: 190px;
  z-index: 2;
  box-shadow: var(--aboutit-shadow-hover);
  border-radius: 18px;
  background: var(--aboutit-card-bg);
  overflow: hidden;
  
  animation: aboutit-float-small 7.5s ease-in-out infinite;
}
.aboutit-card-main img,
.aboutit-card-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
  background: var(--aboutit-card-bg);
}
@keyframes aboutit-float-main {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-24px);}
}
@keyframes aboutit-float-small {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(18px);}
}

.aboutit-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 24px;
  max-width: 540px;
  padding-left: 10px;
  z-index: 2;
}
.aboutit-content h2 {
  font-size: 2.1rem;
  color: var(--aboutit-heading);
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.15;
  transition: color 0.25s;
}
.aboutit-content p {
  font-size: 1.11rem;
  color: var(--aboutit-text);
  line-height: 1.8;
  margin-bottom: 0;
  transition: color 0.25s;
}

/* Responsive for tablet/mobile */
@media (max-width: 1024px) {
  .aboutit-grid {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 32px 8px;
  }
  .aboutit-image-stack {
    min-width: unset;
    min-height: 300px;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .aboutit-card-main { width: 92vw; max-width: 320px; height: 36vw; max-height: 320px;}
  .aboutit-card-small { width: 46vw; max-width: 178px; height: 22vw; max-height: 88px; left: 62px; top: 130px;}
  .aboutit-content { padding: 0;}
}
@media (max-width: 600px) {
  .aboutit-section { padding: 0 4px; }
  .aboutit-grid { padding: 0 2px; gap: 12px; }
  .aboutit-image-stack { min-width: unset; min-height: 120px; margin-top: 8px; margin-bottom: 4px; }
  .aboutit-card-main { min-width: 100px; width: 96vw; height: 28vw; max-width: 160px; max-height: 100px; left: 0; top: 0; }
  .aboutit-card-small { min-width: 60px; width: 32vw; height: 13vw; max-width: 60px; max-height: 28px; left: 18px; top: 38px; }
  .aboutit-content { padding: 0 2px; }
  .aboutit-content h2 { font-size: 1rem; }
  .aboutit-content p { font-size: 0.92rem; }
}

          <section className="about-story">
            <h2>Our Story</h2>
            <p>
              At ForStackly, we believe in the power of technology to transform businesses. Our journey began in 2015 with a vision to provide innovative IT solutions that drive success. Over the years, we have evolved into a trusted partner for organizations seeking to navigate the digital landscape.
            </p>
            <p>
              Our team of experts is passionate about leveraging the latest technologies to deliver tailored solutions that meet the unique needs of each client. We take pride in our collaborative approach, working closely with stakeholders to ensure alignment and achieve desired outcomes.
            </p>
          </section>

        /* ===== Two Column Grid (equal height) ===== */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 48px;
    background: var(--card-bg);              /* Card background for both themes */
    border-radius: 24px;
    box-shadow: var(--shadow);               /* Soft shadow for premium look */
    padding: 0 40px;
    margin-bottom: 40px;
  }

  .story-section {
    background: var(--card-bg);           /* Uses your theme variable *
    box-shadow: var(--shadow);
    padding: 0 0;
    margin: 0 auto 56px auto;
    max-width: 1600px;                    /* Optional: constrain max width */
    transition: background 0.3s, color 0.3s;
  }

  .story-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    gap: 28px;
    padding-right: 20px;
  }

  .story-content h2 {
    font-size: 2.4rem;
    color: var(--heading-color);
    margin-bottom: 18px;
    font-weight: 800;
    line-height: 1.15;
  }

  .story-content p {
    font-size: 1.15rem;
    color: var(--text-color);
    line-height: 1.8;
    margin-bottom: 0;
    max-width: 560px;
  }

  .story-visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-image {
    width: 100%;
    min-height: 500px;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-hover);
    background: var(--sidebar-bg);            /* subtle background for image area in both themes */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-image img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    display: block;
    border-radius: 18px;
  }

  /* Responsive: stack columns on tablet/mobile */
  @media (max-width: 1024px) {
    .grid-2 {
      grid-template-columns: 1fr;
      padding: 32px 14px;
      min-height: unset;
      border-radius: 16px;
    }
    .story-content {
      padding-right: 0;
    }
    .story-image {
      min-height: 340px;
      margin-top: 24px;
    }
  }
  @media (max-width: 768px) {
    .story-content h2 { font-size: 1.7rem; }
    .story-content p { font-size: 1rem; }
    .story-image { min-height: 200px; }
  }


  /* ===Vission Section (Theme-Based) ===== */
.vision-mission-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2.5rem;
  background: var(--bg-color);
  padding: 2rem 0;
}

.media-card {
  flex: 1.1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border-radius: 22px;
  box-shadow: var(--shadow);
  overflow: hidden;
  min-width: 320px;
  max-width: 500px;
  min-height: 340px;
  margin: 0 0 0 2rem;
}

.media-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: none;
  border-radius: 0;
  transition: filter 0.4s;
  background: var(--card-bg);
}

.content-card {
  flex: 1.28 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vision-card,
.mission-card {
  background: var(--card-bg);
  border-radius: 18px;
  box-shadow: var(--shadow);
  border: 1.5px solid var(--border-color);
  margin-bottom: 1.6rem;
  padding: 2rem 2.8rem;
  transition: box-shadow 0.3s;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.card-header h3 {
  margin-left: 0.7rem;
  font-size: 1.4rem;
  color: var(--heading-color);
  font-weight: 600;
}
.card-icon {
  font-size: 1.6rem;
  color: var(--primary-color);
}
.justified-text {
  text-align: justify;
  color: var(--text-color);
  line-height: 1.7;
  font-size: 1.07rem;
}

/* ============= RESPONSIVE: Vision & Mission Section ============= */

/* Tablet (≤1024px) */
@media (max-width: 1024px) {
  .vision-mission-row {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .media-card {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    min-height: 300px;
  }

  .content-card {
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
  }

  .vision-card,
  .mission-card {
    padding: 1.8rem 2rem;
    margin-bottom: 1.5rem;
  }

  .card-header h3 {
    font-size: 1.3rem;
  }

  .justified-text {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
  }
}

/* Mobile (≤768px) */
@media (max-width: 768px) {
  .vision-mission-row {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }

  .media-card {
    width: 100%;
    max-width: 100%;
    margin: 0;
    min-height: 220px;
    border-radius: 16px;
  }

  .content-card {
    width: 100%;
    text-align: left;
  }

  .vision-card,
  .mission-card {
    padding: 1.5rem;
    border-radius: 14px;
  }

  .card-header h3 {
    font-size: 1.8rem;
  }

  .card-icon {
    font-size: 1.4rem;
  }

  .justified-text {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: justify;
  }
}

/* Small Mobile (≤480px) */
@media (max-width: 480px) {
  html, body, #root, .home-page, .aboutit-section, .aboutit-grid, .hero-section, .hero-overlay, .hero-content {
    width: 100vw !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }
  .hero-title, .hero-paragraph, .hero-button { margin-right: 0 !important; }
  header { left: 0; right: 0; width: 100vw !important; max-width: 100vw !important; }

  .vision-card,
  .mission-card {
    padding: 1.2rem;
  }

  .card-header h3 {
    font-size: 1.1rem;
  }

  .card-icon {
    font-size: 1.2rem;
  }

  .justified-text {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}





          /* ===== Values Section (Theme-Based) ===== */
.values-section {
  background: var(--card-bg);
  padding: 80px 24px;
  overflow: hidden;
}

.section-header h2 {
  margin: 0 0 6px;
  font-size: 2rem;
  color: var(--heading-color);
}

.section-header p {
  color: var(--text-color);
  margin: 0 0 24px;
}

/* Marquee container */
.values-marquee-outer {
  width: 100vw;
  overflow: hidden;
  margin: 0 -32px;
  padding: 10px 0;
  position: relative;
}
.values-marquee-inner {
  display: flex;
  gap: 32px;
  animation: marquee-scroll 32s linear infinite;
  will-change: transform;
}
@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.values-marquee-inner:hover {
  animation-play-state: paused;
}

/* Value card styling */
.value-card {
  flex: 0 0 340px;
  background: var(--card-bg);
  padding: 32px 22px;
  border-radius: 18px;
  text-align: center;
  box-shadow: var(--shadow);
  border: 2.5px solid transparent;
  background-clip: padding-box;
  margin-bottom: 10px;
  min-height: 240px;
  transition: 
    transform 0.28s cubic-bezier(.45,.03,.44,1.01), 
    box-shadow .28s, 
    border .38s;
  position: relative;
}
.value-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-10px) scale(1.038);
  border: 2.5px solid var(--primary-color);
  z-index: 2;
}
.value-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  color: var(--primary-color);
  margin-bottom: 16px;
  width: 100%;
  height: 48px;
}
.value-card h4 {
  font-size: 1.22rem;
  color: var(--heading-color);
  margin-bottom: 8px;
  margin-top: 0;
  font-weight: bold;
}
.value-card p {
  color: var(--text-color);
  margin: 0;
  font-size: 1.1rem;
}

/* SCROLLBAR for Marquee */
.values-marquee-outer::-webkit-scrollbar,
.values-marquee-inner::-webkit-scrollbar {
  height: 8px;
  background: var(--card-bg);
}
.values-marquee-inner::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 6px;
}
.values-marquee-inner::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* Responsive: shrink card width and icon size */
@media (max-width: 700px) {
  .aboutit-section { padding: 0; width: 100vw; margin: 0; }
  .aboutit-grid { padding: 0; gap: 12px; width: 100vw; margin: 0; }
  .hero-section, .hero-overlay, .hero-content { width: 100vw !important; margin: 0 !important; padding-right: 0 !important; box-sizing: border-box; }
  .hero-title, .hero-paragraph, .hero-button { margin-right: 0 !important; }
  .section-header h2 { font-size: 1.18rem;}
}


          /* ===== Team ===== */
/* ===================== TEAM SECTION ===================== */
.team-section {
  background: var(--sidebar-bg, #f7f8f9);
  padding: 40px 0;
  margin-top: -70px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.leader-card {
  background: none;
  box-shadow: none;
  border: none;
  padding: 0;
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
}

/* Responsive aspect-ratio for images */
.leader-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;           /* Use 4:3 landscape for best visibility */
  overflow: hidden;
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: box-shadow 0.25s;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 18px;
  filter: brightness(0.97);
  transition: filter 0.28s;
}

.leader-card:hover .leader-image,
.leader-card:active .leader-image {
  box-shadow: var(--shadow-hover);
}

.leader-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(15,24,32,0.92), rgba(31,41,51,0.95), rgba(0,120,240,0.65));
  color: #fff;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.38s cubic-bezier(.81,-0.02,.18,1.04);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.leader-overlay.open {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.25s cubic-bezier(.85,.03,.45,.96);
}

.leader-overlay-content {
  text-align: center;
  padding: 0 15px;
}

.leader-overlay h4 {
  color: #fff;
  font-size: 1.25rem;
  margin: 0 0 7px 0;
  font-weight: 700;
}
.leader-overlay .team-role {
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
}
.leader-overlay .team-bio {
  color: #fff;
  font-size: 0.98rem;
  margin: 7px 0 21px 0;
  line-height: 1.6;
}
.team-social {
  display: flex;
  justify-content: center;
  gap: 13px;
  margin-top: 10px;
}
.team-social a {
  color: #fff;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.26rem;
  transition: background 0.18s, color 0.18s;
}
.team-social a:hover {
  background: var(--primary-color, #0b5e2b);
  color: #fff;
}

/* ========== TABLET (≤1024px) ========== */
@media (max-width: 1024px) {
  .team-section { padding: 30px 0; }
  .team-grid { gap: 20px; }
  .leader-card { max-width: 340px; }
}

@media (max-width: 900px) {
  .team-grid { gap: 16px; }
  .leader-card { max-width: 97vw; }
}

/* ========== MOBILE (≤768px) ========== */
@media (max-width: 768px) {
  .team-section { padding: 20px 0; }
  .team-grid { grid-template-columns: 1fr; gap: 18px; }
  .leader-card { max-width: 99vw; }
  .leader-image { border-radius: 14px; aspect-ratio: 4/3; }
  .leader-overlay-content { padding: 0 10px; }
  .leader-overlay h4 { font-size: 1.1rem; }
  .leader-overlay .team-role { font-size: 0.95rem; }
  .leader-overlay .team-bio { font-size: 0.9rem; line-height: 1.5; }
  .team-social a { width: 34px; height: 34px; font-size: 1.1rem; }
}

/* ========== SMALL MOBILE (≤480px) ========== */
@media (max-width: 480px) {
  .leader-card { max-width: 100vw; }
  .leader-image { border-radius: 9px; aspect-ratio: 1; }
  .leader-overlay h4 { font-size: 1rem; }
  .leader-overlay .team-role { font-size: 0.88rem; }
  .leader-overlay .team-bio { font-size: 0.85rem; }
  .team-social a { width: 30px; height: 30px; font-size: 1rem; }
}


        /* ===== Timeline ===== */
  .timeline-section {
  background: #ffffff; /* fixed white background overrides var(--bg-color) */
  padding: 80px 0;
  border-radius: 24px;
  box-shadow: var(--shadow);
  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  position: relative;
}
.section-header.text-center h2 {
  color: #000000;
  transition: color 0.19s ease;
}

.section-header.text-center p {
  color: #000000;
  transition: color 0.3s ease;
}




/* Vertical timeline line */

 .timeline-section,
.timeline,
.timeline * {
  direction: ltr !important;
}
  
.timeline {
  position: relative;
  width: 100%;
  padding: 10px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background: var(--secondary-color);
  top: 20px;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 2px;
}

/* Timeline items */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 30px 50px;
  box-sizing: border-box;
}

.timeline-item.left {
  left: 0;
  text-align: right;
}

.timeline-item.right {
  left: 50%;
  text-align: left;
}

/* Timeline dots */
.timeline-item::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--accent-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  top: 30px;
  box-shadow: var(--shadow);
  transition: background 0.3s, border-color 0.3s;
}

.timeline-item.left::after {
  right: -13px;
}

.timeline-item.right::after {
  left: -13px;
}

/* Card container */
.timeline-content {
  position: relative;
  background: var(--card-bg);       /* Theme-aware: white (light) or dark card (dark mode) */
  color: var(--text-color);         /* Theme-aware */
  padding: 30px 28px;
  border-radius: 20px;
  box-shadow: var(--shadow-light);  /* Theme-aware shadow */
  display: inline-block;
  max-width: 600px;
  border: none;
  z-index: 1;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
}

.timeline-content::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2.5px; /* border thickness */
  border-radius: 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color), var(--secondary-color));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
  pointer-events: none;
  transition: background 0.3s;
}


/* Year badge */
.timeline-year {
  background: var(--primary-color);
  color: #fff;
  padding: 8px 18px;
  border-radius: 28px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-size: 1rem;
}

/* Title */
.timeline-content h4 {
  color: var(--heading-color);
  margin: 0 0 12px;
  font-size: 1.3rem;
  font-weight: 700;
}

/* Description */
.timeline-content p {
  color: var(--text-muted);
  margin: 0;
  line-height: 1.65;
  font-size: 1.05rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .timeline::before {
    left: 24px;
  }
  .timeline-item {
    width: 100%;
    padding-left: 72px;
    padding-right: 24px;
    text-align: left;
  }
  .timeline-item.left,
  .timeline-item.right {
    left: 0;
  }
  .timeline-item::after {
    left: 15px;
    right: auto;
  }
}

{/* CTA Section */}
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
        `}</style>
      </div>
    );
  };

  export default AboutUs;
