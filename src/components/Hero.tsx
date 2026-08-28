"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/basePath";

type HeroProps = {
  hasImage: boolean;
};

const PARTICLES = [
  { left: "12%", size: 3, duration: 9, delay: 0 },
  { left: "24%", size: 2, duration: 12, delay: 1.5 },
  { left: "38%", size: 4, duration: 10, delay: 3 },
  { left: "52%", size: 2, duration: 14, delay: 0.5 },
  { left: "66%", size: 3, duration: 11, delay: 2.2 },
  { left: "78%", size: 2, duration: 13, delay: 4 },
  { left: "88%", size: 3, duration: 9.5, delay: 1 },
];

export default function Hero({ hasImage }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {hasImage ? (
          <Image
            src={withBasePath("/images/hero.jpg")}
            alt="Club Distiny キャスト"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(107,0,21,0.45)_0%,rgba(5,5,5,0.9)_55%,#050505_100%)]" />
        )}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a0712]/40 via-transparent to-transparent" />
      </motion.div>

      {/* Gold particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="gold-particle"
            style={{
              left: p.left,
              bottom: "-5%",
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="font-display mb-4 text-[10px] text-gold-2/80 md:text-xs"
        >
          TOKYO NIGHT / LUXURY / EXCLUSIVE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-display leading-none"
        >
          <span className="block text-sm font-normal tracking-wide-luxe text-ivory/80 md:text-base">
            Club
          </span>
          <span className="text-gradient-gold flicker mt-1 block text-[clamp(2.75rem,11vw,7.5rem)] font-semibold tracking-distiny">
            DISTINY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="font-jp-serif mt-8 text-[clamp(1.35rem,4.5vw,2.5rem)] leading-relaxed text-ivory"
        >
          最高の女、
          <br className="hidden sm:block" />
          ここに集まる。
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/60"
      >
        <span className="font-display text-[10px] tracking-wide-luxe">
          SCROLL
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-2"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
