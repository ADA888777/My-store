const reasons = [
  {
    icon: "💻",
    title: "تطبيق عملي من أول يوم",
    description:
      "ما بنكتفي بالشرح النظري؛ كل دورة مبنية على مشاريع حقيقية ومحاكاة لبيئة العمل عشان تطلع بورتفوليو (Portfolio) قوي يثبت مهاراتك.",
  },
  {
    icon: "🤝",
    title: "دعم وتوجيه شخصي",
    description:
      "أنا معك خطوة بخطوة؛ بساعدك تتجاوز التحديات التقنية اللي تواجهك وأعطيك تقييم مباشر على كودك ومشاريعك عشان تطور مستواك بسرعة.",
  },
  {
    icon: "🚀",
    title: "تعلم يواكب سوق العمل",
    description:
      "المحتوى يركز على التقنيات والأدوات المطلوبة فعلياً في الشركات اليوم، مع التركيز على أفضل الممارسات في البرمجة والأمن السيبراني.",
  },
  {
    icon: "⏰",
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
            <span>✨</span>
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
            <div key={reason.title} className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-4">{reason.icon}</div>
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
