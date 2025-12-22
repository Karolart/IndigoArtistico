import { motion } from 'motion/react';
import { UserPlus, Search, Zap } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Llenas en formulario y creamos tu perfil',
    description: 'Únete al directorio y muestra tu arte',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Search,
    title: 'Los visitantes exploran por categorías',
    description: 'Explora el talento que vive en la ciudad',
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Artistas conectan directamente con la audiencia',
    description: 'Construye comunidad y oportunidades',
    color: 'from-purple-400 to-pink-500',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-4">
            ¿CÓMO FUNCIONA?
          </h2>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px]">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${step.color} opacity-30`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              )}

              {/* Step Number */}
              <motion.div
                className="relative inline-block mb-8"
                whileHover={{ scale: 1.1 }}
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-2xl opacity-50`} />
                
                {/* Icon Container */}
                <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 flex items-center justify-center">
                  <step.icon
                    className="w-14 h-14"
                    style={{
                      filter: `drop-shadow(0 0 10px ${index === 0 ? '#22d3ee' : index === 1 ? '#e879f9' : '#c084fc'})`,
                    }}
                    strokeWidth={1.5}
                    stroke={`url(#step-gradient-${index})`}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id={`step-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={index === 0 ? '#22d3ee' : index === 1 ? '#e879f9' : '#c084fc'} />
                        <stop offset="100%" stopColor={index === 0 ? '#3b82f6' : index === 1 ? '#ec4899' : '#f472b6'} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Step Number Badge */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-sm`}>
                  {index + 1}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className={`text-xl md:text-2xl mb-4 bg-gradient-to-r ${step.color} text-transparent bg-clip-text tracking-wide`}>
                {step.title}
              </h3>
              <p className="text-cyan-300/60 tracking-wide">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
