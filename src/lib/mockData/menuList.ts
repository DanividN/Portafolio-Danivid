export type MenuItem = {
    label: string;
    href: string;
    subMenu?: MenuItem[];
};

export const menuList: MenuItem[] = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Acerca de mí",
        href: "/#about",
    },
    {
        label: "Portafolio",
        href: "/#portfolio",
    },
    {
        label: "Servicios",
        href: "/#services",
    },
    {
        label: "Contacto",
        href: "/#contact",
    },
];

export const menuListDark: MenuItem[] = [
    {
        label: "Home",
        href: "/home-2",
        subMenu: [
            { label: "Home One", href: "/" },
            { label: "Home Two", href: "/home-2" },
        ],
    },
    {
        label: "About Me",
        href: "/home-2#about",
    },
    {
        label: "Portfolio",
        href: "/home-2#portfolio",
    },
    {
        label: "Services",
        href: "/home-2#services",
    },
    {
        label: "Testimonial",
        href: "/home-2#testimonial",
    },
    {
        label: "Blog",
        href: "/home-2#blogs",
        subMenu: [
            { label: "Blog", href: "/blog-2-dark" },
            { label: "Blog Page", href: "/blog-dark" },
            { label: "Blog List", href: "/blog-list-dark" },
            { label: "Blog Right Sidebar", href: "/blog-right-sidebar-dark" },
            { label: "Blog Details", href: "/blog-details-dark" },
        ],
    },
    {
        label: "Contact",
        href: "/home-2#contact",
    },
];
