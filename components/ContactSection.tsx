import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const countries = [
  { name: 'Algeria', code: '+213', iso: 'dz' },
  { name: 'Bahrain', code: '+973', iso: 'bh' },
  { name: 'Egypt', code: '+20', iso: 'eg' },
  { name: 'France', code: '+33', iso: 'fr' },
  { name: 'Germany', code: '+49', iso: 'de' },
  { name: 'Iraq', code: '+964', iso: 'iq' },
  { name: 'Italy', code: '+39', iso: 'it' },
  { name: 'Jordan', code: '+962', iso: 'jo' },
  { name: 'Kuwait', code: '+965', iso: 'kw' },
  { name: 'Lebanon', code: '+961', iso: 'lb' },
  { name: 'Morocco', code: '+212', iso: 'ma' },
  { name: 'Netherlands', code: '+31', iso: 'nl' },
  { name: 'Oman', code: '+968', iso: 'om' },
  { name: 'Palestine', code: '+970', iso: 'ps' },
  { name: 'Qatar', code: '+974', iso: 'qa' },
  { name: 'Saudi Arabia', code: '+966', iso: 'sa' },
  { name: 'Spain', code: '+34', iso: 'es' },
  { name: 'Syria', code: '+963', iso: 'sy' },
  { name: 'Tunisia', code: '+216', iso: 'tn' },
  { name: 'Turkey', code: '+90', iso: 'tr' },
  { name: 'United Arab Emirates', code: '+971', iso: 'ae' },
  { name: 'United Kingdom', code: '+44', iso: 'gb' },
  { name: 'Yemen', code: '+967', iso: 'ye' },
];

const getFlagUrl = (isoCode: string) => `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${isoCode}.svg`;

