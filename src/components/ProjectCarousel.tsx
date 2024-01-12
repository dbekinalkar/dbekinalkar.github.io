import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import AnimatedButton from "./AnimatedButton";

const ProjectCarousel = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {

  const scrollCarousel = (dir: number) => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.scrollTo({
        left: carousel.scrollLeft + dir * 320,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-base-300 scroll-mt-16" id={id}>
      <div className="container py-8 mx-auto">
        <div className="flex justify-evenly content-center items-center mb-8">
          <AnimatedButton
            className="fa-layers fa-2x align-top"
            onClick={() => scrollCarousel(-1)}
          >
            <FontAwesomeIcon className="text-primary" icon={faCircle} />
            <FontAwesomeIcon className="w-5 h-5" icon={faLeftLong} />
          </AnimatedButton>

          <h1 className="text-5xl font-bold text-center pb-2">Projects</h1>
          <AnimatedButton
            className="fa-layers fa-2x align-top"
            onClick={() => scrollCarousel(1)}
          >
            <FontAwesomeIcon className="text-primary" icon={faCircle} />
            <FontAwesomeIcon className="w-5 h-5" icon={faRightLong} />
          </AnimatedButton>
        </div>
        <div className="mx-8 mb-8">
          <div
            className="carousel carousel-center w-full pt-8 p-4 space-x-4 bg-neutral rounded-box touch-pan-x"
            id="carousel"
          >
            {React.Children.toArray(children).map((child, index) => (
              <div key={index} className="carousel-item">
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
