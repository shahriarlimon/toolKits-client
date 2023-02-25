import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getTools } from '../../../redux/actions/productActions';

const ManageProducts = () => {
    const { tools, error } = useSelector((state) => state.tools);
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        dispatch(getTools())
    }, [error, dispatch])
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>tool ID </th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>STOCK</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools && tools.map((tool, idx) => (<tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{tool?._id}</td>
                            <td>{tool?.name}</td>
                            <td>{tool?.images[0]?.url}</td>
                            <td>{tool?.stock}</td>
                            <td><button className="btn btn-error btn-sm">Delete</button></td>
                        </tr>))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>tool ID </th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>STOCK</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ManageProducts;