const defaultCountry = countries.find(c => c.iso === 'ma') || countries[0];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: defaultCountry.code,
    phone: '',
    revenue: '',
    reps: '',
    challenge: '',
    isReady: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isPhoneGroupFocused, setIsPhoneGroupFocused] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsImageVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const currentImageRef = imageRef.current;
    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setFormData(prevState => ({ ...prevState, countryCode: country.code }));
    setIsDropdownOpen(false);
  };

  const handlePhoneFocus = () => {
    setIsPhoneGroupFocused(true);
  };

  const handlePhoneBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsPhoneGroupFocused(false);
    }
  };

  const validateForm = (): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formData.revenue) newErrors.revenue = 'Please select your monthly revenue.';
    if (!formData.reps) newErrors.reps = 'Please select how many reps you are looking to hire.';
    if (!formData.challenge) newErrors.challenge = 'Please select your main sales challenge.';
    if (!formData.isReady) newErrors.isReady = 'You must confirm you are ready to proceed.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const { countryCode, phone, ...restOfData } = formData;
    const submissionData = {
      ...restOfData,
      Phone: `${countryCode} ${phone}`
    };

    console.log('Form submitted:', submissionData);
    setShowSuccessMessage(true);
  };

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

  const inputStyle = "h-12 w-full bg-[#1c1c1c] text-white border border-[#32d09f54] rounded-md p-3 focus:ring-2 focus:ring-[#32d09f] focus:outline-none transition";
  const phoneInputStyle = "h-12 w-full bg-[#1c1c1c] text-white border border-l-0 border-[#32d09f54] rounded-r-md p-3 focus:outline-none transition";

  const dropdownButtonStyle = "h-12 bg-[#1c1c1c] text-white border border-r-0 border-[#32d09f54] rounded-l-md px-4 focus:outline-none transition text-base flex items-center gap-2";
  const dropdownMenuStyle = "absolute z-10 top-full mt-1 w-max bg-[#1c1c1c] border border-[#32d09f54] rounded-md shadow-lg max-h-60 overflow-y-auto";
  const dropdownItemStyle = "px-4 py-2 text-white hover:bg-[#32d09f] hover:text-[#0b0d0c] cursor-pointer flex items-center gap-2";

  const radioLabelStyle = "flex items-center text-[#c3c3c3] cursor-pointer";
  const radioInputStyle = "hidden peer";
  const radioSpanStyle = "w-5 h-5 border-2 border-[#32d09f80] rounded-full flex-shrink-0 peer-checked:bg-[#32d09f] transition mr-1";
  const errorTextStyle = "text-red-500 text-sm mt-1";

  return (
    <>
      <section id="contact" className="py-16 sm:py-18">
        <div style={{ maxWidth: '1300px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h3 className="text-base font-bold tracking-wide uppercase" style={{ color: '#32d09f' }}>Get Started</h3>
              <h2 className="mt-2 text-[28px] tracking-tight font-bold text-white md:text-[38px] md:leading-tight">
                Ready to <span style={gradientTextStyle}>Scale</span> Your Sales?
              </h2>
              <p className="mt-3 max-w-2xl mx-auto lg:mx-0 text-lg text-[#c3c3c3] md:mt-5">
                Fill out the form to get in touch with our team. We'll help you find the perfect commission-only sales reps to drive your business forward.
              </p>
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Sales team collaborating in a modern office"
                className={`mt-6 rounded-2xl shadow-lg w-full h-auto object-cover transition-all duration-1000 ease-out ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              />
            </div>

            <div className="mt-12 lg:mt-0">
              {showSuccessMessage ? (
                <div
                  className="h-full min-h-[500px]"
                  aria-live="polite"
                >
                  <div className="bg-[#1c1c1c] border border-[#32d09f] rounded-lg p-8 text-center flex flex-col items-center justify-center animate-fade-in">
                    <style>
                      {`
                    @keyframes fade-in {
                      from { opacity: 0; transform: translateY(10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                      animation: fade-in 0.5s ease-out forwards;
                    }
                  `}
                    </style>
                    <svg className="w-16 h-16 text-[#32d09f] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-2">Submission Successful!</h3>
                    <p className="text-[#c3c3c3]">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[#c3c3c3] mb-2 text-lg">Full Name</label>
                      <input type="text" name="name" id="name" required className={inputStyle} value={formData.name} onChange={handleChange} placeholder="Enter your full name" aria-label="Name" />
                      {errors.name && <p className={errorTextStyle}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[#c3c3c3] mb-2 text-lg">Phone Number</label>
                      <div
                        className={`flex items-center rounded-md transition-shadow duration-200 ${isPhoneGroupFocused ? 'ring-2 ring-[#32d09f]' : ''}`}
                        onFocus={handlePhoneFocus}
                        onBlur={handlePhoneBlur}
                      >
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            className={dropdownButtonStyle}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            aria-haspopup="listbox"
                            aria-expanded={isDropdownOpen}
                            aria-label="Select country code"
                          >
                            <img src={getFlagUrl(selectedCountry.iso)} alt={`${selectedCountry.name} flag`} className="w-6 h-auto" />
                            <span>{selectedCountry.code}</span>
                          </button>
                          {isDropdownOpen && (
                            <ul className={dropdownMenuStyle} role="listbox">
                              {countries.map((country) => (
                                <li
                                  key={country.name}
                                  className={dropdownItemStyle}
                                  onClick={() => handleCountrySelect(country)}
                                  role="option"
                                  aria-selected={selectedCountry.name === country.name}
                                >
                                  <img src={getFlagUrl(country.iso)} alt={`${country.name} flag`} className="w-6 h-auto" />
                                  <span>{country.name} ({country.code})</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <input type="tel" name="phone" id="phone" required className={phoneInputStyle} value={formData.phone} onChange={handleChange} placeholder="612 345 678" aria-label="Phone" />
                      </div>
                      {errors.phone && <p className={errorTextStyle}>{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Radio Questions */}
                  <fieldset className="space-y-4">
                    <legend className="block text-[#c3c3c3] mb-2 text-lg">What is your monthly revenue?</legend>
                    <div className="flex gap-4 md:space-y-0 flex-wrap">
                      <label className={radioLabelStyle}>
                        <input type="radio" name="revenue" value="<50k" required checked={formData.revenue === '<50k'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>&lt;$50k</span>
                      </label>
                      <label className={radioLabelStyle}>
                        <input type="radio" name="revenue" value="50k-100k" checked={formData.revenue === '50k-100k'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>$50k - $100k</span>
                      </label>
                      <label className={radioLabelStyle}>
                        <input type="radio" name="revenue" value=">100k" checked={formData.revenue === '>100k'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>&gt;$100k</span>
                      </label>
                    </div>
                    {errors.revenue && <p className={errorTextStyle}>{errors.revenue}</p>}
                  </fieldset>

                  <fieldset className="space-y-4">
                    <legend className="block text-[#c3c3c3] mb-2 text-lg">How many sales reps are you looking to hire?</legend>
                    <div className="flex gap-4 md:space-y-0 flex-wrap">
                      <label className={radioLabelStyle}>
                        <input type="radio" name="reps" value="1-2" required checked={formData.reps === '1-2'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>1-2</span>
                      </label>
                      <label className={radioLabelStyle}>
                        <input type="radio" name="reps" value="3-5" checked={formData.reps === '3-5'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>3-5</span>
                      </label>
                      <label className={radioLabelStyle}>
                        <input type="radio" name="reps" value="5+" checked={formData.reps === '5+'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>5+</span>
                      </label>
                    </div>
                    {errors.reps && <p className={errorTextStyle}>{errors.reps}</p>}
                  </fieldset>

                  <fieldset className="space-y-4">
                    <legend className="block text-[#c3c3c3] mb-2 text-lg">What is your main sales challenge?</legend>
                    <div className="flex gap-4 md:space-y-0 flex-wrap">
                      <label className={radioLabelStyle}>
                        <input type="radio" name="challenge" value="Lead Generation" required checked={formData.challenge === 'Lead Generation'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>Lead Generation</span>
                      </label>
                      <label className={radioLabelStyle}>
                        <input type="radio" name="challenge" value="Closing Deals" checked={formData.challenge === 'Closing Deals'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>Closing Deals</span>
                      </label>
                      <label className={radioLabelStyle}>
                        <input type="radio" name="challenge" value="Team Management" checked={formData.challenge === 'Team Management'} onChange={handleChange} className={radioInputStyle} />
                        <span className={radioSpanStyle}></span>
                        <span>Team Management</span>
                      </label>
                    </div>
                    {errors.challenge && <p className={errorTextStyle}>{errors.challenge}</p>}
                  </fieldset>

                  <div className="pt-3">
                    <label htmlFor="isReady" className="flex items-start text-[#c3c3c3] cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        name="isReady"
                        id="isReady"
                        required
                        checked={formData.isReady}
                        onChange={handleChange}
                        className="hidden peer"
                        aria-describedby="isReady-description"
                      />
                      <span className="w-5 h-5 border-2 border-[#32d09f80] rounded flex-shrink-0 peer-checked:bg-[#32d09f] transition mr-3 mt-0.5 flex items-center justify-center">
                        <svg className={`w-3 h-3 text-[#0b0d0c] ${formData.isReady ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span id="isReady-description">I am absolutely sure that I am ready and have enough capital, and I am waiting for a call from the Ecomvestors team for more information.</span>
                    </label>
                    {errors.isReady && <p className={errorTextStyle}>{errors.isReady}</p>}
                  </div>

                  <div>
                    <button type="submit" className="rounded-md border border-transparent px-8 py-3 text-sm font-medium transform hover:-translate-y-0.5 transition hover:brightness-110" style={buttonStyle}>
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;