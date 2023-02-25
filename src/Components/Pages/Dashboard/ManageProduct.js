/* import React, { useState } from 'react';
import useTools from '../../Hooks/useTools';
import Loading from '../../Shared/Loading/Loading';
import DeletingToolConfirmModal from './DeletingToolConfirmModal';
import ToolRow from './ToolRow';

const ManageProduct = () => {
    const [deletingTool, setDeletingTool] = useState(null);
    const [tools,isLoading,refetch] = useTools();
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
        <h2 className="text-2xl">Total Tools:  {tools.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Available Quantity</th>
                        <th>Minimum Order Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools?.map((tool, index) => <ToolRow
                            key={index}
                            tool={tool}
                            index={index}
                            refetch={refetch}
                            setDeletingTool={setDeletingTool}
                        ></ToolRow>)
                    }
                </tbody>
            </table>
        </div>
        {deletingTool && <DeletingToolConfirmModal
            deletingTool={deletingTool}
            refetch={refetch}
            setDeletingTool={setDeletingTool}
        ></DeletingToolConfirmModal>}
    </div>
    );
};

export default ManageProduct; */