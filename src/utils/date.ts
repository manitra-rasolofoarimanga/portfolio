import { MonthYear } from "../types/custom-date";

export function formatMonthYearToString(my: MonthYear | null) {
    if (!my) return "";
    const monthNames = [ "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    return (my.month ? monthNames[my.month - 1] : "") + " " + my.year; 
};

export function formatMonthYearIntervalToString (start: MonthYear, end: MonthYear | null) {
    const startString = formatMonthYearToString(start);
    const endString = formatMonthYearToString(end);
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const nowFormated = formatMonthYearToString({month, year});
    if (endString === nowFormated) return "Since " + startString;
    if (startString === endString) return startString;
    return endString !== "" ? startString + " - " + endString : "Since " + startString;
}