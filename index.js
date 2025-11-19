import React, { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, Code, Terminal, Zap, Feather, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

// --- CONFIGURATION DATA ---
const PORTFOLIO_DATA = {
    name: "Alex Johnson",
    tagline: "Full Stack Developer | Crafting seamless digital experiences.",
    bio: "I'm a passionate Full Stack Developer with 7+ years of experience specializing in scalable web applications using React, TypeScript, and Node.js. My focus is on building high-performance, accessible, and user-centric products from concept to deployment.",
    skills: [
        { name: "React", icon: "Code", level: "Expert" },
        { name: "TypeScript", icon: "Terminal", level: "Expert" },
        { name: "Node.js", icon: "Zap", level: "Advanced" },
        { name: "Tailwind CSS", icon: "Feather", level: "Advanced" },
        { name: "Next.js", icon: "Briefcase", level: "Advanced" },
        { name: "Figma/Design", icon: "Feather", level: "Proficient" },
    ],
    projects: [
        {
            title: "AI-Powered Research Tool",
            description: "A platform utilizing Gemini API for real-time document analysis and semantic search, reducing research time by 40%. Built with Next.js and integrated with a scalable serverless backend.",
            tags: ["Next.js", "Gemini API", "TypeScript", "AWS Lambda"],
            imageUrl: "https://placehold.co/600x400/003366/ffffff?text=AI+Platform",
            link: "#"
        },
        {
            title: "E-Commerce Headless CMS",
            description: "Developed a custom content management system for an e-commerce brand, decoupling the frontend (React) from the backend (Strapi/Node). Improved site speed score by 30 points.",
            tags: ["React", "Node.js", "Strapi", "MongoDB"],
            imageUrl: "https://placehold.co/600x400/990000/ffffff?text=E-commerce+CMS",
            link: "#"
        },
        {
            title: "Financial Dashboard UI",
            description: "Designed and implemented a real-time financial tracking dashboard with advanced data visualization using D3.js and Recharts. Focused heavily on accessibility and mobile responsiveness.",
            tags: ["React", "D3.js", "Recharts", "Accessibility"],
            imageUrl: "https://placehold.co/600x400/336633/ffffff?text=Data+Dashboard",
            link: "#"
        }
    ],
    contact: {
        email: "alex.johnson@example.com",
        linkedin: "linkedin.com/in/alexjohnson",
        github: "github.com/alexjohnsondev"
    }
};

// Map icon names to lucide-react components
const ICON_MAP = {
    Briefcase, Code, Terminal, Zap, Feather
};

// --- COMPONENTS ---

const NavItem = ({ href, children }) => (
    <a href={href} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors px-3 py-2 rounded-lg text-sm font-medium">
        {children}
    </a>
);

const IconButton = ({ children, onClick, 'aria-label': ariaLabel, className = '' }) => (
    <button
        onClick={onClick}
        aria-label={ariaLabel}
        className={`p-2 rounded-full transition-colors ${className}`}
    >
        {children}
    </button>
);

const Header = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo/Name */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                    {PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-indigo-600">.Dev</span>
                </h1>

                {/* Navigation and Dark Mode Toggle */}
                <nav className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-1">
                        <NavItem href="#about">About</NavItem>
                        <NavItem href="#skills">Skills</NavItem>
                        <NavItem href="#projects">Projects</NavItem>
                        <NavItem href="#contact">Contact</NavItem>
                    </div>

                    {/* Dark Mode Toggle */}
                    <IconButton
                        onClick={toggleDarkMode}
                        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </IconButton>
                </nav>
            </div>
        </header>
    );
};

const HeroSection = () => {
    return (
        <section id="hero" className="py-20 md:py-32 lg:py-40 text-center bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Image - Modern circle with subtle shadow */}
                <img
                    src="https://placehold.co/128x128/3b82f6/ffffff/png?text=AJ"
                    alt={`${PORTFOLIO_DATA.name} Profile`}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-indigo-500 shadow-xl"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/128x128/3b82f6/ffffff/png?text=AJ" }}
                />

                <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">Hello, I'm {PORTFOLIO_DATA.name}</p>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                    {PORTFOLIO_DATA.tagline}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                    {PORTFOLIO_DATA.bio}
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-[1.02]"
                    >
                        Get In Touch
                    </a>
                    <a
                        href={PORTFOLIO_DATA.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-xl border border-gray-300 dark:border-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:scale-[1.02]"
                    >
                        View LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Core Skills & Expertise</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    A snapshot of the tools and technologies I use to bring ideas to life.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {PORTFOLIO_DATA.skills.map((skill, index) => {
                        const Icon = ICON_MAP[skill.icon] || Code;
                        return (
                            <div key={index} className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transform hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                                    <Icon size={36} strokeWidth={2} />
                                </div>
                                <span className="text-lg font-semibold text-gray-900 dark:text-white text-center">{skill.name}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.level}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/3b82f6/ffffff/png?text=Project+Image" }}
            />
            <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                
                {/* Tags/Tech Stack - Modern Chip Design */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                    View Project Case Study
                    <ArrowUpRight size={16} className="ml-1" />
                </a>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Featured Work</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                    A selection of recent projects showcasing my expertise in full-stack development and modern design principles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_DATA.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-indigo-50 dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
                    <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Let's Build Something Great</h3>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
                        I am currently open to new opportunities, collaborations, and contract work. Drop me a line and let's discuss your next big idea.
                    </p>
                    
                    {/* Contact Links */}
                    <div className="flex justify-center space-x-6 mb-10">
                        <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Mail size={32} className="mx-auto" />
                            <span className="text-sm block mt-1">Email</span>
                        </a>
                        <a href={`https://${PORTFOLIO_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Linkedin size={32} className="mx-auto" />
                            <span className="text-sm block mt-1">LinkedIn</span>
                        </a>
                        <a href={`https://${PORTFOLIO_DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Github size={32} className="mx-auto" />
                            <span className="text-sm block mt-1">GitHub</span>
                        </a>
                    </div>
                    
                    {/* Simple Contact Form Placeholder */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-950 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 dark:text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React and Tailwind CSS. All rights reserved.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
                    <span className="text-gray-600">|</span>
                    <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
                    <span className="text-gray-600">|</span>
                    <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};


// --- MAIN APP COMPONENT ---
const App = () => {
    // Initialize dark mode state based on system preference or saved setting
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('theme');
            if (savedMode) {
                return savedMode === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    // Effect to apply the dark/light class to the HTML element
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="font-sans min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;