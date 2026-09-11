import type { ReactNode } from "react";

type Reason = {
  icon: ReactNode;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
        <path d="M1 20.5h22" />
        <path d="m9.3 9.2-2 2.3 2 2.3" />
        <path d="m14.7 9.2 2 2.3-2 2.3" />
      </svg>
    ),
    title: "تطبيق عملي من أول يوم",
    description:
      "ما بنكتفي بالشرح النظري؛ كل دورة مبنية على مشاريع حقيقية ومحاكاة لبيئة العمل عشان تطلع بورتفوليو (Portfolio) قوي يثبت مهاراتك.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="9.5" cy="7.5" r="3.5" />
        <path d="M3 20c0-3.3 2.9-5.8 6.5-5.8 1 0 1.9.2 2.8.5" />
        <circle cx="17.5" cy="16.5" r="4.5" />
        <path d="m15.6 16.6 1.4 1.4 2.9-3" />
      </svg>
    ),
    title: "دعم وتوجيه شخصي",
    description:
      "أنا معك خطوة بخطوة؛ بساعدك تتجاوز التحديات التقنية اللي تواجهك وأعطيك تقييم مباشر على كودك ومشاريعك عشان تطور مستواك بسرعة.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2.5c3.2 2.4 4.8 5.8 4.8 9.3 0 2-.5 3.6-1 4.6H8.2c-.5-1-1-2.6-1-4.6 0-3.5 1.6-6.9 4.8-9.3Z" />
        <circle cx="12" cy="10" r="2.1" />
        <path d="M7.4 13.2 4.6 16v3.2l2.9-1.7" />
        <path d="M16.6 13.2 19.4 16v3.2l-2.9-1.7" />
        <path d="M10.4 19.4c.5 1.2 1.1 2 1.6 2.4.5-.4 1.1-1.2 1.6-2.4" />
      </svg>
    ),
    title: "تعلم يواكب سوق العمل",
    description:
      "المحتوى يركز على التقنيات والأدوات المطلوبة فعلياً في الشركات اليوم، مع التركيز على أفضل الممارسات في البرمجة والأمن السيبراني.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12.8" r="8.2" />
        <path d="M12 8.4v4.4l3 1.9" />
        <path d="M9.2 2.6 6 4.6" />
        <path d="M14.8 2.6 18 4.6" />
      </svg>
    ),
    title: "مرونة تامة في وقتك",
    description:
      "تعلم بالسرعة التي تناسبك ومن أي مكان، مع إمكانية الوصول للمحتوى والمشاريع في أي وقت للتدريب والتطبيق.",
  },
];
export default function WhyAda() {
  return (
    <section id="why-ada" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(124, 58, 237, 0.1)",
              borderColor: "rgba(124, 58, 237, 0.3)",
              color: "#c4b5fd",
            }}
          >
            <span aria-hidden="true">✨</span>
            <span>لماذا آدا؟</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            WHY ADA — ليش تختار{" "}
            <span className="gradient-text">آدا؟</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(240,5%,65%)" }}>
            نهجنا مختلف — نحن لا نعلّم فقط، بل نؤهّل
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-card glass-card rounded-2xl p-6">
              <div className="why-ico" aria-hidden="true">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: "hsl(240,5%,65%)" }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
