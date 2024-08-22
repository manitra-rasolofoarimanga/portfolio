import { SVGProps } from "react";

export interface ContactCardProps {
    label: string;
    link: string;
    svgElement: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    animation: string;
}