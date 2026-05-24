
export type Health = "Healthy" | "At Risk" | "Critical";

export interface Account {
  id: string;

  // Core account info
  name: string;
  plan: string;

  // Revenue context
  mrr: number;
  arr: number;

  // Operational health
  health: Health

  // Activity + engagement
  lastActivityDays: number;
  usageTrend: "Stable" | "Downward" | "Improving";

  // Escalation + support visibility
  escalationCount: number;
  supportTicketsThisMonth: number;

  // Ownership
  assignedCsm: string;
  executiveSponsor: string;

  // Renewal lifecycle
  renewalDate: string;
  renewalDaysRemaining: number;

  // Risk metadata
  riskTags: string[];

  // Timeline / activity feed
  timeline: {
    title: string;
    description: string;
    timestamp?: string;
  }[];

  // Stakeholders
  stakeholders: {
    name: string;
    role: string;
    email?: string;
    lastActiveDays?: number;
  }[];

  // Active operational risks
  activeRisks: {
    title: string;
    description: string;
    severity?: "Low" | "Medium" | "High";
  }[];
}