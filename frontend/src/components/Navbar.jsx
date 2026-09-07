import {
  Bell,
  Search,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* LEFT */}

      <div className="navbar-brand">

        <div className="brand-icon">
          <span>⚖</span>
        </div>

        <div className="brand-text">

          <h2>ContractGuardian</h2>

          <p>AI LEGAL INTELLIGENCE</p>

        </div>

      </div>


      {/* CENTER SEARCH */}

      <div className="nav-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search contracts, clauses, risks..."
        />

        <span className="shortcut">
          ⌘ K
        </span>

      </div>


      {/* RIGHT */}

      <div className="navbar-actions">

        <div className="ai-status">

          <Sparkles size={16} />

          <span>AI Online</span>

        </div>


        <button className="icon-button">

          <Bell size={20} />

          <span className="notification-dot"></span>

        </button>


        <div className="user-profile">

          <div className="user-avatar">
            L
          </div>

          <div className="user-info">

            <strong>Liya</strong>

            <span>Legal Workspace</span>

          </div>

          <ChevronDown size={16} />

        </div>

      </div>

    </header>
  );
}

export default Navbar;