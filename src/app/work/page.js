import HeadText from "../components/HeadText";
import ServedWork from "../containers/ServedWork";

function Work() {
    return (
        <>
            <HeadText
                topic={"Industries"}
                heading={"Industries We Serve"}
                description={"NexaForgeTech provides global enterprises with dedicated software development outsourcing teams to help them be successful, competitive, and innovative. "}

            />
            <div className=" bg-[#F8F8F8] mb-10"
                style={{
                    boxShadow: "0 0 0 100vmax #F8F8F8",
                    clipPath: "inset(0 -100vmax)",
                }}
            >
                <div className="flex items-center">
                    <h1 className="bg-[#4789FC] text-white text-sm px-5 py-2 rounded font-semibold text-center">We Served</h1>
                </div>
            </div>

            <ServedWork />
        </>
    )
}
export default Work;