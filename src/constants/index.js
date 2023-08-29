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
    git,
    figma,
    docker,
    threejs,
    mantine,
    cagtu,
    ekbana,
    next,
    homaale,
    exergym,
    portfolio,
    cagtunepal,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UX Developer",
      icon: mobile,
    },
    {
      title: "Tech Enthusiast",
      icon: creator ,
    },
    {
      title: "Team Player",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Mantine UI",
      icon: mantine,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer - Intern",
      company_name: "Ekbana Solutions Pvt. Ltd.",
      icon: ekbana,
      iconBg: "#383E56",
      date: "Sep 2021 - Dec 2021",
      points: [
        "Learnt about different SDLC approaches.",
        "Did minor projects on Javascript.",
        "Did a major project on React JS.",
      ],
    },
    {
      title: "Jr. Frontend Developer",
      company_name: "Cagtu Nepal Pvt. Ltd.",
      icon: cagtu,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Sept 2022",
      points: [
        "Developed website for Cagtu Nepal.",
        "Built multiple Blogs and Careers site for multiple projects.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Cagtu Nepal Pvt. Ltd.",
      icon: cagtu,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Develop new user-facing features using React.js and Next.js.",
        "Led a team of 6 members to develop in-house product.",
        "Implemented various Scrum methodologies as a scrum master.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Homaale",
      description:
        "Homaale is a platform designed to provide service booking solutions to the service seekers and business opportunities to various service providing companies by bridging a gap between them.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: homaale,
      source_code_link: "https://homaale.com/",
    },
    {
      name: "Cagtu Nepal",
      description:
        "Cagtu Nepal is an Information Technology Company focusing purely on E-commerce and Technology for Innovators. ",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: cagtunepal,
      source_code_link: "https://www.cagtunepal.com/",
    },
    {
      name: "ExerGym",
      description:
        "ExerGym is a React application that provides user with the gym exercises solutions. Users can search for any kind of exercises based on target muscles or equipments they want to use.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
       
      ],
      image: exergym,
      source_code_link: "https://exergym.netlify.app/",
    },
    {
      name: "Portfolio Site",
      description:
        "In this digital era it has been mandatory to have digital exiatence. It becomes even more neccessary for the people in IT field. Personal portfolio website the resume of this digital world.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://www.sandipthapa.com.np/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };