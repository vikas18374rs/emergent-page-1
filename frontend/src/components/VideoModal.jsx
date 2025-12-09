import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const VideoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full bg-black border-purple-500 p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Overrealm Season Teaser</DialogTitle>
        </DialogHeader>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/vt9Ac2hv9hw?autoplay=1"
            title="Overrealm Season Teaser"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;