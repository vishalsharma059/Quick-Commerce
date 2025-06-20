import { ShoppingCart, LogOut, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Topbar = ({ onToggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Mobile Menu Icon + Brand */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={onToggleSidebar}
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>

            {/* Brand logo */}
            <Link to="/dashboard" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-full">
                <ShoppingCart className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 hidden sm:inline">
                Quick Commerce
              </span>
            </Link>
          </div>

          {/* Center: Title */}
          <h1 className="text-md sm:text-lg font-semibold">Admin Dashboard</h1>

          {/* Right: Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
