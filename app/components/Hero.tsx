"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen -mt-16 pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
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
          Transform Your Body.{" "}
          <span className="text-accent">Transform Your Life.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Personalized training programs designed to help you crush your goals,
          build confidence, and become the strongest version of yourself.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href="/quiz"
            className="bg-accent hover:bg-accent-hover text-background font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center gap-2"
          >
            Take the Quiz <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#contact"
            className="border border-accent text-accent hover:bg-accent hover:text-background font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book a Free Consult
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
