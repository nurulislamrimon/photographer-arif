import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => signInWithEmailAndPassword(data?.email, data?.password);

    if (user) {
        return <Navigate to='/dashboard' />
    }
    return (
        <div className='mt-16 p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5 lg:w-1/2 mx-auto py-20'>

                <div className="form-control w-full">
                    <input {...register("email", { required: true })} placeholder='Your E-mail' className="input input-bordered w-full" />
                    {errors.email && <label className="label ">
                        <span className="label-text-alt text-white">This field is required!</span>
                    </label>}
                </div>
                <div className="form-control w-full">
                    <input type='password' {...register("password", { required: true })} placeholder='password' className="input input-bordered w-full" />
                    {errors.password && <label className="label ">
                        <span className="label-text-alt text-white">This field is required!</span>
                    </label>}
                </div>
                {error && <p className='text-white text-center'>{error?.message}</p>}
                <input type="submit" className="btn w-full text-success hover:bg-success hover:text-white" />
            </form>
        </div>
    );
};

export default Login;