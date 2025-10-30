import { MessageSquare, Shield, BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 grid place-items-center text-white shadow">
            <MessageSquare className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Convy</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#automation" className="hover:text-slate-900 transition">Automation</a>
          <a href="#analytics" className="hover:text-slate-900 transition flex items-center gap-1">
            <BarChart3 className="h-4 w-4" /> Analytics
          </a>
          <a href="#security" className="hover:text-slate-900 transition flex items-center gap-1">
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
