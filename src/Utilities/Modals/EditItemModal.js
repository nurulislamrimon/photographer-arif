import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useEditSubmit from '../../CustomHooks/useEditSubmit';
import Spinner from '../Spinner';

const EditItemModal = ({ editItem, refetch, setEditItem, fetchTo }) => {
    const submitData = useEditSubmit();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [handleDisable, setHandleDisable] = useState(true);

    const handleChange = (e) => {
        setHandleDisable(false)
        const { name, value } = e.target;
        const { [name]: property, ...rest } = editItem;
        setEditItem({ [name]: value, ...rest })
    }

    const onSubmit = async data => {
        setLoading(true)
        await submitData(editItem, fetchTo)
        refetch();
        setLoading(false)
        setEditItem(null)
    };

    if (loading) {
        return <Spinner />
    }

    return (
        <section className='relative'>
            <input type="checkbox" id="editItemModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onChange={handleChange} onSubmit={handleSubmit(onSubmit)} className='grid gap-5  mx-auto py-20'>

                        <div className="form-control w-full">
                            <input {...register("name", { required: true })} value={editItem?.name || ''} className="input input-bordered w-full" />
                            {errors.name && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <input {...register("tag", { required: true })} value={editItem?.tag || ''} className="input input-bordered w-full" />
                            {errors.tag && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <input {...register("picture", { required: true })} value={editItem?.picture || ''} className="input input-bordered w-full" />
                            {errors.picture && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <input {...register("album", { required: true })} value={editItem?.album || ''} className="input input-bordered w-full" />
                            {errors.album && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <textarea rows={30} cols={40} {...register("about", { required: true })} value={editItem?.about || ''} className="input input-bordered w-full" />
                            {errors.about && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <button className='btn' disabled={handleDisable}>Submit</button>
                    </form>

                    <label htmlFor="editItemModal" className="btn btn-circle bg-black absolute top-3 lg:top-12 right-3">X</label>
                </div>
            </div>
        </section>
    );
};

export default EditItemModal;