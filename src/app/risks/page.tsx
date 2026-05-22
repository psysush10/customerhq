import { AppShell } from "@/app/components/layout/app-shell";
import { accounts } from "@/app/data/accounts";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { getHealthBadgeColor } from "@/app/lib/get-health-badge-color";

const riskyAccounts = accounts.filter(
  (account) =>
    account.healthStatus !== "Healthy"
);  

export default function RisksPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold">
            Risk Feed
          </h1>

          <p className="text-muted-foreground mt-2">
            Accounts requiring operational attention.
          </p>
        </div>

        {/* Risk Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Accounts At Risk
            </p>

            <h2 className="text-3xl font-semibold mt-2">
              {riskyAccounts.length}
            </h2>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Critical Accounts
            </p>

            <h2 className="text-3xl font-semibold mt-2 text-red-600">
              {
                riskyAccounts.filter(
                  (account) =>
                    account.healthStatus === "Critical"
                ).length
              }
            </h2>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Escalation Volume
            </p>

            <h2 className="text-3xl font-semibold mt-2">
              {riskyAccounts.reduce(
                (sum, account) =>
                  sum + account.openEscalations,
                0
              )}
            </h2>
          </Card>
        </div>

        {/* Risk Cards */}
        <div className="space-y-4">
          {riskyAccounts.map((account) => (
            <Card
              key={account.id}
              className="p-6"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  {/* Account Info */}
                  <div>
                    <h2 className="text-xl font-semibold">
                      {account.companyName}
                    </h2>

                    <p className="text-sm text-muted-foreground mt-1">
                      Assigned CSM:{" "}
                      {account.assignedCSM}
                    </p>
                  </div>

                  {/* Risk Indicators */}
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={getHealthBadgeColor(
                        account.healthStatus
                      )}
                    >
                      {account.healthStatus}
                    </Badge>

                    {account.openEscalations > 0 && (
                      <Badge variant="destructive">
                        {account.openEscalations} Escalations
                      </Badge>
                    )}

                    {account.supportTicketSpike && (
                      <Badge variant="secondary">
                        Support Spike
                      </Badge>
                    )}

                    {account.stakeholderStatus ===
                      "Inactive" && (
                      <Badge variant="outline">
                        Stakeholder Inactive
                      </Badge>
                    )}
                  </div>

                  {/* Operational Context */}
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      Last activity:{" "}
                      {account.lastActivityDays} days ago
                    </p>

                    <p>
                      Onboarding status:{" "}
                      {account.onboardingStatus}
                    </p>

                    <p>
                      Missed QBRs:{" "}
                      {account.missedQBRs}
                    </p>

                    <p>
                      Renewal date:{" "}
                      {account.renewalDate}
                    </p>
                  </div>
                </div>

                {/* Suggested Action */}
                <div className="max-w-xs">
                  <p className="text-sm font-medium">
                    Recommended Action
                  </p>

                  <p className="text-sm text-muted-foreground mt-2">
                    Schedule stakeholder alignment
                    review and investigate escalation
                    trends within 48 hours.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}