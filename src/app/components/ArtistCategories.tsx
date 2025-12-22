import { motion } from 'motion/react';
import { Music, Zap, Sparkles, Palette, Monitor } from 'lucide-react';

const categories = [
  {
    icon: Music,
    title: 'Music',
    color: 'from-cyan-400 to-blue-500',
    glow: 'cyan',
  },
  {
    icon: Zap,
    title: 'Circus & Street Performance',
    color: 'from-fuchsia-400 to-pink-500',
    glow: 'fuchsia',
  },
  {
    icon: Sparkles,
    title: 'Dance & Movement',
    color: 'from-purple-400 to-fuchsia-500',
    glow: 'purple',
  },
  {
    icon: Palette,
    title: 'Visual Arts',
    color: 'from-pink-400 to-rose-500',
    glow: 'pink',
  },
  {
    icon: Monitor,
    title: 'Digital & Interactive Arts',
    color: 'from-cyan-400 to-purple-500',
    glow: 'cyan',
  },
];

interface ArtistCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export function ArtistCategories({ onSelectCategory }: ArtistCategoriesProps) {

  return (
    <section id="categories" className="relative py-32 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-4">
            DISCIPLINAS ARTÍSTICAS
          </h2>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              onClick={() => onSelectCategory(category.title)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-72 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] border border-white/10 overflow-hidden">
                {/* Neon Border Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Border Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                    />
                    <category.icon
                      className={`relative w-16 h-16 text-transparent bg-clip-text bg-gradient-to-br ${category.color}`}
                      style={{
                        filter: `drop-shadow(0 0 10px ${category.glow === 'cyan' ? '#22d3ee' : category.glow === 'fuchsia' ? '#e879f9' : category.glow === 'purple' ? '#c084fc' : '#f472b6'})`,
                      }}
                      strokeWidth={1.5}
                      stroke={`url(#gradient-${index})`}
                    />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={category.glow === 'cyan' ? '#22d3ee' : category.glow === 'fuchsia' ? '#e879f9' : category.glow === 'purple' ? '#c084fc' : '#f472b6'} />
                          <stop offset="100%" stopColor={category.glow === 'cyan' ? '#3b82f6' : category.glow === 'fuchsia' ? '#ec4899' : category.glow === 'purple' ? '#e879f9' : '#fb7185'} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg tracking-wider bg-gradient-to-br ${category.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>
                    {category.title}
                  </h3>

                  {/* Decorative Line */}
                  <div className={`mt-4 h-[1px] w-0 group-hover:w-20 transition-all duration-500 bg-gradient-to-r ${category.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
