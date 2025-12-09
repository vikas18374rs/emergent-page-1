import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Zap, Target } from 'lucide-react';

const rewards = [
  {
    id: 'legendary-drop-pactspirit',
    title: 'Legendary Drop Pactspirit Selection Chest',
    description: 'Free reward',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400',
  },
  {
    id: 'legendary-battle-pactspirit',
    title: 'Legendary Battle Pactspirit Selection Chest',
    description: 'Limited time',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400',
  },
  {
    id: 'activation-medium-motionless',
    title: 'Activation Medium: Motionless',
    description: 'Auto-battle unlock',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400',
  },
];

const RewardsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              <span className="inline-block px-8">SS10: A Fresh Start</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
          <p className="text-lg text-purple-200 mt-8 max-w-4xl mx-auto leading-relaxed">
            Free Legendary Drop Pactspirit for every new hand — complete objectives to claim a Legendary Battle Pactspirit Selection Chest and the Activation Medium: Motionless, freeing your hands for an easy grind!
          </p>
          <p className="text-sm text-purple-300 mt-4 italic">
            *[Activation Medium: Motionless]: Automatically cast the supported skill at the nearest enemy within 25m while standing still. Auto-used supported skills +10% additional damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward) => {
            const Icon = reward.icon;
            return (
              <div
                key={reward.id}
                className="group relative"
                onClick={() => navigate(`/detail/${reward.id}`)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-purple-800/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div 
                  className="relative bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                  }}
                >
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 font-bold"
                       style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
                    {reward.description}
                  </div>
                  
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={reward.image} 
                      alt={reward.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-purple-600/20 backdrop-blur-sm border-2 border-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-16 h-16 text-purple-200" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{reward.title}</h3>
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

export default RewardsSection;