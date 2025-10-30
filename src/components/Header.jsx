import { MessageSquare, Shield, BarChart3, PlayCircle, Inbox } from "lucide-react";

export default function Header({ activeId, onNavigate }) {
  const linkClass = (id) => `hover:text-slate-900 transition ${activeId === id ? "text-slate-900 font-medium" : "text-slate-600"}`;
  const handleClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) onNavigate(id);
  };

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 grid place-items-center text-white shadow">
            <MessageSquare className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Convy</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" onClick={(e) => handleClick(e, "features")} className={linkClass("features")}>Features</a>
          <a href="#analytics" onClick={(e) => handleClick(e, "analytics")} className={`${linkClass("analytics")} flex items-center gap-1`}>
            <BarChart3 className="h-4 w-4" /> Analytics
          </a>
          <a href="#inbox" onClick={(e) => handleClick(e, "inbox")} className={`${linkClass("inbox")} flex items-center gap-1`}>
            <Inbox className="h-4 w-4" /> Inbox
          </a>
          <a href="#live-demo" onClick={(e) => handleClick(e, "live-demo")} className={`${linkClass("live-demo")} flex items-center gap-1`}>
            <PlayCircle className="h-4 w-4" /> Live Demo
          </a>
          <a href="#security" onClick={(e) => handleClick(e, "security")} className={`${linkClass("security")} flex items-center gap-1`}>
            <Shield className="h-4 w-4" /> Security
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Log in</button>
          <button className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 shadow-sm">Start free trial</button>
        </div>
      </div>
    </header>
  );
}
