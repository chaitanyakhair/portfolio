import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import pfp from "./assets/cat.jpg"


const ProfilePage = () => {
  return (
    <div className="bg-gray-100 font-sans flex items-center justify-center max-w-4xl mx-auto px-4 py-6 sm:py-8">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-screen-xl ">
        <div className=" mb-6 sm:mb-8">
          <img src={pfp} alt="Chaitanya Khair" className="rounded-full  mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24" />
          <h1 className="text-2xl sm:text-3xl font-bold">Chaitanya Khair</h1>
          <p className="text-gray-600 text-sm sm:text-base">Web Designer and Devloper</p>
          <div className="flex space-x-4 mt-3 sm:mt-4">
            <a href="#" className="text-gray-700 hover:text-black">
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>



        <div className="mb-6 sm:mb-8">
          <p className="text-gray-700 text-sm sm:text-base">
          Computer Engineering undergrad at SPPU. Detail-oriented React developer with a love for creating innovative and user-friendly web applications.
          My journey in tech has been driven by a desire to create intuitive and dynamic web applications that make a difference.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Experience</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { title: 'ceo', company: 'some random company', current: true },
              { title: 'ceo', company: 'some random company', current: false },
            ].map((job, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4"></div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {job.title}{' '}
                    {job.current && (
                      <span className="bg-gray-200 text-gray-700 text-xs sm:text-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                        PRESENT
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{job.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;