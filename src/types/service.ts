import { SVGProps } from "react";

export interface ServiceCardProps {
    label: string;
    description: string;
    svgElement: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    animation?: string;
}