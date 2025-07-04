import HeadText from "../components/HeadText";
import BtnOne from "../components/BtnOne";
import EmployeeBenefits from "../containers/EmployeeBenefits";
import SliderCont from "../components/SliderCont";
import CareersTab from "../containers/CareersTab";
import SliderCareer from "../containers/SliderCareer";
function Careers() {
    return (
        <>
            <section className={`h-160 bg-[url('/header-careerspage-scaled.jpg')] bg-cover bg-center flex justify-center flex-col max-w-screen mx-[calc(50%-50vw)] px-5 lg:px-18 relative -top-20 `}
            >
                <HeadText
                    topic="CAREERS"
                    heading="Why blend in when you can shine bright?"
                    className="text-white"
                    border="border border-white"
                />
            </section>
            <SliderCareer />
            <EmployeeBenefits />
            <SliderCont />
            <CareersTab />

            <section className="flex flex-col justify-between items-center gap-y-3 py-10">
                <h1 className="text-4xl font-bold text-[#333333] text-center">Ready for new challenges?</h1>
                <p className="max-w-160 text-[#333333] text-center">Explore exciting job opportunities ranging from software engineers to technical recruiters. </p>
                <p className="mb-3 text-[#333333] text-center"> Get in touch with us for more details and updates.</p>
                <BtnOne
                    name={"View Current Openings"}
                    href={"https://www.linkedin.com/company/nexaforge-tech-pvt-ltd/"}
                />
            </section>
        </>
    );
}
export default Careers;