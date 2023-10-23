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
            <h4 className="text-success text-xl lg:text-xl uppercase font-thin">
              Mohammad Arif Hasan is a gifted natural photography artist hailing
              from the scenic landscapes of Noakhali, Bangladesh.
            </h4>
            <p className="text-sm lg:text-lg font-thin">
              Arif Hasan is a creative photographer and a passionate student of
              the arts, currently pursuing a degree in Zoology. Through his art,
              he brings to life the intricate details of the world around us,
              showcasing the magnificence of both the seen and the unseen. Arif
              Hasan is not just a photographer; he's a storyteller who uses his
              images to convey the emotions, stories, and connections that exist
              in the natural world. With a camera in hand and a heart full of
              curiosity, Arif continues to explore, discover, and share the
              magic of our planet through the art of photography.{" "}
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
