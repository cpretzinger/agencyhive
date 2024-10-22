import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <div id="free-trial-form" className="py-20 bg-hive-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-hive-blue-900">Start Your Free Trial</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hive-blue-500" />
            </div>
            <Button type="submit" className="w-full bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400">
              Start Free Trial
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;