import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import IndigoLogo from "@/assets/images/IndigoLogo.svg";
import { useState, useRef } from "react";
import IndigoBg from "@/assets/backgrounds/indigo.gif";
import IndigoMusic from "@/assets/audio/indigo.mp3";



export function HeroSection() {
  const [ambientOn, setAmbientOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {ambientOn && (
        <>
          {/* GIF Background */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IndigoBg})` }}
          />

          {/* Music */}
          <audio
            ref={audioRef}
            src={IndigoMusic}
            autoPlay
            loop
          />
        </>
      )}

      {/* Background City Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Spotlight Beams */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-cyan-400/50 via-cyan-400/20 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: '100%',
              transformOrigin: 'bottom',
            }}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Platform Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-2"
        >
          <div className="relative inline-block">
            {/* Glow behind text */}
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 opacity-50" />

            <h1 className="relative text-4xl md:text-6xl tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 mb-6">
              INDIGO
            </h1>


            {/* Logo */}
            <div className="relative flex justify-center mb-2">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 blur-3xl opacity-30" />
              <button
                onClick={() => {
                  setAmbientOn((prev) => {
                    const next = !prev;

                    if (audioRef.current) {
                      if (next) {
                        audioRef.current.play();
                      } else {
                        audioRef.current.pause();
                        audioRef.current.currentTime = 0;
                      }
                    }

                    return next;
                  });
                }}
                className="relative focus:outline-none"
              >
                <img
                  src={IndigoLogo}
                  alt="Indigo logo"
                  className={`w-[16rem] md:w-[24rem] transition-all duration-500 ${ambientOn ? "scale-105 drop-shadow-[0_0_40px_#e879f9]" : "opacity-85"
                    }`}
                />
              </button>

            </div>

          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-cyan-300/80 mb-4 tracking-wide"
        >
          Un directorio vivo de artistas locales
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => {
              document
                .getElementById("categories")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-10 py-4 overflow-hidden"
          >
            {/* Neon Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 opacity-100" />
            <div className="absolute inset-[2px] bg-[#0a0a1a] group-hover:bg-[#0a0a1a]/80 transition-colors" />

            {/* Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

            <span className="relative flex items-center gap-2 text-cyan-300 tracking-wider">
              <Sparkles className="w-5 h-5" />
              EXPLORAR CATEGORIAS
            </span>
          </button>

          <button className="group relative px-10 py-4 border-2 border-fuchsia-500/50 hover:border-fuchsia-500 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-fuchsia-500/0 group-hover:bg-fuchsia-500/10 transition-colors"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdC8XSKd4Aee6MZk3v6xvcyOjb1q7ZkNAvuzeCPV0nhD6ndbw/viewform", "_blank")}
            />
            <span className="relative text-fuchsia-300 tracking-wider">
              ÚNETE COMO ARTISTA
            </span>
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-12 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-12 w-3 h-3 bg-fuchsia-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>
    </section>
  );
}
