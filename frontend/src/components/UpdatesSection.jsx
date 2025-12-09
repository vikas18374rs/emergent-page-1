import React from 'react';
import { ShoppingBag, Shield, Sparkle } from 'lucide-react';

const updates = [
  {
    id: 1,
    icon: ShoppingBag,
    title: "Trading House optimized",
    description: "Faster item updates, shorter listing delays, and more accurate price checks."
  },
  {
    id: 2,
    icon: Shield,
    title: "Hardcore Mode exclusive events",
    description: "Rewards will now start 1 month after the season begins."
  },
  {
    id: 3,
    icon: Sparkle,
    title: "Mutate Corrosion",
    description: "Now available on unbound Legendary Gear."
  },
];

const UpdatesSection = () => {
  return (
    <section className="relative py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              <span className="inline-block px-8">Season Updates</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update) => {
            const Icon = update.icon;
            return (
              <div
                key={update.id}
                className="group relative p-8 bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-purple-600/80 backdrop-blur-sm border-2 border-purple-400 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{update.title}</h3>
                  <p className="text-purple-200 text-sm">{update.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;