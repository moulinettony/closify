import React from 'react';

const Section6: React.FC = () => {
  const buttonStyle = {
    backgroundColor: '#32d09f',
    boxShadow: '0 0 16px 1px #32d09f96',
    color: '#0b0d0c'
  };

  const gradientTextStyle = {
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(#32d09f 58%, #005f42)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  return (
    <section id="section6" className="py-16 sm:py-18 text-slate-200">
      <div style={{ maxWidth: '1216px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:leading-[1.3] font-bold tracking-tight text-white sm:text-5xl">
            Recruit, Hire & Manage<br />
            Verified Closers in  <span style={gradientTextStyle}>One Click.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Sign Up for Closify Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
