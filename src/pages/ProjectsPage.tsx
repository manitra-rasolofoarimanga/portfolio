import { Typography } from "@material-tailwind/react"
import ProjectCard from '../components/ProjectCard';
import { ProjectCardProps } from "../types/project";
import amitDashboard from "../assets/images/projects/amit-dashboard.webp";
import searchlinksDashboard from "../assets/images/projects/searchlinks-dashboard.webp";
import symfony from "../assets/images/stacks/symfony.svg";
import angular from "../assets/images/stacks/angular.svg";
import postgresql from "../assets/images/stacks/postgresql.svg";
import bootstrap from "../assets/images/stacks/bootstrap.svg";
import materialui from "../assets/images/stacks/materialui.svg";
import mysql from "../assets/images/stacks/mysql.svg";
import php from "../assets/images/stacks/php.svg";
import jquery from "../assets/images/stacks/jquery.svg";
import { Helmet } from "react-helmet-async";

const projectCards: ProjectCardProps[] = [
    {
        label: "AMIT's Dashboard",
        description: "As mentioned on the About page, I played a key role in developing this dashboard. I implemented the queue management module, dental consultation features, and part of the Human Resources system. My work spanned both frontend and backend, from designing the database schema to integrating the user interface.",
        img: amitDashboard,
        technologies: [
            {
                label: "Symfony",
                path: symfony
            },
            {
                label: "Angular",
                path: angular
            },
            {
                label: "PostgreSQL",
                path: postgresql
            },
            {
                label: "Bootstrap",
                path: bootstrap
            },
            {
                label: "Material UI",
                path: materialui
            },
        ]
    },
    {
        label: "SearchLinks",
        description: "This tool was developed in collaboration with Interactivelab Mauritius. It identifies broken links within the top 100 Google results for a given keyword to enhance the SEO of our clients' websites. I contributed to optimizing this tool by improving the page crawling scripts, optimizing the database, and enhancing the user interface.",
        img: searchlinksDashboard,
        technologies: [
            {
                label: "PHP",
                path: php
            },
            {
                label: "MySQL",
                path: mysql
            },
            {
                label: "Bootstrap",
                path: bootstrap
            },
            {
                label: "Jquery",
                path: jquery
            },
        ]
    }
];

const ProjectsPage = () => {
    return (
        <>
            <Helmet>
                <title>Projects by Manitra RASOLOFOARIMANGA | Fullstack Developer</title>
                <meta name="description" content="Explore the projects of Manitra RASOLOFOARIMANGA, showcasing his Fullstack development skills" />
                <meta name="keywords" content="Projects, Manitra RASOLOFOARIMANGA, Fullstack Developer, Development, Web Applications, Project Portfolio" />
            </Helmet>
            
            <div className="min-h-[88vh] mx-auto grid place-items-center text-center lg:px-8">
                <div className="px-8 pt-8">
                    <Typography
                        data-aos="zoom-in-down"
                        variant="h1"
                        color="blue-gray"
                        className="text-wenge font-bold !text-3xl !leading-snug md:!text-4xl"
                    >
                        Projects
                    </Typography>
                    <Typography data-aos="zoom-in" className="mt-8 font-normal text-gray-500 mx-auto">
                        Here is a selection of my work, showcasing two standout projects that highlight my skills and experience across various domains.
                    </Typography>
                </div>
                <div className="lg:grid gap-2 grid-cols-2">
                    {projectCards.map((project, index) =>(
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage