export type Service = {
    id: number;
    title: string;
    features: string[];
};

export const servicesData: Service[] = [
{
    id: 1,
    title: "Desarrollo Web",
    features: [
        "Desarrollo de sistemas web a medida",
        "Creación de páginas web corporativas y personales",
        "Desarrollo de blogs y portales administrables",
        "Integración de bases de datos y APIs",
        "Optimización y mantenimiento de sitios web",
    ],
},
{
    id: 2,
    title: "Sistemas y Aplicaciones",
    features: [
        "Análisis y diseño de sistemas informáticos",
        "Desarrollo de aplicaciones internas",
        "Automatización de procesos",
        "Gestión y mantenimiento de bases de datos",
        "Documentación técnica de sistemas",
    ],
},
{
    id: 3,
    title: "Soporte Técnico",
    features: [
        "Mantenimiento preventivo y correctivo de equipos",
        "Diagnóstico y solución de fallas de hardware y software",
        "Instalación y configuración de sistemas operativos",
        "Soporte técnico presencial y remoto",
        "Respaldo y recuperación de información",
    ],
},
{
    id: 4,
    title: "Redes y Seguridad",
    features: [
        "Configuración de redes LAN y Wi-Fi",
        "Administración de routers y switches",
        "Implementación de medidas de seguridad informática",
        "Monitoreo y control de accesos",
        "Solución de problemas de conectividad",
    ],
},
{
    id: 5,
    title: "Cámaras y CCTV",
    features: [
        "Instalación y configuración de sistemas CCTV",
        "Mantenimiento de cámaras de seguridad",
        "Configuración de DVR y NVR",
        "Monitoreo remoto y grabación",
        "Asesoría en soluciones de videovigilancia",
    ],
},

];