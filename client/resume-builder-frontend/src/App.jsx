import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './index.css';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;
