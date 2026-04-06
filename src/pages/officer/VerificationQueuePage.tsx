import React, { useState } from 'react';
import { Cpu, AlertTriangle, CheckCircle2, XCircle, Search, Filter, Eye, ThumbsUp, ThumbsDown } from 'lucide-react';

const queue = [
  { id: '#DI-9045', farmer: 'Ramesh Patil', scheme: 'Drip Irrigation Subsidy', district: 'Solapur', submitted: '2 hrs ago', ai: 95, flag: null, aadhaar: 'Verified', land: 'Verified', bank: 'Verified' },
  { id: '#CI-8819', farmer: 'Suresh Deshmukh', scheme: 'Crop Insurance Advance', district: 'Osmanabad', submitted: '5 hrs ago', ai: 42, flag: 'Name Mismatch', aadhaar: 'Mismatch', land: 'Verified', bank: 'Unverified' },
  { id: '#SH-4451', farmer: 'Vinay Kulkarni', scheme: 'Soil Health Check', district: 'Latur', submitted: '1 day ago', ai: 89, flag: null, aadhaar: 'Verified', land: 'Verified', bank: 'Verified' },
  { id: '#PM-7721', farmer: 'Anita Jadhav', scheme: 'PM-KISAN Installment', district: 'Solapur', submitted: '1 day ago', ai: 97, flag: null, aadhaar: 'Verified', land: 'Verified', bank: 'Verified' },
  { id: '#KCC-5501', farmer: 'Baban Shinde', scheme: 'Kisan Credit Card', district: 'Pune', submitted: '2 days ago', ai: 31, flag: 'Duplicate Entry', aadhaar: 'Duplicate', land: 'Pending', bank: 'Unverified' },
  { id: '#SFI-3390', farmer: 'Priya Pawar', scheme: 'Sustainable Farming Incentive', district: 'Nashik', submitted: '2 days ago', ai: 76, flag: null, aadhaar: 'Verified', land: 'Verified', bank: 'Verified' },
];

const scoreColor = (s: number) => s >= 80 ? 'text-emerald-600 bg-emerald-50' : s >= 50 ? 'text-amber-600 bg-amber-50' : 'text-rose-600 bg-rose-50';
const barColor = (s: number) => s >= 80 ? 'bg-emerald-500' : s >= 50 ? 'bg-amber-400' : 'bg-rose-500';
const verifyColor = (v: string) => v === 'Verified' ? 'text-emerald-700 bg-emerald-50 border-emerald-200' : v === 'Mismatch' || v === 'Duplicate' ? 'text-rose-700 bg-rose-50 border-rose-200' : 'text-amber-700 bg-amber-50 border-amber-200';

export default function VerificationQueuePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'flagged' | 'clear'>('all');

  const filtered = queue.filter(q => {
    const matchSearch = q.farmer.toLowerCase().includes(search.toLowerCase()) || q.scheme.toLowerCase().includes(search.toLowerCase()) || q.id.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || (filter === 'flagged' && q.flag) || (filter === 'clear' && !q.flag);
    return matchSearch && matchFilter;
  });

  const selectedItem = queue.find(q => q.id === selected);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">AI Verification Queue</h1>
          <p className="text-sm text-textSecondary mt-1">Review, approve or reject farmer applications using AI analysis</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl">
          <Cpu className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-bold text-emerald-700">AI Engine Live</span>
        </div>
      </div>

      {/* Batch Action Banner */}
      <div className="bg-slate-900 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-white font-bold">Auto-Approve Batch Ready</p>
          <p className="text-slate-400 text-xs mt-0.5">4 applications have 90%+ AI confidence and are ready for instant batch approval.</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
          Execute Batch (4)
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search farmer, scheme or ID..." className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
        </div>
        <div className="flex gap-2">
          {(['all', 'clear', 'flagged'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all capitalize ${filter === f ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-textSecondary hover:bg-slate-50'}`}>
              {f === 'all' ? 'All' : f === 'clear' ? '✅ Clear' : '⚠️ Flagged'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Queue List */}
        <div className="lg:col-span-3 space-y-3">
          {filtered.map(item => (
            <div key={item.id} onClick={() => setSelected(selected === item.id ? null : item.id)} className={`bg-white rounded-2xl border p-5 cursor-pointer transition-all ${selected === item.id ? 'border-primary shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md'}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-textPrimary">{item.farmer}</p>
                    {item.flag && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> {item.flag}</span>}
                  </div>
                  <p className="text-xs text-textSecondary">{item.scheme} · {item.id} · {item.district}</p>
                  <p className="text-[10px] text-textSecondary mt-1">Submitted {item.submitted}</p>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className={`text-sm font-extrabold px-2.5 py-1 rounded-lg ${scoreColor(item.ai)}`}>
                    <Cpu className="w-3.5 h-3.5 inline mr-1" />{item.ai}%
                  </span>
                  <div className="flex gap-2">
                    <button onClick={e => { e.stopPropagation(); }} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition-colors flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" /> Approve
                    </button>
                    <button onClick={e => { e.stopPropagation(); }} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors flex items-center gap-1">
                      <ThumbsDown className="w-3 h-3" /> Reject
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div style={{ width: `${item.ai}%` }} className={`h-full rounded-full ${barColor(item.ai)}`} />
                </div>
                <span className="text-[10px] text-textSecondary font-semibold">AI Confidence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2">
          {selectedItem ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-textPrimary">{selectedItem.farmer}</h3>
                  <p className="text-xs text-textSecondary mt-0.5">{selectedItem.id} · {selectedItem.district}</p>
                </div>
                <span className={`text-lg font-extrabold px-3 py-1 rounded-lg ${scoreColor(selectedItem.ai)}`}>{selectedItem.ai}%</span>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-textSecondary">Document Verification</p>
                {[
                  { label: 'Aadhaar Card', status: selectedItem.aadhaar },
                  { label: 'Land Record (7/12)', status: selectedItem.land },
                  { label: 'Bank Account', status: selectedItem.bank },
                ].map(d => (
                  <div key={d.label} className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-2.5">
                    <span className="text-xs font-semibold text-textPrimary">{d.label}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${verifyColor(d.status)}`}>{d.status}</span>
                  </div>
                ))}
              </div>

              {selectedItem.flag && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-rose-700 flex items-center gap-1 mb-1"><AlertTriangle className="w-3.5 h-3.5" /> AI Flag Detected</p>
                  <p className="text-xs text-rose-600">{selectedItem.flag} – Manual review required before approval.</p>
                </div>
              )}

              <div className="flex gap-3">
                <button className="flex-1 py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Approve
                </button>
                <button className="flex-1 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 font-bold text-sm hover:bg-rose-100 transition-colors flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4" /> Reject
                </button>
              </div>
              <button className="w-full py-2.5 rounded-xl border border-gray-200 text-textSecondary font-semibold text-sm hover:bg-slate-50 flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" /> View Full Application
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-textSecondary flex flex-col items-center gap-3">
              <Cpu className="w-10 h-10 text-gray-300" />
              <p className="text-sm font-semibold">Select an application to review</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
