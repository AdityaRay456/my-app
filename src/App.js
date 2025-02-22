import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage.jsx";
import GovernmentLogin from "./pages/Governmentlogin.jsx";
import ContractorSignup from "./pages/ContractorSignup.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/government-login" element={<GovernmentLogin />} />
        <Route path="/contractor-signup" element={<ContractorSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
