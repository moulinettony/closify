import React, { useState } from 'react';
import Footer from './Footer';

// Single FAQ Item Component
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  const itemStyle: React.CSSProperties = {
    backgroundColor: '#31433db3',
    borderColor: '#baffd882',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '6px',
    boxShadow: '0 0 10px 1px #32d09f80',
  };
  
  return (
    <div style={itemStyle}>
      <button
        className="w-full flex justify-between items-center text-left text-lg p-6 font-medium text-white focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          <svg style={{ color: '#32d09f' }} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-in-out px-6 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-slate-300 pr-8">{answer}</p>
      </div>
    </div>
  );
};

// Main Section Component
const Section7: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a commission-only sales rep?",
      answer: "A commission-only sales representative is a salesperson who earns their income based solely on the sales they generate. They do not receive a base salary, which means their earnings are directly tied to their performance."
    },
    {
      question: "How does Closify vet sales reps?",
      answer: "We have a rigorous vetting process that includes reviewing their sales history, verifying their references, and conducting a series of interviews to assess their skills and professionalism. Only the top candidates are accepted into our network."
    },
    {
      question: "What is the fee for hiring a rep through Closify?",
      answer: "Closify charges a simple, flat fee for each successful hire. We believe in transparent pricing with no hidden costs or percentages. This allows you to budget effectively and get the best talent without any surprises."
    },
    {
      question: "Can I manage my entire sales team on the platform?",
      answer: "Yes! Our platform provides a comprehensive dashboard where you can track performance, manage commissions, and communicate with your sales team. It's an all-in-one solution for managing your commission-only sales force."
    }
  ];

  const sectionStyle = {
    backgroundImage: "url('https://cdn.prod.website-files.com/645d0d75e0db7f988dbf26c3/6460304202edee1b700d875c_Group%2077%20(1).png')",
    backgroundPosition: '0 0',
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <section id="section7" className="py-16 sm:py-18" style={sectionStyle}>
        <div style={{ maxWidth: '800px' }} className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl mb-6 text-center md:text-left">
            <p className="text-lg font-bold" style={{ color: '#32d09f' }}>
              Request Access
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: '#ffffffb8', fontSize: '13px' }}>
              Send any questions to <br />
              <a href="mailto:hello@tryclosify.com" className="font-medium text-white hover:text-[#32d09f] transition-colors duration-300">
                hello@tryclosify.com
              </a>
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Section7;