import React from 'react'

const Success = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <h2 className="text-2xl font-bold text-center mt-4 mb-8">
                    Thank you for your order!
                </h2>
                <p className="text-center mb-4">
                    Your order has been received and is being processed. We will notify
                    you once it has shipped.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full mt-8">
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default Success
