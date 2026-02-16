"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import siteConfig from "../config/site-config";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen -mt-16 pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${hero.backgroundImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {hero.headline}{" "}
          <span className="text-accent">{hero.headlineAccent}</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href={hero.primaryCta.href}
            className="bg-accent hover:bg-accent-hover text-background font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center gap-2"
          >
            {hero.primaryCta.text} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="border border-accent text-accent hover:bg-accent hover:text-background font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            {hero.secondaryCta.text}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
