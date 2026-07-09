export const PERSONAL = {
  name: "Felipe Salazar",
  firstName: "Felipe",
  role: "Full-Stack Developer & Tech Lead",
  email: "felipeslzar@gmail.com",
  github: "https://github.com/felipeisj",
  linkedin: "https://www.linkedin.com/in/felipe-salazar-jimenez/",
  location: "Chile · Remoto",
};

export const NAV_LINKS = [
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#work" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const EXPERIENCE = [
  {
    period: "Ago 2024 — Presente",
    role: "Fundador & Tech Lead",
    org: "Pololitos",
    description:
      "Único desarrollador a cargo de la arquitectura, la app móvil, el backoffice y la infraestructura cloud de una plataforma de gig economy en producción en App Store y Google Play.",
  },
  {
    period: "Ene 2023 — Jul 2023",
    role: "QA Engineer & Software Developer",
    org: "Flöid",
    description:
      "Automatización de pruebas con Selenium, scripts en Python para extracción de datos, y análisis de grandes volúmenes con BigQuery para detectar anomalías en producción.",
  },
  {
    period: "Ene 2022 — Dic 2022",
    role: "Software Developer",
    org: "AltaVenta ERP",
    description:
      "Desarrollo full-stack de funcionalidades para plataformas de ecommerce: APIs en Node.js y frontends en React, con servidores UNIX/Linux administrados vía Docker.",
  },
];

type Project = {
  slug: string;
  name: string;
  featured?: boolean;
  category: string;
  period?: string;
  description: string;
  highlights?: string[];
  stack: string[];
  url?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  domain?: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "pololitos",
    name: "Pololitos",
    featured: true,
    category: "Producto propio · Gig economy",
    period: "2024 — Presente",
    description:
      "App de economía colaborativa que conecta clientes con técnicos e independientes calificados. Único desarrollador a cargo de la app, el backend y la infraestructura en AWS.",
    highlights: [
      "Una sola cuenta con UX dual (HIRE / WORK) vía Zustand + MMKV y Expo Router",
      "Pagos con custodia (escrow) dentro de la app, integrando Transbank Webpay y Floid",
      "CI/CD con GitHub Actions + EAS Build, monitoreo con Sentry y Firebase Analytics",
    ],
    stack: ["React Native", "Node.js", "AWS", "Next.js", "MySQL"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.pololitos.app",
    appStoreUrl: "https://apps.apple.com/app/pololitos/id6737562916",
    accent: "#4640DE",
  },
  {
    slug: "licitaciones-ia",
    name: "Plataforma de Licitaciones con IA",
    category: "Freelance · SaaS con IA",
    description:
      "Sistema que analiza licitaciones públicas con la API de Claude y estructura las variables clave para la toma de decisiones, sobre una arquitectura de microservicios con NestJS.",
    stack: ["NestJS", "Supabase", "Claude API", "Railway"],
    accent: "#2C27A8",
  },
  {
    slug: "metal-austral",
    name: "Metal Austral",
    category: "Construcción industrial",
    description:
      "Sitio corporativo para una empresa de construcción de galpones industriales con más de 15 años de experiencia.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    url: "https://metalaustral.cl",
    domain: "metalaustral.cl",
    accent: "#4640DE",
  },
  {
    slug: "vilugron-propiedades",
    name: "Vilugron Propiedades",
    category: "Portal inmobiliario",
    description:
      "Sitio de corretaje con filtros de propiedades, mapas y animaciones GSAP.",
    stack: ["Next.js", "GSAP", "Cloudinary"],
    url: "https://vilugronpropiedades.cl",
    domain: "vilugronpropiedades.cl",
    accent: "#C4965A",
  },
  {
    slug: "fleetcore",
    name: "FleetCore",
    category: "SaaS · Gestión de flotas",
    description:
      "Producto propio de gestión de flota para minería y construcción: GPS, mantenimiento predictivo y consumo de combustible en un solo panel.",
    stack: ["Next.js", "TypeScript"],
    url: "https://fleetcore.cl",
    domain: "fleetcore.cl",
    accent: "#D97706",
  },
  {
    slug: "concentra",
    name: "Concentra",
    category: "Software house",
    description:
      "Sitio corporativo multi-producto propio, con landing dedicada por producto y blog.",
    stack: ["Next.js", "TypeScript"],
    url: "https://concentra.cl",
    domain: "concentra.cl",
    accent: "#0F2044",
  },
];

export const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "NestJS",
  "AWS",
  "Supabase",
  "PostgreSQL",
  "Docker",
];
