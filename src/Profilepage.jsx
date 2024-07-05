import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <img src="/api/placeholder/100/100" alt="Chaitanya Khair" className="rounded-full mx-auto mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24" />
          <h1 className="text-2xl sm:text-3xl font-bold">Chaitanya Khair</h1>
          <p className="text-gray-600 text-sm sm:text-base">Engineer & Designer</p>
          <div className="flex justify-center space-x-4 mt-3 sm:mt-4">
            <a href="#" className="text-gray-700 hover:text-black">
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        <nav className="mb-6 sm:mb-8">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {['About', 'Blogs', 'Uses', 'Newsletter', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base ${
                    item === 'About'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-6 sm:mb-8">
          <p className="text-gray-700 text-center text-sm sm:text-base">
          Computer Engineering undergrad at SPPU. Detail-oriented React developer with a love for creating innovative and user-friendly web applications.
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