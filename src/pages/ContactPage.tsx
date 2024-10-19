import type { SVGProps } from "react";
import { Typography } from "@material-tailwind/react"
import { ContactCardProps } from "../types/contact";
import ContactCard from "../components/ContactCard";
import { Helmet } from "react-helmet-async";

const contacts: ContactCardProps[] = [
    {
        label: 'manitraainaharison@gmail.com', // Gmail
        link: "mailto:manitraainaharison@gmail.com",
        svgElement: (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" width="1em" height="1em" {...props}><g fill="none" fillRule="evenodd"><g fillRule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" /><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" /><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" /></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" /><path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" /></g></svg>,
        animation: "fade-right",
    },
    {
        label: '+261 34 31 846 71', // Phone
        link: "tel:+261343184671",
        svgElement: (props: SVGProps<SVGSVGElement>) => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-flip" className="svg-inline--fa fa-phone-flip " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}><path fill="#34a853" d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"></path></svg>,
        animation: "fade-left",
    },
    {
        label: 'Manitra Rasolofoarimanga', // Linkedin
        link: "https://www.linkedin.com/in/manitra-rasolofoarimanga/",
        svgElement: (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" {...props}><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>,
        animation: "fade-right",
    },
    {
        label: 'Manitra Ainaharison', // Facebook
        link: "https://www.facebook.com/maxel.blaze",
        svgElement: (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="1em" width="1em" {...props}><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stopColor="#0062E0" /><stop offset="100%" stopColor="#19AFFF" /></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" /><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" /></svg>,
        animation: "fade-left",
    },
];


const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Manitra RASOLOFOARIMANGA | Fullstack Developer</title>
                <meta name="description" content="Contact Manitra RASOLOFOARIMANGA, a passionate Fullstack Developer from Madagascar, to learn more about his skills and projects or for collaboration opportunities." />
                <meta name="keywords" content="Contact, Manitra RASOLOFOARIMANGA, Fullstack Developer, Machine Learning, Collaborations, Madagascar, France" />
            </Helmet>

            <div className="min-h-[88vh] mx-auto grid place-items-center text-center lg:px-8">
                <div className="px-2 pt-8">
                    <Typography
                        data-aos="zoom-in-down"
                        variant="h1"
                        color="blue-gray"
                        className="text-wenge font-bold !text-3xl !leading-snug md:!text-4xl"
                    >
                        Contact Me
                    </Typography>
                    <Typography data-aos="zoom-in" className="mt-8 mb-14 font-normal text-gray-500 mx-auto">
                        Don't hesitate to reach out to me directly if you have any questions or need assistance. As a Fullstack Developer, I'm here to tackle any coding challenges or tech issues you might have.
                    </Typography>
                    <div className="grid-cols-none lg:grid lg:grid-cols-2 lg:px-8">
                        { contacts.map((contact, index) => {
                            return <ContactCard key={index} {...contact} />
                        } )}
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ContactPage