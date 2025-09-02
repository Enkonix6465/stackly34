import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaUserPlus,
  FaChartBar,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
  FaTable,
  FaRegCalendarAlt,
  FaClipboardList,
  FaDoorOpen,
  FaUserCircle,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

// COLORS FIX: Defining COLORS CONSTANT AT THE TOP!
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

const translations = {
  en: {
    adminDashboard: "Admin Dashboard",

    newUser: "New User",
    users: "Users",
    dashboard: "Dashboard",
    registrations: "Registrations",
    tickets: "Tickets",
    contacts: "Contact Queries",
    sessions: "Active Sessions",
    audit: "Audit Log",
    logout: "Logout",
    totalUsers: "Total Users",
    registeredToday: "Registered Today",
    thisMonth: "This Month",
    openTickets: "Open Tickets",
    userFName: "First Name",
    userLName: "Last Name",
    userEmail: "Email",
    userSignupDate: "Signup Date",
    userSignupTime: "Signup Time",
    actions: "Actions",
    deleteUser: "Delete User",
    noUsers: "No users found.",
    registrationAnalytics: "Registration Analytics",
    today: "Today",
    last7: "Last 7 Days",
    monthLabel: "Month",
    allTime: "All-Time",
    regChartTitle: "User Registrations by Day",
    regStats: "Registration Stats",
    createUserTitle: "Register New User",
    createTicketTitle: "Create Ticket",
    newTicket: "New Ticket",
    supportTickets: "Support Tickets",
    ticketId: "ID",
    ticketTitle: "Title",
    ticketStatus: "Status",
    ticketAssigned: "Assigned To",
    ticketDue: "Due Date",
    ticketSubmitter: "Submitted By",
    ticketCreated: "Created",
    resolve: "Resolve",
    delete: "Delete",
    noTickets: "No tickets found.",
    registrationByDay: "Registrations (last {d}d)",
    user: "User",
    email: "Email",
    loginTime: "Login Time",
    date: "Date",
    detail: "Details",
    noActions: "No recent actions.",
    submit: "Submit",
    cancel: "Cancel",
    register: "Register",
    password: "Password",
    allFieldsReq: "All required fields must be filled.",
    emailInUse: "Email already in use.",
    langLabel: "Language",
  },
  ar: {
    adminDashboard: "لوحة الإدارة",
   
    newUser: "مستخدم جديد",
    users: "المستخدمون",
    dashboard: "الرئيسية",
    registrations: "التسجيلات",
    tickets: "التذاكر",
    contacts: "الاستفسارات",
    sessions: "الجلسات النشطة",
    audit: "سجل التدقيق",
    logout: "تسجيل الخروج",
    totalUsers: "إجمالي المستخدمين",
    registeredToday: "المسجلون اليوم",
    thisMonth: "هذا الشهر",
    openTickets: "التذاكر المفتوحة",
    userFName: "الاسم الأول",
    userLName: "الاسم الأخير",
    userEmail: "البريد الإلكتروني",
    userSignupDate: "تاريخ التسجيل",
    userSignupTime: "وقت التسجيل",
    actions: "الإجراءات",
    deleteUser: "حذف المستخدم",
    noUsers: "لا يوجد مستخدمون",
    registrationAnalytics: "تحليلات التسجيل",
    today: "اليوم",
    last7: "آخر ٧ أيام",
    monthLabel: "الشهر",
    allTime: "منذ البداية",
    regChartTitle: "تسجيلات المستخدمين حسب اليوم",
    regStats: "إحصائيات التسجيل",
    createUserTitle: "تسجيل مستخدم جديد",
    createTicketTitle: "إنشاء تذكرة",
    newTicket: "تذكرة جديدة",
    supportTickets: "تذاكر الدعم",
    ticketId: "رقم التعريف",
    ticketTitle: "العنوان",
    ticketStatus: "الحالة",
    ticketAssigned: "مكلف إلى",
    ticketDue: "تاريخ الاستحقاق",
    ticketSubmitter: "مقدم الطلب",
    ticketCreated: "تاريخ الإنشاء",
    resolve: "حل",
    delete: "حذف",
    noTickets: "لا توجد تذاكر",
    registrationByDay: "التسجيلات (آخر {d} يوم)",
    user: "المستخدم",
    email: "البريد الإلكتروني",
    loginTime: "وقت الدخول",
    date: "التاريخ",
    detail: "التفاصيل",
    noActions: "لا توجد عمليات حديثة",
    submit: "إرسال",
    cancel: "إلغاء",
    register: "تسجيل",
    password: "كلمة المرور",
    allFieldsReq: "جميع الحقول مطلوبة",
    emailInUse: "البريد الإلكتروني مستخدم",
    langLabel: "اللغة",
  },
  he: {
    adminDashboard: "לוח מנהל",
  
    newUser: "משתמש חדש",
    users: "משתמשים",
    dashboard: "לוח ראשי",
    registrations: "הרשמות",
    tickets: "כרטיסים",
    contacts: "פניות",
    sessions: "מפגשי פעילות",
    audit: "יומן בקרה",
    logout: "התנתקות",
    totalUsers: "סך המשתמשים",
    registeredToday: "נרשמו היום",
    thisMonth: "החודש",
    openTickets: "כרטיסים פתוחים",
    userFName: "שם פרטי",
    userLName: "שם משפחה",
    userEmail: "דוא\"ל",
    userSignupDate: "תאריך רישום",
    userSignupTime: "שעת רישום",
    actions: "פעולות",
    deleteUser: "מחק משתמש",
    noUsers: "אין משתמשים",
    registrationAnalytics: "אנליטיקת הרשמות",
    today: "היום",
    last7: "7 הימים האחרונים",
    monthLabel: "חודש",
    allTime: "הכל",
    regChartTitle: "הרשמות לפי ימים",
    regStats: "סטטיסטיקת הרשמות",
    createUserTitle: "רישום משתמש חדש",
    createTicketTitle: "יצירת כרטיס",
    newTicket: "כרטיס חדש",
    supportTickets: "כרטיסי תמיכה",
    ticketId: "מספר זיהוי",
    ticketTitle: "כותרת",
    ticketStatus: "סטטוס",
    ticketAssigned: "מוקצה ל",
    ticketDue: "תאריך יעד",
    ticketSubmitter: "מגיש",
    ticketCreated: "תאריך יצירה",
    resolve: "פתרון",
    delete: "מחק",
    noTickets: "אין כרטיסים",
    registrationByDay: "הרשמות (לפני {d} ימים)",
    user: "משתמש",
    email: "דוא\"ל",
    loginTime: "שעת כניסה",
    date: "תאריך",
    detail: "פרטים",
    noActions: "אין פעולות אחרונות",
    submit: "שלח",
    cancel: "בטל",
    register: "הרשמה",
    password: "סיסמה",
    allFieldsReq: "כל השדות נדרשים",
    emailInUse: "דוא\"ל בשימוש",
    langLabel: "שפה",
  },
};

