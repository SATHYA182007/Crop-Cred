import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Leaf, LogOut, Bell, Settings, Search, LayoutDashboard, FileText, AlertTriangle, Users, BarChart3 } from 'lucide-react';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  let role = 'farmer';
  if (path.includes('officer')) role = 'officer';
  if (path.includes('admin')) role = 'admin';

  const menuItems = {
    farmer: [
      { label: 'Dashboard Overview', icon: LayoutDashboard, path: '/farmer-dashboard' },
      { label: 'Schemes & Grants', icon: FileText, path: '/farmer-dashboard/schemes' },
      { label: 'My Applications', icon: FileText, path: '/farmer-dashboard/applications' },
      { label: 'Help & Grievances', icon: AlertTriangle, path: '/farmer-dashboard/grievances' },
    ],
    officer: [
      { label: 'Officer Panel', icon: LayoutDashboard, path: '/officer-dashboard' },
      { label: 'AI Verification Queue', icon: FileText, path: '/officer-dashboard/verification' },
      { label: 'Grievance Resolution', icon: AlertTriangle, path: '/officer-dashboard/grievances' },
    ],
    admin: [
      { label: 'Command Center', icon: LayoutDashboard, path: '/admin-dashboard' },
      { label: 'System Analytics', icon: BarChart3, path: '/admin-dashboard/analytics' },
      { label: 'User Management', icon: Users, path: '/admin-dashboard/users' },
      { label: 'Scheme Management', icon: FileText, path: '/admin-dashboard/schemes' },
    ]
  };

  const navLinks = menuItems[role as keyof typeof menuItems] || menuItems.farmer;

  return (
    <div className="min-h-screen bg-slate-50 flex text-textPrimary">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white flex flex-col hidden md:flex sticky top-0 h-screen shadow-sm z-40">
        <div className="h-20 flex items-center px-6 border-b border-gray-100 gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-textPrimary">CropCred AI</span>
        </div>
        
        <div className="px-6 py-5 border-b border-gray-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
              <span className="text-textPrimary font-bold">
                {role === 'farmer' ? 'F' : role === 'officer' ? 'O' : 'A'}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-textPrimary capitalize">{role} Portal</p>
              <p className="text-xs text-textSecondary flex items-center gap-1 font-medium mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Session Active
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button 
                key={item.path + item.label}
                onClick={() => navigate(item.path)}
                className={`w-full nav-item ${isActive ? 'active' : ''}`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button onClick={() => navigate('/')} className="w-full nav-item text-textSecondary hover:text-red-600 hover:bg-red-50">
            <LogOut className="w-5 h-5 text-slate-400" />
            <span className="font-semibold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>


      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 border-b border-gray-200 bg-white flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
          <div className="relative w-96 hidden lg:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search applications, schemes, ID..." 
              className="w-full bg-slate-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400 text-textPrimary"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400 hover:text-textPrimary hover:bg-slate-50 transition-colors relative shadow-sm">
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-400 hover:text-textPrimary hover:bg-slate-50 transition-colors shadow-sm">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-auto max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
