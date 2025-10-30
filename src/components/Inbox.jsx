import { Users, MessageSquare, CheckCircle2, Clock, User } from "lucide-react";

export default function Inbox() {
  const tickets = [
    { name: "Amara Singh", last: "Order status?", time: "2m", assignee: "Liam", status: "Open" },
    { name: "Diego Alvarez", last: "Coupon not applied", time: "6m", assignee: "Ava", status: "Open" },
    { name: "Jia Chen", last: "Refund processed", time: "14m", assignee: "Noah", status: "Resolved" },
    { name: "Sara Ibrahim", last: "Need invoice", time: "22m", assignee: "Olivia", status: "Open" },
  ];

  return (
    <section id="inbox" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Multi‑agent inbox built for speed</h2>
          <p className="mt-3 text-slate-600">Collaborate on conversations with assignment, internal notes, and collision detection—without losing context.</p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="border-r border-slate-200">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2 text-slate-700"><Users className="h-4 w-4" /> Team</div>
                <span className="text-xs text-slate-500">24 online</span>
              </div>
              <ul>
                {tickets.map((t) => (
                  <li key={t.name} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 border-t border-slate-100">
                    <div>
                      <p className="font-medium text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1"><MessageSquare className="h-3 w-3" /> {t.last}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 flex items-center justify-end gap-1"><Clock className="h-3 w-3" /> {t.time}</p>
                      <p className="text-xs text-slate-500 flex items-center justify-end gap-1"><User className="h-3 w-3" /> {t.assignee}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Jia Chen</p>
                  <p className="text-xs text-slate-500">+65 • Last seen 2m</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-2 py-1"><CheckCircle2 className="h-3 w-3" /> {tickets[2].status}</span>
              </div>

              <div className="mt-6 space-y-3">
                <ChatBubble who="customer" text="Hi, can you confirm my refund?" />
                <ChatBubble who="agent" text="Absolutely! It's been processed and should reflect in 3-5 business days." />
                <ChatBubble who="customer" text="Great, thanks for the quick help!" />
              </div>

              <div className="mt-6">
                <input className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Type a reply…" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ who, text }) {
  const isAgent = who === "agent";
  return (
    <div className={`flex ${isAgent ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow ${isAgent ? "bg-emerald-600 text-white rounded-tr-sm" : "bg-slate-100 text-slate-900 rounded-tl-sm"}`}>
        {text}
      </div>
    </div>
  );
}
