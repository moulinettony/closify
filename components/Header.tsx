
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="top-0 z-50">
      <div style={{ maxWidth: '1216px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="https://www.ecomvestors.com/_next/image?url=%2Flogos%2Fnew-logo.png&w=256&q=100"
                alt="Play video about commission-only sales reps"
                style={{ width: '200px', height: 'auto' }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
