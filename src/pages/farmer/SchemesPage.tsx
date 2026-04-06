import React, { useState } from 'react';
import { Leaf, Search, ChevronRight, Clock, CheckCircle2, Star } from 'lucide-react';

const schemes = [
  {
    id: 'PM-KISAN',
    title: 'PM-KISAN Samman Nidhi',
    category: 'Income Support',
    amount: '₹6,000 / year',
    deadline: '30 Jun 2026',
    status: 'eligible',
    aiMatch: 98,
    description: 'Direct financial support of ₹6000 per year to all land-holding farmer families in three equal installments.',
    color: 'emerald',
  },
  {
    id: 'SFI-2026',
    title: 'Sustainable Farming Incentive',
    category: 'Organic Farming',
    amount: '₹25,000 grant',
    deadline: '15 May 2026',
    status: 'eligible',
    aiMatch: 91,
    description: 'Up to ₹25,000 grant for adopting certified organic farming practices and biofertilizer usage.',
    color: 'blue',
  },
  {
    id: 'PMFBY-2026',
    title: 'PM Fasal Bima Yojana',
    category: 'Crop Insurance',
    amount: '₹2 Lakh cover',
    deadline: '01 Apr 2026',
    status: 'applied',
    aiMatch: 85,
    description: 'Comprehensive crop insurance coverage at low premium rates to guard against yield loss.',
    color: 'amber',
  },
  {
    id: 'KCC-2026',
    title: 'Kisan Credit Card (KCC)',
    category: 'Credit Access',
    amount: 'Up to ₹3 Lakh',
    deadline: '31 Mar 2027',
    status: 'eligible',
    aiMatch: 76,
    description: 'Flexible revolving credit for farmers to meet agricultural and allied activity expenses seamlessly.',
    color: 'purple',
  },
  {
    id: 'SHC-2026',
    title: 'Soil Health Card Scheme',
    category: 'Soil Testing',
    amount: 'Free',
    deadline: '31 Dec 2026',
    status: 'applied',
    aiMatch: 100,
    description: 'Free soil health testing and a Soil Health Card providing crop-wise recommendations for nutrients.',
    color: 'teal',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-100' },
};

export default function SchemesPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'eligible' | 'applied'>('all');

  const filtered = schemes.filter(s => {
    const matchQuery = s.title.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === 'all' || s.status === filter;
    return matchQuery && matchFilter;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-textPrimary">Schemes & Grants</h1>
        <p className="text-sm text-textSecondary mt-1">AI-matched government schemes tailored for your farm profile</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search schemes..."
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'eligible', 'applied'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all capitalize ${
                filter === f ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-textSecondary hover:bg-slate-50'
              }`}
            >
              {f === 'all' ? 'All Schemes' : f === 'eligible' ? 'Eligible' : 'Applied'}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {filtered.map(scheme => {
          const c = colorMap[scheme.color];
          return (
            <div key={scheme.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                <Leaf className={`w-6 h-6 ${c.text}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                    {scheme.category}
                  </span>
                  {scheme.status === 'applied' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Applied
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-textPrimary">{scheme.title}</h3>
                <p className="text-xs text-textSecondary mt-1 line-clamp-2">{scheme.description}</p>
                <div className="flex items-center gap-4 mt-2 text-xs font-semibold text-textSecondary">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Deadline: {scheme.deadline}</span>
                  <span className="flex items-center gap-1 text-primary"><Star className="w-3.5 h-3.5 fill-primary" /> AI Match: {scheme.aiMatch}%</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0 flex flex-col items-end gap-3">
                <p className="text-xl font-extrabold text-textPrimary">{scheme.amount}</p>
                {scheme.status === 'applied' ? (
                  <button className="btn-secondary text-sm py-2 px-4 shadow-none">View Status</button>
                ) : (
                  <button className="btn-primary text-sm py-2 px-4">
                    Apply Now <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center text-textSecondary">
            No schemes found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
