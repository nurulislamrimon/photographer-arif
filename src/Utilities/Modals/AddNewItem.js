import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAddNewItem from '../../CustomHooks/useAddNewItem';
import Spinner from '../Spinner';

const AddNewItem = ({ refetch, setAddNewItem, fetchTo }) => {
    const [loading, setLoading] = useState(false);
    const addNewItem = useAddNewItem();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        setLoading(true)
        await addNewItem(data, fetchTo)
        refetch();
        setLoading(false);
        setAddNewItem(false);
    };
    if (loading) {
        return <Spinner />
    }
    return (
        <section className='relative'>
            <input type="checkbox" id="AddNewPhoto" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5  mx-auto py-20'>

                        <div className="form-control w-full">
                            <input {...register("name", { required: true })} placeholder='Photo Name' className="input input-bordered w-full" />
                            {errors.name && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <input {...register("tag", { required: true })} placeholder='tag' className="input input-bordered w-full" />
                            {errors.tag && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <input {...register("picture", { required: true })} placeholder='picture' className="input input-bordered w-full" />
                            {errors.picture && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <input {...register("album", { required: true })} placeholder='album' className="input input-bordered w-full" />
                            {errors.album && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <div className="form-control w-full">
                            <textarea rows={30} cols={40} {...register("about", { required: true })} placeholder='about' className="input input-bordered w-full" />
                            {errors.about && <label className="label ">
                                <span className="label-text-alt text-red-600">This field is required!</span>
                            </label>}
                        </div>
                        <button className='btn'>Submit</button>
                    </form>
                    <label htmlFor="AddNewPhoto" className="btn btn-circle bg-black absolute top-3 lg:top-12 right-3">X</label>
                </div>
            </div>
        </section>
    );
};

export default AddNewItem;