import { useEffect, useState } from "react";
import { ShoppingBag, Calendar, User } from "lucide-react";
import API from "../services/api"; // Adjust path if different

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders");
        const sortedOrders = res.data.sort((a, b) => b.orderid - a.orderid);
        setOrders(sortedOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
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
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="mt-1 text-sm text-gray-600">
          View and manage customer orders
        </p>
      </div>

      <div className="card overflow-x-auto rounded-lg shadow-sm border border-gray-200">
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
                key={order.id || index}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-5 py-3 text-gray-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">#{order.orderid}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-700">
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
                    <span>{<span>{order.date.slice(0, 10)}</span>}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card p-4 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-2xl font-bold text-gray-800">{orders.length}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="card p-4 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Delivered Orders</p>
            <p className="text-2xl font-bold text-gray-800">
              {orders.filter((order) => order.status === "delivered").length}
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <ShoppingBag className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="card p-4 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-800">
              {formatCurrency(
                orders.reduce((sum, order) => sum + order.totalAmount, 0)
              )}
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <ShoppingBag className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
