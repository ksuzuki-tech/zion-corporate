"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。（デモ）");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full bg-white border border-black/[0.08] rounded-lg px-5 py-4 text-[13px] text-black placeholder-black/18 focus:outline-none focus:border-black/18 focus:ring-2 focus:ring-purple-100 transition-all duration-300";

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          label="— 05"
          title="CONTACT"
          subtitle="お問い合わせ"
        />

        <motion.form
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-black/28 mb-3 font-medium">
                お名前 *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="山田 太郎"
                className={inputClasses}
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-black/28 mb-3 font-medium">
                メールアドレス *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] tracking-[0.15em] text-black/28 mb-3 font-medium">
              件名
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="">選択してください</option>
              <option value="general">一般的なお問い合わせ</option>
              <option value="business">事業に関するお問い合わせ</option>
              <option value="recruit">採用に関するお問い合わせ</option>
              <option value="press">メディア・プレスに関するお問い合わせ</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] tracking-[0.15em] text-black/28 mb-3 font-medium">
              メッセージ *
            </label>
            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="お問い合わせ内容をご記入ください"
              className={`${inputClasses} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-12 py-4 bg-black text-white text-[11px] tracking-[0.2em] font-medium rounded-full hover:bg-black/80 transition-colors duration-300"
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
