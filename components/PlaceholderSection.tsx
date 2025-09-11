
import React from 'react';

interface PlaceholderSectionProps {
  id: string;
  title: string;
  bgColor: string;
  textColor: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ id, title, bgColor, textColor }) => {
  return (
    <section id={id} className={`py-20 sm:py-24 ${bgColor} ${textColor}`}>
      <div style={{ maxWidth: '1216px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-6 opacity-80">
            More content for this section will be available soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;