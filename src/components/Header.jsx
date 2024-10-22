import React from 'react';
import { Button } from "@/components/ui/button";
import { BrainCircuit } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-hive-blue-700 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">Agency Hive AI</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-white hover:text-hive-yellow-300">Features</a></li>
            <li><a href="#testimonials" className="text-white hover:text-hive-yellow-300">Testimonials</a></li>
            <li><Button variant="outline" className="border-white text-white hover:bg-hive-blue-600">Sign In</Button></li>
            <li><Button className="bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400">Get Started</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;