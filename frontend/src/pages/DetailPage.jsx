import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Zap, Shield, Target, Clock, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { getItemById } from '../data/mockData';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getItemById(id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Item Not Found</h2>
          <Button onClick={() => navigate('/')} className="bg-purple-600 hover:bg-purple-500">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary': return 'from-yellow-500 to-orange-500';
      case 'Epic': return 'from-purple-500 to-pink-500';
      case 'Rare': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950/50 via-transparent to-purple-950/80 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-8 py-6 backdrop-blur-md bg-purple-950/30 border-b border-purple-500/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Button 
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
                OVERREALM
              </h1>
              <p className="text-sm text-purple-300">Season 10</p>
            </div>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-purple-800/30 rounded-2xl blur-2xl" />
              <div 
                className="relative rounded-2xl overflow-hidden border-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300"
                style={{
                  clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
                <div className="absolute top-6 right-6">
                  <Badge className={`bg-gradient-to-r ${getRarityColor(item.rarity)} text-white border-0 px-4 py-2 text-lg font-bold shadow-2xl`}>
                    {item.rarity}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-purple-700 text-white mb-4 px-4 py-1">
                  {item.category}
                </Badge>
                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  {item.title}
                </h1>
                <p className="text-xl text-purple-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Separator className="bg-purple-500/30" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {item.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <p className="text-sm text-purple-300 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-500 text-white font-bold border-2 border-purple-400 shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
                }}
              >
                <Star className="w-6 h-6 mr-2" />
                Claim Reward
              </Button>
            </div>
          </div>

          {/* Abilities Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Abilities & Effects</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {item.abilities.map((ability, index) => {
                const icons = [Zap, Shield, Target];
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg p-6 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                    style={{
                      clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-full bg-purple-600/80 backdrop-blur-sm border-2 border-purple-400 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <Badge variant="outline" className="text-purple-300 border-purple-500/50">
                          <Clock className="w-3 h-3 mr-1" />
                          {ability.cooldown}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{ability.name}</h3>
                      <p className="text-purple-200 text-sm leading-relaxed">{ability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Requirements & Lore */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Requirements */}
            <div 
              className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-xl p-8 border-2 border-purple-500/50"
              style={{
                clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Requirements</h2>
              </div>
              <ul className="space-y-3">
                {item.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="text-purple-200">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lore */}
            <div 
              className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-xl p-8 border-2 border-purple-500/50"
              style={{
                clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Lore</h2>
              <p className="text-purple-200 leading-relaxed italic">
                {item.lore}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailPage;