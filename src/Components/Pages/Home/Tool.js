import React from 'react';

const Tool = ({tool}) => {
    const {name,img,description,minimum_order_quantity,available_quantity,unit_price} = tool;
    return (
        <div class="card card-compact lg:max-w-mx bg-white shadow-xl">
        <figure><img className='h-[200px]' src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Available Quantity: {available_quantity}</p>
          <p>Minumum Order Quantity: {minimum_order_quantity}</p>
          <p>Unit Price: ${unit_price}</p>
          <p>{description.slice(0,200)+ '...'}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;