import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { artists } from "@/data/artists";
import type { Artist, Category } from "@/types/artist";
import { PdfStage } from "./PdfStage";

interface ArtistPanelProps {
  category: Category;
  onClose: () => void;
}

export function ArtistPanel({ category, onClose }: ArtistPanelProps) {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const filteredArtists = artists.filter(
    (artist) => artist.category === category
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="fixed inset-0 bg-[#05010d] z-50 overflow-hidden"
    >
      {/* GRID VIEW */}
      {!selectedArtist && (
        <div className="h-full overflow-y-auto p-8">
          <button onClick={onClose} className="text-cyan-400 mb-6 hover:underline">
            ← Back
          </button>

          <h2 className="text-3xl tracking-wider text-fuchsia-400 mb-8">
            {category}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredArtists.map((artist) => (
              <button
                key={artist.id}
                onClick={() => setSelectedArtist(artist)}
                className="group text-left"
              >
                <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black">
                  <img
                    src={artist.cover}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-xs text-white group-hover:text-cyan-400">
                  {artist.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FULLSCREEN ARTIST STAGE */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-black"
          >
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-6 left-6 z-50 text-cyan-400 hover:underline"
            >
              ← Back to artists
            </button>

            <header className="py-8 text-center border-b border-white/10">
              <h1 className="text-3xl tracking-[0.35em] text-white">
                {selectedArtist.name}
              </h1>
            </header>

            <main className="flex-1 flex relative bg-gradient-to-b from-[#14001f] to-black">
              {/* Lights */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.9)]" />
              <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.9)]" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.9)]" />

              {/* PDF Center */}
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-2/3 h-full flex items-center justify-center">
                  <PdfStage file={selectedArtist.pdf} />
                </div>

                {/* Artist Info Panel */}
                <div className="w-1/3 h-full p-6 flex flex-col justify-between border-l border-white/10 text-white">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">About the Artist</h2>
                    <p className="text-sm mb-6">{selectedArtist.description || "No description available."}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {selectedArtist.whatsapp && (
                      <a
                        href={selectedArtist.whatsapp}
                        target="_blank"
                        className="text-green-400 hover:underline"
                      >
                        WhatsApp
                      </a>
                    )}
                    {selectedArtist.instagram && (
                      <a
                        href={selectedArtist.instagram}
                        target="_blank"
                        className="text-pink-400 hover:underline"
                      >
                        Instagram
                      </a>
                    )}
                    {selectedArtist.facebook && (
                      <a
                        href={selectedArtist.facebook}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
