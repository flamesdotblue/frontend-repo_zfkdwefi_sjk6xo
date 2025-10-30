import { BarChart3, Activity, TrendingUp, Users } from "lucide-react";

export default function Analytics() {
  const kpis = [
    { icon: Activity, label: "Delivery Rate", value: "98.7%", change: "+0.8%" },
    { icon: TrendingUp, label: "CTR", value: "23.4%", change: "+1.2%" },
    { icon: Users, label: "New Contacts", value: "3,284", change: "+12%" },
    { icon: BarChart3, label: "Conversions", value: "412", change: "+6%" },
  ];

  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Campaign analytics that drive decisions</h2>
          <p className="mt-3 text-slate-600">Real-time metrics for every message, template, and audience segment—so you can optimize with confidence.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map(({ icon: Icon, label, value, change }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white grid place-items-center shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-emerald-600">{change}</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{label}</p>
              <p className="text-2xl font-semibold text-slate-900">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Engagement over time</h3>
              <span className="text-xs text-slate-500">Last 7 days</span>
            </div>
            <div className="mt-4 h-56">
              <div className="h-full w-full rounded-lg bg-gradient-to-t from-slate-100 to-white grid grid-cols-12 items-end gap-2 p-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-full rounded-md bg-emerald-500/80" style={{ height: `${30 + Math.abs(Math.sin(i)) * 60}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Top campaigns</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Welcome Series", ctr: "28%", conv: "8.1%" },
                { name: "Winback Q3", ctr: "21%", conv: "5.4%" },
                { name: "Product Drop", ctr: "18%", conv: "6.7%" },
              ].map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                  <div>
                    <p className="font-medium text-slate-900">{c.name}</p>
                    <p className="text-xs text-slate-500">CTR {c.ctr} • Conv {c.conv}</p>
                  </div>
                  <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-2 py-1">Live</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
