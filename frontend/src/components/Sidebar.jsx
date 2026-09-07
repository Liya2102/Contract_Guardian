import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  ShieldAlert,
  GitCompare,
  Network,
  FileText,
  Settings,
  Sparkles,
} from "lucide-react";

import "./Sidebar.css";


function Sidebar() {

  return (

    <aside className="sidebar">


      <div className="sidebar-content">


        {/* WORKSPACE */}

        <div className="sidebar-section">

          <p className="sidebar-title">
            WORKSPACE
          </p>

          <NavLink
            to="/"
            className="sidebar-link"
          >

            <LayoutDashboard size={20} />

            <span>Dashboard</span>

          </NavLink>

        </div>


        {/* DOCUMENTS */}

        <div className="sidebar-section">

          <p className="sidebar-title">
            DOCUMENTS
          </p>

          <NavLink
            to="/upload-contract"
            className="sidebar-link"
          >

            <Upload size={20} />

            <span>Upload Contract</span>

          </NavLink>

          <a
            href="#documents"
            className="sidebar-link"
          >

            <FileText size={20} />

            <span>My Documents</span>

          </a>

        </div>


        {/* INTELLIGENCE */}

        <div className="sidebar-section">

          <p className="sidebar-title">
            AI INTELLIGENCE
          </p>


          <NavLink
            to="/risk-analysis"
            className="sidebar-link"
          >

            <ShieldAlert size={20} />

            <span>Risk Analysis</span>

          </NavLink>


          <NavLink
            to="/drift-tracker"
            className="sidebar-link"
          >

            <GitCompare size={20} />

            <span>Drift Tracker</span>

          </NavLink>


          <NavLink
            to="/ripple-mapper"
            className="sidebar-link"
          >

            <Network size={20} />

            <span>Ripple Mapper</span>

          </NavLink>

        </div>


      </div>


      {/* BOTTOM AI CARD */}

      <div className="sidebar-bottom">

        <div className="ai-card">

          <div className="ai-card-icon">
            <Sparkles size={18} />
          </div>

          <div>

            <strong>Contract AI</strong>

            <span>All systems online</span>

          </div>

        </div>


        <a
          href="#settings"
          className="sidebar-link"
        >

          <Settings size={20} />

          <span>Settings</span>

        </a>

      </div>


    </aside>
  );
}


export default Sidebar;