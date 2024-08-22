import { Avatar, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from "@material-tailwind/react";
import { ProjectCardProps } from "../types/project";

const ProjectCard: React.FC<ProjectCardProps> = ({ label, description, img, technologies }) => {
    return (
        <Card data-aos="fade-up" data-aos-duration="1425" className="max-w-[24rem] overflow-hidden mx-4 lg:mx-1 my-8 bg-white/70 shadow-md">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img src={img} alt={label} />
            </CardHeader>
            <CardBody className="border-t-2 p-0 text-left bg-white/70">
                <Typography variant="h5" color="blue-gray" className="py-4 text-center">
                    {label}
                </Typography>
                <Typography color="gray" className="mt-4 px-4 font-normal">
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between bg-white/70">
                <div className="flex items-center -space-x-3">
                    {technologies.map((technologie, index) => (
                        <Tooltip key={index} content={technologie.label}>
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt={technologie.label}
                                src={technologie.path}
                                className="border-2 border-white bg-white hover:z-10"
                                />
                        </Tooltip>
                    ))}
                </div>
            </CardFooter>
            </Card>
    );
}

export default ProjectCard;