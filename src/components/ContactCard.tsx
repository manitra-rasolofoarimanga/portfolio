import { Card, CardBody, } from "@material-tailwind/react";
import { ContactCardProps } from "../types/contact";


const ContactCard: React.FC<ContactCardProps> = ({ label, link, svgElement, animation }) => {
    return (
        <Card data-aos={window.innerWidth >= 960 ? animation : "zoom-in"} className="mt-6 m-2 py-6 w-auto bg-white/70">
            <a href={link}>
                <CardBody>
                    <div className="flex justify-center">
                        {svgElement({ width: 50, height: 50 })}
                    </div>
                    <p color="blue-gray" className="my-2 font-bold">
                        {label}
                    </p>
                </CardBody>
            </a> 
        </Card>
    );
}

export default ContactCard