import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';


export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Stage Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/20 to-cyan-500/10 blur-[100px]" />
      </div>

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Stars */}
        <motion.div
          className="absolute -top-8 left-1/4 text-fuchsia-400"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Star className="w-6 h-6" fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute -top-4 right-1/4 text-cyan-400"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 className="text-5xl md:text-7xl tracking-[0.15em] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">
              ÚNETE AL
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
              ESPECTÁCULO
            </span>
          </h2>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-cyan-300/70 mb-4 tracking-wide max-w-2xl mx-auto"
          >
            La ciudad espera por tu talento
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-fuchsia-300/60 mb-12 tracking-wide"
          >
            Tómate el escenario · Comparte tu arte · Conecta con tu audiencia
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <button className="group relative px-14 py-6 overflow-hidden">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />
              <div className="absolute inset-[3px] bg-[#0a0a1a]" />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/40 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

              {/* Text */}
              <span className="relative flex items-center gap-3 text-xl tracking-[0.2em]">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                  Conviértete en artista
                </span>
                <Sparkles className="w-6 h-6 text-fuchsia-400" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Footer Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <p className="text-cyan-400/40 tracking-[0.3em] text-sm">
            INDIGO · DONDE EL ARTE SE ENCUENTRA CON LA COMUNIDAD
          </p>
          {/* Social Buttons */}
          <div className="flex flex-col items-center gap-4 mt-4">
            {/* Texto arriba de los botones */}
            <p className="text-cyan-300/70 uppercase text-sm tracking-wider">
              Contáctanos
            </p>

            {/* Iconos */}
            <div className="flex justify-center gap-6">
              <a
                href="https://wa.me/+573182181887"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-200 transition-colors"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/indigo_artistico/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-200 transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://facebook.com/people/Índigo-Acompañamiento-Artístico/61564393210447/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-8 text-center text-xs text-cyan-400/40 tracking-wide">
        <p>© 2025 · Indigo Artistic Platform</p>
        <p>Design & Development by Karol Díaz · Karolart</p>
      </div>


      {/* Bottom Stage Lights */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </section>
  );
}
