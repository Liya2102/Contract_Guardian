import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import UploadContract from "./pages/UploadContract";
import RiskAnalysis from "./pages/RiskAnalysis";
import DriftTracker from "./pages/DriftTracker";
import RippleMapper from "./pages/RippleMapper";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* FIXED NAVBAR */}
        <Navbar />

        {/* FIXED SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <main className="main-content">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route
              path="/upload-contract"
              element={<UploadContract />}
            />

            <Route
              path="/risk-analysis"
              element={<RiskAnalysis />}
            />

            <Route
              path="/drift-tracker"
              element={<DriftTracker />}
            />

            <Route
              path="/ripple-mapper"
              element={<RippleMapper />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;


