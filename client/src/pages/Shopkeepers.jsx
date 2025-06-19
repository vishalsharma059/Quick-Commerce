import { useEffect, useState } from "react";
import API from "../services/api"; // axios instance
import { Store, Phone, MapPin } from "lucide-react";

const Shopkeepers = () => {
  const [shopkeepers, setShopkeepers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShopkeepers = async () => {
      try {
        const res = await API.get("/shopkeepers");
        setShopkeepers(res.data);
      } catch (err) {
        console.error("Error fetching shopkeepers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchShopkeepers();
  }, []);

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Shopkeepers</h1>
        <p className="mt-2 text-gray-600">Manage registered shopkeepers</p>
      </div>

      {/* Shopkeepers Table */}
      <div className="card border border-gray-200 rounded-lg overflow-x-auto shadow-sm">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600">
            <tr>
              <th className="px-5 py-3">Shopkeeper Name</th>
              <th className="px-5 py-3">Shop Name</th>
              <th className="px-5 py-3">Phone</th>
              <th className="px-5 py-3">City</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : shopkeepers.length > 0 ? (
              shopkeepers.map((shopkeeper) => (
                <tr key={shopkeeper._id}>
                  <td className="px-5 py-4 text-gray-900">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 p-2 rounded-full">
                        <Store className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="font-medium">{shopkeeper.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-800">
                    {shopkeeper.shopName}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{shopkeeper.phone}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{shopkeeper.city}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No shopkeepers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shopkeepers;
