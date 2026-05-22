import { AppShell } from "@/app/components/layout/app-shell";
import { accounts } from "@/app/data/accounts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { getHealthBadgeColor } from "@/app/lib/get-health-badge-color";

interface AccountPageProps {
  params: {
    id: string;
  };
}

export default async function AccountPage({
  params,
}: {
    params: Promise<{id: string}>;
}) {
    const {id} = await params;
    const account = accounts.find(
    (acc) => acc.id === id
  );

  if (!account) {
    return (
      <AppShell>
        <div>Account not found.</div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-semibold">
              {account.companyName}
            </h1>

            <p className="text-muted-foreground mt-2">
              Unified customer operational view
            </p>
          </div>

          <Badge
            className={getHealthBadgeColor(
              account.healthStatus
            )}
          >
            {account.healthStatus} (
            {account.healthScore})
          </Badge>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Onboarding Status
            </p>

            <h2 className="text-xl font-semibold mt-2">
              {account.onboardingStatus}
            </h2>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Open Escalations
            </p>

            <h2 className="text-xl font-semibold mt-2">
              {account.openEscalations}
            </h2>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Renewal Date
            </p>

            <h2 className="text-xl font-semibold mt-2">
              {account.renewalDate}
            </h2>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity Timeline */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Activity Timeline
              </h2>

              <div className="space-y-4">
                <div className="border-l pl-4">
                  <p className="font-medium">
                    QBR Missed
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Customer postponed quarterly review.
                  </p>
                </div>

                <div className="border-l pl-4">
                  <p className="font-medium">
                    Escalation Raised
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Support response delays reported.
                  </p>
                </div>

                <div className="border-l pl-4">
                  <p className="font-medium">
                    Onboarding Delayed
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Integration dependencies unresolved.
                  </p>
                </div>
              </div>
            </Card>

            {/* Risks */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Active Risks
              </h2>

              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <p className="font-medium">
                    Stakeholder Inactivity
                  </p>

                  <p className="text-sm text-muted-foreground mt-1">
                    No executive engagement in 18 days.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="font-medium">
                    Escalation Volume Increasing
                  </p>

                  <p className="text-sm text-muted-foreground mt-1">
                    Support tickets increased by 40%.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Stakeholders */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Stakeholders
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    Amanda Lewis
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Executive Sponsor
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Ravi Kumar
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Platform Administrator
                  </p>
                </div>
              </div>
            </Card>

            {/* Recommended Action */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Recommended Action
              </h2>

              <p className="text-sm text-muted-foreground">
                Schedule escalation review call with
                customer stakeholders within 48 hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}