import { Typography } from "@material-tailwind/react";

const Footer = () => {
    return (
        <footer className="mx-auto p-8 bg-transparent">
            <hr className="my-8 border-wenge/50" />
            <Typography color="blue-gray" variant="small" className="text-center font-normal">
                All rights reserved. Copyright &copy; 2024 Manitra RASOLOFOARIMANGA
            </Typography>
        </footer>
    );
}

export default Footer;