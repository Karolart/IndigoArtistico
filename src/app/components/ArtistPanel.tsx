import { motion } from "motion/react";

interface ArtistPanelProps {
  category: string;
  onClose: () => void;
}

export function ArtistPanel({ category, onClose }: ArtistPanelProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-[#0a0a1a] z-50 border-l border-white/10"
    >
      <div className="p-8">
        <button
          onClick={onClose}
          className="text-cyan-400 mb-6"
        >
          ← Back
        </button>

        <h2 className="text-3xl tracking-wider text-fuchsia-400 mb-6">
          {category}
        </h2>

        <p className="text-white/60">
          Artists for this category will appear here.
        </p>
      </div>
    </motion.div>
  );
}
