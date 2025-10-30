import Spline from "@splinetool/react-spline";
import { PlayCircle } from "lucide-react";

export default function LiveDemo() {
  return (
    <section id="live-demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Explore the live demo</h2>
          <p className="mt-3 text-slate-600">Interact with a visual flow that triggers a WhatsApp conversation—see automation, branching, and handoff in action.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden h-[420px]">
            <Spline
              scene="https://prod.spline.design/BA8tWk6rZ8f2z-2i/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">How it works</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-700 list-decimal list-inside">
                <li>Trigger: Customer sends a keyword to your business number.</li>
                <li>Workflow: The flow sends a templated message and collects details.</li>
                <li>Branch: High-intent customers are routed to an agent in the inbox.</li>
                <li>Measure: Analytics track delivery, replies, and conversions.</li>
              </ol>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 self-start px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
              <PlayCircle className="h-5 w-5" /> Start interactive demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
