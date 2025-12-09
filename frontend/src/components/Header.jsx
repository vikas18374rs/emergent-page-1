import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ShoppingCart, Users } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png" 
            alt="Torchlight Logo" 
            className="h-12 w-12 opacity-90"
          />
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-purple-200">OVERREALM</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            className="relative px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold border-2 border-purple-400 shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            style={{
              clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2 inline" />
            SHOP
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">-5%</span>
          </Button>

          <Button 
            className="px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold border-2 border-purple-400 shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            style={{
              clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
            }}
          >
            Official Website
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-purple-300 transition-colors"
          >
            <Globe className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;