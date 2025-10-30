import { Check, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-emerald-600 to-cyan-600 p-1 shadow-xl">
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-emerald-700 font-semibold">Flexible pricing & billing</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Start free. Scale with usage-based pricing.
                </h3>
                <p className="mt-3 text-slate-600">
                  Transparent costs, prepaid wallet, and subscription tiers for every stage of growth—no hidden fees.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Pay-per-message model</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Template approvals & compliance</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Role-based access & MFA</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Plan name="Starter" price="$0" note="Free trial • Onboarding included" />
                  <Plan name="Professional" price="$149" note="For growing teams" highlight />
                </div>
                <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
                  Get started <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, note, highlight = false }) {
  return (
    <div className={`rounded-xl p-5 bg-white border ${highlight ? "border-emerald-300 ring-2 ring-emerald-200" : "border-slate-200"}`}>
      <div className="flex items-baseline justify-between">
        <h4 className="font-semibold text-slate-900">{name}</h4>
        <span className="text-2xl font-bold">{price}</span>
      </div>
      <p className="mt-1 text-xs text-slate-600">{note}</p>
    </div>
  );
}
