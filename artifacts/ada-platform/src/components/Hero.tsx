export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "hsl(262, 83%, 58%)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#818cf8" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(240,10%,80%) 1px, transparent 1px), linear-gradient(90deg, hsl(240,10%,80%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 border text-sm font-semibold mb-8 px-4 py-2 rounded-full"
          style={{
            background: "rgba(124, 58, 237, 0.1)",
            borderColor: "rgba(124, 58, 237, 0.3)",
            color: "#c4b5fd",
          }}
        >
          <span>🚀</span>
          <span>منصة التعلم الرقمي الأولى</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          منصة{" "}
          <span className="gradient-text">آدا</span>{" "}
          للتعلم الرقمي
        </h1>

        <p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: "hsl(240,5%,65%)" }}>
          طوّر مهاراتك التقنية والمهنية بطريقة عملية واحترافية
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "hsl(240,5%,55%)" }}>
          نوفر دورات تدريبية مصممة بعناية لتأهيلك لسوق العمل، مع تركيز على
          التطبيق العملي والفهم الحقيقي، مو مجرد محتوى نظري.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#courses"
            className="btn-gradient text-white px-8 py-4 rounded-xl text-lg font-bold w-full sm:w-auto text-center"
          >
            استكشف الدورات
          </a>
          <a
            href="#why-ada"
            className="text-white px-8 py-4 rounded-xl text-lg font-bold w-full sm:w-auto text-center transition-all duration-300 hover:bg-[hsl(240,10%,10%)]"
            style={{
              border: "1px solid hsl(240,10%,20%)",
              background: "hsl(240,10%,8%)",
            }}
          >
            ليش تختار آدا؟
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { num: "١٣+", label: "دورة متخصصة" },
            { num: "١٠٠٪", label: "تطبيق عملي" },
            { num: "مرن", label: "تعلم بأي وقت" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.num}</div>
              <div className="text-xs mt-1" style={{ color: "hsl(240,5%,55%)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
