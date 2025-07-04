"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const slides = [
    {
        title: "Lunch & Learn",
        description:
            "Lunch & Learn offers us a chance to explore something new each week. With sessions covering various categories like finance, project management, or design, the experience remains dynamic and diverse.",
        image: "/career-slider-1.jpg",
    },
    {
        title: "Associate wellness program",
        description:
            "On the 3rd Friday of every month, 6 associates are randomly selected to enjoy a company-paid lunch. We encourage you to have fun and connect with colleagues from across the company whom you may not have interacted with before.",
        image: "/career-slider-2.jpg",
    },
    {
        title: "News Letter",
        description:
            "Each month, we use release an internal newsletter consolidating news, announcements, notable projects, star performer spotlights, and essential updates crucial for all associates.",
        image: "/career-slider-3.jpg",
    },
    {
        title: "Annual Meetup",
        description:
            "Every last Friday of the month, we host a creative challenge or mini workshop to inspire innovation and fresh ideas across all departments.",
        image: "/career-slider-4.jpg",
    },
    {
        title: "Social Lunch",
        description:
            "On the 3rd Friday of every month, 6 associates are randomly selected to enjoy a company-paid lunch. We encourage you to have fun and connect with colleagues from across the company whom you may not have interacted with before.",
        image: "/solYellow.jpg",
    },
    {
        title: "Nexaforge Technologies",
        description:
            "At Nexaforge Technologies, we host enjoyable events throughout the year, creating opportunities for our associates to build strong working relationships and foster personal connections.",
        image: "/sol-team.jpg",
    },
    {
        title: "Demo Day",
        description:
            "Demo Days offer teams the stage to exhibit their software solutions, presenting client details, problem statements, technology employed, challenges encountered, and innovative solutions, fostering collaboration and sharing valuable insights.",
        image: "/cc-careers.jpg",
    },
];

function SliderCareer() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        Aos.init({});
    }, []);

    // Auto-switch every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="grid md:grid-cols-2 items-start py-16 gap-8"
            data-aos="zoom-in" data-duration="2000">
            <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What’s Happening</h2>
                <h3 className="text-2xl text-gray-800 mb-3">{slides[currentIndex].title}</h3>
                <p className="text-gray-700 mb-8 min-h-[200px] text-lg">{slides[currentIndex].description}</p>

                <div className="flex justify-center">
                    <button
                        onClick={prevSlide}
                        className="material-symbols-outlined p-3 rounded-full border-2 border-gray-300 text-gray-300 cursor-pointer lg:hover:border-gray-700 active:border-gray-300 lg:hover:text-gray-700 active:text-gray-700"
                    >
                        arrow_back
                    </button>
                    <button
                        onClick={nextSlide}
                        className="material-symbols-outlined p-3 rounded-full border-2 border-gray-300 text-gray-300 cursor-pointer lg:hover:border-gray-700 active:border-gray-300 lg:hover:text-gray-700 ml-3 active:text-gray-700"
                    >
                        arrow_forward
                    </button>
                </div>
            </div>

            <div>
                <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title}
                    className="w-full h-auto rounded"
                />
            </div>
        </section>
    );
}

export default SliderCareer;