const LANG_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
  { value: "he", label: "עברית" },
];

// Language dropdown, fixed at top right
const LangDropdown = ({ language, setLanguage, dir }) => (
  <div
    style={{
      position: "fixed",
      top: 16,
      right: dir === "rtl" ? "unset" : 16,
      left: dir === "rtl" ? 16 : "unset",
      zIndex: 1000,
      backgroundColor: "rgba(255,255,255,0.9)",
      padding: "6px 10px",
      borderRadius: 6,
      fontSize: 14,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexDirection: dir === "rtl" ? "row-reverse" : "row",
    }}
  >
    <label htmlFor="lang-select" style={{ cursor: "pointer", fontWeight: "bold", color: "#1e40af" }}>
      Language:
    </label>
    <select
      id="lang-select"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      style={{ fontSize: 14, padding: "3px 8px", borderRadius: 4, border: "1px solid #bbb" }}
      title="Select language"
    >
      {LANG_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  </div>
);

function getToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function dateString(d) {
  return d ? d.toISOString().slice(0, 10) : "";
}

function saveAudit(message, performer = "System") {
  const logs = JSON.parse(localStorage.getItem("auditlog") || "[]");
  logs.unshift({
    ts: new Date().toLocaleString(),
    msg: message,
    by: performer,
  });
  localStorage.setItem("auditlog", JSON.stringify(logs));
}

function getRegistrationCounts(users, { range = "all", days = 0 } = {}) {
  const today = getToday();
  let within = () => true;
  if (range === "today") within = (dt) => dt.getTime() === today.getTime();
  else if (range === "week") within = (dt) => dt >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
  else if (range === "month") within = (dt) => dt >= new Date(today.getFullYear(), today.getMonth(), 1);
  else if (range === "custom" && days > 0) within = (dt) => dt >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - days + 1);

  return users.filter((u) => u.signupDate && within(new Date(u.signupDate + "T00:00:00"))).length;
}

