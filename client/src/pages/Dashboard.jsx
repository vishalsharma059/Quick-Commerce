import React, { useEffect, useState } from "react";
import {
  Package,
  Users,
  ShoppingCart,
  Tag,
  ShoppingBag,
  User,
  Calendar,
} from "lucide-react";
import StatsCard from "../components/StatsCard";
import axios from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalShopkeepers: 0,
    totalOrders: 0,
    totalCategories: 0,
  });

  const [orders, setOrders] = useState([]);

  const fetchStats = async () => {
    try {
      const res = await axios.get("/dashboard/stats");
      setStats(res.data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/orders");
      // Sort by date (most recent first)
      const sortedOrders = res.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      // Keep only recent 5
      setOrders(sortedOrders.slice(0, 5));
    } catch (error) {
      console.error("Error fetching recent orders:", error);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchOrders();

    const intervalId = setInterval(() => {
      fetchStats();
      fetchOrders();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      case "pending":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value={stats.totalProducts}
          icon={Package}
          color="blue"
        />
        <StatsCard
          title="Total Shopkeepers"
          value={stats.totalShopkeepers}
          icon={Users}
          color="green"
        />
        <StatsCard
          title="Orders"
          value={stats.totalOrders}
          icon={ShoppingCart}
          color="orange"
        />
        <StatsCard
          title="Total Categories"
          value={stats.totalCategories}
          icon={Tag}
          color="purple"
        />
      </div>

      <p className="text-sm text-gray-500">Auto-updated every 30 seconds.</p>

      {/* Recent Orders Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto card border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600">
              <tr>
                <th className="px-5 py-3">Order ID</th>
                <th className="px-5 py-3">Buyer</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders.map((order, index) => (
                <tr
                  key={order._id || index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-5 py-3 text-gray-800">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">#{order.orderid}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{order.buyerName}</span>
                    </div>
                  </td>
                  <td
                    className="px-5 py-3 truncate max-w-[200px]"
                    title={order.items}
                  >
                    {order.items}
                  </td>
                  <td className="px-5 py-3 font-semibold text-gray-900">
                    {formatCurrency(order.totalAmount)}
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{order.date.slice(0, 10)}</span>
                    </div>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
