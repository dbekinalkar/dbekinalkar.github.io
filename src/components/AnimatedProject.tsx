import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

import React from "react";

interface IAnimatedProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  inProgress?: boolean;
  tooltip?: boolean;
  onClick: () => void;
}

const AnimatedProject: React.FC<IAnimatedProjectProps> = ({
  title,
  description,
  technologies,
  image,
  link,
  inProgress,
  tooltip,
  onClick,
}) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <button
      className={`w-80 h-64 bg-transparent ${tooltip && "tooltip"}`}
      onClick={() => {
        flip();
        onClick();
      }}
      data-tip="Flip Me!"
    >
      <div
        className={`relative [transformStyle:preserve-3d] ${
          flipped && "[transform:rotateY(180deg)]"
        } w-full h-full duration-1000`}
      >
        <div className="absolute [backfaceVisibility:hidden] w-full h-full">
          <img
            src={image}
            className="rounded-lg w-full h-full object-cover shadow-lg"
          />
        </div>

        <div className="absolute h-full w-full [transform:rotateY(180deg)] [backfaceVisibility:hidden] overflow:hidden">
          <div
            className="bg-gray-200 h-full w-full rounded-lg shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="hero-overlay bg-base-300 opacity-95 glass rounded-lg">
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="text-left">
                  <h2 className="text-xl font-bold mb-2">
                    {title}
                    {inProgress && (
                      <div className="badge badge-secondary ml-2">
                        IN PROGRESS
                      </div>
                    )}
                  </h2>
                  <p className="mb-2">{description}</p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      className="btn btn-primary btn-sm bg-opacity-100"
                    >
                      <FontAwesomeIcon
                        className=""
                        icon={faRightLong}
                      ></FontAwesomeIcon>
                    </a>
                  )}
                </div>
                {technologies && (
                  <div className="card-actions justify-end align-bottom">
                    {technologies.map((technology, index) => (
                      <div key={index} className="badge badge-outline">
                        {technology}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default AnimatedProject;