function getRegistrationsByDay(users, days = 30) {
  const result = {};
  for (const u of users) {
    if (u.signupDate) result[u.signupDate] = (result[u.signupDate] || 0) + 1;
  }
  const ret = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const id = dateString(d);
    ret.push({ date: id, count: result[id] || 0 });
  }
  return ret;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const t = translations[language] || translations.en;
  const dir = language === "ar" || language === "he" ? "rtl" : "ltr";

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState(() => JSON.parse(localStorage.getItem("tickets") || "[]"));
  const [contactQueries, setContactQueries] = useState(() => JSON.parse(localStorage.getItem("contactMessages") || "[]"));
  const [audit, setAudit] = useState(() => JSON.parse(localStorage.getItem("auditlog") || "[]"));
  const [showUserForm, setShowUserForm] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [newTicket, setNewTicket] = useState({ title: "", detail: "", assignedTo: "", dueDate: "" });
  const [error, setError] = useState("");
  const [interval, setInterval] = useState("month");
  const [customDays, setCustomDays] = useState(14);
  const [expandAudit, setExpandAudit] = useState([]);
  const [regCounts, setRegCounts] = useState({ day: 0, week: 0, month: 0, all: 0, custom: 0 });

  const currentUser = {
    name: "Admin",
    email: "admin@itservice.in",
    loginTime: new Date().toLocaleTimeString(),
    loginDate: new Date().toLocaleDateString(),
  };

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, [showUserForm]);
  useEffect(() => {
    setTickets(JSON.parse(localStorage.getItem("tickets") || "[]"));
  }, [showTicketForm]);
  useEffect(() => {
    setContactQueries(JSON.parse(localStorage.getItem("contactMessages") || "[]"));
  }, []);
  useEffect(() => {
    setAudit(JSON.parse(localStorage.getItem("auditlog") || "[]"));
  }, [activeMenu, showUserForm, showTicketForm]);
  useEffect(() => {
    setRegCounts({
      day: getRegistrationCounts(users, { range: "today" }),
      week: getRegistrationCounts(users, { range: "week" }),
      month: getRegistrationCounts(users, { range: "month" }),
      all: users.length,
      custom: getRegistrationCounts(users, { range: "custom", days: customDays }),
    });
  }, [users, customDays]);

  function getRegistrations(users, interval, customDays) {
    let days = 365;
    if (interval === "week") days = 7;
    else if (interval === "month") days = 30;
    else if (interval === "custom") days = customDays;
    return getRegistrationsByDay(users, days);
  }

  const regData = getRegistrations(users, interval, customDays);

  const pieData = [
    { name: t.today, value: regCounts.day },
    { name: t.allTime, value: Math.max(0, regCounts.all - regCounts.day) },
  ];

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.firstName || !newUser.email || !newUser.password) {
      setError(t.allFieldsReq);
      return;
    }
    if (users.find((u) => u.email === newUser.email)) {
      setError(t.emailInUse);
      return;
    }
    const now = new Date();
    const signupDate = dateString(now);
    const user = { ...newUser, signupDate, signupTime: now.toLocaleTimeString() };
    const updatedUsers = [user, ...users];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setShowUserForm(false);
    setNewUser({ firstName: "", lastName: "", email: "", password: "" });
    setError("");
    saveAudit(`Registered user ${user.firstName} (${user.email})`, currentUser.name);
  };

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((u) => u.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    saveAudit(`Deleted user with email ${email}`, currentUser.name);
  };

  const handleDeleteQuery = (index) => {
    const updatedQueries = [...contactQueries];
    const removed = updatedQueries.splice(index, 1);
    setContactQueries(updatedQueries);
    localStorage.setItem("contactMessages", JSON.stringify(updatedQueries));
    saveAudit(`Deleted contact query from ${removed?.name || "Unknown"}`, currentUser.name);
  };

  const sessions = [currentUser];

  const toggleAuditExpand = (index) => {
    setExpandAudit((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const menu = [
    { key: "dashboard", icon: <FaChartBar size={20} />, label: t.dashboard },
    { key: "users", icon: <FaUsers size={20} />, label: t.users },
    { key: "registrations", icon: <FaUserPlus size={20} />, label: t.registrations },
    { key: "contacts", icon: <FaEnvelopeOpenText size={20} />, label: t.contacts },
    { key: "sessions", icon: <FaDoorOpen size={20} />, label: t.sessions },
    { key: "audit", icon: <FaTable size={20} />, label: t.audit },
    { key: "logout", icon: <FaSignOutAlt size={20} />, label: t.logout },
  ];

  return (
    <div className="min-h-screen flex" dir={dir}>
      <LangDropdown language={language} setLanguage={setLanguage} dir={dir} />
      <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-800 to-indigo-900 shadow-xl flex flex-col py-8 px-5 sticky top-0 z-40">
        <div className="text-3xl font-extrabold text-white mb-10 text-center tracking-wide">Freelancer Admin</div>
        <nav>
          <ul>
            {menu.map(({ key, icon, label }) => (
              <li key={key} className="mb-2">
                <button
                  className={`flex w-full items-center p-3 rounded text-left font-semibold ${
                    activeMenu === key ? "bg-blue-700 text-white shadow" : "text-white hover:bg-blue-700"
                  }`}
                  onClick={() => {
                    if (key === "logout") {
                      localStorage.clear();
                      navigate("/login");
                      return;
                    }
                    setActiveMenu(key);
                  }}
                >
                  <span className="mr-3">{icon}</span> {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <header className="mb-6 border-b pb-4 flex flex-wrap justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{t.adminDashboard}</h1>
          <p className="text-gray-600">{t.operationsPanel}</p>
        </header>

        {activeMenu === "dashboard" && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard title={t.totalUsers} value={users.length} icon={<FaUsers size={28} />} color="bg-blue-600" />
              <StatCard title={t.registeredToday} value={regCounts.day} icon={<FaUserPlus size={28} />} color="bg-green-600" />
              <StatCard title={t.thisMonth} value={regCounts.month} icon={<FaRegCalendarAlt size={28} />} color="bg-yellow-500" />
              <StatCard title={t.contacts} value={contactQueries.length} icon={<FaEnvelopeOpenText size={28} />} color="bg-indigo-600" />
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="font-semibold">{t.langLabel ? t.langLabel + " " : ""}Chart Interval:</span>
              <IntervalButton label={t.last7} selected={interval === "week"} onClick={() => setInterval("week")} />
              <IntervalButton label={t.monthLabel} selected={interval === "month"} onClick={() => setInterval("month")} />
              <IntervalButton label="Year" selected={interval === "year"} onClick={() => setInterval("year")} />
              <IntervalButton label="Custom" selected={interval === "custom"} onClick={() => setInterval("custom")} />
              {interval === "custom" && (
                <input
                  type="number"
                  min={2}
                  max={365}
                  value={customDays}
                  onChange={(e) => setCustomDays(+e.target.value)}
                  className="w-20 p-1 rounded border border-gray-300"
                />
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white rounded p-6 shadow flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{t.regChartTitle}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={getRegistrationsByDay(users, interval === "custom" ? customDays : interval === "week" ? 7 : interval === "month" ? 30 : 365)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded p-6 shadow flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{t.regStats}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(1)}%)`} labelLine={false}>
                      {pieData.map((entry, idx) => (
                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}

        {activeMenu === "users" && (
          <section>
            <div className="flex justify-end mb-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2" onClick={() => setShowUserForm(true)}>
                <FaPlus /> {t.newUser}
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">{t.users}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-xl">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left">{t.userFName}</th>
                    <th className="px-4 py-3 text-left">{t.userLName}</th>
                    <th className="px-4 py-3 text-left">{t.userEmail}</th>
                    <th className="px-4 py-3 text-left">{t.userSignupDate}</th>
                    <th className="px-4 py-3 text-left">{t.userSignupTime}</th>
                    <th className="px-4 py-3">{t.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-4 text-center text-gray-400">{t.noUsers}</td>
                    </tr>
                  ) : (
                    users.map((u) => (
                      <tr key={u.email} className="border-t hover:bg-blue-50">
                        <td className="px-4 py-2">{u.firstName}</td>
                        <td className="px-4 py-2">{u.lastName}</td>
                        <td className="px-4 py-2">{u.email}</td>
                        <td className="px-4 py-2">{u.signupDate || "—"}</td>
                        <td className="px-4 py-2">{u.signupTime || "—"}</td>
                        <td className="px-4 py-2">
                          <button className="ml-2 text-red-600 hover:text-red-900" onClick={() => handleDeleteUser(u.email)} title={t.deleteUser}>
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeMenu === "contacts" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">{t.contacts}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow-md text-sm">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left">Name</th>
                    <th className="px-3 py-2 text-left">{t.email}</th>
                    <th className="px-3 py-2 text-left">Subject</th>
                    <th className="px-3 py-2 text-left">Message</th>
                    <th className="px-3 py-2 text-left">Date &amp; Time</th>
                    <th className="px-3 py-2 text-left">{t.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {contactQueries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center text-gray-400 py-4">
                        No contact queries found.
                      </td>
                    </tr>
                  ) : (
                    contactQueries.map((cq, idx) => (
                      <tr key={idx} className="border-t hover:bg-blue-50">
                        <td className="px-3 py-2">{cq.name || "N/A"}</td>
                        <td className="px-3 py-2">{cq.email || "N/A"}</td>
                        <td className="px-3 py-2">{cq.subject || "N/A"}</td>
                        <td className="px-3 py-2 max-w-xs truncate" title={cq.message}>
                          {cq.message || "N/A"}
                        </td>
                        <td className="px-3 py-2">
                          {cq.timestamp || "Unknown"}
                        </td>
                        <td className="px-3 py-2">
                          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700" onClick={() => handleDeleteQuery(idx)} title={t.delete}>
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
        
        {activeMenu === "registrations" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">{t.registrationAnalytics}</h2>
            <div className="flex flex-wrap gap-6 mb-7">
              <StatBlock label={t.today} value={regCounts.day} color="text-blue-500" />
              <StatBlock label={t.last7} value={regCounts.week} color="text-green-600" />
              <StatBlock label={t.monthLabel} value={regCounts.month} color="text-indigo-600" />
              <StatBlock label={t.allTime} value={regCounts.all} color="text-gray-800" />
            </div>
            <div className="bg-white shadow rounded-lg p-8 mb-7">
              <h3 className="mb-3 font-semibold text-blue-700">
                {t.registrationByDay.replace("{d}", interval === "custom" ? customDays : interval === "week" ? 7 : 30)}
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={getRegistrationsByDay(users, interval === "custom" ? customDays : interval === "week" ? 7 : interval === "month" ? 30 : 365)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="date" stroke="#3b82f6" />
                  <YAxis stroke="#3b82f6" />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <h3 className="mb-3 font-semibold text-blue-700">Registration Distribution</h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(1)}%)`}
                    labelLine={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        {activeMenu === "sessions" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">{t.sessions}</h2>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-200 rounded-2xl shadow-lg p-6 max-w-lg border-l-4 border-blue-500">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th>{t.user}</th>
                    <th>{t.email}</th>
                    <th>{t.loginTime}</th>
                    <th>{t.date}</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((s) => (
                    <tr key={s.email}>
                      <td className="py-2">
                        <FaCheckCircle className="text-green-500 mr-2" title="Online" />
                      </td>
                      <td className="py-2 flex items-center">
                        <FaUserCircle className="text-gray-500 mr-1 text-xl" /> {s.name}
                      </td>
                      <td className="py-2">{s.email}</td>
                      <td className="py-2">{s.loginTime}</td>
                      <td className="py-2">{s.loginDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeMenu === "audit" && (
          <section>
            <h2 className="text-2xl font-bold mb-5 text-blue-900">{t.audit}</h2>
            <div className="bg-white shadow-md rounded-lg p-5 max-w-2xl w-full">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>{t.date}</th>
                    <th>{t.actions}</th>
                    <th>{t.user}</th>
                    <th>+</th>
                  </tr>
                </thead>
                <tbody>
                  {audit.map((a, i) => (
                    <React.Fragment key={i}>
                      <tr>
                        <td className="p-2">{a.ts}</td>
                        <td className="p-2">
                          <span className={`badge ${/deleted|delete/i.test(a.msg) ? "bg-red-200" : /register|new/i.test(a.msg) ? "bg-green-200" : "bg-blue-200"} text-gray-900`}>
                            {a.msg.length > 32 ? a.msg.slice(0, 32) + "..." : a.msg}
                          </span>
                        </td>
                        <td className="p-2">{a.by}</td>
                        <td className="p-2">
                          <button className="text-blue-600 font-bold" onClick={() => toggleAuditExpand(i)}>
                            {expandAudit.includes(i) ? "-" : "+"}
                          </button>
                        </td>
                      </tr>
                      {expandAudit.includes(i) && (
                        <tr>
                          <td colSpan={4} className="p-2 bg-blue-50 text-sm">
                            <span className="font-semibold">{t.detail}:</span> {a.msg}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                  {audit.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center text-gray-400 py-4">
                        {t.noActions}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {showUserForm && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-3 relative">
              <h2 className="text-2xl font-bold mb-5">{t.createUserTitle}</h2>
              {error && <div className="text-red-600 mb-2">{error}</div>}
              <form onSubmit={handleAddUser} className="space-y-3">
                <input type="text" className="w-full border p-2 rounded" placeholder={t.userFName} value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
                <input type="text" className="w-full border p-2 rounded" placeholder={t.userLName} value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
                <input type="email" className="w-full border p-2 rounded" placeholder={t.userEmail} value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <input type="password" className="w-full border p-2 rounded" placeholder={t.password} value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                <div className="flex gap-3 justify-end mt-4">
                  <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">{t.register}</button>
                  <button type="button" className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold" onClick={() => { setShowUserForm(false); setError(""); }}>{t.cancel}</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg text-white ${color} transform hover:scale-105 transition-transform duration-300 ease-in-out`}>
    <div className="mb-3">{icon}</div>
    <h3 className="text-lg font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const StatBlock = ({ label, value, color }) => (
  <div className={`bg-white shadow p-6 rounded-lg flex-1 min-w-[220px]`}>
    <h3 className={`font-bold text-lg mb-2 ${color}`}>{label}</h3>
    <p className="text-2xl font-mono">{value}</p>
  </div>
);

const IntervalButton = ({ label, selected, onClick }) => (
  <button className={`px-3 py-1 rounded ${selected ? "bg-blue-700 text-white" : "bg-white text-gray-700 hover:bg-blue-100"}`} onClick={onClick}>
    {label}
  </button>
);

export default AdminDashboard;
