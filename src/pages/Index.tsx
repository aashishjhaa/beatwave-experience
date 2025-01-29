import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Search } from "lucide-react";

const Index = () => {
  const trendingTags = ["#EDM2024", "#HipHopVibes", "#PopHits", "#ProducerLife"];

  return (
    <div className="min-h-screen bg-primary-dark font-poppins">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Find Your Perfect <span className="text-primary">Beat</span>
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for beats..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-primary"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Trending Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {trendingTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Beats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Beats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for beat cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-primary transition-colors"
              >
                <div className="aspect-square bg-white/10 rounded-md mb-4"></div>
                <h3 className="text-white font-medium mb-2">Beat Title #{i}</h3>
                <p className="text-white/60 text-sm mb-4">Producer Name</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">$29.99</span>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AudioPlayer />
    </div>
  );
};

export default Index;