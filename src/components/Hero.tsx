import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import backgroundImage from "../assets/images/hero.jpg";

const content = {
  title: "Daniyal Bekinalkar",
  description: "Software Engineer",
};

const Hero = ({ id }: { id: string }) => {
  return (
    <div
      className="hero min-h-screen scroll-mt-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      id={id}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <div className="backdrop-blur-lg rounded-box p-8">
            <h1 className="mb-5 text-5xl font-bold">{content.title}</h1>
            <p className="text-2xl mb-8">{content.description}</p>
            {/* <p className="mb-8">{content.image_credit}</p> */}
            <div className="flex gap-8 justify-center">
              <a href="https://github.com/dbekinalkar" target="_blank" className="hover:text-secondary">
                <FontAwesomeIcon className="w-10 h-10" icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/daniyal-bekinalkar/" target="_blank" className="hover:text-secondary">
                <FontAwesomeIcon className="w-10 h-10" icon={faLinkedin} />
              </a>
              <a href="mailto:daniyal.bekinalkar@gmail.com" target="_blank" className="hover:text-secondary">
                <FontAwesomeIcon className="w-10 h-10" icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
