import React, { useState } from 'react';
import { Activity, Server, Cpu, Zap, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown, ArrowUpRight, Database, Clock, Globe } from 'lucide-react';

const districtStats = [
  { name: 'Solapur', farmers: 142000, apps: 28400, verified: 96, resolution: 1.1 },
  { name: 'Pune', farmers: 98000, apps: 19600, verified: 91, resolution: 1.4 },
  { name: 'Nashik', farmers: 87500, apps: 17500, verified: 88, resolution: 1.8 },
  { name: 'Osmanabad', farmers: 61000, apps: 12200, verified: 94, resolution: 1.2 },
  { name: 'Latur', farmers: 54000, apps: 10800, verified: 82, resolution: 2.1 },
  { name: 'Kolhapur', farmers: 47000, apps: 9400, verified: 90, resolution: 1.6 },
];

const aiMetrics = [
  { label: 'Avg AI Score', value: '86.4%', trend: '+2.1%', up: true },
  { label: 'Auto-Approved Today', value: '1,842', trend: '+14%', up: true },
  { label: 'AI Flagged', value: '234', trend: '-8%', up: true },
  { label: 'False Positive Rate', value: '0.8%', trend: '-0.2%', up: true },
];

const systemHealth = [
  { service: 'AI Verification Engine', status: 'operational', latency: '42ms', uptime: '99.98%' },
  { service: 'Document OCR Service', status: 'operational', latency: '180ms', uptime: '99.91%' },
  { service: 'Aadhaar Verify API', status: 'degraded', latency: '820ms', uptime: '98.2%' },
  { service: 'Supabase Database', status: 'operational', latency: '12ms', uptime: '99.99%' },
  { service: 'Land Record API (NIC)', status: 'operational', latency: '310ms', uptime: '99.4%' },
  { service: 'Notification Service', status: 'operational', latency: '55ms', uptime: '99.95%' },
];

const weeklyData = [
  { day: 'Mon', ai: 72, manual: 28 },
  { day: 'Tue', ai: 80, manual: 20 },
  { day: 'Wed', ai: 75, manual: 25 },
  { day: 'Thu', ai: 88, manual: 12 },
  { day: 'Fri', ai: 91, manual: 9 },
  { day: 'Sat', ai: 85, manual: 15 },
  { day: 'Sun', ai: 78, manual: 22 },
];

