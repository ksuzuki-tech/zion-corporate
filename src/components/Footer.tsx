const footerLinks = [
  { label: "BRANDS", href: "#brands" },
  { label: "ABOUT", href: "#about" },
  { label: "RECRUIT", href: "#recruit" },
  { label: "COMPANY", href: "#company" },
  { label: "CONTACT", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.04] bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo & Description */}
          <div>
            <span className="text-xl font-bold tracking-[0.2em] text-black">
              Zi<span className="gradient-text">O</span>N
            </span>
            <p className="mt-6 text-[12px] text-black/35 leading-[1.9]">
              韓国風ファッションを中心としたアパレルEC事業を展開。
              8つのブランドで、あなたの個性を彩ります。
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-black/30 mb-7 font-medium">
              NAVIGATION
            </h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] tracking-[0.05em] text-black/40 hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-black/30 mb-7 font-medium">
              CONTACT
            </h4>
            <div className="mt-8">
              <p className="text-[12px] text-black/30 leading-[1.9]">
                〒105-0012
                <br />
                東京都港区芝大門2-1-16
                <br />
                +SHIFT SHIBADAIMON
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-black/25 tracking-[0.05em]">
            &copy; 2026 株式会社ZiON. All rights reserved.
          </p>
          <p className="text-[10px] text-black/15 tracking-[0.2em]">
            FASHION FORWARD. ALWAYS.
          </p>
        </div>
      </div>
    </footer>
  );
}
