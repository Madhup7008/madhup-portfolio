export const portfolioData = {
  personal: {
    name: "Madhup Kumar Yadav",
    title: "Full Stack Developer",
    email: "contact@madhup.dev", // Placeholder, will update if user provides
    location: "India", // inferred from timezone/name context, generic
    bio: "I don't just write code; I architect digital ecosystems. With a passion for scalable backend logic and immersive frontend experiences, I transform abstract ideas into powerful, user-centric web applications.",
    socials: {
      github: "https://github.com/Madhup7008",
      linkedin: "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/",
      twitter: "#", // Placeholder
    },
  },
  skills: [
    { name: "Python", category: "Backend", level: 90 },
    { name: "React", category: "Frontend", level: 85 },
    { name: "JavaScript", category: "Language", level: 90 },
    { name: "HTML & CSS", category: "Frontend", level: 95 },
    { name: "SQL", category: "Database", level: 80 },
    { name: "APIs", category: "Backend", level: 85 },
    { name: "Flask", category: "Backend", level: 80 },
    { name: "PostgreSQL", category: "Database", level: 80 },
  ],
  projects: [
    {
      title: "Astha Library & Fitness System",
      description: "A comprehensive institutional management platform unifying library operations, fee management, and online examinations.",
      tech: ["Python", "Flask", "PostgreSQL", "HTML/CSS"],
      link: "#", // Placeholder
      github: "#", // Placeholder
      image: "/placeholder-project.png" // We will generate this or use a gradient div
    },
    // Adding a second placeholder project to fill the grid
    {
      title: "Portfolio v1",
      description: "A high-performance, creative portfolio website built with Next.js and Tailwind CSS to showcase my full-stack journey.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "https://github.com/Madhup7008",
      image: "/placeholder-portfolio.png"
    }
  ]
};
