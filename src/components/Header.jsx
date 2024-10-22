import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-hive-blue-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.webp" alt="Agency Hive AI Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-hive-blue-900">Agency Hive AI Teams and Tools</span>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
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