"use client";

import { motion } from "framer-motion";
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-black/[0.05] bg-gray-50/30 rounded-xl overflow-hidden"
        >
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
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 border border-black/[0.05] rounded-xl h-56 md:h-72 overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1!2d139.7537!3d35.6570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb0f5555555%3A0x0!2z5p2x5Lqs6YO95riv5Yy66Iqd5aSn6ZaAMi0xLTE2!5e0!3m2!1sja!2sjp!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZiON オフィス所在地"
          />
        </motion.div>
      </div>
    </section>
  );
}
