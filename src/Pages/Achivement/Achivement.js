import React from "react";

const Achivement = () => {
  return (
    <section>
      <div
        className={`bg-fixed bg-no-repeat h-[100vh] bg-cover bg-center mb-10`}
        style={{
          backgroundImage: "url('./images/section/achivement.jpg')",
        }}
      >
        <div
          className={`h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent`}
        >
          <h2 className="text-2xl lg:text-[100px] font-bold text-white text-center">
            Achivement
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
