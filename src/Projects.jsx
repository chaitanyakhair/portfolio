import React from 'react';

const ProjectCard = ({ icon, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block">
  <div className="flex items-center space-x-4 hover:-translate-y-2 cursor-pointer">
    <div className="bg-gray-900 rounded-lg p-2 flex-shrink-0 w-10 h-10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
    </div>
  </div>
  </a>
);

const ProjectsComponent = () => {
  const projects = [
    {
      icon: <span className="text-white text-xl">{"♘"}</span>,
      title: "Gambit",
      description: "A multiplayer chess game, which allows 2 players to play chess online.",
      link: "https://github.com/chaitanyakhair/chess"
    },
    {
      icon: <span className="text-white text-xl">🛪</span>,
      title: "Realtime tracker",
      description: "Realtime location tracking app which allows to see location of everyone connected at a time.",
      link: "https://github.com/chaitanyakhair/realtime_tracker"
    },
    {
      icon: <span className="text-white text-xl">☏</span>,
      title: "Camcall",
      description: "Video calling app with functionalities like Chatting, Recording, Scheduling meetings."
    },
    {
      icon: <span className="text-white text-xl">@</span>,
      title: "chaitanyakhair.me",
      description: "My personal website.",
      link: "https://github.com/chaitanyakhair/portfolio"
    },
    {
      icon: <span className="text-white text-xl">r</span>,
      title: "Refokus clone",
      description: "Clone of refokus.com's frontend.",
      link:"https://github.com/chaitanyakhair/refokus"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-4 sm:px-0 pt-10 sm:pt-14">
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