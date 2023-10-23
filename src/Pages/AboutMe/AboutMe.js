import React from "react";
import "./AboutMe.css";
import ContactInfoInputMaps from "../../Components/ContactInfoInputMaps/ContactInfoInputMaps";
import { useForm } from "react-hook-form";

const AboutMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className=" bg-black">
      <div
        className={`bg-fixed bg-no-repeat h-[100vh] bg-cover bg-center mb-10`}
        style={{
          backgroundImage: "url('./images/section/about-me.jpg')",
        }}
      >
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent">
          <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center">
            About Me
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 py-10items-center gap-10 px-10 lg:px-20">
        <div className="about-profile-photo-container relative z-10 w-3/4 mx-auto">
          <img
            src="./images/about-me.jpg"
            alt="me"
            className="w-full grayscale contrast-200 hover:filter-none transition-all"
          />
        </div>
        <article className="text-success opacity-50 hover:opacity-100 transition-all">
          Greetings! I am Mohammad Arif Hasan, an accomplished natural
          photography artist with a deep-rooted connection to the mesmerizing
          landscapes of Noakhali, Bangladesh. Through the lens of my camera, I
          embark on a journey to capture the untouched beauty of nature,
          bringing forth the hidden wonders of our world. With each click, I
          seek to unveil the intricate stories and captivating moments that lie
          within the heart of our planet. Join me as I invite you to explore the
          enchanting realm of natural photography and share in the awe-inspiring
          sights and stories that I've had the privilege to witness and
          document. Welcome to my world of visual storytelling, where every
          frame narrates a unique tale of nature's splendor.
        </article>
      </div>
      <h2 className="text-xl lg:text-5xl font-bold text-white text-center my-10">
        Contact Me
      </h2>
      <ContactInfoInputMaps
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        isSuccess={true}
      />
    </section>
  );
};

export default AboutMe;
