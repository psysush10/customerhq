import { AppShell } from "@/app/components/layout/app-shell";
import { accounts } from "@/app/data/accounts";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getHealthBadgeColor } from "@/app/lib/get-health-badge-color";

import Link from "next/link";

const accountsRequiringAttention = accounts.filter(
    (account) =>
      account.health === "At Risk" ||
      account.health === "Critical"
  );

  const churnRiskMrr = accountsRequiringAttention.reduce(
    (sum, account) => sum + account.mrr,
    0
  );

  const openEscalations = accounts.reduce(
    (sum, account) => sum + account.escalationCount,
    0
  );

export default function RisksPage() {
  return (
    <AppShell>
      <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">
          Risk Feed
        </h1>

        <p className="mt-2 text-muted-foreground">
          Operational risks prioritized by escalation
          activity and renewal visibility.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Accounts Requiring Attention
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-semibold">
              {accountsRequiringAttention.length}
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

      {/* Risk Cards */}
      <div className="space-y-4">
        {accountsRequiringAttention.map((account) => (
          <Link
            key={account.id}
            href={`/customers/${account.id}`}
          >
            <Card
              className="
                cursor-pointer
                transition-all
                duration-200
                hover:border-primary/40
                hover:bg-muted/30
              "
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold">
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

                {/* Metadata */}
                <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-2 xl:grid-cols-4">
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
                      {
                        account.supportTicketsThisMonth
                      }
                    </span>
                  </div>
                </div>

                {/* Latest CSM Context */}
                <div className="mt-6 rounded-xl border bg-muted/40 p-4">
                  <p className="text-sm font-medium">
                    Latest CSM Update
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Customer requested escalation review
                    after unresolved billing export issue
                    impacted finance operations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
    </AppShell>
  );
}