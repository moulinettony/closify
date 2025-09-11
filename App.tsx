import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import PlaceholderSection from './components/PlaceholderSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <PlaceholderSection
          id="section5"
          title="Section 5: How It Works"
          bgColor="bg-white"
          textColor="text-slate-800"
        />
        <PlaceholderSection
          id="section6"
          title="Section 6: Pricing"
          bgColor="bg-slate-100"
          textColor="text-slate-800"
        />
        <PlaceholderSection
          id="section7"
          title="Section 7: FAQ"
          bgColor="bg-white"
          textColor="text-slate-800"
        />
        <PlaceholderSection
          id="section8"
          title="Section 8: Get In Touch"
          bgColor="bg-indigo-600"
          textColor="text-white"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;