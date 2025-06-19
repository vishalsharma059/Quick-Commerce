import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Topbar always at the top */}
      <Topbar />

      {/* Main area: Sidebar on the left, content on the right */}
      <div className="flex flex-1">
        {/* Sidebar below Topbar */}
        <Sidebar />

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-white p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
