"use client";
import { useEffect, useState } from "react";
import BtnOne from "./../components/BtnOne";

const headings = [
  "We facilitate the delivery of innovation.",
  "Crafting digital solutions for the future.",
  "We aid in scaling your business",
  "We empower you to think outside the box.",
  "We mitigate risks for you."
];

function HeroCont({ className }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % headings.length;
      const fullText = headings[i];

      setDisplayText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 20);
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <main
        className={`h-160 bg-[url('/Aboutt.png')] bg-cover bg-center flex justify-center flex-col ${className}
        max-w-screen mx-[calc(50%-50vw)] px-5 lg:px-18 relative -top-20`}
      >
        <div className="max-w-full h-auto">
          <h1
            className="text-white text-4xl lg:text-5xl font-bold max-w-full whitespace-normal lg:h-10 lg:pb-13"
          >
            {displayText}
            <span className="animate-pulse ml-1 text-bold bg-white">|</span>
          </h1>
          <div className="flex">
            <BtnOne
              name={"Let's Build together"}
              className={'mt-8 hover:scale-110 transition duration-700'}
              href={"/contactus"}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroCont;
