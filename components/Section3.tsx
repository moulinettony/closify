
import React from 'react';

const Section3: React.FC = () => {
  const gradientTextStyle = {
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(#32d09f 58%, #005f42)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const buttonStyle = {
    backgroundColor: '#32d09f',
    boxShadow: '0 0 16px 1px #32d09f96',
    color: '#0b0d0c'
  };

  const sectionStyle = {
    backgroundImage: "url('https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/64602c3702edee1b700b6d4a_Group%2076%20(2)%201.png",
    backgroundPosition: '50% 0px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh',
  };

  return (
    <section 
      id="section3"
      className="py-16 sm:py-18 text-slate-200"
      style={sectionStyle}
    >
      <div style={{ maxWidth: '1300px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h3 className="text-base font-bold tracking-wide uppercase" style={{ color: '#32d09f' }}>Our Platform</h3>
          <h2 className="mt-2 text-[28px] tracking-tight font-bold text-white md:text-[38px] md:leading-tight">
            Manage Your Sales Team 
            <span style={gradientTextStyle}> All In One Place</span>
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[#c3c3c3] md:mt-5">
            Closify provides a comprehensive dashboard to track your sales team's performance, manage commissions, and access a pool of vetted sales talent on demand.
          </p>
          <div className="mt-8 flex justify-start">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Explore The Platform
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img 
            className="lg:w-[80%] mx-auto"
            src="https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/6460001af9653f35027207c0_Group%2056%20(2)-p-1600.png"
            alt="Sales performance dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;