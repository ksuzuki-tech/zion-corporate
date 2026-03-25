export function RecruitSection() {
  return (
    <section id="recruit" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden bg-gray-50/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[600px] h-[25vw] max-h-[300px] bg-purple-100/25 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="border border-black/[0.05] bg-white rounded-2xl px-8 py-16 md:px-16 md:py-24 lg:px-24 lg:py-28 text-center shadow-sm">
          <p className="text-[10px] tracking-[0.4em] text-black/25 mb-8">
            — 03 RECRUIT
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-black"
            style={{ letterSpacing: "-0.01em" }}
          >
            あなたの感性を、
            <br />
            <span className="gradient-text">ビジネスに。</span>
          </h2>

          <p className="mt-8 text-[13px] md:text-sm text-black/35 max-w-lg mx-auto leading-[1.9]">
            ZiONでは、ファッションへの情熱を持つ仲間を募集しています。
            EC運営、バイイング、マーケティング、クリエイティブ——
            あなたのスキルと感性で、ブランドの未来を一緒に創りませんか。
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-9 py-3.5 bg-black text-white text-[11px] tracking-[0.2em] font-medium rounded-full hover:bg-black/80 transition-colors duration-300"
            >
              ENTRY
            </a>
            <a
              href="#contact"
              className="px-9 py-3.5 border border-black/12 text-[11px] tracking-[0.2em] text-black/45 rounded-full hover:text-black hover:border-black/25 transition-all duration-300"
            >
              お問い合わせ
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {[
              "ECオペレーション",
              "バイヤー",
              "SNSマーケティング",
              "Webデザイン",
              "カスタマーサポート",
            ].map((position) => (
              <span
                key={position}
                className="px-4 py-2 text-[10px] tracking-[0.1em] text-black/30 border border-black/[0.06] rounded-full"
              >
                {position}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
