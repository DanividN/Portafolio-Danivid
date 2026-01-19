export type Blog = {
    id: number;
    title: string;
    date: {
        day: string;
        month: string;
        year: number
    };
    img: string;
    author: string | null;
    category: string | null;
    description?: string
};


export const blogData: Blog[] = [
    {
        id: 1,
        img: "/images/blogs/blog-1.png",
        author: "Tawam",
        category: "Graphic",
        date: { day: "22", month: "Dec", year: 2025 },
        title: "Portrait of adult male working from home at night",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ..."
    },
    {
        id: 2,
        img: "/images/blogs/blog-2.png",
        author: "Tawam",
        category: "Graphic",
        date: { day: "22", month: "Dec", year: 2025 },
        title: "Portrait of adult male working from home at night",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ..."
    },
    {
        id: 3,
        img: "/images/blogs/blog-1.png",
        author: "Tawam",
        category: "Graphic",
        date: { day: "22", month: "Dec", year: 2025 },
        title: "Portrait of adult male working from home at night",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ..."
    },
    {
        id: 4,
        img: "/images/blogs/blog-1.png",
        author: "Tawam",
        category: "Graphic",
        date: { day: "22", month: "Dec", year: 2025 },
        title: "Portrait of adult male working from home at night",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ..."
    },
    {
        id: 5,
        img: "/images/blogs/blog-2.png",
        author: "Tawam",
        category: "Graphic",
        date: { day: "22", month: "Dec", year: 2025 },
        title: "Portrait of adult male working from home at night",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ..."
    },
    {
        id: 6,
        img: "/images/blogs/blog-1.png",
        author: "Tawam",
        category: "Graphic",
        date: { day: "22", month: "Dec", year: 2025 },
        title: "Portrait of adult male working from home at night",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ..."
    },
];

export const blogsListData: Blog[] = [
    {
        id: 1,
        title: "The Importance of User Centered Design in Startups",
        date: { day: "22", month: "Dec", year: 2025 },
        img: "/images/blogs/blog-thumbnail.png",
        author: null,
        category: null
    },
    {
        id: 2,
        title: "How to Conduct Effective User Research",
        date: { day: "22", month: "Dec", year: 2025 },
        img: "/images/blogs/blog-thumbnail.png",
        author: null,
        category: null
    },
    {
        id: 3,
        title: "The Role of Prototyping in Product Development",
        date: { day: "22", month: "Dec", year: 2025 },
        img: "/images/blogs/blog-thumbnail.png",
        author: null,
        category: null
    },
    {
        id: 4,
        title: "The Power of Visual Storytelling in UI Design",
        date: { day: "22", month: "Dec", year: 2025 },
        img: "/images/blogs/blog-thumbnail.png",
        author: null,
        category: null
    },
];


export const recentBlogs: Blog[] = [
    {
        id: 1,
        img: "/images/service/service-1.png",
        author: "Creativemela",
        title: "Fusce tincidunt commodo sapien, quis portitor.",
        date: { day: "22", month: "Dec", year: 2025 },
        category: null
    },
    {
        id: 2,
        img: "/images/service/service-2.png",
        author: "Creativemela",
        title: "Duis eu orci porta, lacinia tortor auctor vulputate.",
        date: { day: "22", month: "Dec", year: 2025 },
        category: null
    },
    {
        id: 3,
        img: "/images/service/service-3.png",
        author: "Creativemela",
        title: "Suspendisse justo justo, elementum id egestas.",
        date: { day: "22", month: "Dec", year: 2025 },
        category: null
    },
    {
        id: 4,
        img: "/images/service/service-1.png",
        author: "Creativemela",
        title: "Mauris luctus, tellus sit amet sagittis viverra.",
        date: { day: "22", month: "Dec", year: 2025 },
        category: null
    },
];
