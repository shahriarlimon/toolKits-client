import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { myOrders } from '../../../redux/actions/orderActions';

const MyOrders = () => {
    const { orders, loading, error } = useSelector((state) => state.myOrders);
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            toast.error(error)
        }
        dispatch(myOrders())
    }, [error, dispatch])
    return (
        <div className="overflow-x-auto mx-auto shadow-lg">
            <table className="table table-compact w-full px-12">
                <thead>
                    <tr className='p-2'>
                        <th></th>
                        <th>Order ID</th>
                        <th>Paid At</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map((order, idx) => (<tr className='p-2 text-xl' key={idx}>
                            <th>{idx + 1}</th>
                            <td>{order?._id}</td>
                            <td>{(order?.paidAt).slice(0, 10)}</td>
                            <td>${order?.totalPrice}</td>
                            <td className=''>{order?.orderStatus}</td>

                        </tr>))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <td></td>
                        <th></th>

                    </tr>
                </tfoot>
            </table>
        </div>

    );
};

export default MyOrders;