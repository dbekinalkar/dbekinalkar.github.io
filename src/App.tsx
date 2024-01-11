import React, { useState, useEffect } from "react";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
// import ProjectGrid from "./components/ProjectGrid";
import ProjectCarousel from "./components/ProjectCarousel";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import About from "./components/About";
import Contact from "./components/Contact";

// import image from "../public/images/pokemon-card-discord-bot.png";

const projects: IProject[] = [
  {
    title: "Basketball League Sim",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["React.js", "TailwindCSS", "Flask", "MongoDB"],
  },
  {
    title: "Pokecard",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["React.js", "TailwindCSS", "Express.js", "Firebase"],
  },
  {
    title: "Personal Website",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["React.js", "TailwindCSS", "DaisyUI"],
  },
  {
    title: "Fitness Tracker",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["React.js", "Next.js", "TailwindCSS"],
  },
  {
    title: "Movie Searcher",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["React.js", "Nextjs", "TailwindCSS", "TMDB API"],
  },
  {
    title: "Happy Plants",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["Flutter"],
  },
  {
    title: "Apartment Rating App",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
  },
  {
    title: "Walk Me Home",
    description: "Project Description",
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    link: "",
    technologies: ["Flutter", "Flask", "Google Maps API"],
  },
  {
    title: "Pokemon Card Discord Bot",
    description:
      "Project Description Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit ",
    image: "images/pokemon-card-discord-bot.png",
    link: "",
    technologies: ["Python", "Discord.py", "MongoDB"],
  },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // console.log(image);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.checked);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const scrollTo = (id: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  };

  return (
    <div data-theme={theme}>
      <NavigationBar value={theme} onChange={toggleTheme}>
        <li>
          <a href="/#" onClick={scrollTo("")}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={scrollTo("about")}>
            About
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={scrollTo("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#experience" onClick={scrollTo("experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="/#education" onClick={scrollTo("education")}>
            Education
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={scrollTo("contact")}>
            Contact
          </a>
        </li>
      </NavigationBar>
      <Hero id="" />
      <About id="about" />
      <ProjectCarousel id="projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ProjectCarousel>
      <ExperienceTimeline id="experience" />
      <EducationTimeline id="education" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
