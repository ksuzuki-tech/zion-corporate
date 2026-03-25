import { SectionHeading } from "./SectionHeading";

const companyInfo = [
  { label: "会社名", value: "株式会社ZiON" },
  { label: "英文表記", value: "ZiON Inc." },
  { label: "設立", value: "2026年3月" },
  { label: "代表取締役", value: "鈴木 耕平" },
  { label: "事業内容", value: "アパレルEC事業（韓国風ファッション、Shopify EC販売）" },
  { label: "所在地", value: "〒105-0012 東京都港区芝大門2-1-16 +SHIFT SHIBADAIMON" },
  { label: "ブランド数", value: "8ブランド" },
];

export function CompanySection() {
  return (
    <section id="company" className="py-24 md:py-36 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="— 04" title="COMPANY" subtitle="会社概要" />

        <div className="border border-black/[0.05] bg-gray-50/30 rounded-xl overflow-hidden">
          {companyInfo.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col md:flex-row ${
                i !== companyInfo.length - 1 ? "border-b border-black/[0.05]" : ""
              }`}
            >
              <div className="md:w-48 lg:w-56 px-6 py-5 md:py-6 text-[11px] tracking-[0.15em] text-black/30 bg-gray-50/50 flex-shrink-0 font-medium">
                {item.label}
              </div>
              <div className="px-6 pb-5 md:py-6 text-[13px] text-black/60 leading-relaxed">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-8 border border-black/[0.05] bg-gray-50/30 rounded-xl h-56 md:h-72 flex items-center justify-center">
          <div className="text-center">
            <p className="text-black/20 text-xs tracking-[0.2em]">📍 MAP</p>
            <p className="text-black/30 text-[13px] mt-3">
              東京都港区芝大門2-1-16 +SHIFT SHIBADAIMON
            </p>
            <a
              href="https://maps.google.com/?q=東京都港区芝大門2-1-16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 text-[11px] tracking-[0.15em] text-black/40 border border-black/10 rounded-full hover:text-black hover:border-black/25 transition-all duration-300"
            >
              Google Mapsで開く →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
