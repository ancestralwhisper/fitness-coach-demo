"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Coach portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Meet Your <span className="text-accent">Coach</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              With over 10 years of experience in personal training, I&apos;ve helped
              hundreds of clients transform their bodies and their mindset.
              My approach combines science-backed programming with real-world
              coaching to get you results that last.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              I believe fitness should be challenging, fun, and sustainable.
              Whether you&apos;re a beginner or an experienced athlete, I&apos;ll meet
              you where you are and push you to where you want to be.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card-bg rounded-xl border border-card-border">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-bold">NASM Certified</p>
              </div>
              <div className="text-center p-4 bg-card-bg rounded-xl border border-card-border">
                <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-bold">500+ Clients</p>
              </div>
              <div className="text-center p-4 bg-card-bg rounded-xl border border-card-border">
                <Target className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-bold">10+ Years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
