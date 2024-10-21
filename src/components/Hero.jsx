import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 text-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="AI robot examining a honeycomb"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-white">Revolutionize Your Agency with AI</h1>
        <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
          Harness the power of artificial intelligence to streamline your agency's workflow, boost productivity, and deliver exceptional results.
        </p>
        <Button size="lg" className="text-lg px-8 py-4 bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400">Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default Hero;