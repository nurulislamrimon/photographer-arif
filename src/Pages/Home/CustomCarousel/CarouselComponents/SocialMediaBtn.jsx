import React from "react";

const SocialMediaBtn = () => {
  return (
    <div className="bg-black -rotate-90 social-btn-carousel absolute top-28 -left-24 hidden lg:flex z-20 text-lg p-2 text-success">
      <a href="tel: +8801811324330" className="p-1  hover:text-white">
        Mobile
      </a>
      <a href="mailto: arifhasan@gmal.com" className="p-1  hover:text-white">
        Mail
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100008209128475"
        target="_blank"
        rel="noreferrer"
        className="p-1 pr-2  hover:text-white"
      >
        Facebook{" "}
      </a>
    </div>
  );
};

export default SocialMediaBtn;
