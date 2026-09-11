const TELEGRAM_URL = "https://t.me/Ada778877";
const TELEGRAM_HANDLE = "@Ada778877";
const EMAIL = "hshmhshm72@gmail.com";
const TELEGRAM_PATH =
  "M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8L18 6.1c.4-.3-.1-.5-.6-.2L7.3 12.3l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1 2.8Z";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الدورات", href: "#courses" },
  { label: "من نحن", href: "#why-ada" },
  { label: "تواصل معنا", href: "#contact" },
];

const tracks = [
  "تطوير المواقع",
  "التصميم الرقمي",
  "التسويق الرقمي",
  "تحليل البيانات",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-glow" aria-hidden="true" />
      <div className="ada-container">
        <div className="footer-grid">
          <div className="f-brand">
            <span className="f-brand-name">آدا</span>
            <p className="f-about">
              منصة تعلّم رقمي تقدّم دورات احترافية تركّز على التطبيق العملي وتطوير المهارات المطلوبة في سوق العمل.
            </p>
            <div className="f-social">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تليجرام"
              >
                <svg className="fill" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={TELEGRAM_PATH} />
                </svg>
              </a>
              <a href={"mailto:" + EMAIL} aria-label="البريد الإلكتروني">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="3" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="f-col" aria-label="روابط سريعة">
            <h4 className="f-head">روابط سريعة</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="f-col" aria-label="المسارات">
            <h4 className="f-head">المسارات</h4>
            <ul>
              {tracks.map((track) => (
                <li key={track}>
                  <a href="#courses">{track}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="f-cta">
            <h4 className="f-head">ابدأ اليوم</h4>
            <p>
              احجز استشارة مجانية ونساعدك تختار المسار المناسب لمستواك وهدفك.
            </p>
            <a className="f-btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={TELEGRAM_PATH} />
              </svg>
              تواصل عبر تليجرام
            </a>
            <div className="f-badge">
              <i />
              نرد عادة خلال ساعات
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} منصة آدا للتعلم الرقمي. جميع الحقوق محفوظة.
          </p>
          <div className="fb-links">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" dir="ltr">
              {TELEGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
