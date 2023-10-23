import React from "react";

const Stories = () => {
  return (
    <section>
      <div
        className={`bg-fixed bg-no-repeat h-[100vh] bg-cover bg-center mb-10`}
        style={{
          backgroundImage: "url('./images/section/story.jpg')",
        }}
      >
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-t from-black to-transparent">
          <h2 className="text-lg lg:text-[50px] font-bold text-white text-center">
            Stories are the way of knowing ancestors
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Stories;
