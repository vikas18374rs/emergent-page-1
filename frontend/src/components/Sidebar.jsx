import React from 'react';
import { ChevronRight, Gift, Zap, Target } from 'lucide-react';
import { Button } from './ui/button';

const sidebarItems = [
  {
    id: 1,
    icon: Gift,
    title: 'Legendary Drop Pactspirit Selection',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=200',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Legendary Battle Pactspirit Selection Chest',
    image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=200',
  },
  {
    id: 3,
    icon: Target,
    title: 'Activation Medium: Motionless',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200',
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div 
        className="bg-gradient-to-b from-purple-900/50 to-purple-950/50 backdrop-blur-md border-2 border-purple-500/50 p-4 w-64"
        style={{
          clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
        }}
      >
        <div className="text-center mb-4 pb-4 border-b border-purple-500/30">
          <h3 className="text-xl font-bold text-white">OVERREALM</h3>
          <p className="text-xs text-purple-300 mt-1">Season 10</p>
        </div>

        <div className="space-y-3 mb-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600/30 backdrop-blur-sm border border-purple-400 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-purple-950/80">
                  <p className="text-xs text-white font-semibold text-center leading-tight">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Button 
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 border-2 border-purple-400 shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          style={{
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
          }}
        >
          MORE
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;