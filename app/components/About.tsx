"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "../lib/get-icon";
import siteConfig from "../config/site-config";

export default function About() {
  const { about } = siteConfig;

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
              src={about.photo}
              alt={about.photoAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              {about.headingStart} <span className="text-accent">{about.headingAccent}</span>
            </h2>
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-muted text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 mt-2">
              {about.credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="text-center p-4 bg-card-bg rounded-xl border border-card-border"
                >
                  <Icon name={cred.icon} className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-bold">{cred.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
