import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../api/orders";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await getOrders();
            setOrders(orders);
        };
        fetchOrders();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>

            <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-left font-bold">
                            <th className="py-2">Order ID</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Total</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="py-2">{order.id}</td>
                                <td className="py-2">{order.date}</td>
                                <td className="py-2">${order.total}</td>
                                <td className="py-2">{order.status}</td>
                                <td className="py-2">
                                    <Link
                                        to={`/orders/${order.id}`}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        View Order
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
