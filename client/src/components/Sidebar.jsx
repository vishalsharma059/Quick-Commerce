// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Package,
//   Users,
//   ShoppingBag,
//   Settings,
//   Tag,
// } from "lucide-react";

// const Sidebar = () => {
//   const navItems = [
//     { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//     { name: "Products", href: "/products", icon: Package },
//     { name: "Categories", href: "/categories", icon: Tag },
//     { name: "Shopkeepers", href: "/shopkeepers", icon: Users },
//     { name: "Orders", href: "/orders", icon: ShoppingBag },
//     { name: "Settings", href: "/settings", icon: Settings },
//   ];

//   return (
//     <div className="bg-white w-64 min-h-screen shadow-sm border-r border-gray-200">

//       <nav className="mt-8 px-4">
//         <ul className="space-y-2">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
//                     isActive
//                       ? "bg-primary-50 text-primary-700 border-r-2 border-primary-700"
//                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                   }`
//                 }
//               >
//                 <item.icon className="mr-3 h-5 w-5" />
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingBag,
  Settings,
  Tag,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Categories", href: "/categories", icon: Tag },
    { name: "Shopkeepers", href: "/shopkeepers", icon: Users },
    { name: "Orders", href: "/orders", icon: ShoppingBag },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="bg-white w-64 h-screen shadow-md border-r border-gray-200 flex flex-col">
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
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
    </aside>
  );
};

export default Sidebar;
