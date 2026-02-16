"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon } from "../lib/get-icon";
import siteConfig from "../config/site-config";
import { getIntegrationById } from "../lib/integrations";

export default function Services() {
  const { services } = siteConfig;

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
            {services.headingStart} <span className="text-accent">{services.headingAccent}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service, i) => {
            const linkedIntegrations = service.integrationIds
              .map((id) => getIntegrationById(id))
              .filter(Boolean);

            return (
              <motion.div
                key={service.title}
                className="bg-background border border-card-border rounded-2xl p-8 flex flex-col hover:border-accent/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Icon name={service.icon} className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="text-sm text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Integration badges */}
                {linkedIntegrations.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {linkedIntegrations.map((integration) =>
                      integration!.url ? (
                        <a
                          key={integration!.id}
                          href={integration!.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          <Icon name={integration!.icon} className="w-3 h-3" />
                          {integration!.name}
                        </a>
                      ) : (
                        <span
                          key={integration!.id}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20"
                        >
                          <Icon name={integration!.icon} className="w-3 h-3" />
                          {integration!.name}
                        </span>
                      )
                    )}
                  </div>
                )}

                <a
                  href={service.ctaHref}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
                >
                  {service.ctaText} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
