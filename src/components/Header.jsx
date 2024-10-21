import React from 'react';
import { Button } from "@/components/ui/button";
import { BrainCircuit } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Agency Hive AI</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
            <li><Button variant="outline">Sign In</Button></li>
            <li><Button>Get Started</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;