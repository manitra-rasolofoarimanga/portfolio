import { MonthYear } from "./custom-date";

export interface CareerPathCardProps {
    category: "education" | "pro"
    label: string;
    addresse: string;
    description?: string;
    startDate: MonthYear;
    endDate: MonthYear | null;
    animation?: string;
}