import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="block text-slate-700 hover:text-brand transition-colors duration-300"
  >
    {label}
  </Link>
);

const GlobalFooter = () => {
  return (
    <footer className="bg-slate-50 text-slate-700 mt-6">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Ақпарат</h4>
            <FooterLink to="/about-us" label="Біз туралы" />
            <FooterLink to="/" label="Контактілер" />
            <FooterLink to="/" label="Құпиялылық саясаты" />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Қолдау</h4>
            <FooterLink to="/" label="FAQs" />
          </div>
        </div>
        <div className="text-center mt-10">
          <p>Курсовая работа</p>
          <p>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
