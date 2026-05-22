export function Topbar() {
  return (
    <header className="h-16 border-b bg-background px-6 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold">
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