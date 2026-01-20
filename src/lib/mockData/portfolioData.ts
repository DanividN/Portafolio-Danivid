export type Portfolio = {
    id: number;
    category: string[];
    size?: "big" | "mid";
    img: string;
    title: string;
    user?: string;
    pwd?: string;
    link: string;
};

export const portfolioData: Portfolio[] = [
    {
        id: 1,
        category: ["sistemas"],
        size: "big",
        img: "/images/projects/inventarios/inventarios-1.png",
        title: "Sistemas de Inventarios",
        user: "admin@gmail.com",
        pwd: "123456",
        link: "https://inventarios-full-production.up.railway.app/"
    },
    {
        id: 2,
        category: ["paginas"],
        size: "mid",
        img: "/images/projects/moms-1.png",
        title: "Mom's and Tots",
        link: "https://momsandtots.com.mx/"
    },
    {
        id: 3,
        category: ["paginas"],
        img: "/images/projects/flising.png",
        title: "Flising",
        link: "https://flising.com/"
    },
    {
        id: 4,
        category: ["sistemas"],
        img: "/images/projects/sportcenter.png",
        title: "Sport Center",
        user: "admin@gmail.com",
        pwd: "123456",
        link: "https://eco-sportclub-gobti.netlify.app/login"
    },
    {
        id: 5,
        category: ["sistemas"],
        img: "/images/projects/adquisiciones.png",
        title: "Sistema de Adquisiciones",
        user: "admin@gmail.com",
        pwd: "123456",
        link: "http://31.220.107.90/auth/login"
    },
];