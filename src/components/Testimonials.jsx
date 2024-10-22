import React, { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = ({ quote, author, role, avatar }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-hive-blue-100">
    <p className="text-hive-blue-700 mb-4">"{quote}"</p>
    <div className="flex items-center">
      <Avatar className="h-12 w-12 mr-4">
        <AvatarImage src={avatar} alt={author} />
        <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-hive-blue-900">{author}</h4>
        <p className="text-sm text-hive-blue-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Agency Hive AI has transformed the way we manage our projects. It's a game-changer!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "/placeholder.svg"
    },
    {
      quote: "The AI-powered insights have helped us make data-driven decisions and improve our ROI.",
      author: "Michael Chen",
      role: "Agency Owner",
      avatar: "/placeholder.svg"
    },
    {
      quote: "Our team's productivity has skyrocketed since we started using Agency Hive AI.",
      author: "Emily Rodriguez",
      role: "Project Manager",
      avatar: "/placeholder.svg"
    }
  ];

  useEffect(() => {
    // Ensure the form embed script is loaded
    const script = document.createElement('script');
    script.src = 'https://link.agencybrain.ai/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-hive-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-hive-blue-900">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        {/* Form Embed */}
        <div className="max-w-3xl mx-auto mb-16">
          <iframe
            src="https://link.agencybrain.ai/widget/form/0G5xiEKRqityRl0uZmsX"
            style={{width:'100%', height:'500px', border:'none', borderRadius:'4px'}}
            id="inline-0G5xiEKRqityRl0uZmsX" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Waitlist"
            data-height="500"
            data-layout-iframe-id="inline-0G5xiEKRqityRl0uZmsX"
            data-form-id="0G5xiEKRqityRl0uZmsX"
            title="Waitlist"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;