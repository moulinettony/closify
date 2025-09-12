import React, { useState, useEffect, useRef } from 'react';

// Reusable animated component for this section
interface AnimatedProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedWrapper: React.FC<AnimatedProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


const testimonialsData = [
  {
    videoId: 'jgb3pqs49i',
    title: '"A complete game-changer for our sales team!"',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    name: 'Anthony "Toozer" Matusiak',
    intro: 'Ecom & Business Solutions',
  },
  {
    videoId: 'jgb3pqs49i',
    title: '"We found the perfect commission-only rep in days."',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    name: 'Sarah Jennings',
    intro: 'Founder, SaaS Innovations',
  },
  {
    videoId: 'jgb3pqs49i',
    title: '"The quality of candidates on Closify is unmatched."',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D%3D&auto=format&fit=crop&w=1170&q=80',
    name: 'Michael Thompson',
    intro: 'CEO, Growth Partners',
  },
];

const Testimonials: React.FC = () => {
  const gradientTextStyle = {
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(#32d09f 58%, #005f42)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  return (
    <section id="testimonials" className="py-16 sm:py-18 text-slate-200">
      <div style={{ maxWidth: '1300px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by <span style={gradientTextStyle}>Top Performers</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#c3c3c3]">
            Hear directly from business owners who have transformed their sales teams with Closify.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <AnimatedWrapper key={index} delay={index * 150}>
              <div style={cardStyle}>
                <div className="wistia_responsive_padding rounded-2xl shadow-2xl overflow-hidden" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                    <div
                      className={`wistia_embed wistia_async_${testimonial.videoId} videoFoam=true playerColor=32d09f`}
                      style={{ height: '100%', position: 'relative', width: '100%' }}
                    >
                      &nbsp;
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg font-semibold text-white mt-4 text-center">
                  {testimonial.title}
                </blockquote>
                <div className="mt-4 flex items-center justify-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                  />
                  <div className="text-left">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm" style={{ color: '#32d09f' }}>{testimonial.intro}</p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;