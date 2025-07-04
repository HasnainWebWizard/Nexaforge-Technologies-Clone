import Benefits from "../components/Benefits";
function EmployeeBenefits() {
    return (
        <>
            <h1 className="text-4xl font-bold text-[#333333] text-center">Employee Benefits</h1>
            <p className="text-gray-700 text-center py-10">We prioritize the personal well-being of our employees and strive to foster a healthy work-life balance.</p>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mb-20 overflow-hidden">
                <Benefits
                aos={"zoom-in"}
                    src="ico-provident-fund.png"
                    title="PROVIDENT FUND"
                    para="All of our permanent and full-time associates are eligible for the provident fund."
                />

                <Benefits
                aos={"zoom-out"}
                    src="ico-paid-leaves.png"
                    title="PAID LEAVES"
                    para="Employees are entitled to a specific number of casual, sick, and annual leave days."
                />

                <Benefits
                aos={"zoom-in"}
                    src="ico-life-insurance.png"
                    title="HEALTH & LIFE INSURANCE"
                    para="All full-time associates, as well as their dependent spouses and children, are covered."
                />

                <Benefits
                aos={"zoom-out"}
                    src="ico-trainings.png"
                    title="TRAININGS"
                    para="We cover 75% of local training costs aligned with your professional interests."
                />

                <Benefits
                aos={"zoom-in"}
                    src="ico-talent-bonus.png"
                    title="TALENT REFERRAL BONUS"
                    para="Associates receive a bonus upon the confirmation of a recommended candidate."
                />

                <Benefits
                aos={"zoom-out"}
                    src="ico-certifications.png"
                    title="CERTIFICATIONS"
                    para="We reimburse 100% of exam fees for certifications beneficial to you and the company upon successful clearance."
                />

                <Benefits
                aos={"zoom-in"}
                    src="ico-car.png"
                    title="CAR ALLOWANCE"
                    para="Associates receive a monthly car allowance in addition to their salaries."
                />

                <Benefits
                aos={"zoom-out"}
                    src="ico-salary.png"
                    title="COMPETITIVE SALARY"
                    para="We offer competitive salaries along with the opportunity to earn an annual bonus."
                />

                <Benefits
                aos={"zoom-in"}
                    src="ico-maternity.png"
                    className="lg:col-start-2"
                    title="MATERNITY & PATERNITY LEAVE"
                    para="New or soon-to-be parents are provided with a certain number of months off."
                />

                <Benefits
                aos={"zoom-out"}
                    src="ico-steering-wheel.png"
                    className=""
                    title="TRANSPORTATION FACILITIES"
                    para="All our associates have access to office vans for their commute."
                />
            </section>
        </>
    );
}
export default EmployeeBenefits;