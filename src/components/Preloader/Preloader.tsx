import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import Preloader from "../../images/preloader.png";

const Preloader = () => {
  return (
    <div>
      <span className="flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="absolute top-1/2 left-1/2  inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </div>
  );
};

export default Preloader;
