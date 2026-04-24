import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center py-8 px-8 md:px-16 border-t border-gray-100 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="mb-4 md:mb-0">
        <strong className="text-blue-900 text-lg">RoiScholar</strong>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
        <a href="#privacy" className="text-gray-400 text-sm font-medium hover:text-blue-900 transition-colors">Privacy Policy</a>
        <a href="#terms" className="text-gray-400 text-sm font-medium hover:text-blue-900 transition-colors">Terms of Service</a>
        <a href="#security" className="text-gray-400 text-sm font-medium hover:text-blue-900 transition-colors">Security</a>
        <a href="#help" className="text-gray-400 text-sm font-medium hover:text-blue-900 transition-colors">Help Center</a>
      </div>
      <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} RoiScholar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
