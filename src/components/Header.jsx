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
            <path
              d="M24 4L7 14V34L24 44L41 34V14L24 4Z"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 4L7 14L24 24L41 14L24 4Z"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 44V24"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 19V29M33 19V29"
              stroke="#FFD333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="14" r="3" fill="#FFD333" />
            <circle cx="15" cy="24" r="3" fill="#FFD333" />
            <circle cx="33" cy="24" r="3" fill="#FFD333" />
            <path
              d="M20 32C20 30.8954 20.8954 30 22 30H26C27.1046 30 28 30.8954 28 32V36C28 37.1046 27.1046 38 26 38H22C20.8954 38 20 37.1046 20 36V32Z"
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