import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
    return (
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
            <p className="mb-4">
                Your order with ID {"orderId"} has been successfully processed.
            </p>
            <p className="mb-4">
                You will receive a confirmation email shortly with your order details.
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default OrderSuccess
