export function Topbar() {
  return (
    <header className="flex min-h-16 flex-col gap-2 border-b bg-background px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
      <div>
        <h2 className="text-base font-semibold md:text-lg">
          Customer Health Overview
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-muted-foreground">
          Welcome back, Sushanth
        </div>
      </div>
    </header>
  );
}