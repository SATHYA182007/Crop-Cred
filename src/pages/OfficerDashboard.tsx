import React from 'react';
import { Shield, Clock, AlertTriangle, ChevronRight, Filter, Cpu, CheckCircle } from 'lucide-react';

const OfficerDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-textPrimary tracking-tight">Officer Control Center</h2>
          <p className="text-textSecondary mt-1">Review applications, resolve grievances, and monitor region metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-textSecondary font-medium">Region: <strong className="text-textPrimary">Solapur North</strong></span>
          <div className="h-6 w-px bg-gray-200 mx-2" />
          <button className="btn-secondary py-2 text-sm">
            Generate Daily Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Pending Reviews', value: '42', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
          { label: 'High Priority Grievances', value: '7', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
          { label: 'AI Flagged Submissions', value: '14', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
          { label: 'Processed Today', value: '28', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
        ].map((kpi, i) => (
          <div key={i} className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-full h-1 ${kpi.bg}`} />
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl ${kpi.bg} border ${kpi.border} flex items-center justify-center`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
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
        
        {/* Main Feed: Verification Queue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-textPrimary">Verification Queue</h3>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm py-1.5 px-3 border-gray-200"><Filter className="w-4 h-4" /> Filter</button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-gray-200 text-textSecondary">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Farmer & App ID</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Scheme Detail</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">AI Confidence</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-bold text-textPrimary">Ramesh Patil</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">App ID: #DI-9045</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-medium text-textPrimary">Drip Irrigation Subsidy</p>
                    <p className="text-[11px] font-semibold text-textSecondary mt-1">Submitted: 2 hrs ago</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-full max-w-[80px] h-2 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full bg-emerald-500 w-[95%]" />
                      </span>
                      <span className="text-xs font-bold text-emerald-600">95%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-sm font-semibold text-primary hover:text-primaryHover border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-lg transition-colors">Review</button>
                  </td>
                </tr>
                <tr className="hover:bg-rose-50/50 transition-colors bg-rose-50/30">
                  <td className="px-6 py-5">
                    <p className="font-bold text-textPrimary">Suresh Deshmukh</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">App ID: #CI-8819</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-medium text-textPrimary">Crop Insurance</p>
                    <p className="text-[11px] font-semibold text-textSecondary mt-1">Submitted: 5 hrs ago</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-full max-w-[80px] h-2 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full bg-rose-500 w-[42%]" />
                      </span>
                      <span className="text-xs font-bold text-rose-600">42%</span>
                    </div>
                    <p className="text-[11px] font-bold text-rose-600 mt-2 flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5"/> Name Mismatch</p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-sm font-semibold text-rose-600 hover:text-rose-700 border border-rose-200 bg-rose-100 px-4 py-1.5 rounded-lg transition-colors">Inspect</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-bold text-textPrimary">Vinay Kulkarni</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">App ID: #SH-4451</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-medium text-textPrimary">Soil Health Check</p>
                    <p className="text-[11px] font-semibold text-textSecondary mt-1">Submitted: 1 day ago</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-full max-w-[80px] h-2 bg-slate-100 rounded-full overflow-hidden">
                        <span className="block h-full bg-emerald-500 w-[89%]" />
                      </span>
                      <span className="text-xs font-bold text-emerald-600">89%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-sm font-semibold text-primary hover:text-primaryHover border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-lg transition-colors">Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Smart AI Actions List */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-textPrimary mb-5 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" /> AI Smart Actions
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-textPrimary font-bold text-sm">Auto-Approve Batch</h4>
                  <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">Ready</span>
                </div>
                <p className="text-xs font-medium text-textSecondary mb-3 leading-relaxed">18 applications currently have 95%+ AI confidence and verify against all databases.</p>
                <button className="text-emerald-700 text-sm font-bold flex items-center gap-1 hover:text-emerald-800 transition-colors">
                  Execute Batch Approval <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-slate-50">
                <h4 className="text-textPrimary font-bold text-sm mb-1">Grievance Suggested Routing</h4>
                <p className="text-xs font-medium text-textSecondary mb-3 leading-relaxed">3 new grievances involve subsidy delays. AI suggests routing to Finance Dept.</p>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:text-primaryHover transition-colors">
                  View Suggestions <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OfficerDashboard;
