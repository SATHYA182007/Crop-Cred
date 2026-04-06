import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FarmerDashboard from './pages/FarmerDashboard';
import OfficerDashboard from './pages/OfficerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DashboardLayout from './layouts/DashboardLayout';

// Farmer sub-pages
import SchemesPage from './pages/farmer/SchemesPage';
import ApplicationsPage from './pages/farmer/ApplicationsPage';
import GrievancesPage from './pages/farmer/GrievancesPage';

// Officer sub-pages
import VerificationQueuePage from './pages/officer/VerificationQueuePage';
import GrievanceResolutionPage from './pages/officer/GrievanceResolutionPage';

// Admin sub-pages
import UserManagementPage from './pages/admin/UserManagementPage';
import SchemeManagementPage from './pages/admin/SchemeManagementPage';
import SystemAnalyticsPage from './pages/admin/SystemAnalyticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Farmer dashboard nested routes */}
        <Route path="/farmer-dashboard" element={<DashboardLayout />}>
          <Route index element={<FarmerDashboard />} />
          <Route path="schemes" element={<SchemesPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="grievances" element={<GrievancesPage />} />
        </Route>

        {/* Officer dashboard nested routes */}
        <Route path="/officer-dashboard" element={<DashboardLayout />}>
          <Route index element={<OfficerDashboard />} />
          <Route path="verification" element={<VerificationQueuePage />} />
          <Route path="grievances" element={<GrievanceResolutionPage />} />
        </Route>

        {/* Admin dashboard nested routes */}
        <Route path="/admin-dashboard" element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="analytics" element={<SystemAnalyticsPage />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="schemes" element={<SchemeManagementPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
