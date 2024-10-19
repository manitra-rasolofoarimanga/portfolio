import { Typography } from "@material-tailwind/react"
import { CareerPathCardProps } from '../types/careerPath';
import CareerPathCard from '../components/CareerPathCard';
import { Helmet } from "react-helmet-async";

const careerPathCards: CareerPathCardProps[] = [
    {
        category: "education",
        label: "Scientific Baccalaureate",
        addresse: "Lycée Les Capucines Ankerana, Antananarivo, Madagascar",
        startDate: { month: null, year: 2019 },
        endDate: { month: null, year: 2019 },
    },
    {
        category: "education",
        label: "Bachelor's Degree",
        addresse: "IT University Andoharanofotsy, Antananarivo, Madagascar",
        description: "In my field of study, there are three options: Development, Web and Design, and Administration and Network. I chose the Development option, where I achieved a distinction of 'Bien' (Good).",
        startDate: { month: 11, year: 2019 },
        endDate: { month: 4, year: 2023 },
    },
    {
        category: "pro",
        label: "Developer Trainee",
        addresse: "Ingenosya Madagascar - Lot III U 134 Anosizato EST, Madagascar",
        description: "Development of the queuing, dental consultation module and part of the Human Resources information system for AMIT (Association Médicale Interentreprises de Tananarive)",
        startDate: { month: 7, year: 2022 },
        endDate: { month: 1, year: 2023 },
    },
    {
        category: "pro",
        label: "Fullstack Developer",
        addresse: "Natixgroup Ankadindramamy, Antananarivo Madagascar",
        description: "Development of the Digidoc site to deliver administrative documents independently, and collaboration with Interactivelab Mauritius: SEO, design and development of new sites and tools, and restoration of the company's archived historical sites.",
        startDate: { month: 3, year: 2023 },
        endDate: null,
    },
    {
        category: "education",
        label: "Master 1",
        addresse: "IT University Andoharanofotsy, Antananarivo, Madagascar",
        description: "During this time, I developed skills in Machine Learning, Web and Mobile Development, Software Development, Cybersecurity and Project Management.",
        startDate: { month: 12, year: 2023 },
        endDate: { month: 8, year: 2024 },
    },
    {
        category: "education",
        label: "Master 2 - Mobiquité, Big Data et Intégration de Systèmes (MBDS)",
        addresse: "Université Côte d’Azur, Nice France",
        description: "I've just started my Master 2 degree, where I'll be developing skills in Big Data and Data Analysis, focusing on Cloud and Information Systems Administration, while strengthening my skills in Backend and Cybersecurity. I'll also be exploring Frontend and the Internet of Things (IoT). Finally, I'll be training in Project Management, as well as Entrepreneurship and Communication, to master the technical and strategic aspects of solution development.",
        startDate: { month: 9, year: 2024 },
        endDate: null,
    },
];

const AboutPage = () => {

    const reversedCareerPath = [...careerPathCards].reverse();

    return (
        <>
            <Helmet>
                <title>About Manitra RASOLOFOARIMANGA | Fullstack Developer</title>
                <meta name="description" content="Learn more about Manitra RASOLOFOARIMANGA, a Fullstack developer specializing in cutting-edge technologies and Machine Learning." />
                <meta name="keywords" content="About, Manitra RASOLOFOARIMANGA, Fullstack Developer, Machine Learning, Developer, Madagascar" />
            </Helmet>

            <div className="min-h-[88vh] mx-auto grid place-items-center text-center lg:px-8">
                <div className="px-8 pt-8">
                    <Typography
                        data-aos="zoom-in-down"
                        variant="h1"
                        color="blue-gray"
                        className="text-wenge font-bold !text-3xl !leading-snug md:!text-4xl"
                    >
                        About
                    </Typography>
                    <Typography data-aos="zoom-in" className="mt-8 font-normal text-gray-500 mx-auto">
                        Here is a chronological list of my professional experiences and education, from the most recent to the oldest.
                    </Typography>
                </div>

                <section className="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-16">
                        <div className="flex flex-col justify-center divide-y divide-slate-200">
                            <div className="w-full max-w-3xl mx-auto">
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    {reversedCareerPath.map((careerPathCards, index) => (
                                        <CareerPathCard key={index} {...careerPathCards} animation={index % 2 == 0 ? "fade-right" : "fade-left" } />
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutPage