import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RewardsSection from '../components/RewardsSection';
import HeroTraitSection from '../components/HeroTraitSection';
import SeasonalMechanicSection from '../components/SeasonalMechanicSection';
import FeaturesSection from '../components/FeaturesSection';
import UpdatesSection from '../components/UpdatesSection';
import DownloadSection from '../components/DownloadSection';
import Sidebar from '../components/Sidebar';
import VideoModal from '../components/VideoModal';

const Home = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950/50 via-transparent to-purple-950/80 pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        <HeroSection onPlayClick={() => setVideoModalOpen(true)} />
        <RewardsSection />
        <HeroTraitSection />
        <SeasonalMechanicSection />
        <FeaturesSection />
        <UpdatesSection />
        <DownloadSection />
        <Sidebar />
      </div>

      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
};

export default Home;