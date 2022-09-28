import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';

const ConfirmDelete = ({ deleteItem, refetch, setDeleteItem, fetchTo }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async (id) => {
        setLoading(true);
        await fetch(`http://localhost:5000/${fetchTo}/${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount) {
                    toast.success('Item deleted')
                }
            })
        refetch();
        setLoading(false)
        setDeleteItem(null);
    }

    if (loading) {
        return <Spinner />
    }
    return (
        <div>

            <input type="checkbox" id="DeletePhotoModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-red-700">Confirm Delete?</h3>
                    <img src={deleteItem?.picture} alt="" className='w-2/4 mx-auto' />
                    <p className="font-bold text-lg">{deleteItem?.tag}</p>
                    <p className='text-sm'>{deleteItem?.about}</p>
                    <div className="modal-action">
                        <label htmlFor="DeletePhotoModal" className="btn">No</label>
                        <label onClick={() => handleDelete(deleteItem?._id)} className="btn hover:bg-red-500 border-none">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;