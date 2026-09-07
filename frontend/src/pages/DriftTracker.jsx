import { GitCompare } from "lucide-react";

import "./PagePlaceholder.css";

function DriftTracker() {
  return (
    <div className="placeholder-page">

      <div className="placeholder-header">

        <p>AI INTELLIGENCE</p>

        <h1>Drift Tracker</h1>

        <span>
          Monitor how contracts change over time.
        </span>

      </div>


      <div className="coming-card">

        <div className="coming-icon drift">
          <GitCompare size={45} />
        </div>

        <h2>Contract Drift Detection</h2>

        <p>
          Compare contract versions and identify
          important changes and deviations.
        </p>

        <span className="coming-badge">
          Coming Soon
        </span>

      </div>

    </div>
  );
}

export default DriftTracker;