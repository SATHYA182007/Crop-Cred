import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Tractor, Building2, Shield, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f9f7] relative overflow-hidden flex flex-col items-center justify-center py-12 px-4">
      {/* Background radial highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gradient-radial from-green-100/40 to-transparent opacity-60 pointer-events-none" />
      
      {/* Top Left Navigation Header */}
      <div className="absolute top-6 left-6 z-20">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <Leaf className="w-4 h-4 text-emerald-600" />
          <span className="font-extrabold text-sm tracking-tight text-slate-800">CROPCRED</span>
        </button>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Text Area */}
        <div className="text-center w-full max-w-2xl mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-800 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
            Smart Governance Access
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Identity <span className="text-[#1A5C38]">Verification.</span>
          </h1>
          
          <p className="text-slate-500 text-sm sm:text-base px-6">
            Select your administrative role to access the CropCred AI ecosystem for governance and services.
          </p>
        </div>

        {/* Roles 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          
          {/* Card 1 - Farmer */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
              <Tractor className="w-8 h-8 text-[#1A5C38]" />
            </div>
            
            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4 self-start">
              User Role
            </div>
            
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Farmer</h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              Access digital schemes, track your land applications, and resolve grievances faster with AI assistance.
            </p>
            
            <button 
              onClick={() => navigate('/login', { state: { role: 'farmer' } })}
              className="w-full flex items-center justify-between text-white font-semibold py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0EAC51] to-[#127F41] hover:shadow-[0_8px_20px_rgba(14,172,81,0.3)] transition-all"
            >
              Enter Farmer Portal
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card 2 - Agriculture Officer */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-amber-500" />
            </div>
            
            <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4 self-start">
              Staff Role
            </div>
            
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Agriculture Officer</h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              Process applications, verify digital documents with AI, and manage regional agricultural services.
            </p>
            
            <button 
              onClick={() => navigate('/login', { state: { role: 'officer' } })}
              className="w-full flex items-center justify-between text-white font-semibold py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D9A01B] to-[#C18814] hover:shadow-[0_8px_20px_rgba(217,160,27,0.3)] transition-all"
            >
              Enter Agriculture Officer Portal
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card 3 - Admin */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-slate-700" />
            </div>
            
            <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4 self-start">
              Admin Role
            </div>
            
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Admin</h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              Full oversight of platform metrics, user management, and nationwide agriculture administration.
            </p>
            
            <button 
              onClick={() => navigate('/login', { state: { role: 'admin' } })}
              className="w-full flex items-center justify-between text-white font-semibold py-4 px-6 rounded-2xl bg-gradient-to-r from-[#17202B] to-[#0A0E13] hover:shadow-[0_8px_20px_rgba(23,32,43,0.3)] transition-all"
            >
              Enter Admin Portal
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>

        {/* Footer Area */}
        <div className="mt-16 flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>ISO 27001</span>
          </div>
          <div className="w-px h-4 bg-slate-300" />
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            <span>Agritech Standard</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
