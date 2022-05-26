import React from 'react';
import { toast } from 'react-toastify';

const DeletingToolConfirmModal = ({deletingTool,refetch,setDeletingTool}) => {
 const {name,_id} = deletingTool;
 const handleDelete = ()=>{
    fetch(` https://enigmatic-bastion-29863.herokuapp.com/delete-tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(` ${name} is deleted.`)
                    setDeletingTool(null);
                    refetch();
                }
            })
 }
    return (
         <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg ">Are you sure you want to delete <span className='text-red-500'> {name}</span>?</h3>
                   
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingToolConfirmModal;