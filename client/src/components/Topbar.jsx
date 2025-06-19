import { ShoppingCart, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Topbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2 rounded-full">
              <ShoppingCart className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
              Quick Commerce
            </span>
          </Link>

          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
