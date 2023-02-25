import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const { user } = useSelector((state) => state.user)
    const { orders } = useSelector((state) => state.myOrders)
    const { shippingInfo } = useSelector((state) => state.cart)
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* User profile header */}
            <div className="bg-white py-6 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                                My Account
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* User profile content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6">
                    <div className="sm:flex sm:items-center sm:justify-between mb-4">
                        <div className="mb-4 sm:mb-0 sm:flex sm:space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-24 w-24 rounded-full object-cover"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                    alt=""
                                />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    {user?.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Order History
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                    {orders?.length}
                                </dd>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Payment Information
                                </dt>
                                <dd className="              mt-1 text-3xl font-semibold text-gray-900">
                                    **** **** **** 1234
                                </dd>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Shipping Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {user.name}<br />
                                    {shippingInfo?.address}<br />
                                    {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                                    {shippingInfo.country}
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile