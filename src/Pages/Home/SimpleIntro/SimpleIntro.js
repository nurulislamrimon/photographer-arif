import "./SimpleIntro.css";

const SimpleIntro = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[100vh] p-5 lg:p-20">
      <div>
        <div>
          <p className=" text-success tracking-widest text-lg font-thin">
            Natural Photographer
          </p>
          <h3 className="text-5xl text-secondary uppercase tracking-tighter">
            Arif Hasan
          </h3>
        </div>
        <div className="flex">
          <div className="hidden lg:block">
            <hr className="border border-success mt-10 w-56" />
          </div>
          <article className="text-secondary mt-10 lg:mt-0 pb-10 lg:p-7">
            <h4 className="text-success text-xl lg:text-2xl uppercase font-thin">
              Mohammad Arif Hasan is a Natural Photography Artist based in
              Noakhali, Bangladesh.
            </h4>
            <p className="text-sm lg:text-lg font-thin">
              He is so popular for his creative photographs all over the world.
              Locally he is well known for his over size fitness and joker
              character.He is so popular for his creative photographs all over
              the world. Locally he is well known for his over size fitness and
              joker character.He is so popular for his creative photographs all
              over the world. Locally he is well known for his over size fitness
              and joker character.He is so popular for his creative photographs
              all over the world. Locally he is well known for his over size
              fitness and joker character.{" "}
            </p>
          </article>
        </div>
      </div>
      <div className="py-10 lg:mt-24">
        <div className="about-photo-container w-3/4 mx-auto h-fit z-10">
          <img
            data-aos="flip-right"
            data-aos-duration="1000"
            src="./images/arif-hasan.jpg"
            // src="./images/funny-arif.jpg"
            alt="img"
            className="w-full grayscale hover:translate-x-5 hover:translate-y-5 duration-700"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleIntro;
