import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Only increment once per user using localStorage
    if (!localStorage.getItem('hasVisited')) {
      setVisitorCount(prev => prev + 1); // Increment count
      localStorage.setItem('hasVisited', 'true'); // Mark as visited
    } else {
      setVisitorCount(prev => prev); // Keep the same count for returning users
    }
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Visitor Count */}
          <p className="text-green-400 mb-4 font-semibold">
            {visitorCount} user{visitorCount !== 1 ? 's' : ''} have visited this page
          </p>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Ayush Parwal. Made with <Heart className="inline-block w-4 h-4 text-red-500" /> and Coffee☕.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
