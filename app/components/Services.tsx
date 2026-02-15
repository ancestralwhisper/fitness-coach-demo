"use client";

import { motion } from "framer-motion";
import { User, Wifi, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: User,
    title: "1-on-1 Training",
    description:
      "Fully personalized in-person sessions tailored to your goals. Get hands-on coaching, form correction, and a program built just for you.",
    features: ["Custom workout plan", "Nutrition guidance", "Weekly check-ins"],
  },
  {
    icon: Wifi,
    title: "Online Coaching",
    description:
      "Train anywhere with a remote coaching program. Get your workouts, nutrition plan, and accountability — all from your phone.",
    features: ["App-based workouts", "Video form reviews", "24/7 messaging"],
  },
  {
    icon: Users,
    title: "Group Training",
    description:
      "High-energy small group sessions that combine community with results. Push harder together and have fun doing it.",
    features: ["Max 8 per group", "All fitness levels", "Flexible schedule"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            How We Can <span className="text-accent">Work Together</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Choose the training style that fits your lifestyle and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-background border border-card-border rounded-2xl p-8 flex flex-col hover:border-accent/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <service.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
