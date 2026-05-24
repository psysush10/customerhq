import { AppShell } from "@/app/components/layout/app-shell";
import { accounts } from "@/app/data/accounts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getHealthBadgeColor } from "@/app/lib/get-health-badge-color";

interface Customer360PageProps {
  params: {
    id: string;
  };
}

export default async function Customer360Page({
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
      <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold">
            {account.name}
          </h1>

          <Badge
            variant={
              account.health === "Critical"
                ? "destructive"
                : "secondary"
            }
          >
            {account.health}
          </Badge>
        </div>

        <p className="mt-2 text-muted-foreground">
          Unified customer operational view
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">
            {account.plan}
          </Badge>

          <Badge variant="outline">
            ${account.mrr.toLocaleString()} MRR
          </Badge>

          <Badge variant="outline">
            Renewal in{" "}
            {account.renewalDaysRemaining} days
          </Badge>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Open Escalations
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              {account.escalationCount}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Monthly Recurring Revenue
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              ${account.mrr.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Last Customer Activity
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              {account.lastActivityDays}d
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Support Tickets
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              {account.supportTicketsThisMonth}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 xl:col-span-2">
          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>
                Operational Timeline
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                Customer lifecycle and escalation history.
              </p>
            </CardHeader>

            <CardContent className="space-y-5">
              {account.timeline.map((event) => (
                <div
                  key={event.title}
                  className="border-l pl-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {event.title}
                    </h3>

                    {event.timestamp && (
                      <span className="text-xs text-muted-foreground">
                        {event.timestamp}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Latest CSM Update */}
          <Card>
            <CardHeader>
              <CardTitle>
                Latest CSM Update
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                Recent operational context from customer
                success team.
              </p>
            </CardHeader>

            <CardContent>
              <div className="rounded-xl border p-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  Customer raised concerns regarding
                  unresolved support tickets during weekly
                  escalation review. Engineering team
                  currently investigating API timeout issue
                  impacting billing exports.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Risks */}
          <Card>
            <CardHeader>
              <CardTitle>
                Active Operational Risks
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                Observable customer operational signals.
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              {account.activeRisks.map((risk) => (
                <div
                  key={risk.title}
                  className="rounded-xl border p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {risk.title}
                    </h3>

                    {risk.severity && (
                      <Badge
                        variant={
                          risk.severity === "High"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {risk.severity}
                      </Badge>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {risk.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Stakeholders */}
          <Card>
            <CardHeader>
              <CardTitle>
                Stakeholders
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                Key customer contacts and engagement
                visibility.
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              {account.stakeholders.map(
                (stakeholder) => (
                  <div
                    key={stakeholder.email}
                    className="rounded-xl border p-4"
                  >
                    <h3 className="font-medium">
                      {stakeholder.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {stakeholder.role}
                    </p>

                    {stakeholder.email && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {stakeholder.email}
                      </p>
                    )}

                    {stakeholder.lastActiveDays !==
                      undefined && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Last active{" "}
                        {
                          stakeholder.lastActiveDays
                        }{" "}
                        days ago
                      </p>
                    )}
                  </div>
                )
              )}
            </CardContent>
          </Card>

          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>
                Operational Overview
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Assigned CSM
                </span>

                <span>{account.assignedCsm}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Renewal Date
                </span>

                <span>{account.renewalDate}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Open Escalations
                </span>

                <span>
                  {account.escalationCount}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Support Tickets
                </span>

                <span>
                  {
                    account.supportTicketsThisMonth
                  }
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </AppShell>
  );
}