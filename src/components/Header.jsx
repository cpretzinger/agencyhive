import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-hive-blue-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7Z"
              fill="#FFD333"
            />
            <path
              d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
              fill="#FFD333"
            />
            <path
              d="M19 14.5C20.6569 14.5 22 13.1569 22 11.5C22 9.84315 20.6569 8.5 19 8.5C17.3431 8.5 16 9.84315 16 11.5C16 13.1569 17.3431 14.5 19 14.5Z"
              fill="#FFD333"
            />
            <path
              d="M5 14.5C6.65685 14.5 8 13.1569 8 11.5C8 9.84315 6.65685 8.5 5 8.5C3.34315 8.5 2 9.84315 2 11.5C2 13.1569 3.34315 14.5 5 14.5Z"
              fill="#FFD333"
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