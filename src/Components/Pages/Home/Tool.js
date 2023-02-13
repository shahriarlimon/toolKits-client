import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <img className="w-full h-64" src={tool?.images[0]?.url} alt={tool?.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{tool?.name}</div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Price: ${tool.price}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Stock: {tool.stock}</span>
        <span className=" mx-auto my-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Minimum Order: {tool.minimumOrderQuantity}</span>

      </div>
      <div className="px-6 py-4">
        <button onClick={() => navigate(`/${tool?._id}`)} className=" w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          View More
        </button>
      </div>
    </div>


  );
};

export default Tool;

