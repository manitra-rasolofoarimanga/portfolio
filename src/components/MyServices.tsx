import { Typography } from "@material-tailwind/react";
import ServiceCard from "./ServiceCard";
import { ServiceCardProps } from "../types/service";

const services: ServiceCardProps[] = [
    {
        label: "Web Application Development",
        description: "I develop complete web applications, managing both frontend and backend for a seamless user experience.",
    },
    {
        label: "API Development and Integration",
        description: "I create and integrate APIs (REST) to ensure efficient and scalable communication within your systems.",
    },
    {
        label: "Responsive Web Design",
        description: "I guarantee that my crafted designs will ensure your application functions seamlessly and efficiently across all devices.",
    },
    {
        label: "Database Design and Management",
        description: "I design and manage optimized databases for performance and scalability (SQL and NoSQL databases, but more experience with SQL).",
    },
    {
        label: "Maintenance and Support",
        description: "Continuous maintenance, bug fixing, performance improvements, and new feature additions to ensure the longevity and stability of your applications.",
    },
    {
        label: "Performance Optimization",
        description: "I enhance your application's speed, security, and scalability through performance tuning and best practices.",
    },
    {
        label: "SEO and Digital Marketing",
        description: "I optimize your application for search engines and provide strategies for digital marketing to increase visibility and drive traffic.",
    },
    {
        label: "Technical Consulting and Advisory",
        description: "Expert advice on project architecture, technology choices, and development strategies to help you succeed.",
    },
]

const MyServices = () => {
    return (
        <div className="py-4 lg:py-16">
            <Typography
                data-aos="zoom-in-down"
                variant="h1"
                color="blue-gray"
                className="text-wenge text-center font-bold !text-3xl !leading-snug md:!text-4xl"
            >
                What I Can Offer You
            </Typography>
            <Typography data-aos="zoom-in" color="gray" className="mt-4 font-normal text-center">
                Discover how my expertise can bring your ideas to life with tailored solutions designed to meet your unique needs.
            </Typography>


            <div className="grid md:grid-cols-2 mt-10">
                {services.map((service, index) => {
                    return (
                        <ServiceCard key={index} {...service} animation={ (index % 2 == 0) ? 'fade-right' : 'fade-left' } />
                    )
                })}
            </div>
        </div>
    );
}

export default MyServices;