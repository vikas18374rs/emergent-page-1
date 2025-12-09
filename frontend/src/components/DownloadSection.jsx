import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

const DownloadSection = () => {
  return (
    <section className="relative py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Start Your Journey</h2>
        <p className="text-xl text-purple-200 mb-12">
          Download Torchlight: Infinite now and experience the Overrealm season!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            className="px-8 py-6 text-lg bg-black hover:bg-gray-900 text-white font-semibold rounded-xl border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-xl font-bold">App Store</div>
            </div>
          </Button>

          <Button 
            className="px-8 py-6 text-lg bg-black hover:bg-gray-900 text-white font-semibold rounded-xl border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-bold">Google Play</div>
            </div>
          </Button>

          <Button 
            className="px-8 py-6 text-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl border-2 border-emerald-400 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <Smartphone className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs">Download on</div>
              <div className="text-xl font-bold">TapTap</div>
            </div>
          </Button>

          <Button 
            className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl border-2 border-blue-400 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0,12L11,2V10H23V14H11V22Z" />
            </svg>
            <div className="text-left">
              <div className="text-xl font-bold">Windows</div>
            </div>
          </Button>
        </div>

        <div className="mt-16 pt-16 border-t border-purple-500/30">
          <p className="text-purple-300 text-sm">
            © 2025 Torchlight: Infinite. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;