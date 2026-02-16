"use client";

import { motion } from "framer-motion";
import { Icon } from "../lib/get-icon";
import { getEnabledIntegrations } from "../lib/integrations";

export default function IntegrationsShowcase() {
  const enabled = getEnabledIntegrations().filter(
    (i) => i.category !== "social"
  );

  if (enabled.length === 0) return null;

  return (
    <section className="py-16 bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Integrates With <span className="text-accent">Your Favorite Tools</span>
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto">
            Seamlessly connected to the platforms that power your coaching business.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {enabled.map((integration) =>
            integration.url ? (
              <a
                key={integration.id}
                href={integration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card-bg border border-card-border rounded-xl px-5 py-3 text-sm font-medium text-muted hover:border-accent/50 hover:text-foreground transition-colors"
              >
                <Icon name={integration.icon} className="w-5 h-5 text-accent" />
                {integration.name}
              </a>
            ) : (
              <div
                key={integration.id}
                className="flex items-center gap-2 bg-card-bg border border-card-border rounded-xl px-5 py-3 text-sm font-medium text-muted hover:border-accent/50 hover:text-foreground transition-colors"
              >
                <Icon name={integration.icon} className="w-5 h-5 text-accent" />
                {integration.name}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
