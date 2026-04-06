import React, { useState } from 'react';
import { Leaf, Plus, Edit2, Pause, Play, Trash2, Search, IndianRupee, Users, ArrowUpRight } from 'lucide-react';

const schemes = [
  { id: 'SCH-001', name: 'PM-KISAN Samman Nidhi', category: 'Income Support', budget: 68000, spent: 57800, applicants: 142000, status: 'active', deadline: '31 Dec 2026', aiAutoApprove: true },
  { id: 'SCH-002', name: 'Drip Irrigation Subsidy', category: 'Irrigation', budget: 12000, spent: 10200, applicants: 28400, status: 'active', deadline: '30 Jun 2026', aiAutoApprove: false },
  { id: 'SCH-003', name: 'Sustainable Farming Incentive', category: 'Organic Farming', budget: 5000, spent: 1200, applicants: 6800, status: 'active', deadline: '15 May 2026', aiAutoApprove: true },
  { id: 'SCH-004', name: 'PM Fasal Bima Yojana', category: 'Crop Insurance', budget: 45000, spent: 44100, applicants: 210000, status: 'paused', deadline: '01 Apr 2026', aiAutoApprove: false },
  { id: 'SCH-005', name: 'Soil Health Card', category: 'Soil Testing', budget: 2000, spent: 1850, applicants: 55000, status: 'active', deadline: '31 Dec 2026', aiAutoApprove: true },
];

const categoryColor: Record<string, string> = {
  'Income Support': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Irrigation': 'bg-blue-50 text-blue-700 border-blue-200',
  'Organic Farming': 'bg-teal-50 text-teal-700 border-teal-200',
  'Crop Insurance': 'bg-purple-50 text-purple-700 border-purple-200',
  'Soil Testing': 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function SchemeManagementPage() {
  const [search, setSearch] = useState('');

  const filtered = schemes.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">Scheme Management</h1>
          <p className="text-sm text-textSecondary mt-1">Configure, monitor and manage government agricultural schemes nationally</p>
        </div>
        <button className="btn-primary text-sm py-2"><Plus className="w-4 h-4" /> New Scheme</button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Active Schemes', value: '4', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
          { label: 'Total Budget Allocated', value: '₹1,320 Cr', icon: IndianRupee, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
          { label: 'Total Beneficiaries', value: '4.42L+', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
        ].map(s => (
          <div key={s.label} className={`bg-white rounded-2xl border ${s.border} p-5 flex items-center gap-4`}>
            <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
              <s.icon className={`w-6 h-6 ${s.color}`} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-textPrimary">{s.value}</p>
              <p className="text-xs font-semibold text-textSecondary mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search schemes..." className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
      </div>

      {/* Scheme Cards */}
      <div className="space-y-4">
        {filtered.map(scheme => {
          const pct = Math.round((scheme.spent / scheme.budget) * 100);
          const budgetColor = pct >= 90 ? 'bg-rose-500' : pct >= 70 ? 'bg-amber-400' : 'bg-primary';
          return (
            <div key={scheme.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryColor[scheme.category] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>{scheme.category}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${scheme.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                      {scheme.status === 'active' ? '● Active' : '⏸ Paused'}
                    </span>
                    {scheme.aiAutoApprove && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">🤖 AI Auto-Approve</span>}
                  </div>
                  <h3 className="text-base font-bold text-textPrimary mb-1">{scheme.name}</h3>
                  <p className="text-xs text-textSecondary">Deadline: {scheme.deadline} · ID: {scheme.id}</p>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-textSecondary mb-1">Budget Utilization</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div style={{ width: `${pct}%` }} className={`h-full rounded-full ${budgetColor}`} />
                        </div>
                        <span className="text-xs font-bold text-textPrimary">{pct}%</span>
                      </div>
                      <p className="text-[10px] text-textSecondary mt-1">₹{scheme.spent.toLocaleString()} Cr / ₹{scheme.budget.toLocaleString()} Cr</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-textSecondary mb-1">Total Applicants</p>
                      <p className="text-base font-extrabold text-textPrimary">{scheme.applicants.toLocaleString()}</p>
                      <p className="text-[10px] text-textSecondary flex items-center gap-0.5 mt-0.5"><ArrowUpRight className="w-3 h-3 text-emerald-500" /> Growing</p>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2 flex-shrink-0">
                  <button className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg border border-gray-200 text-textSecondary hover:bg-slate-50 transition-colors">
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                  {scheme.status === 'active' ? (
                    <button className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors">
                      <Pause className="w-3.5 h-3.5" /> Pause
                    </button>
                  ) : (
                    <button className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors">
                      <Play className="w-3.5 h-3.5" /> Activate
                    </button>
                  )}
                  <button className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
