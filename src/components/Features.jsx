import React from 'react';
import { Zap, Briefcase, Users, TrendingUp } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-hive-blue-100 hover:border-hive-blue-300 transition-colors">
    <div className="text-hive-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-hive-blue-900">{title}</h3>
    <p className="text-hive-blue-700">{description}</p>
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
      icon: <Briefcase size={32} />,
      title: "Project Management",
      description: "Streamline your workflow with intelligent project tracking."
    },
    {
      icon: <Users size={32} />,
      title: "Team Collaboration",
      description: "Foster seamless communication and collaboration within your team."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance Analytics",
      description: "Gain valuable insights with AI-driven performance metrics."
    }
  ];

  return (
    <section id="features" className="py-20 bg-hive-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-hive-blue-900">Powerful Features</h2>
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