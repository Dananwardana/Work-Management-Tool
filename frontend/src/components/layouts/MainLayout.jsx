import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-app-bg">
      {/* Sidebar Placeholder - Kita isi detailnya nanti */}
      <aside className="w-64 bg-brand-deep text-white hidden md:block shrink-0 p-6">
        <h1 className="text-xl font-bold text-brand-secondary">Workflow App</h1>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-white px-8 flex items-center shadow-sm">
          <p className="text-sm font-medium text-brand-support">Internal System</p>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          {/* Konten dashboard/project muncul di sini */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
