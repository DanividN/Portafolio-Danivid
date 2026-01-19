export type TestimonialType = {
    id: number;
    img: string;
    text: string;
    wowDelay?: string;
    contentDelay?: string;
};

export const testimonialsData: TestimonialType[] = [
    {
        id: 1,
        img: "images/testimonial/image3.png",
        text: "Working with Cameron Williamson has been a game. Their ability to understand our vision and translate it into was impressive. The design solutions provided by Came improved our user engagement.",
        wowDelay: "1.2s",
        contentDelay: ".9s",
    },
    {
        id: 2,
        img: "images/testimonial/image2.png",
        text: "Working with Cameron Williamson has been a game. Their ability to understand our vision and translate it into was impressive. The design solutions provided by Came improved our user engagement.",
    },
    {
        id: 3,
        img: "images/testimonial/image1.png",
        text: "Working with Cameron Williamson has been a game. Their ability to understand our vision and translate it into was impressive. The design solutions provided by Came improved our user engagement.",
    },
];