import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAchivement.css'

const HomeAchivement = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 p-10'>
            <Link to='/achivements' className="relative hover:text-success lg:h-[40vw] cursor-pointer">
                <img data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/272053909_3118000775150196_373284106785125909_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7mUJ_XdJbfIAX9GuWcj&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8MutYDQo2Ugf3ncqqHcMXJsZeIyF3bruQdbLMkyljY7Q&oe=63304F4E" alt="img" className=' rounded-3xl h-full mx-auto' />
                <article className='absolute bottom-0 left-0 right-0 p-2 lg:p-5 flex flex-col glass rounded-bl-3xl rounded-br-3xl duration-1000'>
                    <h3 className='text-3xl text-center'>Achivement</h3>
                    <p className="text-lg text-center">Some achivement gives us strength.</p>
                </article>
            </Link>
            <Link to='/achivements' className="relative hover:text-success lg:h-[40vw] cursor-pointer">
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/272296495_3121578058125801_3063293042562307217_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OoIS78sEJsgAX-GKr3n&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8R2dbylnsBa2ZWqjafRUIP2QBpvxMv6PG8TUUT0IFpYA&oe=632FC03D" alt="img" className='rounded-3xl h-full  mx-auto' />
                <article className='absolute bottom-0 left-0 right-0 p-2 lg:p-5 flex flex-col glass rounded-bl-3xl rounded-br-3xl duration-1000'>
                    <h3 className='text-3xl text-center'>Achivement</h3>
                    <p className="text-lg text-center">Some achivement gives us strength.</p>
                </article>
            </Link>
        </div>
    );
};

export default HomeAchivement;