import React from "react";

const ProjectGrid = ({
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {React.Children.toArray(children).map((child) => (
              <div>{child}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
