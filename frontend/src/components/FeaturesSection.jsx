import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Users, Wand2 } from 'lucide-react';

const features = [
  {
    id: 'ethereal-prisms',
    icon: Layers,
    title: 'Ethereal Prisms unlock ultimate talent customization',
    description: 'Reforge your talents with Ethereal Prisms and create unique build combinations.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600',
  },
  {
    id: 'community-kismet',
    icon: Users,
    title: 'New Kismet Unfolds with Community Creativity',
    description: 'Discover community-created content and share your own creative builds.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
  },
  {
    id: 'combo-skill-system',
    icon: Wand2,
    title: 'Brand-new Combo Skill System',
    description: 'Break the limits with innovative combo skills for even richer gameplay.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              <span className="inline-block px-8">Refine and Adapt</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-purple-800/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div 
                  className="relative bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600/80 backdrop-blur-sm border-2 border-purple-400 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-purple-200 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;