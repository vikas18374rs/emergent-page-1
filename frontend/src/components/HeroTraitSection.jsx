import React from 'react';
import { Sparkles, Flame, Zap } from 'lucide-react';

const HeroTraitSection = () => {
  return (
    <section className="relative py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              <span className="inline-block px-8">New Hero Trait:</span>
            </h2>
            <h3 className="text-4xl font-bold text-purple-300">Creative Genius</h3>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/20 to-purple-600/20 rounded-2xl blur-2xl" />
          <div 
            className="relative bg-gradient-to-br from-purple-900/30 to-purple-950/30 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-purple-500/50 p-8"
            style={{
              clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800" 
                  alt="Creative Genius"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent rounded-lg" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-purple-950/50 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Inspiration Engine</h4>
                    <p className="text-purple-200">
                      The Creative Genius feeds his Inspiration Engine a maelstrom of ideas, preparing for the coming Eureka moment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-950/50 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <Flame className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Pure Ingenuity</h4>
                    <p className="text-purple-200 italic">
                      "A new peak of ingenuity! What I have made here... it is pure art!"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-950/50 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <Zap className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Breakthrough Power</h4>
                    <p className="text-purple-200">
                      Unlock devastating combo skills and creative talent combinations that redefine the battlefield.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTraitSection;