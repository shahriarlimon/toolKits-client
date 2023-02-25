import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeItemsFromCart } from '../../../redux/actions/cartActions';

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const total = cartItems.reduce(
        (acc, item) => acc + (item.quantity * item.price),
        0
    )
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const removeCartItem = (id) => {
        dispatch(removeItemsFromCart(id))
    }
    return <Fragment>
        <div class="container mx-auto px-4">
            <h1 class="text-2xl font-bold mb-4 mt-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-3/4 overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead className='bg-orange-500 text-white'>
                            <tr>
                                <th class="px-4 py-2">Product</th>
                                <th class="px-4 py-2">Price</th>
                                <th class="px-4 py-2">Quantity</th>
                                <th class="px-4 py-2">Total</th>
                                <th class="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems && cartItems.map((item, idx) => (<tr key={idx} class="border-b">
                                    <td class="px-4 py-2">{item?.name}</td>
                                    <td class="px-4 py-2">${item.price}</td>
                                    <td class="px-4 py-2">
                                        <input type="number" class="w-16 border border-gray-400 p-2 focus:outline-none" value={item.quantity} />
                                    </td>
                                    <td class="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td class="px-4 py-2">
                                        <button onClick={() => removeCartItem(item?._id)} class="bg-red-500 text-white p-2 rounded">Remove</button>
                                    </td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
                <div class="w-full md:w-1/4 py-4 md:py-0 md:pl-4">
                    <div class="bg-gray-200 p-4">
                        <h3 class="text-lg font-bold mb-4">Order Summary</h3>
                        <p class="mb-2">Subtotal: <span class="float-right">{total.toFixed(2)}</span></p>
                        <p class="mb-2">Shipping: <span class="float-right">Free</span></p>
                        <p class="mb-2 font-bold">Total: <span class="float-right">{total.toFixed(2)}</span></p>
                        <button onClick={() => navigate(`/shipping`)} class="w-full bg-red-500 text-white py-2 mt-4 hover:bg-red-600">Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>


}

export default Cart
