import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { CurtainIntro } from "./components/CurtainIntro";
import { HeroSection } from "./components/HeroSection";
import { ArtistCategories } from "./components/ArtistCategories";
import { HowItWorks } from "./components/HowItWorks";
import { FinalCTA } from "./components/FinalCTA";
import { ArtistPanel } from "./components/ArtistPanel";

import type { Category } from "@/types/artist";

export default function App() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  /* Debug útil */
  useEffect(() => {
    if (activeCategory) {
      console.log("Selected category:", activeCategory);
    }
  }, [activeCategory]);

  /* Auto apertura del telón */
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a1a] overflow-hidden">
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
      </div>

      {/* Noise */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-5 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Curtain */}
      <AnimatePresence>
        {!curtainOpen && (
          <CurtainIntro onSkip={() => setCurtainOpen(true)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: curtainOpen ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={curtainOpen ? "block" : "hidden"}
      >
        <HeroSection />

        {/* Categories */}
        <ArtistCategories
          onSelectCategory={(category) =>
            setActiveCategory(category as Category)
          }
        />

        <HowItWorks />
        <FinalCTA />

        {/* Artist Panel */}
        <AnimatePresence>
          {activeCategory && (
            <ArtistPanel
              category={activeCategory}
              onClose={() => setActiveCategory(null)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
