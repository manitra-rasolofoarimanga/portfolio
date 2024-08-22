export interface ProjectCardProps {
    label: string;
    description: string;
    img: string;
    technologies: {
        label: string,
        path: string
    }[];
}