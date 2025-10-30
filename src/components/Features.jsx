import { MessageSquare, Settings, Megaphone, Bot, Shield, BarChart3 } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: MessageSquare,
      title: "Unified Conversations",
      desc: "Centralize every customer chat with media, history, and context in one place.",
    },
    {
      icon: Settings,
      title: "Smart Workflows",
      desc: "Build trigger-based automation with conditions, delays, and branching logic.",
    },
    {
      icon: Megaphone,
      title: "Campaigns at Scale",
      desc: "Send compliant, personalized broadcasts with templates and scheduling.",
    },
    {
      icon: Bot,
      title: "Auto-Responses",
      desc: "Answer FAQs instantly with keyword detection, language switch, and escalation.",
    },
    {
      icon: BarChart3,
      title: "Actionable Analytics",
      desc: "Track delivery, engagement, conversions, and ROI across teams and campaigns.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      desc: "RBAC, MFA, audit trails, and GDPR-friendly data controls to keep you compliant.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to run WhatsApp for business</h2>
          <p className="mt-3 text-slate-600">
            From real-time messaging to full-funnel marketing, Convy brings all the tools into a single, scalable platform.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white grid place-items-center shadow">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
