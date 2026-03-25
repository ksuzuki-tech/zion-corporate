"use client";

import { motion } from "framer-motion";
import { brands } from "@/lib/brands";
import { SectionHeading } from "./SectionHeading";

function BrandCard({
  brand,
  index,
}: {
  brand: (typeof brands)[0];
  index: number;
}) {
  return (
    <motion.a
      href={`https://${brand.storeDomain}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 1, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative block"
    >
      <div className="relative aspect-[3/4] bg-white border border-black/[0.05] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
        {/* Colored top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: brand.brandColor }}
        />

        {/* Subtle gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, ${brand.brandColor}08, transparent 50%)`,
          }}
        />

        {/* Logo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-6">
          <div className="relative w-full flex-1 flex items-center justify-center">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={180}
              height={90}
              className={`object-contain max-h-16 md:max-h-20 w-auto transition-transform duration-500 group-hover:scale-105 ${
                brand.invertLogo ? "invert" : ""
              }`}
            />
          </div>
          <p className="mt-auto text-[10px] text-black/25 tracking-[0.15em] group-hover:text-black/40 transition-colors duration-500">
            {brand.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]">
          <div
            className="h-full w-0 group-hover:w-full transition-all duration-500"
            style={{ background: brand.brandColor }}
          />
        </div>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={brand.brandColor}
            strokeWidth="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

export function BrandsSection() {
  return (
    <section id="brands" className="py-24 md:py-36 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="— 01"
          title="OUR BRANDS"
          subtitle="8つのブランドが、あなたの個性を彩る。"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
