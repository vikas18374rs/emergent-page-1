import React from 'react';
import { MapPin, TrendingUp, Award } from 'lucide-react';

const SeasonalMechanicSection = () => {
  return (
    <section className="relative py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              <span className="inline-block px-8">New Seasonal Mechanic:</span>
            </h2>
            <h3 className="text-4xl font-bold text-purple-300">Overrealm</h3>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/20 to-purple-600/20 rounded-2xl blur-2xl" />
          <div 
            className="relative rounded-2xl overflow-hidden border-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300"
            style={{
              clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551780197-6c7e69091d5c?w=1400" 
              alt="Overrealm Gameplay"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <p className="text-2xl font-bold text-white">
                Venture through the Overrealm, reap abundant treasures!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalMechanicSection;