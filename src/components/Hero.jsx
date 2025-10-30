import { Rocket, Zap, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-700 text-xs font-medium mb-4">
              <Zap className="h-3.5 w-3.5" />
              WhatsApp Business Communication Platform
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Engage customers at scale with intelligent WhatsApp automation
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Convy centralizes conversations, automates workflows, and powers compliant campaigns—so you can deliver personal, instant, and measurable customer experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700">
                <Rocket className="h-5 w-5" />
                Launch your first campaign
              </button>
              <button className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50">
                Book a live demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                Multi-agent inbox
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-600" />
                Visual workflows
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-emerald-600" />
                Campaign analytics
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-200/40 to-cyan-200/40 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <Card title="Automation" subtitle="Drag-and-drop flows" color="emerald" />
                <Card title="Campaigns" subtitle="Template compliant" color="cyan" />
                <Card title="Inbox" subtitle="Multi-agent routing" color="blue" />
                <Card title="Insights" subtitle="Real-time metrics" color="violet" />
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 p-4 text-white">
                <p className="font-semibold">Mission</p>
                <p className="text-sm text-emerald-50/90">
                  Democratize enterprise-grade WhatsApp automation for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, subtitle, color }) {
  const colorMap = {
    emerald: "from-emerald-500/15 to-emerald-400/10 text-emerald-700",
    cyan: "from-cyan-500/15 to-cyan-400/10 text-cyan-700",
    blue: "from-blue-500/15 to-blue-400/10 text-blue-700",
    violet: "from-violet-500/15 to-violet-400/10 text-violet-700",
  };
  return (
    <div className={`rounded-xl border border-slate-200 bg-gradient-to-br ${colorMap[color]} p-4`}> 
      <p className="font-semibold">{title}</p>
      <p className="text-sm opacity-80">{subtitle}</p>
    </div>
  );
}
