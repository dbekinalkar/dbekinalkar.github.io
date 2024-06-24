import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLeftLong, faRightLong, faCircle as faCircle$1, faBriefcase, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const ThemeController = ({
  value,
  onChange
}) => {
  return /* @__PURE__ */ jsxs("label", { className: "cursor-pointer grid place-items-center", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        id: "theme-controller",
        type: "checkbox",
        className: "toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2",
        checked: value === "dark",
        onChange
      }
    ),
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "col-start-1 row-start-1 stroke-base-100 fill-base-100",
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
          /* @__PURE__ */ jsx("path", { d: "M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "svg",
      {
        className: "col-start-2 row-start-1 stroke-base-100 fill-base-100",
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
      }
    )
  ] });
};
const NavigationBar = ({
  value,
  onChange,
  children
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "navbar bg-base-100 sticky top-0 z-50 px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "navbar-start", children: /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
      /* @__PURE__ */ jsx("div", { tabIndex: 0, role: "button", className: "btn btn-ghost sm:hidden", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h8m-8 6h16"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx(
        "ul",
        {
          tabIndex: 0,
          className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
          children
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "navbar-center hidden sm:flex", children: /* @__PURE__ */ jsx("ul", { className: "menu menu-horizontal px-1", children }) }),
    /* @__PURE__ */ jsx("div", { className: "navbar-end", children: /* @__PURE__ */ jsx(ThemeController, { value, onChange }) })
  ] });
};
const content = {
  title: "Daniyal Bekinalkar",
  description: "Software Engineer"
};
const Hero = ({ id }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "hero min-h-screen scroll-mt-16",
      style: {
        backgroundImage: "url(images/hero.jpg)"
      },
      id,
      children: [
        /* @__PURE__ */ jsx("div", { className: "hero-overlay bg-opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "hero-content text-center text-neutral-content", children: /* @__PURE__ */ jsx("div", { className: "max-w-lg", children: /* @__PURE__ */ jsxs("div", { className: "backdrop-blur-lg rounded-box p-8", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-5 text-5xl font-bold", children: content.title }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl mb-8", children: content.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-8 justify-center", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://github.com/dbekinalkar",
                target: "_blank",
                className: "hover:text-secondary",
                children: /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-10 h-10", icon: faGithub })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/in/daniyal-bekinalkar/",
                target: "_blank",
                className: "hover:text-secondary",
                children: /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-10 h-10", icon: faLinkedin })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:daniyal.bekinalkar@gmail.com",
                target: "_blank",
                className: "hover:text-secondary",
                children: /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-10 h-10", icon: faEnvelope })
              }
            )
          ] })
        ] }) }) })
      ]
    }
  );
};
const AnimatedButton = ({
  children,
  className,
  onClick
}) => {
  const [effect, setEffect] = useState(false);
  const buttonClick = () => {
    setEffect(true);
    onClick();
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${className} ${effect && "animate-wiggle"}`,
      onClick: buttonClick,
      onAnimationEnd: () => setEffect(false),
      children
    }
  );
};
const ProjectCarousel = ({
  children,
  id
}) => {
  const scrollCarousel = (dir) => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.scrollTo({
        left: carousel.scrollLeft + dir * 320,
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-base-300 scroll-mt-16", id, children: /* @__PURE__ */ jsxs("div", { className: "container py-8 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-8 content-center items-center mb-8", children: [
      /* @__PURE__ */ jsxs(
        AnimatedButton,
        {
          className: "fa-layers fa-2x align-top",
          onClick: () => scrollCarousel(-1),
          children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "text-primary", icon: faCircle }),
            /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-5 h-5", icon: faLeftLong })
          ]
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-center pb-2", children: "Projects" }),
      /* @__PURE__ */ jsxs(
        AnimatedButton,
        {
          className: "fa-layers fa-2x align-top",
          onClick: () => scrollCarousel(1),
          children: [
            /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "text-primary", icon: faCircle }),
            /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-5 h-5", icon: faRightLong })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-8 mb-8", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "carousel carousel-center w-full pt-8 p-4 space-x-4 bg-neutral rounded-box touch-pan-x",
        id: "carousel",
        children: React.Children.toArray(children).map((child, index) => /* @__PURE__ */ jsx("div", { className: "carousel-item", children: child }, index))
      }
    ) })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "footer flex flex-col items-center p-4 bg-neutral text-neutral-content", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    "Made by Daniyal Bekinalkar",
    /* @__PURE__ */ jsx("span", { className: "border border-primary mx-2 h-4" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.github.com/dbekinalkar",
        target: "_blank",
        className: "link link-hover inline",
        children: "https://github.com/dbekinalkar"
      }
    )
  ] }) });
};
const Icon$1 = () => {
  return /* @__PURE__ */ jsxs("span", { className: "fa-layers fa-4x align-top", children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-16 h-16 text-primary", icon: faCircle$1 }),
    /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-6 h-6", icon: faBriefcase })
  ] });
};
const TimelineEvent$1 = ({
  date,
  position,
  company,
  children
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(Icon$1, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "timeline-end mb-10 ml-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "container lg:flex lg:flex-row-reverse justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono italic", children: date }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-black", children: position }),
          /* @__PURE__ */ jsx("div", { className: "text-md font-black", children: company })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divider" }),
      children
    ] })
  ] });
};
const ExperienceTimeline = ({ id }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-base-200 scroll-mt-16", id, children: /* @__PURE__ */ jsx("div", { className: "container py-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "mx-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-center mb-8", children: "Experience" }),
    /* @__PURE__ */ jsxs("ul", { className: "timeline timeline-snap-icon timeline-compact timeline-vertical max-w-md lg:max-w-xl mx-auto", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(
          TimelineEvent$1,
          {
            date: "July 2023 - September 2023",
            position: "Software Engineer Intern",
            company: "i4software",
            children: "i4software is a software company that focuses on developing mobile and web applications for clients."
          }
        ),
        /* @__PURE__ */ jsx("hr", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsx(
          TimelineEvent$1,
          {
            date: "August 2022 - May 2023",
            position: "Software Developer Intern",
            company: "Purdue Flutter Development Club",
            children: "The Purdue Flutter Development Club is a student organization that focuses on developing mobile applications using Flutter."
          }
        ),
        /* @__PURE__ */ jsx("hr", {})
      ] })
    ] })
  ] }) }) });
};
const Icon = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("span", { className: "fa-layers fa-4x align-top", children: [
    /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-16 h-16 text-primary", icon: faCircle$1 }),
    /* @__PURE__ */ jsx(FontAwesomeIcon, { className: "w-6 h-6", icon: faPencil })
  ] }) });
};
const TimelineEvent = ({
  date,
  position,
  company,
  children
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "timeline-middle", children: /* @__PURE__ */ jsx(Icon, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "timeline-end mb-10 ml-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "container lg:flex lg:flex-row-reverse justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono italic shrink-0", children: date }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-black shrink", children: position }),
          /* @__PURE__ */ jsx("div", { className: "text-md font-black", children: company })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divider" }),
      children
    ] })
  ] });
};
const EducationTimeline = ({ id }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-base-200 scroll-mt-16", id, children: /* @__PURE__ */ jsx("div", { className: "container py-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "mx-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-center mb-8", children: "Education" }),
    /* @__PURE__ */ jsxs("ul", { className: "timeline timeline-snap-icon timeline-compact timeline-vertical max-w-md lg:max-w-xl mx-auto", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(
          TimelineEvent,
          {
            date: "August 2022 - Present",
            position: "Bachelor of Science in Computer Science",
            company: "Purdue University",
            children: "Majored in Computer Science with a focus in Software Engineering and a minor in Mathematics."
          }
        ),
        /* @__PURE__ */ jsx("hr", {})
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsx(
          TimelineEvent,
          {
            date: "August 2018 - May 2022",
            position: "High School Diploma",
            company: "Glenbard North High School",
            children: "Graduated from Glenbard North High School and received the Illinois State Scholar Award."
          }
        ),
        /* @__PURE__ */ jsx("hr", {})
      ] })
    ] })
  ] }) }) });
};
const About = ({ id }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-base-200 py-8 scroll-mt-16", id, children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-center mb-8", children: "About Me" }),
    /* @__PURE__ */ jsxs("div", { className: "container py-4 px-8 max-w-md md:max-w-3xl flex flex-wrap md:flex-nowrap justify-center mx-auto gap-16 content-center items-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/profile.jpg",
          className: "max-w-sm rounded-lg shadow-2xl self-center w-60"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-lg mt-4 font-serif min-w-64 flex-grow", children: "I am a software engineer with a passion for about transforming ideas into impactful solutions. I am currently a student at Purdue University studying Computer Science. I specialize in full-stack web development and machine learning. I am constantly learning new technologies and frameworks to improve my skills." })
    ] })
  ] });
};
const Contact = ({ id }) => {
  return /* @__PURE__ */ jsxs("div", { className: "text-center bg-base-300 py-8 scroll-mt-16", id, children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "Contact" }),
    /* @__PURE__ */ jsx("h2", { className: "text-xl mb-8", children: "I'd love to connect with you." }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 container mx-auto", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.linkedin.com/in/daniyal-bekinalkar/",
          target: "_blank",
          className: "",
          children: [
            /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                className: "w-10 h-10 hover:text-secondary",
                icon: faLinkedin
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "Let's Connect" }),
            /* @__PURE__ */ jsx("p", { className: "link link-hover", children: "LinkedIn Profile" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "mailto:daniyal.bekinalkar@gmail.com",
          target: "_blank",
          className: "",
          children: [
            /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                className: "w-10 h-10 hover:text-secondary",
                icon: faEnvelope
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "Email me at" }),
            /* @__PURE__ */ jsx("p", { className: "link link-hover", children: "daniyal.bekinalkar@gmail.com" })
          ]
        }
      )
    ] })
  ] });
};
const AnimatedProject = ({
  title,
  description,
  technologies,
  image,
  link,
  inProgress,
  tooltip,
  onClick
}) => {
  const [flipped, setFlipped] = useState(false);
  const flip = () => {
    setFlipped(!flipped);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `w-80 h-64 bg-transparent ${tooltip && "tooltip"}`,
      onClick: () => {
        flip();
        onClick();
      },
      "data-tip": "Flip Me!",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative [transformStyle:preserve-3d] ${flipped && "[transform:rotateY(180deg)]"} w-full h-full duration-1000`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute [backfaceVisibility:hidden] w-full h-full", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                className: "rounded-lg w-full h-full object-cover shadow-lg"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full [transform:rotateY(180deg)] [backfaceVisibility:hidden] overflow:hidden", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "bg-gray-200 h-full w-full rounded-lg shadow-lg bg-cover bg-center",
                style: { backgroundImage: `url(${image})` },
                children: /* @__PURE__ */ jsx("div", { className: "hero-overlay bg-base-300 opacity-95 glass rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-4 h-full flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold mb-2", children: [
                      title,
                      inProgress && /* @__PURE__ */ jsx("div", { className: "badge badge-secondary ml-2", children: "IN PROGRESS" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "mb-2", children: description }),
                    link && /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: link,
                        target: "_blank",
                        className: "btn btn-primary btn-sm bg-opacity-100",
                        children: /* @__PURE__ */ jsx(
                          FontAwesomeIcon,
                          {
                            className: "",
                            icon: faRightLong
                          }
                        )
                      }
                    )
                  ] }),
                  technologies && /* @__PURE__ */ jsx("div", { className: "card-actions justify-end align-bottom flex-wrap-reverse", children: technologies.map((technology, index) => /* @__PURE__ */ jsx("div", { className: "badge badge-outline", children: technology }, index)) })
                ] }) })
              }
            ) })
          ]
        }
      )
    }
  );
};
const projects = [
  {
    title: "Basketball League Sim",
    description: "A website that allows users to simulate a basketball league and manage teams.",
    image: "images/basketball-league-sim.jpg",
    link: "https://github.com/dbekinalkar/bb-game-sim",
    technologies: ["React.js", "TailwindCSS", "Flask", "MongoDB"],
    inProgress: true
  },
  {
    title: "Pokecard",
    description: "A website that allows users to open Pokemon card packs and trade cards with other users, integrated with Discord.",
    image: "images/pokecard.jpg",
    link: "https://pokecard-discord.web.app",
    technologies: ["React.js", "TailwindCSS", "Express.js", "Firebase"],
    inProgress: true
  },
  {
    title: "Personal Website",
    description: "A website that showcases my projects and experience.",
    image: "images/personal-website.png",
    link: "https://dbekinalkar.github.io/",
    technologies: ["React.js", "TailwindCSS", "DaisyUI"]
  },
  {
    title: "Fitness Tracker",
    description: "A website that allows users to track their workouts and view their progress.",
    image: "images/fitness-tracker.png",
    link: "https://fitness-tracker-five-ebon.vercel.app/",
    technologies: ["React.js", "Next.js", "TailwindCSS"]
  },
  {
    title: "Happy Plants",
    description: "A mobile app that allows users to track their plants and receive notifications about them.",
    image: "images/happy-plants.png",
    link: "https://github.com/dbekinalkar/happy_plants",
    technologies: ["Flutter"]
  },
  {
    title: "Movie Searcher",
    description: "A website that allows users to search for movies and view details about them.",
    image: "images/movie-searcher.png",
    link: "https://movie-website-delta-one.vercel.app/",
    technologies: ["React.js", "Nextjs", "TailwindCSS", "TMDB API"]
  },
  {
    title: "Apartment Rating App",
    description: "A mobile app that allows users to rate apartments and view ratings of apartments.",
    image: "images/apartment-rating-app.png",
    link: "",
    technologies: ["Flutter", "Firebase", "Google Maps API"]
  },
  {
    title: "Walk Me Home",
    description: "A mobile app that allows users to safely watch over each other as they walk home.",
    image: "images/walk-me-home.png",
    link: "https://devpost.com/software/walkmehome-tq5cmv",
    technologies: ["Flutter", "Flask", "Google Maps API"]
  },
  {
    title: "Pokemon Card Discord Bot",
    description: "A Discord bot that allows users to open Pokemon card packs and trade cards with other users.",
    image: "images/pokemon-card-discord-bot.png",
    link: "https://github.com/dbekinalkar/Pokemon-Card-Discord-Bot",
    technologies: ["Python", "Discord.py", "MongoDB"]
  }
];
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      setTheme("dark");
    }
  }, []);
  const [tooltip, setTooltip] = useState(true);
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
  const toggleTheme = (event) => {
    console.log(event.target.checked);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const scrollTo = (id) => {
    return (e) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  };
  return /* @__PURE__ */ jsxs("div", { "data-theme": theme, children: [
    /* @__PURE__ */ jsxs(NavigationBar, { value: theme, onChange: toggleTheme, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#", onClick: scrollTo(""), children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#about", onClick: scrollTo("about"), children: "About" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#projects", onClick: scrollTo("projects"), children: "Projects" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#experience", onClick: scrollTo("experience"), children: "Experience" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#education", onClick: scrollTo("education"), children: "Education" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#contact", onClick: scrollTo("contact"), children: "Contact" }) })
    ] }),
    /* @__PURE__ */ jsx(Hero, { id: "" }),
    /* @__PURE__ */ jsx(About, { id: "about" }),
    /* @__PURE__ */ jsx(ProjectCarousel, { id: "projects", children: projects.map((project) => /* @__PURE__ */ jsx(
      AnimatedProject,
      {
        ...project,
        tooltip,
        onClick: toggleTooltip
      },
      project.title
    )) }),
    /* @__PURE__ */ jsx(ExperienceTimeline, { id: "experience" }),
    /* @__PURE__ */ jsx(EducationTimeline, { id: "education" }),
    /* @__PURE__ */ jsx(Contact, { id: "contact" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
