import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
    const [images, setImages] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const product = { id: uuidv4(), ...data, images };
        // Add product to database or state management
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register("price", { required: true, min: 0 })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <label htmlFor="stock" className="block font-medium text-gray-700">
                            Stock
                        </label>
                        <input
                            type="number"
                            id="stock"
                            {...register("stock", { required: true, min: 0 })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="description" className="block font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        {...register("description", { required: true })}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                </div>

                <div className="mt-6">
                    <label htmlFor="images" className="block font-medium text-gray-700">
                        Images
                    </label>
                    <input
                        type="file"
                        id="images"
                        multiple
                        onChange={handleImageUpload}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <div className="mt-2 flex justify-start items-center">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={` ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setImages((prevImages) => prevImages.filter((_, i) => i !== index))
                                    }
                                    className="absolute top-0 right-0 rounded-full bg-red-500 text-white w-6 h-6 flex justify-center items-center focus:outline-none"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
