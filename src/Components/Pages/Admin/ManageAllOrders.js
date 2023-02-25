import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getAllOrders } from '../../../redux/actions/orderActions';

const ManageAllOrders = () => {
    const { orders, error } = useSelector((state) => state.orders);
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getAllOrders())
    }, [error, dispatch])
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Order ID</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map((order, idx) => (<tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{order?._id}</td>
                            <td>${order?.totalPrice}</td>
                            <td>{order?.orderStatus}</td>
                            <td><button className="btn btn-sm btn-info">Delivered</button></td>
                        </tr>))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Order ID</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ManageAllOrders;