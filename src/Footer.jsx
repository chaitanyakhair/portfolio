import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-gray-600">
      <div className="text-2xl mb-2">✌️</div>
      <p className="text-sm">
        © {currentYear} - Chaitanya Khair
      </p>
    </footer>
  );
};

export default Footer;