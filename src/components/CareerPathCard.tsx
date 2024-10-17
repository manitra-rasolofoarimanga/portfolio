import { Typography } from "@material-tailwind/react";
import { CareerPathCardProps } from "../types/careerPath";
import { formatMonthYearIntervalToString } from "../utils/date";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const CareerPathCard: React.FC<CareerPathCardProps> = ({ category, label, addresse, description, startDate, endDate, animation }) => {
    return (
        <div data-aos={animation} data-aos-duration="1425" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-ash-gray group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {category === "pro" ? (
                    <BriefcaseIcon className="h-5 w-5" />
                ) : (
                    <AcademicCapIcon className="h-5 w-5" />
                )}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-xl shadow-md bg-white/70">
                <div className="flex items-center justify-center lg:justify-between space-x-2 mb-1">
                    <Typography variant="h5" className="font-semibold text-center lg:text-left">{label}</Typography>
                </div>
                <div className="w-full text-xs font-medium text-brown-sugar text-center lg:text-left">
                    {formatMonthYearIntervalToString(startDate, endDate)}
                    &nbsp; 
                    <br className="lg:hidden"/>
                    <span className="text-night">
                        ({addresse})
                    </span>
                </div> 
                <Typography color="gray" className="mt-2 font-normal text-center lg:text-left">
                    {description || ""}
                </Typography>
            </div>
        </div>
    );
}

export default CareerPathCard;