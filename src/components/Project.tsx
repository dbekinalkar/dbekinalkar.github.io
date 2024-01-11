import React from "react";

const Project = ({
  title,
  description,
  technologies,
  image,
  link,
}: IProject) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-gray-200 w-96 h-64 rounded-lg shadow-lg bg-cover bg-center group"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-base-300 opacity-95 glass rounded-lg invisible group-hover:visible ">
        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-neutral-content">{description}</p>
          </div>
          <div className="card-actions justify-end align-bottom">
            {technologies &&
              technologies.map((technology) => (
                <div className="badge badge-outline">{technology}</div>
              ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
