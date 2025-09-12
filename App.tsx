import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Testimonials from './components/Testimonials';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import ContactSection from './components/ContactSection';
import Starfield from './components/Starfield';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Starfield />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Testimonials />
        <Section7 />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;