import React from 'react';
import { Zap, Globe, Phone, Cpu } from 'lucide-react';
import Counter from './Counter';

const FeatureCard = ({ icon, title, description, counter }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-hive-blue-100 hover:border-hive-blue-300 transition-colors">
    <div className="text-hive-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-hive-blue-900">{title}</h3>
    <p className="text-hive-blue-700">{description}</p>
    {counter && <Counter />}
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "AI-Powered Automation",
      description: "Automate repetitive tasks and focus on what matters most."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Toolkits",
      description: "Make the time vampires disappear. Over hours saved this year already:",
      counter: true
    },
    {
      icon: <Globe size={32} />,
      title: "Website Design, Deployment, and SEO Presence",
      description: "Boost your online visibility with expert web design and SEO strategies."
    },
    {
      icon: <Phone size={32} />,
      title: "CRM/AI Call Routing",
      description: "Use your lead analytics to predict in real-time your next best outbound call."
    }
  ];

  return (
    <section id="features" className="py-20 bg-hive-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold text-center text-hive-yellow-500 drop-shadow-lg border border-hive-yellow-500 inline-block px-4 py-0.7 rounded">
            Powerful Features 10x Your Freedom
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;