import { Network } from "lucide-react";

import "./PagePlaceholder.css";

function RippleMapper() {
  return (
    <div className="placeholder-page">

      <div className="placeholder-header">

        <p>AI INTELLIGENCE</p>

        <h1>Ripple Mapper</h1>

        <span>
          Explore relationships between clauses and obligations.
        </span>

      </div>


      <div className="coming-card">

        <div className="coming-icon ripple">
          <Network size={45} />
        </div>

        <h2>Clause Relationship Mapping</h2>

        <p>
          Visualize how changes to one clause
          can affect other obligations and risks.
        </p>

        <span className="coming-badge">
          Coming Soon
        </span>

      </div>

    </div>
  );
}

export default RippleMapper;