import React from 'react';

const Section5: React.FC = () => {
  const buttonStyle = {
    backgroundColor: '#32d09f',
    boxShadow: '0 0 16px 1px #32d09f96',
    color: '#0b0d0c'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#0f1110',
    border: '1px solid #32d09f54',
    backgroundImage: "url('https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645eceecba573d42a2d848f0_Group%2070%20(1).png')",
    backgroundPosition: '0 100%',
    backgroundSize: 'cover',
  };

  const featuredCardStyle: React.CSSProperties = {
    ...cardStyle,
    boxShadow: '0 0 32px 4px #32d09f70',
    backgroundColor: 'black'
  };

  return (
    <section id="section5" className="py-16 sm:py-18 text-slate-200">
      <div style={{ maxWidth: '1300px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-base font-bold tracking-wide uppercase" style={{ color: '#32d09f' }}>
            Pricing
          </h3>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#c3c3c3]">
            Join our network of elite sales professionals and get access to exclusive high-ticket opportunities.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl flex flex-col justify-between py-16 px-4 lg:p-20" style={cardStyle}>
            <div>
              <h4 className="text-xl font-bold text-white">Sales Reps</h4>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                $297
                <span className="text-3xl font-medium">/mo</span>
              </p>
              <ul role="list" className="mt-8 space-y-4 text-[#c3c3c3]">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Get Immediate access to the Closify job pool
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Keep Full Control of Your Profile
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Outreach directly to job listings
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Land a quality sales job and get better
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-10 block w-full text-center rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Get Started
            </a>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="wistia_responsive_padding rounded-2xl shadow-2xl overflow-hidden" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <div
                  className="wistia_embed wistia_async_jgb3pqs49i videoFoam=true playerColor=32d09f"
                  style={{ height: '100%', position: 'relative', width: '100%' }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="mt-8 text-left">
              <blockquote className="text-[18px] font-semibold text-white">
                "I hired a Setter and he did over $100K in his first month. Then I hired another and he had 13 sets his first day."
              </blockquote>
              <div className="mt-4 flex items-center gap-x-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/6644605f17dce1023620bbcd_Screenshot%202024-05-15%20001128.png"
                  alt="Avatar of KT Hustles"
                />
                <div>
                  <p className="text-sm font-bold" style={{ color: '#32d09f' }}>KT Hustles</p>
                  <p className="text-sm text-white">Agency Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 cards */}
        <div className="mt-32 lg:grid lg:grid-cols-3 gap-10 grid grid-cols-1">
          <div className="rounded-2xl flex flex-col justify-between py-16 px-4 lg:p-14" style={cardStyle}>
            <div>
              <h4 className="text-xl font-bold text-white">Sales Reps</h4>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                $297
                <span className="text-3xl font-medium">/mo</span>
              </p>
              <ul role="list" className="mt-8 space-y-4 text-[#c3c3c3]">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Get Immediate access to the Closify job pool
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Keep Full Control of Your Profile
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Outreach directly to job listings
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Land a quality sales job and get better
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-10 block w-full text-center rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Get Started
            </a>
          </div>

          <div className="relative rounded-2xl flex flex-col justify-between py-16 px-4 lg:p-14 lg:-mt-8" style={featuredCardStyle}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#32d09f] text-[#0b0d0c] text-sm font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
              BEST SELLER
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Sales Reps</h4>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                $297
                <span className="text-3xl font-medium">/mo</span>
              </p>
              <ul role="list" className="mt-8 space-y-4 text-[#c3c3c3]">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Get Immediate access to the Closify job pool
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Keep Full Control of Your Profile
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Outreach directly to job listings
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Land a quality sales job and get better
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-10 block w-full text-center rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Get Started
            </a>
          </div>
          
          <div className="rounded-2xl flex flex-col justify-between py-16 px-4 lg:p-14" style={cardStyle}>
            <div>
              <h4 className="text-xl font-bold text-white">Sales Reps</h4>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                $297
                <span className="text-3xl font-medium">/mo</span>
              </p>
              <ul role="list" className="mt-8 space-y-4 text-[#c3c3c3]">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Get Immediate access to the Closify job pool
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Keep Full Control of Your Profile
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Outreach directly to job listings
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none" style={{ color: '#32d09f' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                  Land a quality sales job and get better
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-10 block w-full text-center rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;