import { ShieldAlert } from "lucide-react";

import "./PagePlaceholder.css";

function RiskAnalysis() {
  return (
    <div className="placeholder-page">

      <div className="placeholder-header">

        <p>AI INTELLIGENCE</p>

        <h1>Risk Analysis</h1>

        <span>
          AI-powered identification of risky clauses and legal issues.
        </span>

      </div>


      <div className="coming-card">

        <div className="coming-icon risk">
          <ShieldAlert size={45} />
        </div>

        <h2>Risk Analysis Engine</h2>

        <p>
          Upload a contract to identify risky clauses,
          severity levels and AI-generated recommendations.
        </p>

        <span className="coming-badge">
          Coming Soon
        </span>

      </div>

    </div>
  );
}

export default RiskAnalysis;