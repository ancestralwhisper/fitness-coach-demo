"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Ready to <span className="text-accent">Get Started?</span>
          </h2>
          <p className="text-muted text-lg">
            Book a free consultation and let&apos;s build a plan that works for you.
          </p>
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@email.com"
                className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your goals..."
              className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-background font-bold py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
