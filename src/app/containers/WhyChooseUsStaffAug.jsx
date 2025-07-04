
function WhyChooseUsStaffAug() {
    return (
        <>
            <section className="py-10 mb-10">
                <section>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-10">
                        Why Choose Us
                    </h1>
                    <p className="text-2xl text-[#333333] text-center mb-10">
                        We take pride in delivering customized solutions that match your specific needs and adhere to industry standards, allowing you to concentrate on your core business goals.
                    </p>
                </section>
                {/* <hr
                    className="relative top-10 text-gray-400"
                /> */}
                <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    <div className=" flex flex-col justify-center items-center text-center">
                        <img
                            src="/ezgif.com-webp-to-png-converter.png"
                            className="bg-gray-600 hover:bg-blue-500 mb-5 relative hover:bottom-3 transition-all 
                            duration-500 p-4 rounded-2xl w-20"
                        />
                        <p className="text-gray-600 font-bold">Agile Development Framework</p>
                    </div>

                    <div className=" flex flex-col justify-start items-center text-center">
                        <img
                            src="/zero-fee.webp"
                            className="bg-gray-600 hover:bg-blue-500 mb-5 relative hover:bottom-3 transition-all 
                            duration-500 p-4 rounded-2xl w-20"
                        />
                        <p className="text-gray-600 font-bold">Free Consultation</p>
                    </div>

                    <div className=" flex flex-col justify-start items-center text-center">
                        <img
                            src="/client-portal-affiliation.webp"
                            className="bg-gray-600 hover:bg-blue-500 mb-5 relative hover:bottom-3 transition-all 
                            duration-500 p-4 rounded-2xl w-20"
                        />
                        <p className="text-gray-600 font-bold">Client Portal Affiliation</p>
                    </div>

                    <div className=" flex flex-col justify-start items-center text-center">
                        <img
                            src="/standyup-call.webp"
                            className="bg-gray-600 hover:bg-blue-500 mb-5 relative hover:bottom-3 transition-all 
                            duration-500 p-4 rounded-2xl w-20"
                        />
                        <p className="text-gray-600 font-bold">Daily Standup & Progress Call</p>
                    </div>

                    <div className=" flex flex-col justify-start items-center text-center">
                        <img
                            src="/fixed-price.webp"
                            className="bg-gray-600 hover:bg-blue-500 mb-5 relative hover:bottom-3 transition-all 
                            duration-500 p-4 rounded-2xl w-20"
                        />
                        <p className="text-gray-600 font-bold">Fixed Price Flexible Monthly Plans</p>
                    </div>

                    <div className=" flex flex-col justify-start items-center text-center">
                        <img
                            src="/time-zone.webp"
                            className="bg-gray-600 hover:bg-blue-500 mb-5 relative hover:bottom-3 transition-all 
                            duration-500 p-4 rounded-2xl w-20"
                        />
                        <p className="text-gray-600 font-bold">Time Zone Compatibility</p>
                    </div>
                </section>
            </section>

        </>
    );
}
export default WhyChooseUsStaffAug;