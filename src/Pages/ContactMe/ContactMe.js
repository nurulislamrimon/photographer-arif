import React from 'react';
import { useForm } from "react-hook-form";


const ContactMe = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='bg-black'>
            <div className='h-[100vh] bg-[url("/public/contact-bg.png")] bg-cover bg-center bg-no-repeat bg-fixed'>
                <div className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}>
                    <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center ">Contact Me</h2>
                </div>

            </div>
            <div className="grid lg:grid-cols-3 items-center px-3 lg:px-10 pb-36">
                <div className=' lg:order-3'>
                    <iframe className='w-full rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7355.229560148816!2d91.23664317243222!3d22.81673362956262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753582ff63291b1%3A0x90d044507d7b6ecd!2sChaprasir%20Hat!5e0!3m2!1sen!2sbd!4v1664029548596!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" height={500} title='Chaprashirhat maps'></iframe>
                </div>
                {/* second section */}
                <div className='text-center py-16 lg:order-2'>
                    <h3 className="text-2xl text-neutral">Location</h3>
                    <h2 className='text-2xl text-white'>Chaprashir Hat, Kabirhat, Noakhali, Bangladesh.</h2>
                    <h3 className="text-2xl text-neutral mt-5">Phone</h3>
                    <h2 className='text-2xl text-white'>+8801811324330</h2>
                    <h3 className="text-2xl text-neutral mt-5">Email</h3>
                    <h2 className='text-2xl text-white'>arifhasan@gmail.com</h2>
                    <h3 className="text-2xl text-neutral mt-5">Social Media</h3>
                    <div className="mt-3 w-fit flex gap-5 mx-auto">
                        <a href='https://www.instagram.com/arif__ontheroad/' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 30 30" className=" fill-white hover:fill-red-800 duration-300"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>
                        </a>
                        <a href='https://www.instagram.com/arif__ontheroad/' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white hover:text-[#1da1f2] duration-300"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href='https://www.instagram.com/arif__ontheroad/' target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white hover:text-[red] duration-300"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                        <a href='https://web.facebook.com/profile.php?id=100008209128475' target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white hover:text-[blue] duration-300"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                    </div>
                </div>
                {/* last section */}
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5 px-10 lg:order-1'>
                    <div className="form-control w-full">
                        <input {...register("name", { required: true })} placeholder='Your Name' className="input input-bordered w-full" />
                        {errors.name && <label className="label ">
                            <span className="label-text-alt text-white">This field is required!</span>
                        </label>}
                    </div>
                    <div className="form-control w-full">
                        <input {...register("email", { required: true })} placeholder='Your E-mail' className="input input-bordered w-full" />
                        {errors.email && <label className="label ">
                            <span className="label-text-alt text-white">This field is required!</span>
                        </label>}
                    </div>
                    <div className="form-control w-full">
                        <input {...register("reason", { required: true })} placeholder='Reason' className="input input-bordered w-full" />
                        {errors.reason && <label className="label ">
                            <span className="label-text-alt text-white">This field is required!</span>
                        </label>}
                    </div>
                    <div className="form-control w-full">
                        <textarea {...register("message", { required: true })} placeholder='Message (Optional)' className="input input-bordered w-full h-20 p-2" />
                        {errors.message && <label className="label ">
                            <span className="label-text-alt text-white">This field is required!</span>
                        </label>}
                    </div>

                    <input type="submit" className="btn w-full text-success hover:bg-success hover:text-white" />
                </form>
            </div>
        </section>
    );
};

export default ContactMe;