import {
  FileText,
  AlertTriangle,
  SearchCheck,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  ShieldAlert,
  GitCompare,
  Network,
  Sparkles,
  Activity,
  Clock,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Dashboard.css";


function Dashboard() {

  const stats = [
    {
      title: "Active Contracts",
      value: "24",
      change: "+4 this month",
      icon: FileText,
      color: "blue",
    },

    {
      title: "Risk Signals",
      value: "12",
      change: "3 require attention",
      icon: AlertTriangle,
      color: "red",
    },

    {
      title: "Clauses Analyzed",
      value: "1,248",
      change: "+186 this week",
      icon: SearchCheck,
      color: "purple",
    },

    {
      title: "Legal Health",
      value: "78%",
      change: "+6% improvement",
      icon: ShieldCheck,
      color: "green",
    },
  ];


  const modules = [
    {
      title: "Risk Analysis",
      description:
        "Detect risky clauses and potential legal issues using AI-powered analysis.",

      icon: ShieldAlert,

      path: "/risk-analysis",

      className: "risk-module",
    },

    {
      title: "Drift Tracker",

      description:
        "Track changes and deviations across different contract versions.",

      icon: GitCompare,

      path: "/drift-tracker",

      className: "drift-module",
    },

    {
      title: "Ripple Mapper",

      description:
        "Understand how contract clauses affect related obligations and risks.",

      icon: Network,

      path: "/ripple-mapper",

      className: "ripple-module",
    },
  ];


  return (

    <div className="dashboard">


      {/* HEADER */}

      <section className="dashboard-header">

        <div>

          <p className="page-label">
            LEGAL INTELLIGENCE WORKSPACE
          </p>

          <h1>
            Good evening, Liya 👋
          </h1>

          <p className="dashboard-subtitle">
            Here's what's happening across your contracts today.
          </p>

        </div>


        <Link
          to="/upload-contract"
          className="upload-button"
        >

          <FileText size={18} />

          Upload Contract

        </Link>

      </section>



      {/* STATS */}

      <section className="stats-grid">

        {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (

            <div
              className={`stat-card ${stat.color}`}
              key={index}
            >

              <div className="stat-card-top">

                <div className="stat-icon">

                  <Icon size={22} />

                </div>

                <ArrowUpRight size={18} />

              </div>


              <div className="stat-content">

                <p>{stat.title}</p>

                <h2>{stat.value}</h2>

                <span>{stat.change}</span>

              </div>

            </div>

          );

        })}

      </section>



      {/* MAIN DASHBOARD ROW */}

      <section className="dashboard-grid">


        {/* RISK OVERVIEW */}

        <div className="panel risk-overview">

          <div className="panel-header">

            <div>

              <p className="panel-label">
                CONTRACT INTELLIGENCE
              </p>

              <h2>
                Risk Overview
              </h2>

            </div>


            <Activity
              size={20}
              className="panel-icon"
            />

          </div>


          <div className="risk-chart">


            <div className="risk-row">

              <div className="risk-name">

                <span className="dot critical"></span>

                Critical

              </div>

              <div className="progress">

                <div
                  className="progress-fill critical-fill"
                  style={{ width: "25%" }}
                ></div>

              </div>

              <strong>3</strong>

            </div>


            <div className="risk-row">

              <div className="risk-name">

                <span className="dot high"></span>

                High

              </div>

              <div className="progress">

                <div
                  className="progress-fill high-fill"
                  style={{ width: "55%" }}
                ></div>

              </div>

              <strong>5</strong>

            </div>


            <div className="risk-row">

              <div className="risk-name">

                <span className="dot medium"></span>

                Medium

              </div>

              <div className="progress">

                <div
                  className="progress-fill medium-fill"
                  style={{ width: "75%" }}
                ></div>

              </div>

              <strong>8</strong>

            </div>


            <div className="risk-row">

              <div className="risk-name">

                <span className="dot low"></span>

                Low

              </div>

              <div className="progress">

                <div
                  className="progress-fill low-fill"
                  style={{ width: "95%" }}
                ></div>

              </div>

              <strong>12</strong>

            </div>


          </div>


          <Link
            to="/risk-analysis"
            className="panel-link"
          >

            View detailed analysis

            <ArrowRight size={16} />

          </Link>

        </div>



        {/* AI INSIGHT */}

        <div className="panel ai-insight">

          <div className="ai-glow"></div>

          <div className="ai-top">

            <div className="ai-badge">

              <Sparkles size={15} />

              CONTRACTGUARDIAN AI

            </div>

          </div>


          <h2>
            Your contracts need attention.
          </h2>


          <p>
            Our AI has identified
            <strong> 12 potential risk signals </strong>
            across your active legal documents.
          </p>


          <button className="review-button">

            Review Critical Risks

            <ArrowRight size={17} />

          </button>


          <div className="ai-footer">

            <Clock size={15} />

            Last updated just now

          </div>

        </div>


      </section>



      {/* MODULES */}

      <section className="modules-section">


        <div className="section-header">

          <div>

            <p className="section-label">
              YOUR AI TOOLKIT
            </p>

            <h2>
              Contract Intelligence Modules
            </h2>

          </div>


          <span className="module-status">
            3 Modules Available
          </span>

        </div>


        <div className="modules-grid">

          {modules.map((module, index) => {

            const Icon = module.icon;

            return (

              <Link
                to={module.path}
                className={`module-card ${module.className}`}
                key={index}
              >

                <div className="module-icon">

                  <Icon size={25} />

                </div>


                <h3>
                  {module.title}
                </h3>


                <p>
                  {module.description}
                </p>


                <div className="module-footer">

                  <span>
                    Open Module
                  </span>

                  <ArrowRight size={17} />

                </div>

              </Link>

            );

          })}

        </div>

      </section>



      {/* RECENT ACTIVITY */}

      <section className="recent-section">

        <div className="section-header">

          <div>

            <p className="section-label">
              ACTIVITY
            </p>

            <h2>
              Recent Contract Activity
            </h2>

          </div>

        </div>


        <div className="activity-table">


          <div className="activity-row">

            <div className="contract-info">

              <div className="document-icon">
                <FileText size={18} />
              </div>

              <div>

                <strong>
                  Vendor Service Agreement
                </strong>

                <span>
                  Updated 2 hours ago
                </span>

              </div>

            </div>


            <span className="risk-badge high-risk">
              High Risk
            </span>


            <span className="activity-status">
              Analysis Complete
            </span>

          </div>



          <div className="activity-row">

            <div className="contract-info">

              <div className="document-icon purple-doc">
                <FileText size={18} />
              </div>

              <div>

                <strong>
                  Employment Agreement
                </strong>

                <span>
                  Updated yesterday
                </span>

              </div>

            </div>


            <span className="risk-badge medium-risk">
              Medium Risk
            </span>


            <span className="activity-status">
              Analysis Complete
            </span>

          </div>



          <div className="activity-row">

            <div className="contract-info">

              <div className="document-icon green-doc">
                <FileText size={18} />
              </div>

              <div>

                <strong>
                  NDA — Technology Partner
                </strong>

                <span>
                  Uploaded today
                </span>

              </div>

            </div>


            <span className="risk-badge low-risk">
              Low Risk
            </span>


            <span className="activity-status processing">
              Processing
            </span>

          </div>


        </div>

      </section>


    </div>

  );
}


export default Dashboard;