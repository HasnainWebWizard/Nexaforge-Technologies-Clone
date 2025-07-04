"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Benefits({ src, title, para, className, aos }) {
  const [duration, setDuration] = useState(500);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setDuration(1000);
    } else {
      setDuration(500);
    }

    Aos.init({});
  }, []);

  return (
    <div
      className={`flex flex-col justify-start items-center p-5 ${className}`}
      data-aos={aos}
      data-aos-duration={duration}
    >
      <img src={src} className="w-10" />
      <h1 className="font-semibold py-3">{title}</h1>
      <p className="text-sm text-center text-gray-500">{para}</p>
    </div>
  );
}

export default Benefits;
