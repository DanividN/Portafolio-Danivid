export type Portfolio = {
    id: number;
    category: string[];
    size?: "big" | "mid";
    img: string;
    title: string;
};

export const portfolioData: Portfolio[] = [
    {
        id: 1,
        category: ["website"],
        size: "big",
        img: "/images/projects/project-1.png",
        title: "Web Design",
    },
    {
        id: 2,
        category: ["ui_ux"],
        size: "mid",
        img: "/images/projects/project-2.png",
        title: "UI/UX",
    },
    {
        id: 3,
        category: ["apps", "graphics"],
        img: "/images/projects/project-3.png",
        title: "Apps Design",
    },
    {
        id: 4,
        category: ["graphics", "ui_ux"],
        img: "/images/projects/project-4.png",
        title: "Graphics Design",
    },
    {
        id: 5,
        category: ["website", "apps"],
        img: "/images/projects/project-5.png",
        title: "Web Design",
    },
];