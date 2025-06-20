import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingBag,
  Settings,
  Tag,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Categories", href: "/categories", icon: Tag },
    { name: "Shopkeepers", href: "/shopkeepers", icon: Users },
    { name: "Orders", href: "/orders", icon: ShoppingBag },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 w-64 z-40 transform transition-transform duration-300 shadow-md
        fixed md:static top-0 left-0 h-full
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
    >
      <div className="h-full flex flex-col">
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
