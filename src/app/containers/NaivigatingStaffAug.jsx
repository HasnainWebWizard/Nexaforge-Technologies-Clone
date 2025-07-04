function NaivigatingStaffAug() {
    return (
        <>
            <div className="flex flex-col justify-between items-center gap-y-3 py-10 mb-20 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#333333] text-center mb-5">
                    Navigating Our Onboarding <br />
                    Process for Your Success
                </h1>
                {/* <img src="Screenshot_6-1024x318.jpg" alt="Staff Augmentation" className="w-full max-w-4xl" /> */}

                <section className="grid grid-cols-5 grid-rows-2 w-full mt-5">
                    <div className="flex flex-col items-center py-3 text-center space-y-3 lg:border border-gray-200">
                        <div className="rounded-full bg-blue-500 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-white text-2xl font-bold">
                            01
                        </div>
                        <h1 className="text-sm md:text-lg md:font-bold text-gray-500">Customized Planning</h1>
                    </div>

                    <div className="flex flex-col items-center py-3 text-center space-y-3 row-span-2 row-start-2 col-start-2 lg:border border-gray-200">
                        <div className="rounded-full bg-blue-500 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-white text-2xl font-bold">
                            02
                        </div>
                        <h1 className="text-sm md:text-lg md:font-bold text-gray-500">Documentation</h1>

                    </div>

                    <div className="flex flex-col items-center py-3 text-center space-y-3 row-start-1 col-start-3 lg:border border-gray-200">
                        <div className="rounded-full bg-blue-500 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-white text-2xl font-bold">
                            03
                        </div>
                        <h1 className="text-sm md:text-lg md:font-bold text-gray-500">Training & Orientation</h1>
                    </div>

                    <div className="flex flex-col items-center py-3 text-center space-y-3 row-start-2 col-start-4 lg:border border-gray-200">
                        <div className="rounded-full bg-blue-500 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-white text-2xl font-bold">
                            04
                        </div>
                        <h1 className="text-sm md:text-lg md:font-bold text-gray-500">Implementation</h1>

                    </div>

                    <div className="flex flex-col items-center py-3 text-center space-y-3 row-start-1 col-start-5 lg:border border-gray-200">
                        <div className="rounded-full bg-blue-500 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center text-white text-2xl font-bold">
                            05
                        </div>
                        <h1 className="text-sm md:text-lg md:font-bold text-gray-500">Monitoring & Support</h1>
                    </div>
                </section>

            </div>

        </>
    );
}
export default NaivigatingStaffAug;
