export const dashboardData = {

  summary: {
    totalDocuments: 24,
    totalClauses: 186,
    highRiskClauses: 12,
    affectedDocuments: 8
  },

  compliance: {
    compliant: 15,
    warning: 6,
    nonCompliant: 3
  },

  highRiskClauses: [
    {
      id: 1,
      clause: "Termination Clause",
      document: "SaaS Agreement.pdf",
      riskScore: 92,
      description:
        "The provider can terminate the agreement without prior notice."
    },

    {
      id: 2,
      clause: "Limitation of Liability",
      document: "Vendor Agreement.pdf",
      riskScore: 88,
      description:
        "The liability limitation heavily favors one party."
    },

    {
      id: 3,
      clause: "Data Sharing Clause",
      document: "Privacy Policy.pdf",
      riskScore: 84,
      description:
        "User data may be shared with third parties without clear consent."
    },

    {
      id: 4,
      clause: "Automatic Renewal",
      document: "Subscription Agreement.pdf",
      riskScore: 76,
      description:
        "The agreement automatically renews without sufficient notification."
    }
  ],

  affectedDocuments: [
    {
      id: 1,
      document: "Privacy Policy.pdf",
      regulation: "GDPR",
      affectedClauses: 4,
      severity: "High"
    },

    {
      id: 2,
      document: "Terms of Service.pdf",
      regulation: "DPDP Act",
      affectedClauses: 3,
      severity: "Medium"
    },

    {
      id: 3,
      document: "Customer Agreement.pdf",
      regulation: "Consumer Protection Act",
      affectedClauses: 2,
      severity: "High"
    }
  ],

  recentActivity: [
    {
      id: 1,
      message:
        "Risk analysis completed for SaaS Agreement.pdf",
      time: "10 minutes ago"
    },

    {
      id: 2,
      message:
        "New contract version detected in Terms of Service",
      time: "1 hour ago"
    },

    {
      id: 3,
      message:
        "New regulatory update may affect 3 documents",
      time: "3 hours ago"
    },

    {
      id: 4,
      message:
        "Vendor Agreement.pdf uploaded successfully",
      time: "Yesterday"
    }
  ]

};