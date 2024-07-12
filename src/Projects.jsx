import React from 'react';

const ProjectCard = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-gray-900 rounded-lg p-2 flex-shrink-0 w-10 h-10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
    </div>
  </div>
);

const ProjectsComponent = () => {
  const projects = [
    {
      icon: <span className="text-white text-xl">{"<>"}</span>,
      title: "abc",
      description: "this is some random description.I'll fill it later."
    },
    {
      icon: <span className="text-white text-xl">□</span>,
      title: "abc",
      description: "this is some random description.I'll fill it later."
    },
    {
      icon: <span className="text-white text-xl">E</span>,
      title: "abc",
      description: "this is some random description.I'll fill it later."
    },
    {
      icon: <span className="text-white text-xl">✕</span>,
      title: "ck.com",
      description: "My personal websiter."
    },
    {
      icon: <span className="text-white text-xl">"</span>,
      title: "abc",
      description: "this is some random description.I'll fill it later."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;