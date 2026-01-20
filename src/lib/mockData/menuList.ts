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
