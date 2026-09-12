import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FieldName = "name" | "email" | "topic" | "message";

const RULES: Record<FieldName, { msg: string; test: (v: string) => boolean }> = {
  name: {
    msg: "اكتب اسمك من فضلك",
    test: (v) => v.trim().length >= 2,
  },
  email: {
    msg: "اكتب بريدًا إلكترونيًا صحيحًا",
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  },
  topic: {
    msg: "اختر موضوع رسالتك",
    test: (v) => v !== "",
  },
  message: {
    msg: "اكتب رسالتك في سطر على الأقل",
    test: (v) => v.trim().length >= 10,
  },
};

const FIELD_ORDER: FieldName[] = ["name", "email", "topic", "message"];

const TOPICS = [
  "استفسار عن الدورات",
  "الأسعار وطرق الدفع",
  "استشارة لاختيار المسار المناسب",
  "شراكة أو تعاون",
  "الدعم الفني",
  "شيء آخر",
];
const TELEGRAM_URL = "https://t.me/Ada778877";
const EMAIL = "hshmhshm72@gmail.com";
const TELEGRAM_PATH =
  "M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8L18 6.1c.4-.3-.1-.5-.6-.2L7.3 12.3l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1 2.8Z";

function ChevronBack() {
  return (
    <svg className="ch-arr" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 6l-6 6 6 6" />
    </svg>
  );
}

