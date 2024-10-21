import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-hive-blue-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="h-12 w-12"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hexagonal structure (beehive) */}
            <path
              d="M24 4L7 14V34L24 44L41 34V14L24 4Z"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Robot face */}
            <rect x="16" y="18" width="16" height="12" rx="2" fill="#FFD333" />
            <circle cx="20" cy="22" r="2" fill="#3399FF" />
            <circle cx="28" cy="22" r="2" fill="#3399FF" />
            <path d="M19 28H29" stroke="#3399FF" strokeWidth="2" strokeLinecap="round" />
            {/* Quantum entanglement representation */}
            <path
              d="M12 14C12 14 17 19 24 19C31 19 36 14 36 14"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              d="M12 34C12 34 17 29 24 29C31 29 36 34 36 34"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            {/* Circuit-like patterns (robotics) */}
            <path
              d="M7 24H13M35 24H41"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold text-hive-blue-900">AI HIVE</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-hive-blue-700 hover:text-hive-blue-500">Features</a></li>
            <li><a href="#testimonials" className="text-hive-blue-700 hover:text-hive-blue-500">Testimonials</a></li>
            <li><Button variant="outline" className="border-hive-blue-500 text-hive-blue-500 hover:bg-hive-blue-100">Sign In</Button></li>
            <li><Button className="bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400">Get Started</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;