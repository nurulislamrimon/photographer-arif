import React from 'react';
import usePhotos from '../../CustomHooks/usePhotos';
import Spinner from '../../Utilities/Spinner';
import './Gallery.css'

const Gallery = () => {
    const { loading, setLoading, photos, setPhotos } = usePhotos();

    const selectedItem = (e) => {
        const exist = document.getElementsByClassName('selected-category')[0];
        // remove from existing
        exist.classList.remove('selected-category');
        // add in new
        e.target.classList.add('selected-category');
    }

    if (loading) { return <Spinner /> }
    return (
        <section>
            <div className=' bg-[url(https://scontent.fcgp4-1.fna.fbcdn.net/v/t39.30808-6/306539008_3292793961004209_6374030496542470897_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7s7DB8n5WccdgER-182aT6GG-dzPLRQPoYb53M8tFA5LVjqTtMGhpMRILRqGmJbaxV7lEvnD9p1h_Bm0R7x0-&_nc_ohc=ARn8NLMNrksAX-sZTSX&_nc_zt=23&_nc_ht=scontent.fcgp4-1.fna&oh=00_AT82ac-EtR5WMjFkEFKa2fkN09hdVzONaOaYQ6toOghl8g&oe=63336D79)] bg-fixed bg-no-repeat h-[100vh] bg-cover'>
                <div className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}>
                    <h2 className="text-2xl lg:text-5xl font-bold text-white text-center ">Gallery</h2>
                </div>
            </div>

            <div className='pt-10 categories-btn-container flex gap-2 flex-wrap justify-center'>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success selected-category'>All</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Aerial</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Architecture</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Beautiful Bangladesh</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Best Shots</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Black And White</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Documentary</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Festival And Tradition</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Lifestyle</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Mobile Photo</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Portrait</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Street</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Travel</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Wildlife</button>
                <button onClick={selectedItem} className='py-2 px-3 text-neutral capitalize text-xl rounded-3xl hover:text-success'>Micro</button>
            </div>
            <div className="py-10 grid items-center lg:grid-cols-4 gap-5">
                {photos.map(item => <img src={item?.picture} alt="img" className='hover:brightness-110' />)}
            </div>
        </section>
    );
};

export default Gallery;