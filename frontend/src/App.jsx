import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
/*import UploadContract from "./pages/UploadContract";
import RiskAnalysis from "./pages/RiskAnalysis";
import DriftTracker from "./pages/DriftTracker";
import RippleMapper from "./pages/RippleMapper";*/

/*function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/upload" element={<UploadContract />} />
        <Route path="/risk" element={<RiskAnalysis />} />
        <Route path="/drift" element={<DriftTracker />} />
        <Route path="/ripple" element={<RippleMapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



