import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Analytics from "./components/Analytics";
import CTA from "./components/CTA";

export default function App() {
  const sectionIds = ["features", "analytics", "pricing"];
  const [activeId, setActiveId] = useState("features");
  const observersRef = useRef([]);

  useEffect(() => {
    const options = { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 };
    const created = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(id);
        });
      }, options);
      obs.observe(el);
      return obs;
    });
    observersRef.current = created;
    return () => created.forEach((o) => o && o.disconnect());
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activeId={activeId} onNavigate={handleNavigate} />
      <main>
        <Hero onCTAClick={() => handleNavigate("pricing")} />
        <Features />
        <Analytics />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Convy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" onClick={(e) => { e.preventDefault(); handleNavigate("features"); }} className="hover:text-slate-900">Features</a>
            <a href="#analytics" onClick={(e) => { e.preventDefault(); handleNavigate("analytics"); }} className="hover:text-slate-900">Analytics</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); handleNavigate("pricing"); }} className="hover:text-slate-900">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
