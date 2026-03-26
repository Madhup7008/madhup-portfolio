"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Github, Linkedin, Globe, GraduationCap, Code2, Briefcase, User, Shield, BookOpen } from "lucide-react";

const education = [
    { degree: "B.Tech (Information Technology)", institution: "Amity University, Noida", year: "2022 – 2026", score: "CGPA: 6.01" },
    { degree: "Class XII", institution: "Shemford School, Mirzapur", year: "2021", score: "Score: 64%" },
    { degree: "Class X", institution: "Shemford School, Mirzapur", year: "2019", score: "Score: 78.4%" },
];

const technicalSkills = ["HTML", "CSS", "JavaScript", "React", "Python", "Flask", "Django", "NodeJS", "Java", "SQLAlchemy", "REST APIs", "Git", "OOP"];
const softSkills = ["Project Management", "Team Leadership", "Problem Solving"];

const projects = [
    {
        title: "Astha Library (Library Management System)",
        description: "Built a web application using Flask and SQLAlchemy to help manage daily library tasks. Added features for student registration, exam management system and managing fee records. Created an admin dashboard to monitor and update student data. Added an exam feature with a live countdown timer and accurate start/end times depending on time zones, with backend logic to calculate results automatically when an exam finishes and send final scores directly to students.",
        link: "https://www.asthalibraryfitness.com/",
    },
    {
        title: "Personal Portfolio Site",
        description: "Created a personal portfolio website with a focus on modern design using React and NextJS. Added 3D text effects and animations to make the site more interactive and engaging. Ensured the website looks good and works well on both desktop and mobile devices.",
        link: "https://madhup-portfolio.vercel.app/",
    },
    {
        title: "Admin & E-Commerce Dashboard (Hometech Solutions)",
        description: "Developed an admin system to help manage e-commerce tasks and staff access. Set up role-based access so different users have specific permissions based on their role. Included data tables and modals for managing product inventory, updating order statuses, and viewing client questions.",
        link: "https://hometech-frontend.onrender.com/",
    },
];

