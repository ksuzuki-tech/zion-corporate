"use client";

import { brands } from "@/lib/brands";
import { SectionHeading } from "./SectionHeading";

function BrandCard({
  brand,
}: {
  brand: (typeof brands)[0];
}) {
  return (
    <a
      href={`https://${brand.storeDomain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      <div className="relative aspect-[3/4] bg-white border border-black/[0.05] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1.5">
        {/* Colored top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: brand.brandColor }}
        />

        {/* Logo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 py-6">
          <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className={`object-contain max-w-[80%] max-h-12 md:max-h-16 w-auto transition-transform duration-500 group-hover:scale-105 ${
                brand.invertLogo ? "invert" : ""
              }`}
            />
          </div>
          <p className="mt-auto text-[10px] text-black/25 tracking-[0.15em] group-hover:text-black/40 transition-colors duration-500 text-center">
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
    </a>
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
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
