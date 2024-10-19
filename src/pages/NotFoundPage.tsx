import { Typography, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import notFoundImg from "../assets/images/not-found.webp";

const NotFoundPage = () => {
    return (
        <div className="h-[90vh] mx-auto grid place-items-center text-center px-8">
            <div className="p-8">
                <img src={notFoundImg} alt="Disappointed John Travolta" width={"350px"} height={"340px"} />
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mt-10 !text-3xl !leading-snug md:!text-4xl"
                >
                    Page Not Found.
                </Typography>
                <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                    Sorry, we can't find that page. <br /> Let's get you back on track.
                </Typography>
                <NavLink to="/">
                    <Button color="gray" className="w-full px-4 md:w-[8rem]">
                        back home
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}

export default NotFoundPage