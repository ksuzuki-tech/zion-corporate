export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Soft gradient background - contained within section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] bg-purple-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[35vw] max-w-[400px] h-[35vw] max-h-[400px] bg-pink-100/40 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] bg-blue-50/30 rounded-full blur-[200px]" />
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
      <div className="relative z-10 text-center px-8 animate-fade-in">
        <p className="text-[11px] md:text-xs tracking-[0.5em] text-black/30 mb-10">
          株式会社ZiON
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] text-black"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="block">個性を、</span>
          <span className="block mt-3 gradient-text">纏う。</span>
        </h1>

        <p className="mt-10 text-xs md:text-sm text-black/30 tracking-[0.4em]">
          WEAR YOUR IDENTITY
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in-delayed">
        <span className="text-[9px] tracking-[0.4em] text-black/20">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent animate-bounce-slow" />
      </div>
    </section>
  );
}
