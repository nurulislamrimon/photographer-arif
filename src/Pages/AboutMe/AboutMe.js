import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section>
            <div className='bg-[url(https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/272053909_3118000775150196_373284106785125909_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7mUJ_XdJbfIAX9GuWcj&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8MutYDQo2Ugf3ncqqHcMXJsZeIyF3bruQdbLMkyljY7Q&oe=63304F4E)] bg-fixed bg-no-repeat h-[100vh] bg-cover'>
                <div className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}>
                    <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center">About Me</h2>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 py-10 bg-black items-center gap-10 px-10 lg:px-20">
                <div className='about-profile-photo-container relative z-10 w-3/4 mx-auto'>
                    <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/272053909_3118000775150196_373284106785125909_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7mUJ_XdJbfIAX9GuWcj&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8MutYDQo2Ugf3ncqqHcMXJsZeIyF3bruQdbLMkyljY7Q&oe=63304F4E" alt="me" className='w-full' />
                </div>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium voluptatibus error quo nihil? Similique optio incidunt deleniti consequuntur praesentium temporibus at qui facilis magnam delectus! Explicabo at, quibusdam rem ipsam ratione ducimus sint nemo quisquam culpa blanditiis labore doloremque expedita, porro laboriosam placeat unde magni voluptatem libero aut vel!</article>

            </div>
        </section>
    );
};

export default AboutMe;