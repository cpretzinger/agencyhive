import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 bg-hive-blue-900">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Hire Your Team of AI Agents To Handle The Busy-Work That Slows You Down!
        </h1>
        <p className="text-lg mb-8 text-white max-w-2xl">
          Harness the power of artificial intelligence to streamline your agency's workflow, boost productivity, and deliver exceptional results.
        </p>
        <Button className="bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;