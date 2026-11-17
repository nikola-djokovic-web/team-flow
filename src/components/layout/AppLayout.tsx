import { Outlet } from "react-router";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-[#F8F7F4] text-[#24232B]">
      <DashboardHeader />
      <Outlet />
    </div>
  );
}