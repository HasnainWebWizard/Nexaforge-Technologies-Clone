import BtnTwo from "./BtnTwo";

function ServiceComp({ heading, heading2, para, para2, img, img2, img_aos1 , img_aos2 }) {
    return (
        <section className="grid lg:grid-cols-2 [grid-auto-rows:minmax(200px,_auto)]  w-screen ml-[calc(50%-50vw)] overflow-hidden">
            <div className="order-2 md:order-2 lg:order-1 py-5 lg:py-10 flex justify-center items-center flex-col lg:items-start text-center lg:text-left px-5 lg:pl-25 ">
                <h1 className="text-4xl md:text-5xl font-bold my-3">{heading}</h1>
                <p className="text-base md:text-lg lg:text-2xl">{para}</p>
                <BtnTwo
                    name={"Expert insights"}
                    className={"my-5 mt-10"}
                    href={"/contactus"} />
            </div>

            <div
                data-aos={img_aos1}
                className="order-1 md:order-1 lg:order-2 bg-gray-400 bg-cover bg-center h-full min-h-[200px]"
                style={{ backgroundImage: `url(${img})` }}
            ></div>

            <div
            data-aos={img_aos2}
                className="order-3 md:order-3 lg:order-3 bg-gray-400 bg-cover bg-center w-full h-full min-h-[200px]"
                style={{ backgroundImage: `url(${img2})` }}
            ></div>

            <div className="order-4 md:order-4 lg:order-4 py-5 lg:py-10 flex justify-center items-center flex-col lg:items-start text-center lg:text-left px-5 lg:pl-25 ">
                <h1 className="text-4xl md:text-5xl font-bold my-3">{heading2}</h1>
                <p className="text-base md:text-lg lg:text-2xl">{para2}</p>
                <BtnTwo
                    name={"Expert insights"}
                    className={"my-5 mt-10"}
                    href={"/contactus"} />
            </div>
        </section>
    );
}

export default ServiceComp;
