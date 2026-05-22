export type HealthStatus =
  | "Healthy"
  | "At Risk"
  | "Critical";

export interface Account {
  id: string;
  companyName: string;
  healthScore: number;
  healthStatus: HealthStatus;

  onboardingStatus:
    | "On Track"
    | "Delayed"
    | "Blocked";

  renewalDate: string;

  lastActivityDays: number;

  assignedCSM: string;

  openEscalations: number;

  stakeholderStatus:
    | "Engaged"
    | "Inactive";

  missedQBRs: number;

  supportTicketSpike: boolean;
}