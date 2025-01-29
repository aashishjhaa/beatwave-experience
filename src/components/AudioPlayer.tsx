import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";

export const AudioPlayer = () => {
  const [isPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-dark border-t border-primary/20 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-primary transition-colors">
            <SkipBack size={20} />
          </button>
          <button className="text-white hover:text-primary transition-colors">
            <Play size={24} />
          </button>
          <button className="text-white hover:text-primary transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="flex-1 mx-4">
          <div className="text-white text-sm mb-1">Currently not playing</div>
          <div className="h-1 bg-white/10 rounded">
            <div className="h-full w-0 bg-primary rounded"></div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Volume2 className="text-white" size={20} />
          <div className="w-24 h-1 bg-white/10 rounded">
            <div className="h-full w-1/2 bg-primary rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};