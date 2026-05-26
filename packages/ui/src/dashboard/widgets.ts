/** Atlas Console dashboard widget registry — baseline on main. */
export const WIDGET_REGISTRY = [
  { id: "open-tasks", title: "Open tasks" },
  { id: "in-review", title: "PRs in review" },
] as const;

export function getWidget(id: string) {
  return WIDGET_REGISTRY.find((w) => w.id === id);
}
