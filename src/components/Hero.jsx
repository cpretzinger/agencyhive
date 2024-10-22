import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-hive-blue-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-hive-blue-900 leading-tight">
            Your AI Hive Does The Grunt Work
            <br />
            <span className="text-hive-yellow-500">While You Do What You Love</span>
          </h1>
          <p className="text-xl mb-8 text-hive-blue-700 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to streamline your agency's workflow, boost productivity, and deliver exceptional results.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="text-lg px-8 py-4 bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400 shadow-lg transition-all duration-300">
              Start Your Free Trial
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-16">
        <motion.img
          src="/placeholder.svg"
          alt="AI Hive Illustration"
          className="mx-auto object-cover rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Hero;