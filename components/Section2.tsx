
import React from 'react';

const Section2: React.FC = () => {
  const buttonStyle = {
    backgroundColor: '#32d09f',
    boxShadow: '0 0 16px 1px #32d09f96',
    color: '#0b0d0c'
  };
  
  const cardStyle = {
    maxWidth: '373px',
    backgroundImage: 'linear-gradient(#000 81%, #32d09f)',
  };

  const sectionStyle = {
    backgroundImage: "url('https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645fe2c88897146b22b30105_Group%2072%20(1).png')",
    backgroundPosition: '50% 0px',
    backgroundSize: 'cover',
  };

  const featureIconStyle: React.CSSProperties = {
    objectFit: 'cover',
    width: '30%',
    maxWidth: '45%',
    height: '30%',
    marginLeft: '-31px',
    marginTop: '5px',
    display: 'block',
  };

  const cardsData = [
    {
      topImage: "https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645fe905ee0fd034303b929f_Group%2074%20(1).png",
      title: "Make A Job Post Or Search",
      description: "There are hundreds of tried and tested closers to interview within our platform.",
      bottomImage: "https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645fe5eeee0fd0343039029b_Vector.png",
    },
    {
      topImage: "https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645fe93ac147b29d6a806df5_Group%2075%20(1).png",
      title: "Seamlessly Interview Closers",
      description: "Easily schedule an interview on your preferred platform with our qualified closers.",
      bottomImage: "https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645fe6783f5779469c74dadb_Vector-1.png",
    },
    {
      topImage: "https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/64602618c147b29d6aaf1f69_Frame%206%20(4).png",
      title: "Hire for a simple flat fee",
      description: "Closify doesn't charge a percentage or any other nonsense. You can hire reps for a flat fee with the click of a button.",
      bottomImage: "https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/645fe723f1704753082c2dd3_Vector-2.png",
    }
  ];

  return (
    <section 
      id="section2" 
      className="py-20 sm:py-24 text-slate-200"
      style={sectionStyle}
    >
      <div style={{ maxWidth: '1216px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10" style={{ color: '#0a0c0b' }}>
            Hiring with Closify is <span style={{ color: '#32d09f' }}>simple</span>
          </h2>
          <p className="mt-4 text-lg leading-6" style={{ color: '#333' }}>
            We make it easy to hire, onboard, and manage commission only sales reps. We do a lot of the heavy lifting for you, so that way you can focus on what business owners should focus on growing the business.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110"
              style={buttonStyle}
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 mx-auto"
              style={cardStyle}
            >
              <div className="px-6">
                <img style={featureIconStyle} className="" src={card.bottomImage} alt="Feature Icon" />
                <h3 className="text-white font-semibold" style={{ fontSize: '28px' }}>{card.title}</h3>
                <p className="mt-3 text-base text-white opacity-80">{card.description}</p>
              </div>
              <img className="h-56 w-full object-cover object-top mt-8" src={card.topImage} alt={`Illustration for ${card.title}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
