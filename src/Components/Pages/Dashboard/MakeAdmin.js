/* import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://enigmatic-bastion-29863.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=><MakeAdminRow
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></MakeAdminRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MakeAdmin; */