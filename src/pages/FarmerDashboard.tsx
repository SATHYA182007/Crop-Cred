import React from 'react';
import { FileText, CheckCircle2, Clock, AlertTriangle, ChevronRight, UploadCloud, Leaf, Cpu } from 'lucide-react';

const FarmerDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Profile Area */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="flex gap-6 items-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 p-1 shadow-sm">
            <div className="w-full h-full bg-emerald-50 rounded-xl flex items-center justify-center">
              <span className="text-3xl font-bold text-emerald-700">SP</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-textPrimary">Sathyam Patel</h2>
            <div className="flex items-center gap-3 mt-1.5 text-sm font-medium text-textSecondary">
              <span className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-md"><Leaf className="w-4 h-4 text-primary" /> Solapur</span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-md">ID: FRM-2026-8921</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-40 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full" />
              </div>
              <span className="text-xs font-bold text-primary">85% Complete</span>
            </div>
          </div>
        </div>

        <button className="btn-secondary relative z-10">
          Complete Profile
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Applications', value: '4', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Approved', value: '2', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Pending AI Check', value: '1', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Active Grievances', value: '0', icon: AlertTriangle, color: 'text-slate-400', bg: 'bg-slate-50' },
        ].map((kpi, i) => (
          <div key={i} className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-textPrimary">{kpi.value}</h4>
              <p className="text-sm font-medium text-textSecondary mt-1">{kpi.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Feed: Applications */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-textPrimary">Recent Applications</h3>
            <button className="text-sm font-semibold text-primary hover:text-primaryHover transition-colors">View All</button>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-gray-200 text-textSecondary">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Scheme Name</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Submission Date</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Status / AI Match</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-bold text-textPrimary">Drip Irrigation Subsidy 2026</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">App ID: #DI-9021</p>
                  </td>
                  <td className="px-6 py-5 font-medium text-textSecondary">02 Apr, 2026</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="status-chip status-pending">Pending Review</span>
                      <span className="flex items-center gap-1 text-[11px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        <Cpu className="w-3 h-3" /> 94%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-sm font-semibold text-textSecondary hover:text-primary transition-colors">Details</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-bold text-textPrimary">Crop Insurance Advance</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">App ID: #CI-8812</p>
                  </td>
                  <td className="px-6 py-5 font-medium text-textSecondary">15 Mar, 2026</td>
                  <td className="px-6 py-5">
                    <span className="status-chip status-approved">Approved</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-sm font-semibold text-textSecondary hover:text-primary transition-colors">Details</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-bold text-textPrimary">Soil Health Card Request</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">App ID: #SH-4421</p>
                  </td>
                  <td className="px-6 py-5 font-medium text-textSecondary">10 Jan, 2026</td>
                  <td className="px-6 py-5">
                    <span className="status-chip status-approved">Approved</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-sm font-semibold text-textSecondary hover:text-primary transition-colors">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Action Required Widget */}
          <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex flex-shrink-0 items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-textPrimary font-bold mb-1">Upload Missing Document</h4>
                <p className="text-sm text-textSecondary mb-4 leading-relaxed">
                  Your "Drip Irrigation" application requires a clearer photo of the Land Record <i>(7/12 Extract)</i>. AI flagged low visibility.
                </p>
                <button className="btn-secondary w-full text-sm py-2 shadow-none border-amber-200 text-amber-700 hover:bg-amber-50">
                  <UploadCloud className="w-4 h-4" /> Upload Document
                </button>
              </div>
            </div>
          </div>

          {/* Scheme Recommendations */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-textPrimary mb-4">Recommended For You</h3>
            <div className="space-y-4">
              <div className="block p-4 rounded-xl border border-gray-100 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-100 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">New Scheme</span>
                  <Leaf className="w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-textPrimary font-bold mb-1.5">Sustainable Farming Incentive</h4>
                <p className="text-xs font-medium text-textSecondary mb-4">Up to ₹25,000 grant for adopting certified organic practices.</p>
                <div className="text-primary text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Apply Now <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FarmerDashboard;
