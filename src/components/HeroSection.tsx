"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Soft gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[200px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[11px] md:text-xs tracking-[0.5em] text-black/30 mb-10"
          >
            株式会社ZiON
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] text-black"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="block">個性を、</span>
            <span className="block mt-3 gradient-text">纏う。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 text-xs md:text-sm text-black/30 tracking-[0.4em]"
          >
            WEAR YOUR IDENTITY
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#brands"
              className="px-8 py-3.5 bg-black text-white text-[11px] tracking-[0.2em] font-medium rounded-full hover:bg-black/80 transition-colors duration-300"
            >
              VIEW BRANDS
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 border border-black/12 text-[11px] tracking-[0.2em] text-black/45 rounded-full hover:text-black hover:border-black/25 transition-all duration-300"
            >
              LEARN MORE
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.4em] text-black/20">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
