"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  AlertTriangle,
  Users,
  CheckSquare,
  RefreshCcw,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Accounts",
    href: "/dashboard",
    icon: Users,
  },
  {
    label: "Risks",
    href: "/risks",
    icon: AlertTriangle,
  },
  {
    label: "Tasks",
    href: "/dashboard",
    icon: CheckSquare,
  },
  {
    label: "Renewals",
    href: "/dashboard",
    icon: RefreshCcw,
  },
];

export function Sidebar() {
  return (
    <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r bg-background p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">CustomerHQ</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Customer Operations Workspace
        </p>
      </div>

      <nav className="flex gap-2 overflow-x-auto lg:flex-col">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}