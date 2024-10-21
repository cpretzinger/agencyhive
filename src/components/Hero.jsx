import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Revolutionize Your Agency with AI</h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Harness the power of artificial intelligence to streamline your agency's workflow, boost productivity, and deliver exceptional results.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default Hero;