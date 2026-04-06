import React from 'react';
import { BarChart3, Users, FileText, Download, ArrowUpRight, ArrowDownRight, Activity, Zap } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Profile Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-textPrimary tracking-tight">Admin Operations Center</h2>
          <p className="text-textSecondary mt-1">Platform overview, AI insights, and system performance analytics.</p>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-white border border-gray-200 text-textPrimary font-medium rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary shadow-sm hover:border-gray-300 transition-colors">
            <option>All Districts</option>
            <option>Solapur</option>
            <option>Pune</option>
            <option>Nashik</option>
          </select>
          <button className="btn-secondary py-2.5 text-sm">
            <Download className="w-4 h-4" /> Export Data
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Farmers', value: '2.4M', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+12%', up: true },
          { label: 'Total Applications', value: '842.1K', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+8%', up: true },
          { label: 'Verification Rate', value: '94%', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+2%', up: true },
          { label: 'Avg Resolution Time', value: '1.2 Days', icon: BarChart3, color: 'text-primary', bg: 'bg-primary/10', trend: '-15%', up: true }, // Lower is better
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-start mb-6">
              <h4 className="text-sm font-bold text-textSecondary uppercase tracking-wider">{kpi.label}</h4>
              <div className={`w-8 h-8 rounded-lg ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
            </div>
            <div className="relative z-10 flex items-end gap-3">
              <h3 className="text-4xl font-bold text-textPrimary tracking-tight">{kpi.value}</h3>
              <p className={`text-xs font-bold flex items-center mb-1.5 px-1.5 py-0.5 rounded ${kpi.up ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'}`}>
                {kpi.up ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                {kpi.trend}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Analytics Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-96 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-textPrimary">Application Throughput</h3>
                <p className="text-xs font-medium text-textSecondary mt-1">Total volume vs processed volume over last 7 days</p>
              </div>
              <div className="flex items-center gap-5 text-sm font-bold">
                <span className="flex items-center gap-2 text-textSecondary"><div className="w-3 h-3 rounded bg-blue-100 border border-blue-200" /> Received</span>
                <span className="flex items-center gap-2 text-textSecondary"><div className="w-3 h-3 rounded bg-primary" /> Processed</span>
              </div>
            </div>
            
            {/* Mock Chart Area */}
            <div className="flex-1 flex items-end gap-4 relative mt-4">
              {/* Y-Axis lines */}
              <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-8 border-b border-gray-200">
                {[4, 3, 2, 1, 0].map(i => (
                  <div key={i} className="w-full border-t border-gray-100 h-0 relative">
                    <span className="absolute -left-8 -top-2.5 text-[11px] font-medium text-textSecondary">{i === 0 ? '0' : `${i * 25}k`}</span>
                  </div>
                ))}
              </div>
              
              {/* Bars */}
              <div className="ml-6 flex-1 flex items-end justify-around relative z-10 pb-8 h-full px-2">
                {[
                  { r: 40, p: 35, d: 'Mon' }, { r: 65, p: 50, d: 'Tue' }, { r: 55, p: 60, d: 'Wed' }, 
                  { r: 85, p: 70, d: 'Thu' }, { r: 90, p: 85, d: 'Fri' }, { r: 50, p: 75, d: 'Sat' }, { r: 45, p: 80, d: 'Sun' }
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 w-full max-w-[44px] group cursor-pointer h-[100%] justify-end">
                    <div className="w-full flex items-end gap-1 h-full rounded-t relative">
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-textPrimary text-white px-3 py-1.5 rounded-lg shadow-float hidden group-hover:block z-20 text-xs font-medium text-center whitespace-nowrap">
                        Rec: {bar.r}k<br/>Pro: {bar.p}k
                      </div>
                      
                      <div className="w-1/2 bg-blue-100 border border-blue-200 border-b-0 rounded-t-md hover:bg-blue-200 transition-colors" style={{ height: `${bar.r}%` }} />
                      <div className="w-1/2 bg-primary rounded-t-md hover:bg-primaryHover transition-colors" style={{ height: `${bar.p}%` }} />
                    </div>
                    <span className="text-[11px] text-textSecondary font-bold mt-2">{bar.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 border-t-4 border-t-amber-400">
              <h3 className="text-lg font-bold text-textPrimary mb-5">Top Suspicious Anomalies</h3>
              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-2" />
                  <div>
                    <h4 className="text-sm font-bold text-textPrimary">Duplicate Bank Accounts</h4>
                    <p className="text-xs font-medium text-textSecondary mt-1 leading-relaxed">142 applications sharing identical bank details across 3 districts.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <div>
                    <h4 className="text-sm font-bold text-textPrimary">Rapid Successive Filings</h4>
                    <p className="text-xs font-medium text-textSecondary mt-1 leading-relaxed">High volume of applications filed from single IP in Pune region.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-textPrimary mb-5">AI Insight Stream</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 flex gap-3 items-start">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-textSecondary leading-relaxed">
                    <span className="font-bold text-textPrimary">Budget Alert:</span> "Drip Irrigation" scheme has reached 85% budget cap. Recommend reducing promotion.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-gray-100 flex gap-3 items-start">
                  <Zap className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-textSecondary leading-relaxed">
                    <span className="font-bold text-textPrimary">Efficiency Gain:</span> Officer approval time improved by 22% after AI pre-processing rollout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-textPrimary mb-6">Most Requested Schemes</h3>
            <div className="space-y-5">
              {[
                { name: 'Seed Subsidy Support', pct: 45, color: 'bg-primary' },
                { name: 'Drip Irrigation', pct: 28, color: 'bg-blue-500' },
                { name: 'Crop Insurance', pct: 15, color: 'bg-indigo-500' },
                { name: 'Tractor Loan', pct: 12, color: 'bg-emerald-400' },
              ].map((scheme, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-textSecondary">{scheme.name}</span>
                    <span className="font-bold text-textPrimary">{scheme.pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${scheme.color} rounded-full`} style={{ width: `${scheme.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-textPrimary mb-6">Common Rejection Reasons</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex justify-between items-center pb-3 border-b border-gray-200/60">
                <span className="text-textSecondary">Land Record Mismatch</span>
                <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">38%</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-gray-200/60">
                <span className="text-textSecondary">Illegible ID Scan</span>
                <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">24%</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-gray-200/60">
                <span className="text-textSecondary">Duplicate Entry</span>
                <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">12%</span>
              </li>
              <li className="flex justify-between items-center pb-1">
                <span className="text-textSecondary">Eligibility Not Met</span>
                <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">10%</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
