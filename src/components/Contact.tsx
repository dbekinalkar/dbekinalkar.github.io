import React from "react";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ id }: { id: string }) => {
  return (
    <div className="text-center bg-base-300 py-8 scroll-mt-16" id={id}>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <h2 className="text-xl mb-8">I'd love to connect with you.</h2>
      <div className="flex justify-center gap-4 container mx-auto">
        <a
          href="https://www.linkedin.com/in/daniyal-bekinalkar/"
          target="_blank"
          className=""
        >
          <FontAwesomeIcon className="w-10 h-10 hover:text-secondary" icon={faLinkedin} />
          <h3 className="text-lg font-bold">Let's Connect</h3>
          <p className="link link-hover">LinkedIn Profile</p>
        </a>
        <a
          href="mailto:daniyal.bekinalkar@gmail.com"
          target="_blank"
          className=""
        >
          <FontAwesomeIcon className="w-10 h-10 hover:text-secondary" icon={faEnvelope} />
          <h3 className="text-lg font-bold">Email me at</h3>
          <p className="link link-hover">daniyal.bekinalkar@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
