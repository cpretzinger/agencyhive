import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    toast.success("Form submitted successfully!");
  };

  return (
    <section className="relative py-20 bg-hive-blue-900">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Hire Your Team of AI Agents To Handle The Busy-Work That Slows You Down!
        </h1>
        <p className="text-lg mb-8 text-white max-w-2xl">
          Harness the power of artificial intelligence to streamline your agency's workflow, boost productivity, and deliver exceptional results.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md bg-white p-6 rounded-lg shadow-lg mt-12">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-hive-blue-900 text-left block">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <Label htmlFor="phone" className="text-hive-blue-900 text-left block">Phone</Label>
              <Input id="phone" type="tel" placeholder="Your Phone Number" required />
            </div>
            <div>
              <Label htmlFor="email" className="text-hive-blue-900 text-left block">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" required />
            </div>
            <Button type="submit" className="w-full bg-hive-yellow-500 text-hive-blue-900 hover:bg-hive-yellow-400">
              Start Your Free Trial
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;