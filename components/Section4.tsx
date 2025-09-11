
import React from 'react';

const Section4: React.FC = () => {
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

  const sectionStyle: React.CSSProperties = {
    backgroundImage: "url('https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/64602e7d690df7d5dceb87f1_4.png')",
    backgroundPosition: '0%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  };

  return (
    <section
      id="section4"
      style={sectionStyle}
    >
      <div style={{ maxWidth: '1300px' }} className="mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
          <div className="text-left lg:col-span-2">
            <h2 className="mt-2 text-[28px] tracking-tight font-bold text-white md:text-[38px] md:leading-tight">
              We <span style={gradientTextStyle}>Verify</span> <br /> All Experience
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[#c3c3c3] md:mt-5">
              We make sales reps on our platform verify their past experience and total amount closed.
            </p>
            <div className="mt-8 flex justify-start">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
                style={buttonStyle}
              >
                Find Your Next Hire
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-3">
            <img
              className="max-w-[543px] float-right"
              src="https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/64600be16eeb2a8e192ee4e2_Group%2074%20(4).png"
              alt="Recruiting sales professionals"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;