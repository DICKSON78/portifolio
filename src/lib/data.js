export const profile = {
  name: "Dickson Steven",
  title: "Full Stack Developer",
  tagline: "Crafting seamless digital experiences from frontend to backend — React, Next.js, SpringBoot, Laravel & beyond.",
  about: [
    "I am a passionate Full Stack Developer with over 4 years of hands-on experience building end-to-end web and mobile applications. From crafting pixel-perfect, responsive UIs with React and Next.js to architecting scalable backend services with Java SpringBoot and PHP Laravel — I deliver complete solutions that drive real business value.",
    "My journey has taken me through government systems, enterprise software, and startup environments, where I've honed my ability to translate complex requirements into production-ready applications. I specialize in building microservices architectures, RESTful APIs, and modern frontend interfaces that users love.",
    "Currently pursuing my Bachelor of Science in Software Engineering at the University of Dodoma, I combine academic rigor with practical industry experience to stay at the cutting edge of full stack development.",
  ],
  location: "Dodoma, Tanzania",
  email: "augustinodickson78@gmail.com",
  phone: "+255750731387",
  whatsapp: "255750731387",
  social: {
    github: "https://github.com/DICKSON78",
    linkedin: "https://www.linkedin.com/in/dickson-augustino-713b5b253/",
    whatsapp: "https://wa.me/255750731387",
  },
  profileImage: "/images/profile.jpg",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "3+", label: "Companies" },
  { value: "BSc", label: "Software Engineering" },
];

export const skills = {
  frontend: {
    title: "Frontend",
    items: ["React JS", "Next.js", "React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  backend: {
    title: "Backend",
    items: ["Java", "SpringBoot", "PHP Laravel", "Node.js", "Microservices", "REST APIs", "MVC Architecture"],
  },
  mobile: {
    title: "Mobile",
    items: ["Android Development", "React Native", "Mobile UI/UX"],
  },
  database: {
    title: "Database & DevOps",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Docker", "Git & GitHub", "CI/CD"],
  },
  soft: {
    title: "Soft Skills",
    items: ["Project Management", "Team Leadership", "Time Management", "Effective Communication", "Critical Thinking", "Problem Solving"],
  },
};

export const experience = [
  {
    year: "2024",
    title: "Software Engineer & IT Officer",
    company: "National Office Auditing of Tanzania",
    description:
      "Led the development of enterprise-grade microservices architecture using Java SpringBoot. Designed and implemented scalable backend systems for government audit processes, ensuring data integrity and system reliability across distributed services.",
    tags: ["Java", "SpringBoot", "Microservices", "REST APIs"],
  },
  {
    year: "2022",
    title: "Software Engineer",
    company: "TechHub Software Solution",
    description:
      "Developed responsive web applications and cross-platform mobile apps for diverse clients. Built modern user interfaces with React and delivered Android applications, focusing on performance optimization and exceptional user experience.",
    tags: ["React JS", "Android", "Web Development", "Mobile Apps"],
  },
  {
    year: "2020",
    title: "IT Technician",
    company: "Ubungo Municipal Council",
    description:
      "Provided comprehensive IT support for government operations. Managed help-desk services, maintained network infrastructure, and delivered technical solutions that improved operational efficiency across municipal departments.",
    tags: ["IT Support", "Networking", "Help Desk", "System Administration"],
  },
];

export const education = [
  {
    year: "2022 - Present",
    title: "Bachelor of Science in Software Engineering",
    institution: "The University of Dodoma",
    description:
      "Comprehensive study of software design, algorithms, data structures, and modern development methodologies. Focus on full stack engineering and distributed systems.",
  },
  {
    year: "2019 - 2022",
    title: "Diploma in Information Technology",
    institution: "St Joseph College of Engineering and Technology",
    description:
      "Foundation in computer science fundamentals, programming, database management, and IT infrastructure. Graduated with strong practical skills in software development.",
  },
];

export const projects = [
  {
    title: "Buyo Commerce",
    description:
      "A full-featured e-commerce platform built with Laravel. Includes product catalog, cart management, order processing, user authentication, and admin dashboard for inventory control.",
    tags: ["PHP Laravel", "Blade", "MySQL", "E-Commerce"],
    liveUrl: null,
    sourceUrl: "https://github.com/DICKSON78/buyo_commerce",
  },
  {
    title: "E-Kanisa",
    description:
      "A church management system built for KKKT Agape using Laravel. Manages congregations, events, members, tithes, and church activities. Features member registration, event scheduling, reporting, and comprehensive administrative tools.",
    tags: ["PHP Laravel", "Blade", "MySQL", "Church Management"],
    liveUrl: null,
    sourceUrl: "https://github.com/DICKSON78/e-kanisa",
  },
  {
    title: "Hotbando",
    description:
      "A dynamic web application developed for Blacksience Technologies Limited. Built with Node.js and EJS templating engine, featuring server-side rendering, responsive design, and interactive user interfaces for business content management.",
    tags: ["Node.js", "EJS", "Express", "JavaScript"],
    liveUrl: null,
    sourceUrl: "https://github.com/DICKSON78/hotbando",
  },
  {
    title: "Payroll Management",
    description:
      "An enterprise payroll management system for handling employee salaries, deductions, tax calculations, and payment processing. Built with Laravel for robust HR operations.",
    tags: ["PHP Laravel", "Blade", "MySQL", "Enterprise"],
    liveUrl: null,
    sourceUrl: "https://github.com/DICKSON78/payroll_management",
  },
  {
    title: "SGR Ticketing App",
    description:
      "A mobile ticketing application for Standard Gauge Railway built with Java. Features ticket booking, seat selection, payment integration, and QR code-based ticket verification.",
    tags: ["Java", "Android", "Mobile App", "Ticketing"],
    liveUrl: null,
    sourceUrl: "https://github.com/DICKSON78/SGRTicketing-app",
  },
  {
    title: "NMU Project Management",
    description:
      "A project management system developed for Nelson Mandela University. Built with React on the frontend and Django on the backend, featuring project tracking, task assignments, progress reporting, and team collaboration tools. Deployed on Vercel.",
    tags: ["React", "Django", "Python", "Vercel"],
    liveUrl: "https://nmu-project.vercel.app",
    sourceUrl: "https://github.com/DICKSON78/NMU-Project",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
