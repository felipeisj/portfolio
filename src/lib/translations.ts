export const translations = {
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      availability: "Disponible para nuevos proyectos",
      title: "Hola, soy Felipe",
      subtitle: "+4 años de experiencia como Full-Stack Developer y Tech Lead. Construyo productos de punta a punta: apps móviles en producción, APIs y la infraestructura en AWS que las sostiene.",
      contactCTA: "Contáctame",
      linkedinCTA: "LinkedIn",
      githubCTA: "GitHub",
    },
    experience: {
      title: "Experiencia laboral",
      items: {
        "pololitos": {
          role: "Fundador & Tech Lead",
          description: "Único desarrollador a cargo de la arquitectura, la app móvil, el backoffice y la infraestructura cloud de una plataforma de gig economy en producción en App Store y Google Play."
        },
        "floid": {
          role: "QA Engineer & Software Developer",
          description: "Automatización de pruebas con Selenium, scripts en Python para extracción de datos, y análisis de grandes volúmenes con BigQuery para detectar anomalías en producción."
        },
        "altaventa": {
          role: "Software Developer",
          description: "Desarrollo full-stack de funcionalidades para plataformas de ecommerce: APIs en Node.js y frontends en React, con servidores UNIX/Linux administrados vía Docker."
        }
      }
    },
    projects: {
      title: "Algunos proyectos",
      downloadAppStore: "Descargar en App Store",
      downloadPlayStore: "Descargar en Google Play",
      appStore: "App Store",
      playStore: "Google Play",
      items: {
        "pololitos": {
          category: "Producto propio · Gig economy",
          description: "App de economía colaborativa que conecta clientes con técnicos e independientes calificados. Único desarrollador a cargo de la app, el backend y la infraestructura en AWS.",
          highlights: [
            "Una sola cuenta con UX dual (HIRE / WORK) vía Zustand + MMKV y Expo Router",
            "Pagos con custodia (escrow) dentro de la app, integrando Transbank Webpay y Floid",
            "CI/CD con GitHub Actions + EAS Build, monitoreo con Sentry y Firebase Analytics"
          ]
        },
        "licitaciones-ia": {
          category: "Freelance · SaaS con IA",
          description: "Sistema que analiza licitaciones públicas con la API de Claude y estructura las variables clave para la toma de decisiones, sobre una arquitectura de microservicios con NestJS."
        },
        "metal-austral": {
          category: "Construcción industrial",
          description: "Sitio corporativo para una empresa de construcción de galpones industriales con más de 15 años de experiencia."
        },
        "vilugron-propiedades": {
          category: "Portal inmobiliario",
          description: "Sitio de corretaje con filtros de propiedades, mapas y animaciones GSAP."
        },
        "fleetcore": {
          category: "SaaS · Gestión de flotas",
          description: "Producto propio de gestión de flota para minería y construcción: GPS, mantenimiento predictivo y consumo de combustible en un solo panel."
        },
        "concentra": {
          category: "Software house",
          description: "Sitio corporativo multi-producto propio, con landing dedicada por producto y blog."
        }
      }
    },
    about: {
      title: "Sobre mí",
      paragraph1: "Soy Ingeniero Civil en Informática de la Universidad Austral de Chile y llevo más de 4 años construyendo productos digitales de punta a punta, desde la arquitectura hasta el deploy en producción. Empecé en QA automatizando pruebas, y hoy lidero como Tech Lead el desarrollo de una app publicada en App Store y Play Store.",
      paragraph2: "Viví y trabajé un año en Australia, así que tengo inglés C1 y fluidez para trabajar con clientes internacionales. Si deseas revisar en detalle mi trayectoria técnica y laboral completa, puedes ver mi Portafolio Profesional / CV.",
      cvLinkText: "Portafolio Profesional / CV",
      paragraph3: "Además de mis proyectos para clientes, gestiono directamente las campañas de Google Ads que promocionan este sitio a través de un panel interno propio (Felipe Salazar) que se conecta de forma segura vía OAuth a la API de Google Ads para consultar métricas de rendimiento (clics, costo, conversiones) de mis propias campañas.",
    },
    footer: {
      location: "Chile · Remoto",
    }
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About me",
      contact: "Contact",
    },
    hero: {
      availability: "Available for new projects",
      title: "Hi, I'm Felipe",
      subtitle: "+4 years of experience as a Full-Stack Developer & Tech Lead. I build end-to-end products: production mobile apps, APIs, and the AWS infrastructure that supports them.",
      contactCTA: "Contact me",
      linkedinCTA: "LinkedIn",
      githubCTA: "GitHub",
    },
    experience: {
      title: "Work experience",
      items: {
        "pololitos": {
          role: "Founder & Tech Lead",
          description: "Sole developer in charge of architecture, mobile app, backoffice, and cloud infrastructure for a gig economy platform in production in the App Store and Google Play."
        },
        "floid": {
          role: "QA Engineer & Software Developer",
          description: "Test automation with Selenium, Python scripts for data extraction, and high-volume data analysis with BigQuery to detect anomalies in production."
        },
        "altaventa": {
          role: "Software Developer",
          description: "Full-stack development of features for e-commerce platforms: Node.js APIs and React frontends, with UNIX/Linux servers managed via Docker."
        }
      }
    },
    projects: {
      title: "Some projects",
      downloadAppStore: "Download on App Store",
      downloadPlayStore: "Download on Google Play",
      appStore: "App Store",
      playStore: "Google Play",
      items: {
        "pololitos": {
          category: "Own product · Gig economy",
          description: "Collaborative economy app connecting clients with qualified independent technicians. Sole developer in charge of the app, backend, and AWS infrastructure.",
          highlights: [
            "Single account with dual HIRE / WORK UX via Zustand + MMKV and Expo Router",
            "Custody payments (escrow) in-app, integrating Transbank Webpay and Floid",
            "CI/CD with GitHub Actions + EAS Build, Sentry monitoring, and Firebase Analytics"
          ]
        },
        "licitaciones-ia": {
          category: "Freelance · SaaS with AI",
          description: "System that analyzes public tenders using Claude's API and structures key decision-making variables on a NestJS microservices architecture."
        },
        "metal-austral": {
          category: "Industrial construction",
          description: "Corporate site for a metal structures construction company with over 15 years of experience."
        },
        "vilugron-propiedades": {
          category: "Real estate portal",
          description: "Brokerage website with property filters, maps, and GSAP animations."
        },
        "fleetcore": {
          category: "SaaS · Fleet management",
          description: "Own fleet management product for mining and construction: GPS, predictive maintenance, and fuel consumption in a single dashboard."
        },
        "concentra": {
          category: "Software house",
          description: "Own multi-product corporate website with dedicated product landing pages and blog."
        }
      }
    },
    about: {
      title: "About me",
      paragraph1: "I am a Software Engineer (B.S. in Computer Science) from Universidad Austral de Chile with over 4 years of experience building end-to-end digital products, from architecture to production deployment. I started in QA automating tests, and today I lead as Tech Lead the development of an app published in the App Store and Play Store.",
      paragraph2: "I lived and worked in Australia for a year, so I have C1 level English and absolute fluency to work with international clients. If you would like to review my full technical and work history in detail, you can check my Professional Portfolio / CV.",
      cvLinkText: "Professional Portfolio / CV",
      paragraph3: "In addition to client projects, I directly manage the Google Ads campaigns promoting this site through my own internal dashboard (Felipe Salazar), which securely connects via OAuth to the Google Ads API to query performance metrics (clicks, cost, conversions) for my campaigns.",
    },
    footer: {
      location: "Chile · Remote",
    }
  }
};

export type TranslationKey =
  | "nav.home" | "nav.experience" | "nav.projects" | "nav.about" | "nav.contact"
  | "hero.availability" | "hero.title" | "hero.subtitle" | "hero.contactCTA" | "hero.linkedinCTA" | "hero.githubCTA"
  | "experience.title" | "experience.items"
  | "projects.title" | "projects.downloadAppStore" | "projects.downloadPlayStore" | "projects.appStore" | "projects.playStore" | "projects.items"
  | "about.title" | "about.paragraph1" | "about.paragraph2" | "about.cvLinkText" | "about.paragraph3"
  | "footer.location";