export default function Contact() {
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const okRef = useRef<HTMLHeadingElement>(null);

  function validate(field: FieldName, value: string) {
    const ok = RULES[field].test(value);
    setErrors((prev) => ({ ...prev, [field]: ok ? undefined : RULES[field].msg }));
    return ok;
  }

  function handleChange(field: FieldName) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) validate(field, value);
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const nextErrors: Partial<Record<FieldName, string>> = {};
    FIELD_ORDER.forEach((field) => {
      if (!RULES[field].test(values[field])) nextErrors[field] = RULES[field].msg;
    });
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById("a-" + firstInvalid)?.focus();
      return;
    }

    setSending(true);
    try {
      const params = new URLSearchParams();
      const data = new FormData(formRef.current as HTMLFormElement);
      data.forEach((value, key) => {
        if (typeof value === "string") params.append(key, value);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!response.ok) throw new Error("submit failed");

      setSent(true);
      window.setTimeout(() => okRef.current?.focus(), 0);
    } catch {
      setStatus(
        "تعذّر الإرسال الآن. جرّب مرة أخرى، أو راسلنا على تليجرام مباشرة.",
      );
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setValues({ name: "", email: "", topic: "", message: "" });
    setErrors({});
    setStatus("");
    setSent(false);
    window.setTimeout(() => document.getElementById("a-name")?.focus(), 0);
  }

  const fieldClass = (field: FieldName) => (errors[field] ? "f invalid" : "f");
  return (
    <section id="contact" className="contact-sec">
      <div className="ada-container">
        <div className="sec-head">
          <span className="sec-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.4A8.4 8.4 0 1 1 21 11.5Z" />
            </svg>
            تواصل معنا
          </span>
          <h2 className="sec-title">
            جاهزين <b>نساعدك</b> تبدأ
          </h2>
          <p className="sec-sub">
            اكتب لنا سؤالك أو المسار اللي يهمّك، ونرجع لك بخطة واضحة وخطوة أولى عملية.
          </p>
        </div>

        <div className="contact-grid">
          <div className="cf-card">
            {!sent && (
              <form
                ref={formRef}
                className="cf-form"
                name="ada-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                noValidate
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="ada-contact" />
                <p className="hp">
                  <label>
                    لا تملأ هذا الحقل:{" "}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="f-row">
                  <div className={fieldClass("name")}>
                    <label htmlFor="a-name">
                      الاسم <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="a-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="اسمك الكامل"
                      value={values.name}
                      onChange={handleChange("name")}
                      onBlur={() => validate("name", values.name)}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby="e-name"
                    />
                    <span className="f-err" id="e-name" aria-live="polite">
                      {errors.name}
                    </span>
                  </div>

                  <div className={fieldClass("email")}>
                    <label htmlFor="a-email">
                      البريد الإلكتروني <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="a-email"
                      name="email"
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={() => validate("email", values.email)}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby="e-email"
                    />
                    <span className="f-err" id="e-email" aria-live="polite">
                      {errors.email}
                    </span>
                  </div>
                </div>

                <div className={fieldClass("topic")}>
                  <label htmlFor="a-topic">
                    ما الذي يهمّك؟ <span aria-hidden="true">*</span>
                  </label>
                  <span className="sel-wrap">
                    <select
                      id="a-topic"
                      name="topic"
                      value={values.topic}
                      onChange={handleChange("topic")}
                      onBlur={() => validate("topic", values.topic)}
                      aria-invalid={errors.topic ? true : undefined}
                      aria-describedby="e-topic"
                    >
                      <option value="">— اختر —</option>
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                  <span className="f-err" id="e-topic" aria-live="polite">
                    {errors.topic}
                  </span>
                </div>

                <div className={fieldClass("message")}>
                  <label htmlFor="a-message">
                    رسالتك <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="a-message"
                    name="message"
                    rows={4}
                    placeholder="مبتدئ تمامًا وأبي أعرف من وين أبدأ، وكم تستغرق الدورة؟"
                    value={values.message}
                    onChange={handleChange("message")}
                    onBlur={() => validate("message", values.message)}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby="e-message"
                  />
                  <span className="f-err" id="e-message" aria-live="polite">
                    {errors.message}
                  </span>
                </div>

                <button
                  type="submit"
                  className={sending ? "cf-btn sending" : "cf-btn"}
                  disabled={sending}
                >
                  <span className="cf-lbl">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={TELEGRAM_PATH} />
                    </svg>
                    إرسال الرسالة
                  </span>
                  <span className="cf-spin" aria-hidden="true" />
                </button>

                <p className="cf-note">
                  بالإرسال توافق على أن نتواصل معك على بريدك. لا نشارك بياناتك مع أي جهة.
                </p>
                <p className="cf-status" role="status" aria-live="polite">
                  {status}
                </p>
              </form>
            )}
            {sent && (
              <div className="cf-ok">
                <div className="ok-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 ref={okRef} tabIndex={-1}>
                  وصلتنا رسالتك
                </h3>
                <p>
                  بنرد عليك خلال 24 ساعة. وإذا مستعجل، راسلنا على تليجرام مباشرة.
                </p>
                <div className="ok-acts">
                  <a
                    className="sbtn sbtn-g"
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تواصل على تليجرام
                  </a>
                  <button type="button" className="sbtn sbtn-p" onClick={resetForm}>
                    إرسال رسالة أخرى
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside className="cf-aside">
            <h3>طرق أسرع</h3>
            <p className="aside-lead">ما تبي تنتظر الإيميل؟ اختر اللي يناسبك.</p>

            <a className="ch" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="ch-ico">
                <svg className="fill" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={TELEGRAM_PATH} />
                </svg>
              </span>
              <span className="ch-txt">
                <b>تليجرام</b>
                <span>الأسرع — محادثة مباشرة</span>
              </span>
              <ChevronBack />
            </a>

            <a className="ch" href={"mailto:" + EMAIL}>
              <span className="ch-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="3" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
              </span>
              <span className="ch-txt">
                <b dir="ltr">{EMAIL}</b>
                <span>البريد الإلكتروني</span>
              </span>
              <ChevronBack />
            </a>

            <a className="ch" href="#courses">
              <span className="ch-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 6.5 3.5 9.8 12 13l8.5-3.2L12 6.5Z" />
                  <path d="M6.5 11.4v4.2c0 1.5 2.5 2.9 5.5 2.9s5.5-1.4 5.5-2.9v-4.2" />
                  <path d="M20.5 9.8v5" />
                </svg>
              </span>
              <span className="ch-txt">
                <b>تصفّح الدورات</b>
                <span>شوف المسارات قبل ما تسأل</span>
              </span>
              <ChevronBack />
            </a>

            <div className="aside-foot">
              <span className="badge-live">
                <i />
                متوسط الرد: أقل من 24 ساعة
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
