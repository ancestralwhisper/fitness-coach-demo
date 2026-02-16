import * as icons from "lucide-react";
import type { LucideProps } from "lucide-react";

/**
 * Renders a lucide-react icon by its string name.
 * This lets the config files reference icons as plain strings (e.g. "Award", "Calendar")
 * without importing them directly.
 */
export function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (icons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
