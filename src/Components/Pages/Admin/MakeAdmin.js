import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getAllUsers } from '../../../redux/actions/userActions';

const MakeAdmin = () => {
    const { users, error, loading } = useSelector((state) => state.users);
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getAllUsers())
    }, [dispatch, error])
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, idx) => (<tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{user?._id}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td><button disabled={user.role === "admin"} className="btn btn-success btn-sm">Make Admin</button></td>
                        </tr>))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default MakeAdmin;