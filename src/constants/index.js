import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "JR front-end Developer",
      icon: web,
    },
    {
      title: "Digital Marketing Student at UCES university",
      icon: mobile,
    },
    {
      title: " JR Back-end Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Juan Martin is a very dedicated, proactive and up-to-date student! Great future!.",
      name: "Agustin Bella ",
      designation: "CEO",
      company: "Manija Digital Marketing Company",
      
    },
    {
      testimonial:
        "Juan was a very diligent student. His understanding and interpretation were outstanding  Very determined and with a clear vision.  I recommend Juan Martin for a Marketing and Sales position His good judgment and conviction are fundamental to be able to face the challenges of the job",
      name: "",
      designation: "SALON PARTER DISTRIBUTION MANAGER",
      company: "Matias Noya",
      
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
     
    },
  ];
  
  const projects = [
    {
      name: "Impact X",
      description:
        "Our new start-up is dedicated to the development of sales, web and marketing software. Our products and services are designed to meet the specific needs of each client, the segment we target are small and medium businesses that need to innovate in software and marketing, with customizable and easy to use solutions.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "NODE JS",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Juanmaanghilante/Grupo-3-ImpactX",
    },
    {
      name: "mercado liebre",
      description:
        "copy of mercadolibre to practice css, html and mobile first, it has controllers to create products and users.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "ejs templates ",
          color: "pink-text-gradient",
        },
        {
          name: "back-end ",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Juanmaanghilante/nuevo-mercadoliebre",
    },
    {
      name: "Impact X Dashboard",
      description:
        "dashboard to consume impactX own apis and to visualize data such as last users or registered products and tables of them..",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "jsx",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "API REST",
          color: "pink-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };