import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: " Product Engineer",
        company_name: "Tata Consultancy Services",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "MaY 2024 - May 2025",
        points: [
            "Monitored and supported 24x7 production systems using Prometheus & Grafana,achieving 99.98% uptime and resolving 100+ critical alerts.",
            "Enhanced SWIFT Payments and Core Banking modules, improving transaction speed by 20% and reducing failure rates by 15%.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Built and deployed Spring Boot microservices on AWS Cloud for scalable architecture, with code versioned using Git.Implementing responsive design and ensuring cross-browser compatibility.",
            
        ],
    },
    {
        title: "System Engineer",
        company_name: "Tata Consultancy Services",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - April 2024",
        points: [
            "Designed end-to-end payment solutions for SWIFT MT messages, Standing Orders, Cheques, RTGS, and Bulk Payments.Developing and maintaining web applications using React.js and other related technologies.",
            "CollImplemented GPA services for 50+ customers monthly, improving satisfaction by 20%.aborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Designed end-to-end payment solutions for SWIFT MT messages, Standing Orders, Cheques, RTGS, and Bulk Payments. responsive design and ensuring cross-browser compatibility.",
            "Partici Resolved live payment issues, maintaining 99.97% uptime and cutting transaction failures by 15%.pating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Assistant System Engineer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Dec 2021 - Feb 2023",
        points: [
            "Developed modules for Demand Drafts and International Cheques, streamlining operations.Developing and maintaining web applications using React.js and other related technologies.",
            "Provided on-site go-live support in the Philippines, enabling 100% successful transaction migration. with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "VEDANTU INNOVATION PVT LIMITED",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Oct 2020 - Sep 2021",
        points: [
            "Led user onboarding with a 98% success rate, boosting new user engagement by35%.",
            "Developed 15+ RESTful APIs using Spring Boot and JPA, reducing responsetime by 40%.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sin-wave',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pratik63/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Tiny Url',
        description: 'Developed a web application that minimizes the url length of any product',
        link: 'https://github.com/sin-wave/TinyUrl',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Indian Bank Application',
        description: 'Created a Microservices for bank application which issues loans from account and customer can use cards.',
        link: 'https://github.com/sin-wave/IK-Bank',
    
    }
    ,
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
    
];