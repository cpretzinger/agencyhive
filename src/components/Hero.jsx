import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('free-trial-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 text-center bg-gradient-to-b from-hive-blue-700 to-hive-blue-500">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-white">Your AI Hive Does The Grunt Work While You Do What You Love.</h1>
        <p className="text-xl mb-8 text-hive-blue-100 max-w-2xl mx-auto">
          Harness the power of artificial intelligence to streamline your agency's workflow, boost productivity, and deliver exceptional results.
        </p>
        <Button size="lg" className="text-lg px-8 py-4 bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400" onClick={scrollToForm}>Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default Hero;