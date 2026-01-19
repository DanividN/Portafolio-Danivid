type Pricing = {
    id: number;
    title: string;
    price: string;
    yearly: string;
    wowDelay?: string;
    features: string[];
};

export const pricingPlansData: Pricing[] = [
    {
        id: 1,
        title: "Basic Package",
        price: "$112 / Per Hours",
        yearly: "Or $199 Yearly",
        wowDelay: ".5s",
        features: [
            "Initial consultation and scoping",
            "User Experience (UX) audit",
            "Basic User Interface (UI) design",
            "One round of revisions",
            "Interactive prototype",
            "Delivery within 2 weeks",
        ],
    },
    {
        id: 2,
        title: "Standard Package",
        price: "$152 / Per Hours",
        yearly: "Or $199 Yearly",
        wowDelay: ".7s",
        features: [
            "Everything in the Basic Package",
            "Detailed UX research and personas",
            "Complete UI design",
            "Interactive prototype",
            "Two rounds of revisions",
            "Delivery within 4 weeks",
        ],
    },
    {
        id: 3,
        title: "Premium Package",
        price: "$192 / Per Hours",
        yearly: "Or $199 Yearly",
        wowDelay: ".9s",
        features: [
            "Everything in the Standard Package",
            "In-depth user testing and analysis",
            "Comprehensive design system",
            "Unlimited revisions",
            "Advanced UI animations",
            "Delivery within 6 weeks",
        ],
    },
];