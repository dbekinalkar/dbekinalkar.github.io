import React, { useState, useEffect } from "react";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
// import ProjectGrid from "./components/ProjectGrid";
import ProjectCarousel from "./components/ProjectCarousel";
// import Project from "./components/Project";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedProject from "./components/AnimatedProject";

// import image from "../public/images/pokemon-card-discord-bot.png";

const projects: IProject[] = [
  {
    title: "Basketball League Sim",
    description:
      "A website that allows users to simulate a basketball league and manage teams.",
    image: "images/basketball-league-sim.jpg",
    link: "https://github.com/dbekinalkar/bb-game-sim",
    technologies: ["React.js", "TailwindCSS", "Flask", "MongoDB"],
    inProgress: true,
  },
  {
    title: "Pokecard",
    description:
      "A website that allows users to open Pokemon card packs and trade cards with other users, integrated with Discord.",
    image: "images/pokecard.jpg",
    link: "https://pokecard-discord.web.app",
    technologies: ["React.js", "TailwindCSS", "Express.js", "Firebase"],
    inProgress: true,
  },
  {
    title: "Personal Website",
    description: "A website that showcases my projects and experience.",
    image: "images/personal-website.png",
    link: "https://dbekinalkar.github.io/",
    technologies: ["React.js", "TailwindCSS", "DaisyUI"],
  },
  {
    title: "Fitness Tracker",
    description:
      "A website that allows users to track their workouts and view their progress.",
    image: "images/fitness-tracker.png",
    link: "https://fitness-tracker-five-ebon.vercel.app/",
    technologies: ["React.js", "Next.js", "TailwindCSS"],
  },
  {
    title: "Happy Plants",
    description:
      "A mobile app that allows users to track their plants and receive notifications about them.",
    image: "images/happy-plants.png",
    link: "https://github.com/dbekinalkar/happy_plants",
    technologies: ["Flutter"],
  },
  {
    title: "Movie Searcher",
    description:
      "A website that allows users to search for movies and view details about them.",
    image: "images/movie-searcher.png",
    link: "https://movie-website-delta-one.vercel.app/",
    technologies: ["React.js", "Nextjs", "TailwindCSS", "TMDB API"],
  },
  {
    title: "Apartment Rating App",
    description:
      "A mobile app that allows users to rate apartments and view ratings of apartments.",
    image: "images/apartment-rating-app.png",
    link: "",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
  },
  {
    title: "Walk Me Home",
    description:
      "A mobile app that allows users to safely watch over each other as they walk home.",
    image: "images/walk-me-home.png",
    link: "https://devpost.com/software/walkmehome-tq5cmv",
    technologies: ["Flutter", "Flask", "Google Maps API"],
  },
  {
    title: "Pokemon Card Discord Bot",
    description:
      "A Discord bot that allows users to open Pokemon card packs and trade cards with other users.",
    image: "images/pokemon-card-discord-bot.png",
    link: "https://github.com/dbekinalkar/Pokemon-Card-Discord-Bot",
    technologies: ["Python", "Discord.py", "MongoDB"],
  },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      setTheme("dark");
    }
  }, []);

  const [tooltip, setTooltip] = useState<boolean>(true);

  const toggleTooltip = () => {
    setTooltip(false);
  };

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
          <a href="/#projects" onClick={scrollTo("projects")}>
            Projects
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
          <AnimatedProject
            key={project.title}
            {...project}
            tooltip={tooltip}
            onClick={toggleTooltip}
          />
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
