import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sword, Shield, Zap, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { characterClasses } from '../data/characterData';

const CharactersPage = () => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600';
      case 'Medium': return 'bg-yellow-600';
      case 'Hard': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getRoleIcon = (role) => {
    if (role.includes('Tank')) return Shield;
    if (role.includes('DPS')) return Sword;
    if (role.includes('Support')) return Star;
    return Zap;
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
                HERO CLASSES
              </h1>
              <p className="text-sm text-purple-300">Choose Your Legend</p>
            </div>
            <div className="w-32" />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Select Your Champion</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Each hero brings unique abilities and playstyles to the Overrealm. Master their powers and forge your legend.
            </p>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characterClasses.map((character) => {
              const RoleIcon = getRoleIcon(character.role);
              return (
                <div
                  key={character.id}
                  onClick={() => navigate(`/character/${character.id}`)}
                  className="group relative cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-purple-800/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div 
                    className="relative bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                    style={{
                      clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={character.thumbnail} 
                        alt={character.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className={`${getDifficultyColor(character.difficulty)} text-white border-0 px-3 py-1`}>
                          {character.difficulty}
                        </Badge>
                      </div>

                      {/* Role Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 rounded-full bg-purple-600/80 backdrop-blur-sm border-2 border-purple-400 flex items-center justify-center">
                          <RoleIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                      <p className="text-purple-300 text-sm mb-3">{character.title}</p>
                      <p className="text-purple-400 text-xs font-semibold mb-4">{character.role}</p>
                      <p className="text-purple-200 text-sm leading-relaxed line-clamp-3">
                        {character.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CharactersPage;