"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    result: "Lost 30 lbs in 4 months",
    quote:
      "I never thought I could enjoy working out, but Coach made every session fun and challenging. The results speak for themselves — I feel like a completely different person.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    result: "Gained 15 lbs of muscle",
    quote:
      "The online coaching program is incredible. Having a plan to follow and someone holding me accountable changed everything. Best investment I've ever made in myself.",
    rating: 5,
  },
  {
    name: "Jessica R.",
    result: "Ran her first marathon",
    quote:
      "From barely running a mile to crossing the finish line of a marathon. Coach believed in me when I didn't believe in myself. Forever grateful.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Real People, <span className="text-accent">Real Results</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it — hear from clients who transformed
            their lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card-bg border border-card-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-accent text-sm font-semibold">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
