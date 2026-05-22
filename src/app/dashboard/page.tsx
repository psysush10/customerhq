import { AppShell } from "@/app/components/layout/app-shell";
import { accounts } from "@/app/data/accounts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import { getHealthBadgeColor } from "@/app/lib/get-health-badge-color";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold">
            Accounts Dashboard
          </h1>

          <p className="text-muted-foreground mt-2">
            Monitor customer health and operational risks.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Total Accounts
            </p>

            <h2 className="text-3xl font-semibold mt-2">
              {accounts.length}
            </h2>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Critical Accounts
            </p>

            <h2 className="text-3xl font-semibold mt-2 text-red-600">
              {
                accounts.filter(
                  (account) =>
                    account.healthStatus === "Critical"
                ).length
              }
            </h2>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-muted-foreground">
              Active Escalations
            </p>

            <h2 className="text-3xl font-semibold mt-2">
              {accounts.reduce(
                (sum, account) =>
                  sum + account.openEscalations,
                0
              )}
            </h2>
          </Card>
        </div>

        {/* Accounts Table */}
        <Card className="overflow-hidden">
          <div className="border-b px-6 py-4">
            <h2 className="font-semibold text-lg">
              Customer Accounts
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-6 py-4 font-medium">
                    Company
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Health
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Onboarding
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Last Activity
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Escalations
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Stakeholders
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Renewal
                  </th>
                </tr>
              </thead>

              <tbody>
                {accounts.map((account) => (
                  <tr
                    key={account.id}
                    className="border-t hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium">
                      <Link
                        href={`/accounts/${account.id}`}
                        className="hover:underline"
                      >
                        {account.companyName}
                      </Link>
                    </td>

                    <td className="px-6 py-4">
                      <Badge
                        className={getHealthBadgeColor(
                          account.healthStatus
                        )}
                      >
                        {account.healthStatus} (
                        {account.healthScore})
                      </Badge>
                    </td>

                    <td className="px-6 py-4">
                      {account.onboardingStatus}
                    </td>

                    <td className="px-6 py-4">
                      {account.lastActivityDays} days ago
                    </td>

                    <td className="px-6 py-4">
                      {account.openEscalations}
                    </td>

                    <td className="px-6 py-4">
                      {account.stakeholderStatus}
                    </td>

                    <td className="px-6 py-4">
                      {account.renewalDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}