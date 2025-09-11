import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div style={{ maxWidth: '1216px' }} className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {/* Example Social Icons */}
        </div>
        <p className="mt-8 text-center text-base">
          &copy; {new Date().getFullYear()} Closify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;