import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyEmail from "../pages/VerifyEmail";
import Profile from "../pages/Profile";
import ResumeBuilder from "../pages/ResumeBuilder";
import ResumeUpload from "../pages/ResumeUpload";
import ViewResume from "../pages/ViewResume";
import MatchAnalyzer from "../pages/MatchAnalyzer";
import Settings from "../pages/Settings";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected Routes (Wrap with PrivateRoute later) */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/upload" element={<ResumeUpload />} />
      <Route path="/resume/:id" element={<ViewResume />} />
      <Route path="/match-checker" element={<MatchAnalyzer />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
