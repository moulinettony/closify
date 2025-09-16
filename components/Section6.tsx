import React, { useRef, useEffect } from 'react';

const Section6: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && span1Ref.current && span2Ref.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionCenterY = sectionRect.top + sectionRect.height / 2;
        const viewportCenterY = window.innerHeight * 0.6; // Trigger point is 10% above the absolute center

        // Calculate the signed, normalized distance of the section's center from the viewport's center.
        // The value is 0 when the centers align, positive when the section is below, negative when above.
        const progress = (sectionCenterY - viewportCenterY) / viewportCenterY;

        // Only animate when the section is scrolling up into the center.
        // The animationProgress will be between 0 and 1 when below the center, and 0 when at or above the center.
        const animationProgress = Math.min(Math.max(progress, 0), 1);

        const maxTranslation = 150; // Max pixels to move
        
        // As animationProgress goes from 1 down to 0, the spans slide to the center.
        const translation1 = -animationProgress * maxTranslation;
        const translation2 = animationProgress * maxTranslation;

        span1Ref.current.style.transform = `translateX(${translation1}px)`;
        span2Ref.current.style.transform = `translateX(${translation2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial position on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="section6" ref={sectionRef} className="py-16 sm:py-18 text-slate-200">
      <div style={{ maxWidth: '1216px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:overflow-visible sm:leading-[1.3] font-bold tracking-tight text-white sm:text-5xl overflow-hidden py-4">
            <span ref={span1Ref} className="block whitespace-nowrap">
              Recruit, Hire & Manage
            </span>
            <span ref={span2Ref} className="block whitespace-nowrap">
              Verified Closers in <span style={gradientTextStyle}>One Click.</span>
            </span>
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