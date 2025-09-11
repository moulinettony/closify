import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-slate-400">
      <div style={{ maxWidth: '1216px' }} className="mx-auto p-6 lg:px-8">
        <div className="flex justify-center space-x-6">
        </div>
        <p className="text-center text-base text-[#c3c3c3]">
          &copy; {new Date().getFullYear()} Closify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;