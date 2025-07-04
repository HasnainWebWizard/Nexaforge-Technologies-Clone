function StaffCards({ openPopup }) {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                {/* Card 1 */}
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="border-b border-gray-300 pb-6 mb-6 text-center">
                            <h2 className="font-bold text-2xl font-mono text-gray-800">BASIC PLAN</h2>
                            <p className="text-gray-500 mt-1">3 Resources</p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 Dedicated Full-Stack Engineer</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 QA Engineer – 20hrs</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 CSPO – 20hrs</span>
                            </li>
                        </ul>
                    </div>

                    <button
                        onClick={openPopup}
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-xl transition-all duration-300"
                    >
                        Let's Get Started
                    </button>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="border-b border-gray-300 pb-6 mb-6 text-center">
                            <h2 className="font-bold text-2xl font-mono text-gray-800">BUSINESS PRO</h2>
                            <p className="text-gray-500 mt-1">6 Resources</p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">2 Dedicated Full-Stack Engineer</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 QA Engineer – 20hrs</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 UI/UX Engineer – 20hrs</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 CSPO – 20hrs</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                </span>
                                <span className="text-sm">1 IT Support – 20hrs</span>
                            </li>
                        </ul>
                    </div>

                    <button
                        onClick={openPopup}
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-xl transition-all duration-300"
                    >
                        Let's Get Started
                    </button>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="border-b border-gray-300 pb-6 mb-6 text-center">
                            <h2 className="font-bold text-2xl font-mono text-gray-800">ENTERPRISE PLUS</h2>
                            <p className="text-gray-500 mt-1">Most Popular</p>
                        </div>

                        <div className="text-center text-sm text-gray-600 py-5">
                            For your customized needs let’s discuss how we can help you to build a top talent team, and collaborate on creating cutting-edge digital solutions.
                        </div>
                    </div>

                    <button
                        onClick={openPopup}
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-xl transition-all duration-300"
                    >
                        Let's Get Started
                    </button>
                </div>

            </section>
        </>
    );
}

export default StaffCards;




// function StaffCards({ openPopup }) {
//     return (
//         <>
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:minmax(400px,_auto)]">
//                 {/* /* Card 1 */}
//                 <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border border-gray-200 flex flex-col justify-between">
//                     <div >
//                         <div className="border-b border-gray-300 pb-5 mb-5">
//                             <h1 className="font-bold text-2xl font-mono">BASIC PLAN</h1>
//                             <p className="text-gray-500 mt-1">3 Resources</p>
//                         </div>

//                         <ol className="space-y-3">
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 Dedicated Full-Stack Engineer</span>
//                             </li>
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 QA Engineer – 20hrs</span>
//                             </li>
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 CSPO – 20hrs</span>
//                             </li>
//                         </ol>
//                     </div>

//                     <a
//                         onClick={openPopup}
//                         className="block bg-blue-500 text-white font-medium text-lg text-center mt-8 py-3 rounded-xl transition-colors duration-300 shadow-lg shadow-cyan-100 cursor-pointer" >
//                         Let's Get Started
//                     </a>
//                 </div>

//                 {/* /* Card 2 */}
//                 <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border border-gray-200 flex flex-col justify-between">
//                     <div >
//                         <div className="border-b border-gray-300 pb-5 mb-5">
//                             <h1 className="font-bold text-2xl font-mono">BUSINESS PRO</h1>
//                             <p className="text-gray-500 mt-1">6 Resources</p>
//                         </div>

//                         <ol className="space-y-3">
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>2 Dedicated Full-Stack Engineer</span>
//                             </li>
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 QA Engineer – 20hrs</span>
//                             </li>
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 UI/UX Engineer – 20hrs</span>
//                             </li>
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 CSPO – 20hrs</span>
//                             </li>
//                             <li className="flex items-start gap-2 text-gray-600">
//                                 <span className="material-symbols-outlined bg-blue-400 text-white rounded-full mr-2">check</span>
//                                 <span>1 IT Support – 20hrs</span>
//                             </li>
//                         </ol>
//                     </div>

//                     <a onClick={openPopup}
//                         className="block bg-blue-500 text-white font-medium text-lg text-center mt-8 py-3 rounded-xl transition-colors duration-300 shadow-lg shadow-cyan-100 cursor-pointer" >
//                         Let's Get Started
//                     </a>
//                 </div>


//                 {/* /* Card 3 */}
//                 <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border border-gray-200 flex flex-col justify-between">
//                     <div >
//                         <div className="border-b border-gray-300 pb-5 mb-5">
//                             <h1 className="font-bold text-2xl font-mono">ENTERPRISE PLUS</h1>
//                             <p className="text-gray-500 mt-1">Most Popular </p>
//                         </div>

//                         <li className="flex justify-center items-center py-5 gap-2 text-gray-600 text-center">
//                             <span>For your customized needs let’s discuss how we can help you to build a top talent team, and collaborate on creating cutting-edge digital solutions. </span>
//                         </li>
//                     </div>

//                     <a  onClick={openPopup}
//                         className="block bg-blue-500 text-white font-medium text-lg text-center mt-8 py-3 rounded-xl transition-colors duration-300 shadow-lg shadow-cyan-100 cursor-pointer" >
//                         Let's Get Started
//                     </a>
//                 </div>

//             </section >
//         </>
//     );
// }
// export default StaffCards;