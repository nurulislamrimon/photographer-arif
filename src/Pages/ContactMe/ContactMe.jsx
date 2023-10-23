import React from "react";
import { useForm } from "react-hook-form";
import ContactInfoInputMaps from "../../Components/ContactInfoInputMaps/ContactInfoInputMaps";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className="bg-black">
      <div
        className={`bg-fixed bg-no-repeat h-[100vh] bg-cover bg-center mb-10`}
        style={{
          backgroundImage: "url('./images/section/contact.png')",
        }}
      >
        <div
          className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}
        >
          <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center ">
            Contact Me
          </h2>
        </div>
      </div>
      <ContactInfoInputMaps
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </section>
  );
};

export default ContactMe;
