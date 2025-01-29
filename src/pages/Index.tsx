import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Search, ShoppingCart, Play, Heart } from "lucide-react";

const Index = () => {
  const trendingTags = ["#EDM2024", "#HipHopVibes", "#PopHits", "#ProducerLife"];

  const featuredBeats = [
    {
      id: 1,
      title: "50 BEATS",
      price: 49.99,
      verified: true,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Chill Vibes",
      price: 29.99,
      verified: false,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Hip Hop Essentials",
      price: 39.99,
      verified: true,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "EDM Anthems",
      price: 34.99,
      verified: false,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Pop Hits",
      price: 44.99,
      verified: true,
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      title: "Lo-Fi Beats",
      price: 24.99,
      verified: false,
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop&q=60"
    }
  ];

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Beats</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {featuredBeats.map((beat) => (
              <div
                key={beat.id}
                className="bg-[#121212] rounded-lg overflow-hidden group relative"
              >
                <div className="aspect-square relative">
                  <img 
                    src={beat.image} 
                    alt={beat.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-primary rounded-full p-2 md:p-3 transform hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </button>
                  </div>
                  <button className="absolute top-2 right-2 md:top-4 md:right-4 text-white/60 hover:text-white transition-colors">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
                <div className="p-2 md:p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium text-sm md:text-base truncate pr-2">{beat.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm md:text-base">${beat.price}</span>
                      <button className="bg-primary hover:bg-primary/90 text-white p-1.5 rounded-full transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
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
