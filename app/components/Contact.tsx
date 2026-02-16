"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import siteConfig from "../config/site-config";
import { getSchedulingIntegration } from "../lib/integrations";

function ContactForm() {
  const { formFields } = siteConfig.contact;

  return (
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
            placeholder={formFields.namePlaceholder}
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
            placeholder={formFields.emailPlaceholder}
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
          placeholder={formFields.messagePlaceholder}
          className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-background font-bold py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
      >
        {formFields.submitText} <Send className="w-5 h-5" />
      </button>
    </motion.form>
  );
}

function SchedulingEmbed() {
  const scheduling = getSchedulingIntegration();

  if (!scheduling) {
    return (
      <p className="text-muted text-center">
        No scheduling integration is enabled. Enable Calendly, Acuity, or Cal.com in the integrations config.
      </p>
    );
  }

  // If embed code is provided, render it directly
  if (scheduling.embedCode) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        dangerouslySetInnerHTML={{ __html: scheduling.embedCode }}
      />
    );
  }

  // Otherwise render an iframe with the scheduling URL
  if (scheduling.url) {
    return (
      <motion.div
        className="rounded-2xl overflow-hidden border border-card-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <iframe
          src={scheduling.url}
          title={`Book with ${scheduling.name}`}
          className="w-full border-0"
          style={{ minHeight: "650px" }}
        />
      </motion.div>
    );
  }

  return (
    <p className="text-muted text-center">
      Please add a URL or embed code for {scheduling.name} in the integrations config.
    </p>
  );
}

export default function Contact() {
  const { contact } = siteConfig;

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
            {contact.headingStart} <span className="text-accent">{contact.headingAccent}</span>
          </h2>
          <p className="text-muted text-lg">
            {contact.subtitle}
          </p>
        </motion.div>

        {contact.mode === "embed" ? <SchedulingEmbed /> : <ContactForm />}
      </div>
    </section>
  );
}
