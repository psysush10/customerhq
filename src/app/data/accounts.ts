import { Account } from "@/app/types/account";

export const accounts: Account[] = [
  {
    id: "acme-logistics",

    // Core account info
    name: "Acme Logistics",
    plan: "Enterprise",

    // Revenue context
    mrr: 2000,
    arr: 24000,

    // Operational health
    health: "Critical",

    // Activity + engagement
    lastActivityDays: 16,
    usageTrend: "Downward",

    // Escalation + support visibility
    escalationCount: 3,
    supportTicketsThisMonth: 8,

    // Ownership
    assignedCsm: "Sarah Chen",
    executiveSponsor: "Amanda Lewis",

    // Renewal lifecycle
    renewalDate: "2026-07-12",
    renewalDaysRemaining: 51,

    // Risk metadata
    riskTags: [
      "3 Open Escalations",
      "Executive Inactive",
      "Usage Decline",
    ],

    // Timeline / activity feed
    timeline: [
      {
        title: "Renewal discussion initiated",
        description:
          "Procurement review requested by customer leadership.",
        timestamp: "2 hours ago",
      },
      {
        title: "Executive QBR postponed",
        description:
          "Customer requested review meeting next month.",
        timestamp: "3 days ago",
      },
      {
        title: "Support engineering investigation initiated",
        description:
          "Infra team reviewing API timeout incidents affecting customer workflows.",
        timestamp: "5 days ago",
      },
      {
        title: "Customer escalation review conducted",
        description:
          "Customer reported unresolved billing export issues during weekly sync.",
        timestamp: "9 days ago",
      },
      {
        title: "Onboarding handover completed",
        description:
          "Account transitioned from implementation to CSM ownership.",
        timestamp: "45 days ago",
      },
    ],

    // Stakeholders
    stakeholders: [
      {
        name: "Amanda Lewis",
        role: "Executive Sponsor",
        email: "amanda@acmelogistics.com",
        lastActiveDays: 18,
      },
      {
        name: "Ravi Kumar",
        role: "Platform Administrator",
        email: "ravi@acmelogistics.com",
        lastActiveDays: 5,
      },
    ],

    // Active operational risks
    activeRisks: [
      {
        title: "Executive stakeholder inactive",
        description:
          "No engagement from executive sponsor in 18 days.",
        severity: "High",
      },
      {
        title: "Escalation volume elevated",
        description:
          "Support tickets increased by 40% this month.",
        severity: "High",
      },
      {
        title: "Product usage decline detected",
        description:
          "Billing workflow activity reduced over the last 2 weeks.",
        severity: "Medium",
      },
    ],
  },

  {
    id: "vertex-finance",

    // Core account info
    name: "Vertex Finance",
    plan: "Growth",

    // Revenue context
    mrr: 1200,
    arr: 14400,

    // Operational health
    health: "At Risk",

    // Activity + engagement
    lastActivityDays: 9,
    usageTrend: "Stable",

    // Escalation + support visibility
    escalationCount: 1,
    supportTicketsThisMonth: 4,

    // Ownership
    assignedCsm: "Emily Carter",
    executiveSponsor: "Daniel Brooks",

    // Renewal lifecycle
    renewalDate: "2026-09-01",
    renewalDaysRemaining: 102,

    // Risk metadata
    riskTags: [
      "Renewal Due Soon",
      "1 Open Escalation",
      "Executive Inactive",
    ],

    // Timeline / activity feed
    timeline: [
      {
        title: "Support escalation resolved",
        description:
          "API timeout issue resolved after infrastructure patch.",
        timestamp: "1 day ago",
      },
      {
        title: "Quarterly business review completed",
        description:
          "Customer requested expanded analytics discussion.",
        timestamp: "7 days ago",
      },
      {
        title: "Renewal preparation started",
        description:
          "CSM initiated renewal readiness review.",
        timestamp: "12 days ago",
      },
    ],

    // Stakeholders
    stakeholders: [
      {
        name: "Daniel Brooks",
        role: "Executive Sponsor",
        email: "daniel@vertexfinance.com",
        lastActiveDays: 14,
      },
      {
        name: "Sophia Lee",
        role: "Operations Manager",
        email: "sophia@vertexfinance.com",
        lastActiveDays: 2,
      },
    ],

    // Active operational risks
    activeRisks: [
      {
        title: "Executive engagement reduced",
        description:
          "Executive stakeholder participation declining in reviews.",
        severity: "Medium",
      },
      {
        title: "Renewal timeline approaching",
        description:
          "Renewal window opens within the next quarter.",
        severity: "Low",
      },
    ],
  },
];