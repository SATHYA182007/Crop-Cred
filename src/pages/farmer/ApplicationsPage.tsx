import React, { useState } from 'react';
import { FileText, Clock, CheckCircle2, XCircle, Cpu, Search, Plus, ChevronDown } from 'lucide-react';

const applications = [
  {
    id: '#DI-9021',
    scheme: 'Drip Irrigation Subsidy 2026',
    category: 'Irrigation',
    submittedOn: '02 Apr, 2026',
    status: 'pending',
    aiScore: 94,
    district: 'Solapur',
    amount: '₹18,500',
    timeline: [
      { step: 'Application Submitted', done: true, date: '02 Apr 2026' },
      { step: 'Document Verification', done: true, date: '04 Apr 2026' },
      { step: 'AI Eligibility Check', done: false, date: 'In Progress' },
      { step: 'Officer Approval', done: false, date: 'Pending' },
    ],
  },
  {
    id: '#CI-8812',
    scheme: 'Crop Insurance Advance',
    category: 'Insurance',
    submittedOn: '15 Mar, 2026',
    status: 'approved',
    aiScore: 88,
    district: 'Solapur',
    amount: '₹2,00,000',
    timeline: [
      { step: 'Application Submitted', done: true, date: '15 Mar 2026' },
      { step: 'Document Verification', done: true, date: '16 Mar 2026' },
      { step: 'AI Eligibility Check', done: true, date: '17 Mar 2026' },
      { step: 'Officer Approval', done: true, date: '20 Mar 2026' },
    ],
  },
  {
    id: '#SH-4421',
    scheme: 'Soil Health Card Request',
    category: 'Soil Testing',
    submittedOn: '10 Jan, 2026',
    status: 'approved',
    aiScore: 100,
    district: 'Solapur',
    amount: 'Free',
    timeline: [
      { step: 'Application Submitted', done: true, date: '10 Jan 2026' },
      { step: 'Document Verification', done: true, date: '11 Jan 2026' },
      { step: 'AI Eligibility Check', done: true, date: '12 Jan 2026' },
      { step: 'Officer Approval', done: true, date: '15 Jan 2026' },
    ],
  },
  {
    id: '#KCC-7701',
    scheme: 'Kisan Credit Card Application',
    category: 'Credit',
    submittedOn: '22 Dec, 2025',
    status: 'rejected',
    aiScore: 42,
    district: 'Solapur',
    amount: '₹50,000',
    timeline: [
      { step: 'Application Submitted', done: true, date: '22 Dec 2025' },
      { step: 'Document Verification', done: true, date: '24 Dec 2025' },
      { step: 'AI Eligibility Check', done: true, date: '26 Dec 2025' },
      { step: 'Officer Approval', done: false, date: 'Rejected' },
    ],
  },
];

const statusConfig: Record<string, { label: string; cls: string; icon: React.ElementType }> = {
  pending: { label: 'Pending Review', cls: 'status-chip status-pending', icon: Clock },
  approved: { label: 'Approved', cls: 'status-chip status-approved', icon: CheckCircle2 },
  rejected: { label: 'Rejected', cls: 'status-chip status-rejected', icon: XCircle },
};

export default function ApplicationsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = applications.filter(a =>
    a.scheme.toLowerCase().includes(search.toLowerCase()) || a.id.toLowerCase().includes(search.toLowerCase())
  );

  const selectedApp = applications.find(a => a.id === selected);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">My Applications</h1>
          <p className="text-sm text-textSecondary mt-1">Track all your scheme applications and their AI verification status</p>
        </div>
        <button className="btn-primary text-sm py-2">
          <Plus className="w-4 h-4" /> New Application
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total', value: '4', color: 'text-slate-700', bg: 'bg-slate-50', border: 'border-slate-200' },
          { label: 'Approved', value: '2', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
          { label: 'Pending', value: '1', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
          { label: 'Rejected', value: '1', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' },
        ].map(s => (
          <div key={s.label} className={`rounded-2xl border ${s.border} ${s.bg} p-4 text-center`}>
            <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-xs font-semibold text-textSecondary mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Application List */}
        <div className="lg:col-span-3 space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by scheme or ID..." className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
          </div>
          <div className="space-y-3">
            {filtered.map(app => {
              const sc = statusConfig[app.status];
              const Icon = sc.icon;
              return (
                <div
                  key={app.id}
                  onClick={() => setSelected(selected === app.id ? null : app.id)}
                  className={`bg-white rounded-2xl border p-5 cursor-pointer transition-all ${selected === app.id ? 'border-primary shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-bold text-textPrimary text-sm">{app.scheme}</p>
                        <p className="text-xs text-textSecondary mt-0.5">{app.id} · {app.submittedOn}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className={sc.cls}><Icon className="w-3 h-3" /> {sc.label}</span>
                      <span className="flex items-center gap-1 text-[11px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        <Cpu className="w-3 h-3" /> AI {app.aiScore}%
                      </span>
                    </div>
                  </div>
                  {selected === app.id && (
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <p className="text-xs font-bold text-textPrimary uppercase tracking-wider mb-3">Application Timeline</p>
                      <div className="space-y-2">
                        {app.timeline.map((t, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${t.done ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                              {t.done ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <div className="w-2 h-2 rounded-full bg-gray-400" />}
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                              <span className={`text-xs font-semibold ${t.done ? 'text-textPrimary' : 'text-textSecondary'}`}>{t.step}</span>
                              <span className="text-[10px] text-textSecondary">{t.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2">
          {selectedApp ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24 space-y-5">
              <h3 className="text-base font-bold text-textPrimary">Application Details</h3>
              <div className="space-y-3">
                {[
                  { label: 'Scheme Name', value: selectedApp.scheme },
                  { label: 'Application ID', value: selectedApp.id },
                  { label: 'Category', value: selectedApp.category },
                  { label: 'District', value: selectedApp.district },
                  { label: 'Applied Amount', value: selectedApp.amount },
                  { label: 'Submitted On', value: selectedApp.submittedOn },
                ].map(d => (
                  <div key={d.label} className="flex items-start justify-between border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs text-textSecondary font-semibold">{d.label}</span>
                    <span className="text-xs font-bold text-textPrimary text-right max-w-[55%]">{d.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-textPrimary">AI Confidence Score</span>
                  <span className="text-sm font-extrabold text-primary">{selectedApp.aiScore}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div style={{ width: `${selectedApp.aiScore}%` }} className={`h-full rounded-full ${selectedApp.aiScore >= 80 ? 'bg-emerald-500' : selectedApp.aiScore >= 50 ? 'bg-amber-500' : 'bg-red-500'}`} />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-textSecondary flex flex-col items-center gap-3">
              <FileText className="w-10 h-10 text-gray-300" />
              <p className="text-sm font-semibold">Select an application to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
