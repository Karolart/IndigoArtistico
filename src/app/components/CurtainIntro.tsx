import { motion } from 'motion/react';

interface CurtainIntroProps {
  onSkip: () => void;
}

export function CurtainIntro({ onSkip }: CurtainIntroProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Curtain Panel */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900"
        initial={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Curtain Folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                left: `${i * 12.5}%`,
                width: '8%',
                opacity: 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Curtain Panel */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-bl from-purple-900 via-purple-800 to-fuchsia-900"
        initial={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Curtain Folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                left: `${i * 12.5}%`,
                width: '8%',
                opacity: 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Center Content */}
      <motion.div
        className="relative z-10 text-center px-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 blur-3xl bg-cyan-500/20 -z-10" />
        
        <motion.h1
          className="text-5xl md:text-7xl mb-6 tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400"
          animate={{
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          EL SHOW
          <br />
          ESTÁ A PUNTO DE COMENZAR
        </motion.h1>
        
        <motion.p
          className="text-cyan-300/80 tracking-[0.2em] text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Música · Circo · Performance urbano
        </motion.p>

        <motion.button
          onClick={onSkip}
          className="mt-12 px-6 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-colors tracking-wider text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          INGRESA
        </motion.button>
      </motion.div>

      {/* TV Frame Effect */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-black/30" />
    </motion.div>
  );
}
