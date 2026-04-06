import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, MessageSquare, ArrowRight, Send, Clock } from 'lucide-react';

const grievances = [
  { id: 'GR-2026-081', farmer: 'Ramesh Patil', title: 'Delay in Subsidy Payout', category: 'Subsidy Delay', district: 'Solapur', priority: 'High', status: 'open', raised: '03 Apr 2026', description: 'Approved subsidy amount not credited to bank account after 35 days of approval.', suggestedDept: 'District Finance Office' },
  { id: 'GR-2026-072', farmer: 'Priya Pawar', title: 'Aadhaar Number Update Required', category: 'Data Correction', district: 'Nashik', priority: 'Medium', status: 'in-progress', raised: '01 Apr 2026', description: 'Old Aadhaar linked in system. New card issued due to address change.', suggestedDept: 'Registration Office' },
  { id: 'GR-2026-058', farmer: 'Baban Shinde', title: 'Scheme Rejection Without Reason', category: 'Scheme Denial', district: 'Pune', priority: 'High', status: 'open', raised: '28 Mar 2026', description: 'KCC application rejected but no reason was communicated. Farmer is eligible as per land records.', suggestedDept: 'Credit Verification Cell' },
  { id: 'GR-2026-041', farmer: 'Anita Jadhav', title: 'Soil Health Card Not Received', category: 'Document Issue', district: 'Solapur', priority: 'Low', status: 'resolved', raised: '15 Mar 2026', description: 'Card prepared but not dispatched to village level.', suggestedDept: 'Distribution Office' },
];

const priorityColor: Record<string, string> = {
  High: 'bg-rose-100 text-rose-700 border-rose-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Low: 'bg-slate-100 text-slate-600 border-slate-200',
};
const statusColor: Record<string, string> = {
  open: 'bg-red-50 text-red-700 border-red-200',
  'in-progress': 'bg-amber-50 text-amber-700 border-amber-200',
  resolved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function GrievanceResolutionPage() {
  const [selected, setSelected] = useState<string | null>(grievances[0].id);
  const [reply, setReply] = useState('');
  const selectedGrievance = grievances.find(g => g.id === selected);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-textPrimary">Grievance Resolution</h1>
        <p className="text-sm text-textSecondary mt-1">Manage and resolve farmer grievances in your jurisdiction</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Open Cases', value: '2', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
          { label: 'In Progress', value: '1', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
          { label: 'Resolved (30d)', value: '1', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
        ].map(s => (
          <div key={s.label} className={`rounded-2xl border ${s.border} ${s.bg} p-4 text-center`}>
            <p className={`text-3xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-xs font-semibold text-textSecondary mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Grievance List */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-textSecondary">All Cases ({grievances.length})</p>
          {grievances.map(g => (
            <div key={g.id} onClick={() => setSelected(g.id)} className={`bg-white rounded-2xl border p-4 cursor-pointer transition-all ${selected === g.id ? 'border-primary shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md'}`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="text-sm font-bold text-textPrimary line-clamp-2">{g.title}</p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${priorityColor[g.priority]}`}>{g.priority}</span>
              </div>
              <p className="text-xs text-textSecondary mb-2">{g.farmer} · {g.district} · {g.id}</p>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[g.status]}`}>
                  {g.status === 'in-progress' ? 'In Progress' : g.status.charAt(0).toUpperCase() + g.status.slice(1)}
                </span>
                <span className="text-[10px] text-textSecondary flex items-center gap-1"><Clock className="w-3 h-3" /> {g.raised}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Resolution Panel */}
        <div className="lg:col-span-3">
          {selectedGrievance ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col" style={{ minHeight: '520px' }}>
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-textPrimary">{selectedGrievance.title}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${statusColor[selectedGrievance.status]}`}>
                    {selectedGrievance.status === 'in-progress' ? 'In Progress' : selectedGrievance.status.charAt(0).toUpperCase() + selectedGrievance.status.slice(1)}
                  </span>
                </div>
                <p className="text-xs text-textSecondary">{selectedGrievance.id} · {selectedGrievance.farmer} · {selectedGrievance.district}</p>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 space-y-5">
                {/* Description */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-textSecondary mb-2">Farmer's Complaint</p>
                  <p className="text-sm text-textPrimary leading-relaxed">{selectedGrievance.description}</p>
                </div>

                {/* AI Routing */}
                <div className="bg-blue-50 rounded-xl p-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-blue-700 mb-1">🤖 AI Suggested Routing</p>
                    <p className="text-sm font-semibold text-textPrimary">{selectedGrievance.suggestedDept}</p>
                    <p className="text-[11px] text-textSecondary mt-0.5">Based on grievance category analysis</p>
                  </div>
                  <button className="flex-shrink-0 flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-white border border-blue-200 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Escalate <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Actions */}
                {selectedGrievance.status !== 'resolved' && (
                  <div className="flex gap-3">
                    <button className="flex-1 py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Mark Resolved
                    </button>
                    <button className="flex-1 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 font-bold text-sm hover:bg-amber-100 transition-colors flex items-center justify-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> Escalate
                    </button>
                  </div>
                )}
              </div>

              {/* Reply */}
              <div className="p-4 border-t border-gray-100 flex items-center gap-3">
                <input type="text" value={reply} onChange={e => setReply(e.target.value)} placeholder="Send a message to the farmer..." className="flex-1 bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                <button className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white hover:bg-primaryHover transition-colors flex-shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center flex flex-col items-center gap-3 text-textSecondary">
              <MessageSquare className="w-10 h-10 text-gray-300" />
              <p className="text-sm font-semibold">Select a case to resolve</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
