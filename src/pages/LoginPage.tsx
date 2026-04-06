import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf, Mail, Lock, ChevronRight, UserCircle, Shield, Briefcase, CheckCircle2 } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState<'farmer' | 'officer' | 'admin'>(
    (location.state as any)?.role || 'farmer'
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel - Auth Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10 bg-white">
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-textPrimary">CropCred AI</span>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto mt-12">
          <h2 className="text-3xl font-bold text-textPrimary mb-2">Welcome Back</h2>
          <p className="text-textSecondary mb-8 text-sm">Select your role and sign in to access your dashboard.</p>

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <button 
              type="button"
              onClick={() => setRole('farmer')}
              className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${
                role === 'farmer' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-gray-200 text-textSecondary hover:border-gray-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg mb-0.5">🌾</span>
              <span className="text-xs font-bold">Farmer</span>
            </button>
            <button 
              type="button"
              onClick={() => setRole('officer')}
              className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${
                role === 'officer' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-textSecondary hover:border-gray-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg mb-0.5">🛡️</span>
              <span className="text-xs font-bold">Officer</span>
            </button>
            <button 
              type="button"
              onClick={() => setRole('admin')}
              className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${
                role === 'admin' ? 'bg-amber-50 border-amber-500 text-amber-700' : 'bg-white border-gray-200 text-textSecondary hover:border-gray-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg mb-0.5">⚙️</span>
              <span className="text-xs font-bold">Admin</span>
            </button>
          </div>

          <form key={role} onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-textPrimary mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  className="input-field pl-10" 
                  placeholder="name@example.com" 
                  defaultValue={`demo@${role}.com`}
                  required 
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-textPrimary">Password</label>
                <a href="#" className="text-xs text-primary hover:text-primaryHover font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  className="input-field pl-10" 
                  placeholder="••••••••" 
                  defaultValue="password123"
                  required 
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-3 mt-6 text-base justify-center shadow-btn">
              Sign In to Dashboard <ChevronRight className="w-4 h-4" />
            </button>
          </form>


          {/* Quick Demo Access */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-textSecondary font-bold tracking-wider">Quick Demo Login</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <button 
                type="button"
                onClick={() => navigate('/farmer-dashboard')}
                className="w-full flex flex-col items-center justify-center gap-1 bg-slate-50 border border-emerald-200 text-emerald-700 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-sm text-xs font-bold"
              >
                <span className="text-base">🌾</span>
                Farmer Demo
              </button>
              <button 
                type="button"
                onClick={() => navigate('/officer-dashboard')}
                className="w-full flex flex-col items-center justify-center gap-1 bg-slate-50 border border-blue-200 text-blue-700 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm text-xs font-bold"
              >
                <span className="text-base">🛡️</span>
                Officer Demo
              </button>
              <button 
                type="button"
                onClick={() => navigate('/admin-dashboard')}
                className="w-full flex flex-col items-center justify-center gap-1 bg-slate-50 border border-amber-200 text-amber-700 py-3 rounded-xl hover:bg-amber-50 transition-colors shadow-sm text-xs font-bold"
              >
                <span className="text-base">⚙️</span>
                Admin Demo
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-textSecondary">
            Don't have an account?{' '}
            <button onClick={() => navigate('/signup')} className="text-primary hover:underline font-semibold focus:outline-none">Create one</button>
          </p>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex w-1/2 bg-slate-50 relative items-center justify-center overflow-hidden border-l border-gray-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
        
        <div className="relative z-10 w-[80%] max-w-lg bg-white p-10 rounded-3xl shadow-float border border-gray-100">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-textPrimary leading-tight mb-2">Secure access to agricultural governance</h3>
          <p className="text-sm text-textSecondary mb-8">Role-based data separation ensures farmer privacy while accelerating administrative decisions.</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-textPrimary">Supabase Auth Layer</p>
                <p className="text-xs text-textSecondary mt-0.5">End-to-end encryption and RLS</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-textPrimary">Role isolation active</p>
                <p className="text-xs text-textSecondary mt-0.5">Farmers, Officers and Admins</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-textPrimary">Session preserved</p>
                <p className="text-xs text-textSecondary mt-0.5">Multi-device secure persistence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
