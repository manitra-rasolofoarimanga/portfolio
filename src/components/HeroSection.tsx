import { Card, CardHeader, CardBody, Typography, Button, } from "@material-tailwind/react";
import portrait from "../assets/images/portrait.png";

const HeroSection = () => {
    return (
        <div className="py-4 lg:py-16 flex justify-center">
            <Card className="w-full max-w-[52rem] flex-col lg:flex-row shadow-none bg-transparent">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="mx-8 lg:m-0 lg:w-2/5 lg:me-8 shrink-0 max-h-[424px] rounded-xl shadow-md bg-transparent hover:skew-y-6"
                    data-aos={window.innerWidth >= 960 ? "fade-right" : "fade-down"}
                >
                    <img
                        src={portrait}
                        alt="card-image"
                        className="h-[424px] w-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                </CardHeader>
                <CardBody 
                    className="flex items-center"
                    data-aos={window.innerWidth >= 960 ? "fade-left" : "zoom-in"}
                >
                    <div>
                        <Typography variant="h6" color="gray" className="mb-4 text-center lg:text-left">
                            Hi, I'm Manitra RASOLOFOARIMANGA
                        </Typography>
                        <Typography color="blue-gray" className="text-coffee mb-2 text-center text-[28px] font-extrabold lg:text-left">
                            Fullstack Developer
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal text-center lg:text-left">
                            from Madagascar. I'll start my final year of Master's studies soon and am deeply passionate about programming.<br /> Find out more about me by clicking on the button below.
                        </Typography>
                        <div className="flex lg:inline-block justify-center lg:justify-normal w-full lg:w-auto">
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
                </CardBody>
            </Card>
        </div>
    );
}

export default HeroSection