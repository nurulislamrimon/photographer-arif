import React from 'react';

const AboutMe = () => {
    return (
        <section>
            <div className='bg-[url(https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/272053909_3118000775150196_373284106785125909_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7mUJ_XdJbfIAX9GuWcj&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8MutYDQo2Ugf3ncqqHcMXJsZeIyF3bruQdbLMkyljY7Q&oe=63304F4E)] bg-fixed bg-no-repeat h-[100vh] bg-cover'>
                <div className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}>
                    <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center">About Me</h2>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;