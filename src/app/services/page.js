"use client"
import HeadText from "../components/HeadText";
import ServiceComp from "../components/ServiceComp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useInsertionEffect } from "react";
function Services() {

    useEffect(() => {
        Aos.init({});
    })

    return (
        <>
            <HeadText
                topic={"Services"}
                heading={"Our Commitment Knows No Bounds"}
                description={"No matter your companys size, were here to champion innovation and bring your boldest ideas to life, leaving mediocrity far behind. "}


            />

            <ServiceComp
                img_aos1="fade-left"
                img_aos2="fade-right"
                heading={"Empowering Ideas with Research & Insights"}
                para={"From concept to reality, we bridge the gap with customer-centric insights. Through thorough field interviews and comprehensive analysis, we craft user experiences that drive conversions by minimizing friction."}
                img={"service-img1.jpg"}

                heading2={"Enhanced User Experience Design"}
                para2={"Is it time to revamp your website? Looking to enhance your understanding of customer interactions? Utilizing design thinking and agile sprints, we expedite the process of ideating, iterating, and prototyping designs to deliver experiences that not only drive conversions but also captivate and inspire. "}
                img2={"side1.jpg"}
            />

            <ServiceComp
                img_aos1="fade-left"
                img_aos2="fade-right"
                heading={"Enterprise Software Development"}
                para={"Optimize your business operations with our enterprise software solutions, designed to deliver high performance, faster response times, improved coordination, cost effectiveness, enhanced scalability, and superior customer service. "}
                img={"po-mens.jpg"}

                heading2={"Custom Software Solutions"}
                para2={"Whether youre seeking B2B, B2C, or SaaS software development, find comprehensive solutions all in one place. Leveraging years of expertise, we deliver unparalleled custom software development services to clients worldwide. "}
                img2={"careers3.jpg"}
            />

            <ServiceComp
                img_aos1="fade-left"
                img_aos2="fade-right"
                heading={"Software Product Development"}
                para={"Crafting Future-Ready Software Products How do we achieve it? We offer scalable solutions that deploy rapidly and are effortlessly managed. Leveraging our technological expertise, we fuse business acumen to ensure your digital products are user-centric. "}
                img={"careers.jpg"}

                heading2={"Application Development"}
                para2={"As a comprehensive software development firm, we catalyze your triumph. We combine insightful guidance, revolutionary tactics, impeccable UI/UX design services, and state-of-the-art technology to craft experiences centered around people."}
                img2={"Globoforce.png"}
            />

            <ServiceComp
                img_aos1="fade-left"
                img_aos2="fade-right"
                heading={"Software Project Management"}
                para={"We value your vision, translating it seamlessly into reality through daily collaborative meetings, adept sprint leadership, meticulous resource management, user story composition, backlog refinement, feature prioritization, roadmap development, and beyond. "}
                img={"cc-careers.jpg"}

                heading2={"UI/UX Design Services"}
                para2={"Our UI/UX design process begins with a thorough analysis of your target audience to comprehend their behaviors, requirements, and obstacles. This approach allows us to create visually captivating, user-centric interfaces that optimize your softwares usability. "}
                img2={"uiux.jpg"}

            />

            <ServiceComp
                img_aos1="fade-left"
                img_aos2="fade-right"
                heading={"Software Quality Assurance"}
                para={"Whether you require mobile, desktop, or cutting-edge applications, our offshore team of software testing experts employs a targeted strategy to maximize the effectiveness of our testing efforts and enhance time-to-market. "}
                img={"careers2.jpg"}

                heading2={"DevOps & Cloud"}
                para2={"Struggling to meet update deadlines? Continuous integration and delivery seem out of reach? Sleepless nights due to uncertainties? Fear not, as we specialize in crafting CI/CD pipelines, managing cloud environments, and establishing scalable, secure production environments—so you can concentrate on what truly matters."}
                img2={"DevOps.jpg"}
            />
        </>
    );
}
export default Services;