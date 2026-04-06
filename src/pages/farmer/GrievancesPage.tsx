import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, Plus, MessageSquare, Send, PhoneCall } from 'lucide-react';

const grievances = [
  {
    id: 'GR-2026-001',
    title: 'Delay in Drip Irrigation Subsidy Payout',
    category: 'Subsidy Delay',
    raisedOn: '05 Apr, 2026',
    status: 'in-progress',
    priority: 'High',
    description: 'My approved Drip Irrigation Subsidy has not been credited to my bank account even after 30 days of approval.',
    officerName: 'Ravi Sawant',
    officerNotes: 'Issue escalated to district finance office for review. Expected resolution within 5 working days.',
    messages: [
      { from: 'You', text: 'Still no update on the payout.', time: '3 days ago' },
      { from: 'Officer Ravi', text: 'We have escalated this to the finance department. Expect resolution by next week.', time: '2 days ago' },
    ],
  },
  {
    id: 'GR-2025-047',
    title: 'Wrong Land Area in Soil Health Card',
    category: 'Data Correction',
    raisedOn: '18 Dec, 2025',
    status: 'resolved',
    priority: 'Medium',
    description: 'The soil health card shows land area as 0.5 acres but I own 2.5 acres as per 7/12 extract.',
    officerName: 'Meena Kulkarni',
    officerNotes: 'The land record has been corrected in the system. An updated Soil Health Card has been issued.',
    messages: [
      { from: 'Officer Meena', text: 'The correction has been applied. Please collect your updated card from the Agri Office.', time: '20 Dec 2025' },
    ],
  },
];

const statusConfig: Record<string, { label: string; bg: string; text: string; icon: React.ElementType }> = {
  'in-progress': { label: 'In Progress', bg: 'bg-amber-50', text: 'text-amber-700', icon: Clock },
  resolved: { label: 'Resolved', bg: 'bg-emerald-50', text: 'text-emerald-700', icon: CheckCircle2 },
  pending: { label: 'Pending', bg: 'bg-red-50', text: 'text-red-700', icon: AlertTriangle },
};

const categories = ['Subsidy Delay', 'Data Correction', 'Scheme Denial', 'Document Issue', 'Other'];

export default function GrievancesPage() {
  const [selected, setSelected] = useState<string | null>(grievances[0].id);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Subsidy Delay');
  const [newDesc, setNewDesc] = useState('');
  const [chatMsg, setChatMsg] = useState('');

  const selectedGrievance = grievances.find(g => g.id === selected);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">Help & Grievances</h1>
          <p className="text-sm text-textSecondary mt-1">Raise and track your complaints with your assigned Agriculture Officer</p>
        </div>
        <button onClick={() => setShowNew(!showNew)} className="btn-primary text-sm py-2">
          <Plus className="w-4 h-4" /> Raise Grievance
        </button>
      </div>

      {/* New Grievance Form */}
      {showNew && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <h3 className="font-bold text-textPrimary">New Grievance</h3>
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Grievance title..."
            className="input-field"
          />
          <select
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            className="input-field"
          >
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <textarea
            value={newDesc}
            onChange={e => setNewDesc(e.target.value)}
            placeholder="Describe your issue in detail..."
            rows={4}
            className="input-field resize-none"
          />
          <div className="flex gap-3">
            <button className="btn-primary text-sm py-2">Submit Grievance</button>
            <button onClick={() => setShowNew(false)} className="btn-secondary text-sm py-2">Cancel</button>
          </div>
        </div>
      )}

      {/* Emergency Contact Banner */}
      <div className="bg-slate-900 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm">Need immediate help?</p>
          <p className="text-slate-400 text-xs mt-0.5">Kisan Call Centre is available 24×7 in your local language</p>
        </div>
        <a href="tel:18001801551" className="flex items-center gap-2 bg-white text-slate-900 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-slate-100 transition">
          <PhoneCall className="w-4 h-4" /> 1800-180-1551
        </a>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Grievance List */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-textSecondary">Your Grievances ({grievances.length})</p>
          {grievances.map(g => {
            const sc = statusConfig[g.status];
            const Icon = sc.icon;
            return (
              <div
                key={g.id}
                onClick={() => setSelected(g.id)}
                className={`bg-white rounded-2xl border p-4 cursor-pointer transition-all ${selected === g.id ? 'border-primary shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-bold text-textPrimary line-clamp-2">{g.title}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0 ${sc.bg} ${sc.text}`}>
                    <Icon className="w-3 h-3" /> {sc.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-textSecondary font-semibold">
                  <span>{g.id}</span>·<span>{g.raisedOn}</span>·
                  <span className={`${g.priority === 'High' ? 'text-red-600' : 'text-amber-600'}`}>{g.priority} Priority</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat / Details Panel */}
        <div className="lg:col-span-3">
          {selectedGrievance ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full" style={{ minHeight: '500px' }}>
              {/* Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-textSecondary mb-1">{selectedGrievance.id} · {selectedGrievance.category}</p>
                    <h3 className="font-bold text-textPrimary">{selectedGrievance.title}</h3>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 flex-shrink-0 ${statusConfig[selectedGrievance.status].bg} ${statusConfig[selectedGrievance.status].text}`}>
                    {selectedGrievance.status === 'in-progress' ? 'In Progress' : 'Resolved'}
                  </span>
                </div>
              </div>

              {/* Officer Info */}
              <div className="mx-5 my-4 bg-slate-50 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-textSecondary mb-1">Assigned Officer</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    {selectedGrievance.officerName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-textPrimary">{selectedGrievance.officerName}</p>
                    <p className="text-xs text-textSecondary">Agriculture Officer · Solapur District</p>
                  </div>
                </div>
              </div>

              {/* Officer Note */}
              <div className="mx-5 mb-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700 mb-1">Officer Notes</p>
                <p className="text-xs text-blue-900">{selectedGrievance.officerNotes}</p>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 px-5 space-y-3 overflow-y-auto">
                {selectedGrievance.messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${m.from === 'You' ? 'bg-primary text-white rounded-br-sm' : 'bg-slate-100 text-textPrimary rounded-bl-sm'}`}>
                      <p className="font-semibold text-[10px] opacity-70 mb-0.5">{m.from}</p>
                      {m.text}
                      <p className="text-[10px] opacity-60 mt-1 text-right">{m.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-100 flex items-center gap-3">
                <input
                  type="text"
                  value={chatMsg}
                  onChange={e => setChatMsg(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary"
                />
                <button className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white hover:bg-primaryHover transition-colors flex-shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-textSecondary flex flex-col items-center gap-3">
              <MessageSquare className="w-10 h-10 text-gray-300" />
              <p className="text-sm font-semibold">Select a grievance to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
