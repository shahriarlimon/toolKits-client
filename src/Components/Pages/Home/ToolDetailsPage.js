import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addItemsToCart } from '../../../redux/actions/cartActions';
import { getSingleTool } from '../../../redux/actions/productActions';
import Loading from '../../Shared/Loading/Loading';

function ToolDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { tool, loading, error } = useSelector((state) => state.tool)
    const [quantity, setQuantity] = useState(30)
    const increaseQuantity = () => {
        if (tool.stock < quantity) return
        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if (tool.minimumOrderQuantity > quantity) return
        setQuantity(quantity - 1)
    }
    const addToCartHandler = (id, quantity) => {
        dispatch(addItemsToCart(id, quantity))
        toast.success('Items added to cart')
    }
    useEffect(() => {
        dispatch(getSingleTool(id))
        if (error) {
            toast.error(error)
        }

    }, [dispatch, id, error])

    return (
        <Fragment>
            {
                loading ? <Loading /> : <div className="flex flex-col items-center p-6">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className=" w-64 md:w-80 carousel rounded-box">
                            {
                                tool?.images?.map((item, idx) => (<img key={idx} src={item.url} className="object-cover md:mr-6" alt="Product" />))
                            }
                        </div>

                        <div className="flex flex-col md:justify-start md:items-start justify-center items-center w-1/2 md:ml-8">
                            <h2 className="text-2xl font-bold mt-4">{tool?.name}</h2>
                            <p className="text-gray-600 mt-2 text-xs">#ID: {tool?._id}</p>
                            <p className="flex items-center mt-2">
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='ml-4 bg-green-200 px-3 py-2 font-semibold rounded-full text-sm text-gray-700'>Instock</p>
                            </p>
                            <p className="text-red-600 mt-2 font-semibold"> ${tool?.price}</p>
                            <div className="flex items-center mt-4">
                                <button disabled={quantity <= tool.minimumOrderQuantity} onClick={decreaseQuantity} htmlFor="quantity" className="bg-gray-500 py-1 px-2 text-white">-</button>
                                <input readOnly value={quantity} type="number" id="quantity" className="ml-2 border border-gray-400 px-2 py-1 focus:outline-none w-1/2" />
                                <button onClick={increaseQuantity} htmlFor="quantity" className="bg-gray-500 py-1 px-2 ml-2 text-white">+</button>

                            </div>
                            <button onClick={() => addToCartHandler(id, quantity)} className="bg-teal-500 text-white py-2 rounded-lg px-4 mt-4 hover:bg-teal-600 md:w-1/2 ">Add to Cart</button>
                            <p className="text-gray-600 mt-3 text-sm">Description: {tool?.description}</p>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
}

export default ToolDetailsPage;
