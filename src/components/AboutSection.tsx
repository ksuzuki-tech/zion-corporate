"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    title: "韓国トレンドの発信",
    description:
      "最先端の韓国ファッションを厳選し、日本のマーケットに最適化。常にトレンドの半歩先を行くセレクションを提供します。",
    icon: "01",
  },
  {
    title: "Shopify ECプラットフォーム",
    description:
      "最新のECテクノロジーを活用し、シームレスなショッピング体験を実現。8つのブランドそれぞれに最適化されたストアを運営。",
    icon: "02",
  },
  {
    title: "マルチブランド戦略",
    description:
      "多様なスタイルとターゲットに合わせた8ブランドの展開。一人ひとりの個性に寄り添うファッションを届けます。",
    icon: "03",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="— 02"
          title="ABOUT US"
          subtitle="ファッションで、世界を変える。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: mission statement */}
          <motion.div
            initial={{ opacity: 1, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[15px] md:text-base text-black/60 leading-[1.9]">
              株式会社ZiONは、韓国風ファッションを中心とした
              アパレルEC事業を展開するスタートアップです。
            </p>
            <p className="mt-7 text-[13px] md:text-sm text-black/40 leading-[1.9]">
              「個性を、纏う。」をコンセプトに、一人ひとりが自分らしいスタイルを見つけられる場所を創造。
              Shopifyプラットフォームを活用した8つのブランドで、韓国の最新トレンドを日本に届けています。
            </p>
            <p className="mt-7 text-[13px] md:text-sm text-black/40 leading-[1.9]">
              私たちは単に服を売るのではなく、ファッションを通じて自己表現の可能性を広げ、
              一人ひとりの個性が輝く社会の実現を目指しています。
            </p>

            <div className="mt-14 flex items-center gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-300/25 to-transparent" />
              <span className="text-[10px] tracking-[0.4em] text-black/15">
                SINCE 2026
              </span>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="space-y-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-7 border border-black/[0.05] bg-gray-50/50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-bold text-black/6 group-hover:text-purple-400/25 transition-colors duration-500 font-mono mt-0.5">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="text-[13px] font-bold text-black mb-2.5 tracking-wide">{feature.title}</h3>
                    <p className="text-[12px] text-black/35 leading-[1.8]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
