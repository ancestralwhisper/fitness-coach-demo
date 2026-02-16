import { Dumbbell } from "lucide-react";
import { Icon } from "../lib/get-icon";
import siteConfig from "../config/site-config";
import { getIntegrationsByCategory } from "../lib/integrations";

// TikTok doesn't have a lucide icon, so we use a custom SVG
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.8.1v-3.5a6.37 6.37 0 0 0-.8-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.21 8.21 0 0 0 3.76.92V6.69Z" />
    </svg>
  );
}

export default function Footer() {
  const socialLinks = getIntegrationsByCategory("social");
  const copyrightText = siteConfig.footer.copyright.replace(
    "{year}",
    new Date().getFullYear().toString()
  );

  return (
    <footer className="bg-card-bg border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-accent font-bold text-lg">
            <Dumbbell className="w-5 h-5" />
            {siteConfig.brand.name}
          </div>

          <p className="text-muted text-sm">
            &copy; {copyrightText}
          </p>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  {social.id === "tiktok" ? (
                    <TikTokIcon className="w-5 h-5" />
                  ) : (
                    <Icon name={social.icon} className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
