import React from "react";

const ProjectCarousel = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div className="bg-base-300 scroll-mt-16" id={id}>
      <div className="container py-8 mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Projects</h1>
        <div className="mx-8 mb-8">
          <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
            {React.Children.toArray(children).map((child) => (
              <div className="carousel-item">{child}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
