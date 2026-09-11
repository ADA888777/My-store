import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAda from "@/components/WhyAda";
import Quote from "@/components/Quote";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navbar />
      <main>
        {/* نطاق الخلفية المتدرجة: من قسم البطل حتى نهاية «لماذا آدا» ثم يتلاشى */}
        <div className="gradient-zone">
          <div className="gz-aura gz-a1" aria-hidden="true" />
          <div className="gz-aura gz-a2" aria-hidden="true" />
          <div className="gz-aura gz-a3" aria-hidden="true" />
          <div className="gz-aura gz-a4" aria-hidden="true" />
          <div className="gz-grain" aria-hidden="true" />
          <div className="gz-fade" aria-hidden="true" />

          <div className="gz-content">
            <Hero />
            <WhyAda />
          </div>
        </div>

        {/* باقي الموقع خارج النطاق — يبقى على خلفيته الحالية */}
        <Quote />
        <Courses />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