export default function SystemAnalyticsPage() {
  const [tab, setTab] = useState<'district' | 'ai' | 'system'>('district');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">System Analytics</h1>
          <p className="text-sm text-textSecondary mt-1">Deep-dive into platform performance, AI metrics, and infrastructure health</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-bold text-emerald-700">Live Data</span>
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'API Calls Today', value: '4.2M', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+18%', up: true },
          { label: 'Avg Response Time', value: '186ms', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '-22ms', up: true },
          { label: 'DB Query Load', value: '64%', icon: Database, color: 'text-amber-600', bg: 'bg-amber-50', trend: '+4%', up: false },
          { label: 'System Uptime', value: '99.96%', icon: Server, color: 'text-primary', bg: 'bg-primary/10', trend: 'Stable', up: true },
        ].map((k, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center`}>
                <k.icon className={`w-5 h-5 ${k.color}`} />
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5 ${k.up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                {k.up ? <ArrowUpRight className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {k.trend}
              </span>
            </div>
            <h4 className="text-2xl font-extrabold text-textPrimary">{k.value}</h4>
            <p className="text-xs font-semibold text-textSecondary mt-1">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 border-b border-gray-200">
        {[
          { key: 'district', label: '🗺️ District Breakdown' },
          { key: 'ai', label: '🤖 AI Engine Metrics' },
          { key: 'system', label: '⚙️ System Health' },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as any)}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors -mb-px ${tab === t.key ? 'border-primary text-primary' : 'border-transparent text-textSecondary hover:text-textPrimary'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === 'district' && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-textPrimary">District-wise Performance</h3>
            <span className="text-xs text-textSecondary font-semibold">Maharashtra · 2026</span>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-textSecondary border-b border-gray-100">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">District</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">Registered Farmers</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">Applications</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">Verification Rate</th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">Avg Resolution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {districtStats.map((d, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-textPrimary">{d.name}</td>
                  <td className="px-6 py-4 text-textSecondary font-semibold">{d.farmers.toLocaleString()}</td>
                  <td className="px-6 py-4 text-textSecondary font-semibold">{d.apps.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div style={{ width: `${d.verified}%` }} className={`h-full rounded-full ${d.verified >= 90 ? 'bg-emerald-500' : d.verified >= 80 ? 'bg-amber-400' : 'bg-rose-500'}`} />
                      </div>
                      <span className={`text-xs font-bold ${d.verified >= 90 ? 'text-emerald-600' : d.verified >= 80 ? 'text-amber-600' : 'text-rose-600'}`}>{d.verified}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${d.resolution <= 1.3 ? 'bg-emerald-50 text-emerald-700' : d.resolution <= 1.8 ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'}`}>
                      {d.resolution} days
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'ai' && (
        <div className="space-y-6">
          {/* AI KPI row */}
          <div className="grid grid-cols-4 gap-4">
            {aiMetrics.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center">
                <p className="text-2xl font-extrabold text-textPrimary">{m.value}</p>
                <p className="text-xs font-semibold text-textSecondary mt-1">{m.label}</p>
                <span className={`inline-flex items-center gap-1 text-[11px] font-bold mt-2 px-2 py-0.5 rounded ${m.up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                  {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {m.trend}
                </span>
              </div>
            ))}
          </div>

          {/* AI vs Manual chart */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-textPrimary">AI vs Manual Verification Split</h3>
                <p className="text-xs text-textSecondary mt-0.5">Percentage of approvals handled by AI engine this week</p>
              </div>
              <div className="flex gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-primary" /> AI</span>
                <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-slate-200" /> Manual</span>
              </div>
            </div>
            <div className="space-y-3">
              {weeklyData.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-textSecondary w-8">{d.day}</span>
                  <div className="flex-1 h-6 bg-gray-100 rounded-lg overflow-hidden flex">
                    <div style={{ width: `${d.ai}%` }} className="bg-primary h-full flex items-center justify-end pr-2 transition-all">
                      <span className="text-[10px] font-bold text-white">{d.ai}%</span>
                    </div>
                    <div style={{ width: `${d.manual}%` }} className="bg-slate-200 h-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-textSecondary">{d.manual}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'system' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-textPrimary">Service Health Monitor</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All Systems Operational (5/6)
              </div>
            </div>
            <div className="divide-y divide-gray-50">
              {systemHealth.map((svc, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${svc.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-400 animate-pulse'}`} />
                    <div>
                      <p className="text-sm font-bold text-textPrimary">{svc.service}</p>
                      <p className="text-[10px] text-textSecondary mt-0.5">Latency: <strong>{svc.latency}</strong></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-textSecondary">{svc.uptime} uptime</span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${svc.status === 'operational' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                      {svc.status === 'operational' ? <><CheckCircle2 className="w-3 h-3 inline mr-1" />Operational</> : <><AlertTriangle className="w-3 h-3 inline mr-1" />Degraded</>}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3"><AlertTriangle className="w-4 h-4" /> Active Alerts (1)</h4>
            <div className="bg-white border border-amber-100 rounded-xl p-4">
              <p className="text-sm font-bold text-textPrimary">Aadhaar Verify API – High Latency</p>
              <p className="text-xs text-textSecondary mt-1">Response time at 820ms, above normal threshold of 400ms. UIDAI server load is the suspected cause. No data loss reported.</p>
              <p className="text-[10px] text-amber-700 font-bold mt-2">Raised: 06 Apr 2026, 14:32 IST</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
