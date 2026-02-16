import integrations, {
  type Integration,
  type IntegrationCategory,
} from "../config/integrations";

/** Get a single integration by its ID */
export function getIntegrationById(id: string): Integration | undefined {
  return integrations.find((i) => i.id === id);
}

/** Get all integrations that are enabled */
export function getEnabledIntegrations(): Integration[] {
  return integrations.filter((i) => i.enabled);
}

/** Get all enabled integrations in a specific category */
export function getIntegrationsByCategory(
  category: IntegrationCategory
): Integration[] {
  return integrations.filter((i) => i.category === category && i.enabled);
}

/** Get the first enabled scheduling integration (for contact embed mode) */
export function getSchedulingIntegration(): Integration | undefined {
  return integrations.find(
    (i) => i.category === "scheduling" && i.enabled
  );
}
