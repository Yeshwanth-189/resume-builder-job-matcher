import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './index.css';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/resume-builder" replace />} />
        
        {/* AppRoutes will include nested routes like /dashboard, /resumes, etc. */}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;
