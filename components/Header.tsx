
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="top-0 z-50">
      <div style={{ maxWidth: '1216px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <svg className="h-8 w-8" style={{ color: '#32d09f' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.977M9 21v-1a6 6 0 016-6v-1a6 6 0 016 6v1z" />
              </svg>
              <span className="font-bold text-xl text-white">Closify</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
