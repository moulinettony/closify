import React, { useState, useEffect, useRef } from 'react';
import BrandSlider from './BrandSlider';

const Section1: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);


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
    position: 'relative',
    paddingBottom: '20px',
    overflow: 'hidden',
  };

  const backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 100%',
    zIndex: 0,
  };

  const playButtonOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#32d09fb3',
    borderRadius: '0.5rem',
    width: '125px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <section 
      id="section1"
      style={sectionStyle}
      className="pt-8"
    >
      <img
        src="https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645eceecba573d42a2d848f0_Group%2070%20(1).png"
        alt="Background decoration"
        style={backgroundStyle}
        className="hue-rotate-[45deg]"
      />
      <div className="flex justify-center z-1 relative">
        <img
          src="https://www.ecomvestors.com/_next/image?url=%2Flogos%2Fnew-logo.png&w=256&q=100"
          alt="Closify Logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div style={{ maxWidth: '1300px' }} className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 z-1 relative">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center pt-16">
          <div className="text-center lg:text-left lg:col-span-2 hue-rotate-[45deg]">
            <h2 className="text-base font-bold tracking-wide uppercase" style={{ color: '#32d09f' }}>Welcome to Closify.</h2>
            <h1 className="mt-2 text-[28px] tracking-tight font-bold text-white md:text-[38px] md:leading-tight">
              Hire <span style={gradientTextStyle}>Commission-Only </span>
              Sales Reps for your Business
            </h1>
            <p className="mt-3 max-w-2xl mx-auto lg:mx-0 text-lg text-[#c3c3c3] md:mt-5">
              Closify helps you recruit, hire, and manage high ticket, commission-only sales reps for your business.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
                style={buttonStyle}
              >
                Sign Up Now
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-3">
            <div 
              ref={videoRef}
              className={`wistia_responsive_padding rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out ${isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                {isPlaying ? (
                  <div
                    className="wistia_embed wistia_async_jgb3pqs49i autoPlay=true videoFoam=true playerColor=32d09f controlsVisibleOnLoad=true settingsControl=false wistiaButton=false plugin[wistia-branding][remove]=true"
                    style={{ height: '100%', position: 'relative', width: '100%' }}
                  >
                    &nbsp;
                  </div>
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }} onClick={() => setIsPlaying(true)}>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Play video about commission-only sales reps"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      className="hue-rotate-[45deg]"
                      style={playButtonOverlayStyle}
                      onMouseOver={e => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <BrandSlider />
        </div>
      </div>
    </section>
  );
};

export default Section1;