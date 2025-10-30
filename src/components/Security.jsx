import { ShieldCheck, Lock, FileCheck2, KeyRound } from "lucide-react";

export default function Security() {
  const badges = [
    { icon: ShieldCheck, label: "End‑to‑End Encryption" },
    { icon: Lock, label: "MFA & SSO" },
    { icon: FileCheck2, label: "GDPR & DPA" },
    { icon: KeyRound, label: "RBAC & Audit Logs" },
  ];

  return (
    <section id="security" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Security & compliance, by default</h2>
          <p className="mt-3 text-slate-600">Protect data with enterprise‑grade controls and transparent governance—without slowing teams down.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white grid place-items-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-slate-900">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
          <p className="font-medium">Compliance commitments</p>
          <p className="text-sm mt-1">Data residency options, signed DPA, template approvals, and consent management to meet regional requirements.</p>
        </div>
      </div>
    </section>
  );
}
