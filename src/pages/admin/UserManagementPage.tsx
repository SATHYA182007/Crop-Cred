import React, { useState } from 'react';
import { Users, Search, UserCheck, UserX, ShieldCheck, Edit, Mail, Phone } from 'lucide-react';

const users = [
  { id: 'USR-001', name: 'Sathyam Patel', role: 'farmer', email: 'sathyam@gmail.com', phone: '9876543210', district: 'Solapur', status: 'active', joined: '01 Jan 2026', applications: 4 },
  { id: 'USR-002', name: 'Ramesh Patil', role: 'farmer', email: 'ramesh.patil@mail.com', phone: '9123456780', district: 'Solapur', status: 'active', joined: '15 Jan 2026', applications: 6 },
  { id: 'USR-003', name: 'Ravi Sawant', role: 'officer', email: 'ravi.sawant@gov.in', phone: '9988776655', district: 'Solapur', status: 'active', joined: '01 Dec 2025', applications: 0 },
  { id: 'USR-004', name: 'Suresh Deshmukh', role: 'farmer', email: 'suresh@farm.com', phone: '9871234560', district: 'Osmanabad', status: 'suspended', joined: '20 Feb 2026', applications: 2 },
  { id: 'USR-005', name: 'Meena Kulkarni', role: 'officer', email: 'meena.k@gov.in', phone: '9800012345', district: 'Nashik', status: 'active', joined: '05 Oct 2025', applications: 0 },
  { id: 'USR-006', name: 'Anita Jadhav', role: 'farmer', email: 'anita.j@mail.com', phone: '9765432100', district: 'Solapur', status: 'active', joined: '03 Mar 2026', applications: 3 },
];

const roleColor: Record<string, string> = {
  farmer: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  officer: 'bg-blue-50 text-blue-700 border-blue-200',
  admin: 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function UserManagementPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'farmer' | 'officer'>('all');

  const filtered = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()) || u.id.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    return matchSearch && matchRole;
  });

  const selectedUser = users.find(u => u.id === selected);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-textPrimary">User Management</h1>
          <p className="text-sm text-textSecondary mt-1">Manage farmer and officer registrations across all districts</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '2.4M', color: 'text-slate-700', bg: 'bg-slate-50', border: 'border-slate-200' },
          { label: 'Farmers', value: '2.38M', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
          { label: 'Officers', value: '14,204', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' },
          { label: 'Suspended', value: '342', color: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200' },
        ].map(s => (
          <div key={s.label} className={`rounded-2xl border ${s.border} ${s.bg} p-4 text-center`}>
            <p className={`text-xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-xs font-semibold text-textSecondary mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email or ID..." className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
        </div>
        <div className="flex gap-2">
          {(['all', 'farmer', 'officer'] as const).map(f => (
            <button key={f} onClick={() => setRoleFilter(f)} className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all capitalize ${roleFilter === f ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-textSecondary hover:bg-slate-50'}`}>{f === 'all' ? 'All Roles' : f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Table */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-gray-200 text-textSecondary">
                <tr>
                  <th className="px-5 py-4 font-semibold text-xs uppercase tracking-wider">User</th>
                  <th className="px-5 py-4 font-semibold text-xs uppercase tracking-wider">Role</th>
                  <th className="px-5 py-4 font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-5 py-4 font-semibold text-xs uppercase tracking-wider">District</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(user => (
                  <tr key={user.id} onClick={() => setSelected(selected === user.id ? null : user.id)} className={`cursor-pointer transition-colors ${selected === user.id ? 'bg-primary/5' : 'hover:bg-slate-50'}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600">{user.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                          <p className="font-bold text-textPrimary">{user.name}</p>
                          <p className="text-[10px] text-textSecondary">{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border capitalize ${roleColor[user.role]}`}>{user.role}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${user.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>{user.status}</span>
                    </td>
                    <td className="px-5 py-4 text-xs font-semibold text-textSecondary">{user.district}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Card */}
        <div className="lg:col-span-2">
          {selectedUser ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-lg">{selectedUser.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <h3 className="font-bold text-textPrimary">{selectedUser.name}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border capitalize ${roleColor[selectedUser.role]}`}>{selectedUser.role}</span>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { icon: Mail, label: selectedUser.email },
                  { icon: Phone, label: selectedUser.phone },
                  { icon: ShieldCheck, label: `ID: ${selectedUser.id}` },
                  { icon: Users, label: `District: ${selectedUser.district}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-textSecondary">
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xl font-extrabold text-textPrimary">{selectedUser.applications}</p>
                  <p className="text-[10px] text-textSecondary font-semibold mt-0.5">Applications</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xl font-extrabold text-textPrimary capitalize">{selectedUser.status}</p>
                  <p className="text-[10px] text-textSecondary font-semibold mt-0.5">Account Status</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-xl border border-primary/30 text-primary font-bold text-xs hover:bg-primary/5 flex items-center justify-center gap-1"><Edit className="w-3.5 h-3.5" /> Edit</button>
                {selectedUser.status === 'active' ? (
                  <button className="flex-1 py-2 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 font-bold text-xs hover:bg-rose-100 flex items-center justify-center gap-1"><UserX className="w-3.5 h-3.5" /> Suspend</button>
                ) : (
                  <button className="flex-1 py-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 font-bold text-xs hover:bg-emerald-100 flex items-center justify-center gap-1"><UserCheck className="w-3.5 h-3.5" /> Restore</button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center flex flex-col items-center gap-3 text-textSecondary">
              <Users className="w-10 h-10 text-gray-300" />
              <p className="text-sm font-semibold">Select a user to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
