import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';

const AddReview = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        navigate('/product-details'); // Redirect to product details page
    };

    return (
        <div className="container mx-auto px-4">
            <div className="my-4 text-center">
                <h2 className="text-2xl font-medium">Add Your Review</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label className="block text-lg font-medium">Rating</label>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <AiOutlineStar
                                key={value}
                                className={`h-8 w-8 mr-1 cursor-pointer ${rating >= value ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                onClick={() => handleRatingChange(value)}
                            />
                        ))}
                    </div>
                </div>
                <div className="my-4">
                    <label className="block text-lg font-medium">Review</label>
                    <textarea
                        className="border border-gray-300 rounded-lg p-2 w-full h-32 resize-none focus:outline-none focus:border-blue-400"
                        placeholder="Enter your review here..."
                        value={reviewText}
                        onChange={(event) => setReviewText(event.target.value)}
                    ></textarea>
                </div>
                <div className="my-4 text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;
