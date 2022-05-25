import React from 'react';

const ToolRow = ({tool,index,refetch,setDeletingTool}) => {
    const {name,unit_price,available_quantity ,minimum_order_quantity} = tool;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{unit_price}</td>
        <td>{available_quantity}</td>
        <td>{minimum_order_quantity}</td>
        <td>
            <label onClick={() => setDeletingTool(tool)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
        </td>
    </tr>
    );
};

export default ToolRow;