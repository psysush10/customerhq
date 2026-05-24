import { AppShell } from "@/app/components/layout/app-shell";
import { accounts } from "@/app/data/accounts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { getHealthBadgeColor } from "@/app/lib/get-health-badge-color";

export default function DashboardPage() {
  const totalAccounts = accounts.length;

  const totalMrr = accounts.reduce(
    (sum, account) => sum + account.mrr,
    0
  );

  const churnRiskMrr = accounts
    .filter(
      (account) =>
        account.health === "At Risk" ||
        account.health === "Critical"
    )
    .reduce((sum, account) => sum + account.mrr, 0);

  const openEscalations = accounts.reduce(
    (sum, account) => sum + account.escalationCount,
    0
  );

  return (
    <AppShell>
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">
          CustomerHQ Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Operational visibility across customer accounts.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Total Accounts
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              {totalAccounts}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Total MRR
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              ${totalMrr.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Churn Risk MRR
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              ${churnRiskMrr.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Open Escalations
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              {openEscalations}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accounts */}
      <Card>
        <CardHeader>
          <CardTitle>
            Accounts Requiring Attention
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Customer accounts requiring operational follow-up.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {accounts.map((account) => (
            <Link
              key={account.id}
              href={`/customers/${account.id}`}
            >
              <div
                className="
                  rounded-xl
                  border
                  p-5
                  transition-all
                  duration-200
                  hover:border-primary/40
                  hover:bg-muted/30
                  cursor-pointer
                "
              >
                {/* Header */}
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-semibold">
                        {account.name}
                      </h2>

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

                    <p className="mt-2 text-sm text-muted-foreground">
                      {account.plan} · $
                      {account.mrr.toLocaleString()} MRR ·
                      Renewal in{" "}
                      {account.renewalDaysRemaining} days
                    </p>
                  </div>

                  {/* Risk Tags */}
                  <div className="flex flex-wrap gap-2">
                    {account.riskTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Operational Metadata */}
                <div className="mt-5 grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-2 xl:grid-cols-4">
                  <div>
                    Assigned CSM:{" "}
                    <span className="text-foreground">
                      {account.assignedCsm}
                    </span>
                  </div>

                  <div>
                    Last customer activity:{" "}
                    <span className="text-foreground">
                      {account.lastActivityDays} days ago
                    </span>
                  </div>

                  <div>
                    Open escalations:{" "}
                    <span className="text-foreground">
                      {account.escalationCount}
                    </span>
                  </div>

                  <div>
                    Support tickets this month:{" "}
                    <span className="text-foreground">
                      {account.supportTicketsThisMonth}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
    </AppShell>
  );
}