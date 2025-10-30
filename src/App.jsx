import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Analytics from "./components/Analytics";
import Inbox from "./components/Inbox";
import LiveDemo from "./components/LiveDemo";
import Security from "./components/Security";
import CTA from "./components/CTA";

function App() {
  const [activeId, setActiveId] = useState("features");
  const sectionIds = ["features", "analytics", "inbox", "live-demo", "security", "pricing"]; // watch order
  const observersRef = useRef([]);

  useEffect(() => {
    // Intersection Observer to track active section
    const opts = { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 };
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(id);
        });
      }, opts);
      obs.observe(el);
      return obs;
    });
    observersRef.current = observers;
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header activeId={activeId} onNavigate={handleNavigate} />
      <main className="flex-1">
        <Hero />
        <Features />
        <Analytics />
        <Inbox />
        <LiveDemo />
        <Security />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Convy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#security" onClick={(e) => { e.preventDefault(); handleNavigate("security"); }} className="hover:text-slate-900">Security</a>
            <a href="#compliance" className="hover:text-slate-900">Compliance</a>
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
