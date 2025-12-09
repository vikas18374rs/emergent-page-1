import React from 'react';
import { Play, Apple, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ onPlayClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-8">
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-12 relative">
          <div className="absolute inset-0 blur-3xl opacity-50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full" />
          </div>
          
          <div className="relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800" 
              alt="Hero Character" 
              className="w-full max-w-2xl mx-auto rounded-lg opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
          </div>
        </div>

        <button
          onClick={onPlayClick}
          className="group mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-600 hover:bg-purple-500 border-4 border-purple-300 shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
        </button>

        <h1 className="text-8xl font-bold mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-purple-200 via-purple-100 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  textShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(168, 85, 247, 0.4)'
                }}>
            OVERREALM
          </span>
        </h1>

        <p className="text-2xl mb-4 text-purple-100 font-semibold">New Season Available NOW!</p>
        <p className="text-xl mb-12 text-purple-200">Log in to claim a Legendary Drop Pactspirit!</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button 
            className="px-8 py-6 text-lg bg-black hover:bg-gray-900 text-white font-semibold rounded-xl border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <Apple className="w-6 h-6" />
            Download on the<br />
            <span className="text-2xl">App Store</span>
          </Button>

          <Button 
            className="px-8 py-6 text-lg bg-black hover:bg-gray-900 text-white font-semibold rounded-xl border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            GET IT ON<br />
            <span className="text-2xl">Google Play</span>
          </Button>

          <Button 
            className="px-8 py-6 text-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl border-2 border-emerald-400 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <Smartphone className="w-6 h-6" />
            Download on<br />
            <span className="text-2xl">TapTap</span>
          </Button>

          <Button 
            className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl border-2 border-blue-400 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0,12L11,2V10H23V14H11V22Z" />
            </svg>
            <span className="text-2xl">Windows</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;