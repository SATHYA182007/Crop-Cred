import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, BrainCircuit, Leaf, Activity, ChevronRight, CheckCircle2, FileCheck2, Cpu, ArrowRight, LayoutDashboard, FileText, Users, AlertTriangle, Clock } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-textPrimary">
              CropCred AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">Solutions</a>
            <a href="#how-it-works" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">How It Works</a>
            <a href="#dashboards" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">Dashboards</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">
              Sign In
            </button>
            <button onClick={() => navigate('/signup')} className="btn-primary py-2 px-4 shadow-btn">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 max-w-7xl mx-auto text-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[600px] bg-hero-gradient opacity-50" />
        <div className="absolute top-20 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />

        <div className="max-w-4xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-textSecondary">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Trusted by 2,500+ farmer service records across districts</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-textPrimary leading-[1.15] tracking-tight"
          >
            AI-Powered Smart Agriculture Administration
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
              for Modern Governance
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed"
          >
            Digitize farmer services, streamline scheme applications, automate document verification, and modernize agriculture governance with one intelligent platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button onClick={() => navigate('/signup')} className="btn-primary py-3.5 px-8 text-base">
              Start Platform <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/admin-dashboard')} className="btn-secondary py-3.5 px-8 text-base">
              View Dashboard
            </button>
          </motion.div>
          
        </div>

        {/* Isometric Dashboard Mockup Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-20 max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-20 h-full w-full pointer-events-none rounded-b-3xl" />
          
          <div className="glass-panel p-2 lg:p-4 bg-white/50 relative z-10 shadow-float border-white/60">
            <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 relative">
              {/* Fake Browser header */}
              <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto w-1/2 max-w-sm h-6 bg-gray-100 rounded-md flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-medium">cropcred.ai/admin</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="grid grid-cols-12 gap-6 p-6 h-[400px]">
                {/* Simulated Sidebar */}
                <div className="col-span-3 space-y-3 border-r border-gray-100 pr-4">
                  <div className="flex items-center gap-2 mb-6 px-2">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                      <Leaf className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-textPrimary">CropCred AI</span>
                  </div>
                  <div className="text-xs font-semibold text-textPrimary bg-primary/5 text-primary py-2 px-3 rounded-lg flex items-center gap-2">
                    <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                  </div>
                  <div className="text-xs font-medium text-textSecondary hover:bg-slate-50 py-2 px-3 rounded-lg flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" /> Applications
                  </div>
                  <div className="text-xs font-medium text-textSecondary hover:bg-slate-50 py-2 px-3 rounded-lg flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" /> Farmer Records
                  </div>
                  <div className="text-xs font-medium text-textSecondary hover:bg-slate-50 py-2 px-3 rounded-lg flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5" /> Grievances
                  </div>
                </div>
                
                {/* Simulated Main Area */}
                <div className="col-span-9 space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 relative">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-2">
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <h4 className="text-xl font-bold text-textPrimary">14,204</h4>
                      <p className="text-[10px] font-medium text-textSecondary mt-0.5">Total Registered</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 relative">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h4 className="text-xl font-bold text-textPrimary">99.2%</h4>
                      <p className="text-[10px] font-medium text-textSecondary mt-0.5">AI Verify Rate</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 relative overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center mb-2">
                        <Clock className="w-4 h-4 text-amber-600" />
                      </div>
                      <h4 className="text-xl font-bold text-textPrimary">142</h4>
                      <p className="text-[10px] font-medium text-textSecondary mt-0.5">Pending AI Check</p>
                      <div className="absolute bottom-0 right-0 w-16 h-12 bg-amber-50 rounded-tl-full opacity-50" />
                    </div>
                  </div>
                  
                  {/* List Area */}
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-48 overflow-hidden">
                    <h3 className="text-sm font-bold text-textPrimary mb-4">Recent Verification Queue</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold font-sans">
                            RP
                          </div>
                          <div>
                            <p className="text-xs font-bold text-textPrimary">Ramesh Patil</p>
                            <p className="text-[10px] text-textSecondary">Drip Irrigation Subsidy</p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-3">
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <Cpu className="w-3 h-3" /> 95% Match
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold font-sans">
                            SD
                          </div>
                          <div>
                            <p className="text-xs font-bold text-textPrimary">Suresh Deshmukh</p>
                            <p className="text-[10px] text-textSecondary">Crop Insurance Advance</p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-3">
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> 42% Match
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold font-sans">
                            VK
                          </div>
                          <div>
                            <p className="text-xs font-bold text-textPrimary">Vinay Kulkarni</p>
                            <p className="text-[10px] text-textSecondary">Soil Health Card</p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-3">
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Approved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Overlays */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-32 bg-white p-4 rounded-xl shadow-float border border-gray-100 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-textPrimary">Auto-Approved</p>
                  <p className="text-xs text-textSecondary">AI Verification 99.2%</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-32 bg-white p-4 rounded-xl shadow-float border border-gray-100 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-textPrimary">OCR Extracted</p>
                  <p className="text-xs text-textSecondary">Land Record #412A</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Stats Row */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 text-center">
            <div>
              <h4 className="text-4xl font-bold text-textPrimary mb-2">92%</h4>
              <p className="text-sm font-medium text-textSecondary">Faster Processing</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-textPrimary mb-2">18</h4>
              <p className="text-sm font-medium text-textSecondary">Districts Digitized</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-textPrimary mb-2">99.2%</h4>
              <p className="text-sm font-medium text-textSecondary">Verification Accuracy</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-textPrimary mb-2">12K+</h4>
              <p className="text-sm font-medium text-textSecondary">Farmer Records</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-4">Enterprise-grade Governance</h2>
            <p className="text-lg text-textSecondary">
              Replacing legacy manual workflows with intelligent automation, real-time tracking, and secure data handling for agriculture officers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <BrainCircuit className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">AI Document Check</h3>
              <p className="text-textSecondary leading-relaxed mb-6">
                Automated OCR and AI verification of land records and IDs to instantly flag mismatches and prevent fraud.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primaryHover transition-colors">
                Learn how it works <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">Smart Workflows</h3>
              <p className="text-textSecondary leading-relaxed mb-6">
                End-to-end digitisation of scheme applications, grievance handling, and multi-tier officer approvals.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Explore workflows <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-soft transition-shadow">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">Transparent Analytics</h3>
              <p className="text-textSecondary leading-relaxed mb-6">
                High-level dashboard views for admins to monitor throughput, resolve delays, and spot regional anomalies.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                View analytics <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white text-center text-textSecondary text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="text-base font-bold text-textPrimary">CropCred AI</span>
        </div>
        <p>© 2026 CropCred AI. All rights reserved.</p>
        <p className="mt-1">Smart Agriculture Administration Platform</p>
      </footer>
    </div>
  );
};

export default LandingPage;
