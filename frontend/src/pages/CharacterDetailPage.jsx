import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Target, Flame, Star, TrendingUp, TrendingDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Separator } from '../components/ui/separator';
import { getCharacterById } from '../data/characterData';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = getCharacterById(id);

  if (!character) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Character Not Found</h2>
          <Button onClick={() => navigate('/characters')} className="bg-purple-600 hover:bg-purple-500">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Characters
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600';
      case 'Medium': return 'bg-yellow-600';
      case 'Hard': return 'bg-red-600';
      default: return 'bg-gray-600';
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
              onClick={() => navigate('/characters')}
              variant="ghost"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Characters
            </Button>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
                {character.name}
              </h1>
              <p className="text-sm text-purple-300">{character.title}</p>
            </div>
            <div className="w-32" />
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
                  src={character.image} 
                  alt={character.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <Badge className={`${getDifficultyColor(character.difficulty)} text-white border-0 px-4 py-2 text-lg font-bold shadow-2xl`}>
                    {character.difficulty}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-purple-700 text-white mb-4 px-4 py-1">
                  {character.role}
                </Badge>
                <h1 className="text-5xl font-bold mb-2 leading-tight">
                  {character.name}
                </h1>
                <p className="text-2xl text-purple-300 mb-6">{character.title}</p>
                <p className="text-xl text-purple-200 leading-relaxed mb-6">
                  {character.description}
                </p>
                <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                  <h3 className="text-lg font-bold text-white mb-3">Playstyle</h3>
                  <p className="text-purple-200 leading-relaxed">
                    {character.playstyle}
                  </p>
                </div>
              </div>

              <Separator className="bg-purple-500/30" />

              {/* Primary Attribute */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg border border-purple-500/30">
                <Zap className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-sm text-purple-300">Primary Attribute</p>
                  <p className="text-2xl font-bold text-white">{character.primaryAttribute}</p>
                </div>
              </div>

              <Button 
                className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-500 text-white font-bold border-2 border-purple-400 shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
                }}
              >
                <Star className="w-6 h-6 mr-2" />
                Select Character
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Character Stats</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>
            <div 
              className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/50"
              style={{
                clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {Object.entries(character.stats).map(([stat, value]) => (
                  <div key={stat} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 capitalize font-semibold">{stat}</span>
                      <span className="text-white font-bold text-lg">{value}</span>
                    </div>
                    <Progress value={value} className="h-3" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Abilities</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {character.skills.map((skill, index) => {
                const IconComponent = LucideIcons[skill.icon] || Zap;
                const isUltimate = skill.type === 'Ultimate';
                return (
                  <div
                    key={index}
                    className={`group relative bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-lg p-6 border-2 transition-all duration-300 hover:scale-105 ${
                      isUltimate ? 'border-yellow-500/70 hover:border-yellow-400' : 'border-purple-500/50 hover:border-purple-400'
                    }`}
                    style={{
                      clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 rounded-full backdrop-blur-sm border-2 flex items-center justify-center ${
                          isUltimate ? 'bg-yellow-600/80 border-yellow-400' : 'bg-purple-600/80 border-purple-400'
                        }`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className={isUltimate ? 'text-yellow-400 border-yellow-500/50' : 'text-purple-300 border-purple-500/50'}>
                            {skill.type}
                          </Badge>
                          <p className="text-xs text-purple-400 mt-1">{skill.cooldown}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                      <p className="text-purple-200 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div 
              className="bg-gradient-to-br from-green-900/30 to-purple-950/40 backdrop-blur-sm rounded-xl p-8 border-2 border-green-500/30"
              style={{
                clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Strengths</h2>
              </div>
              <ul className="space-y-3">
                {character.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <span className="text-green-100">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="bg-gradient-to-br from-red-900/30 to-purple-950/40 backdrop-blur-sm rounded-xl p-8 border-2 border-red-500/30"
              style={{
                clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Weaknesses</h2>
              </div>
              <ul className="space-y-3">
                {character.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span className="text-red-100">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Builds Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Recommended Builds</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {character.builds.map((build, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px)'
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{build.name}</h3>
                  <p className="text-purple-300 mb-4">{build.focus}</p>
                  <div>
                    <p className="text-sm text-purple-400 mb-2 font-semibold">Key Items:</p>
                    <div className="flex flex-wrap gap-2">
                      {build.keyItems.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-purple-200 border-purple-500/50">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lore Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Lore</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            </div>
            <div 
              className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/50"
              style={{
                clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)'
              }}
            >
              <p className="text-purple-200 text-lg leading-relaxed italic">
                {character.lore}
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
