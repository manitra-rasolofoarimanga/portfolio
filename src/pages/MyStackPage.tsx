import { Button, Typography } from "@material-tailwind/react"
import javaSVG from "../assets/images/java.svg";
import javascriptSVG from "../assets/images/javascript.svg";
import pythonSVG from "../assets/images/python.svg";
import phpSVG from "../assets/images/php.svg";
import StackCard from "../components/StackCard";
import { StackCardProps } from "../types/stack";

const stacks: StackCardProps[] = [
    {
        img: javaSVG,
        details: ["Spring Boot", "Spring MVC", "Spring Data", "Spring Security", "Hibernate", "Java EE"]
    },
    {
        img: javascriptSVG,
        details: ["Node.js", "Express.js", "React", "Angular", "Bootstrap", "Tailwind CSS", "Sass"]
    },
    {
        img: pythonSVG,
        details: ["Flask", "FastAPI", "NumPy", "pandas", "SciPy", "scikit-learn"]
    },
    {
        img: phpSVG,
        details: ["CodeIgniter", "Symfony"]
    },
]

const MyStackPage = () => {
    return (
        <div className="min-h-[88vh] mx-auto grid place-items-center text-center lg:px-8">
            <div className="px-8 pt-8">
                <Typography
                    data-aos="zoom-in-down"
                    variant="h1"
                    color="blue-gray"
                    className="text-wenge font-bold !text-3xl !leading-snug md:!text-4xl"
                >
                    My Stack
                </Typography>
                <Typography data-aos="zoom-in" className="mt-8 font-normal text-gray-500 mx-auto">
                    I'm mainly proficient in Java, JavaScript, Python and PHP, as well as the frameworks associated with each of these languages. I also have solid expertise in databases, particularly SQL. For more details on my skills and experience, please see my CV.
                </Typography>
                <div data-aos="zoom-in" className="flex justify-center w-full lg:w-auto mt-4">
                    <a href="/cv-manitra_rasolofoarimanga.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="text" className="flex items-center bg-gray-900/10 hover:bg-gray-900/20 gap-2 text-center lg:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            View My CV
                        </Button>
                    </a>
                </div>
            </div>
            <div className="w-full mt-6 lg:px-16 lg:grid gap-4 grid-cols-2">
                {stacks.map((stack, index) => (
                    <StackCard key={index} {...stack} />
                ))}
            </div>
        </div>
    )
}

export default MyStackPage