const otherInfo = [
    { label: "Amity Mail ID", value: "madhup.yadav@s.amity.edu" },
    { label: "Amity Roll No.", value: "A2305322088" },
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function ResumePage() {
    return (
        <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
            <Navbar />

            <section className="relative pt-44 pb-32 px-6 overflow-hidden">
                {/* Ambient */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(255,0,64,0.04)] rounded-full blur-[160px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                    >
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#ff0040] opacity-70 block mb-4">_resume.view</span>
                            <h1 className="font-display text-6xl md:text-[90px] tracking-wide leading-none">
                                RESUME<span className="text-gradient">.</span>
                            </h1>
                        </div>
                        <a
                            href="/resume.pdf"
                            download="Madhup_Kumar_Yadav_Resume.pdf"
                            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm self-start md:self-auto"
                        >
                            <Download className="w-4 h-4" />
                            Download PDF
                        </a>
                    </motion.div>

                    {/* Resume Card */}
                    <div className="glass-card rounded-[30px] p-8 md:p-12 relative overflow-hidden">
                        {/* Name & Contact */}
                        <motion.div {...fadeUp} className="text-center mb-12 pb-10 border-b border-[var(--border-subtle)]">
                            <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-5">MADHUP KUMAR YADAV</h2>
                            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--text-secondary)]">
                                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#ff0040]" />+91 9369823858</span>
                                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#ff0040]" />Noida, Uttar Pradesh (201303)</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-3 text-sm">
                                <a href="mailto:madhupyadav1809@gmail.com" className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#ff0040] transition-colors">
                                    <Mail className="w-3.5 h-3.5" />madhupyadav1809@gmail.com
                                </a>
                                <a href="https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#ff0040] transition-colors">
                                    <Linkedin className="w-3.5 h-3.5" />LinkedIn
                                </a>
                                <a href="https://github.com/Madhup7008" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#ff0040] transition-colors">
                                    <Github className="w-3.5 h-3.5" />GitHub
                                </a>
                                <a href="https://madhup-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#ff0040] transition-colors">
                                    <Globe className="w-3.5 h-3.5" />Portfolio
                                </a>
                            </div>
                        </motion.div>

                        {/* Objective */}
                        <motion.div {...fadeUp} className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-[rgba(255,0,64,0.1)] flex items-center justify-center">
                                    <User className="w-4 h-4 text-[#ff0040]" />
                                </div>
                                <h3 className="font-display text-2xl tracking-wide">OBJECTIVE</h3>
                            </div>
                            <div className="h-[1px] bg-[rgba(255,0,64,0.15)] mb-4" />
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                I am a software developer with a strong foundation in frontend and backend technologies, including HTML, CSS, JavaScript, React, Python, Flask, and Java. I enjoy building functional and user-friendly web applications, from library management systems to interactive portfolios. I have solid experience setting up databases, working with REST APIs, and making responsive designs. I am a team player who likes tackling challenging problems and delivering practical solutions.
                            </p>
                        </motion.div>

                        {/* Education */}
                        <motion.div {...fadeUp} className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-[rgba(255,0,64,0.1)] flex items-center justify-center">
                                    <GraduationCap className="w-4 h-4 text-[#ff0040]" />
                                </div>
                                <h3 className="font-display text-2xl tracking-wide">EDUCATION</h3>
                            </div>
                            <div className="h-[1px] bg-[rgba(255,0,64,0.15)] mb-5" />
                            <div className="flex flex-col gap-5">
                                {education.map((edu, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                        <div>
                                            <h4 className="text-[var(--text-primary)] font-semibold">{edu.degree}<span className="text-[var(--text-secondary)] font-normal">, {edu.institution}</span></h4>
                                            <span className="font-mono text-xs text-[var(--text-muted)]">{edu.score}</span>
                                        </div>
                                        <span className="font-mono text-xs text-[#ff0040] opacity-70 sm:flex-shrink-0">{edu.year}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div {...fadeUp} className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-[rgba(255,0,64,0.1)] flex items-center justify-center">
                                    <Code2 className="w-4 h-4 text-[#ff0040]" />
                                </div>
                                <h3 className="font-display text-2xl tracking-wide">SKILLS</h3>
                            </div>
                            <div className="h-[1px] bg-[rgba(255,0,64,0.15)] mb-5" />
                            <div className="space-y-4">
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] block mb-2">Technical Skills</span>
                                    <div className="flex flex-wrap gap-2">
                                        {technicalSkills.map((skill) => (
                                            <span key={skill} className="font-mono text-[11px] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] tracking-wider hover:border-[#ff0040] hover:text-[#ff0040] transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] block mb-2">Soft Skills</span>
                                    <div className="flex flex-wrap gap-2">
                                        {softSkills.map((skill) => (
                                            <span key={skill} className="font-mono text-[11px] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] tracking-wider hover:border-[#ff0040] hover:text-[#ff0040] transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Projects */}
                        <motion.div {...fadeUp} className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-[rgba(255,0,64,0.1)] flex items-center justify-center">
                                    <Briefcase className="w-4 h-4 text-[#ff0040]" />
                                </div>
                                <h3 className="font-display text-2xl tracking-wide">PROJECTS</h3>
                            </div>
                            <div className="h-[1px] bg-[rgba(255,0,64,0.15)] mb-5" />
                            <div className="flex flex-col gap-6">
                                {projects.map((project, i) => (
                                    <div key={i}>
                                        <div className="flex items-start justify-between gap-4 mb-1.5">
                                            <h4 className="text-[var(--text-primary)] font-semibold">{project.title}</h4>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-[#ff0040] hover:underline flex-shrink-0 tracking-wider uppercase">
                                                Live ↗
                                            </a>
                                        </div>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Other Information */}
                        <motion.div {...fadeUp}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-[rgba(255,0,64,0.1)] flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 text-[#ff0040]" />
                                </div>
                                <h3 className="font-display text-2xl tracking-wide">OTHER INFORMATION</h3>
                            </div>
                            <div className="h-[1px] bg-[rgba(255,0,64,0.15)] mb-5" />
                            <div className="flex flex-col gap-2">
                                {otherInfo.map((info, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-[var(--text-muted)]">{info.label}:</span>
                                        <span className="text-sm text-[var(--text-secondary)]">{info.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom download CTA */}
                    <motion.div {...fadeUp} className="mt-10 flex justify-center">
                        <a
                            href="/resume.pdf"
                            download="Madhup_Kumar_Yadav_Resume.pdf"
                            className="flex items-center gap-3 px-8 py-4 rounded-xl border border-[rgba(255,0,64,0.2)] text-[#ff0040] font-mono text-xs uppercase tracking-[0.25em] hover:bg-[rgba(255,0,64,0.08)] hover:border-[rgba(255,0,64,0.45)] transition-all"
                        >
                            <Download className="w-4 h-4" />
                            Download as PDF
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
