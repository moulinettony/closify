import React from 'react';
import { BRAND_LOGOS } from '../constants';

const BrandSlider: React.FC = () => {
  const sliderContainerStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(349deg, #0000004a, #ffffff3d)',
    border: '1px solid #32d09f54',
    borderRadius: '9px',
    marginTop: '40px',
    paddingTop: '10px',
    paddingBottom: '10px'
  };
  
  return (
    <div 
      className="w-full flex flex-nowrap overflow-hidden hue-rotate-[45deg]"
      style={sliderContainerStyle}
    >
      <ul className="flex items-center justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll">
        {BRAND_LOGOS.map((logo, index) => (
          <li key={`logo-set1-${index}`}>{logo}</li>
        ))}
      </ul>
      <ul className="flex items-center justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {BRAND_LOGOS.map((logo, index) => (
          <li key={`logo-set2-${index}`}>{logo}</li>
        ))}
      </ul>
    </div>
  );
};

export default BrandSlider;