import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2];
const mode = process.argv[3] ?? "large";

function write(rel, content) {
  const full = join(root, rel);
  mkdirSync(join(full, ".."), { recursive: true });
  writeFileSync(full, content);
}

if (mode === "large") {
  write(
    "packages/ui/src/tasks/table/task-table-shell.tsx",
    `/** Atlas Console task table shell — fixture for large PR testing. */
export interface TaskTableShellProps {
  rowCount: number;
  virtualOverscan: number;
}

export function TaskTableShell({ rowCount, virtualOverscan }: TaskTableShellProps) {
  return { rowCount, virtualOverscan, version: 2 };
}
`
  );

  for (let i = 0; i < 48; i++) {
    const rows = Array.from(
      { length: 24 },
      (_, j) =>
        `  { id: 'col-${i}-${j}', header: 'Column ${j}', width: ${120 + j * 6}, sortable: ${j % 2 === 0} },`
    ).join("\n");
    write(
      `packages/ui/src/tasks/table/columns/column-set-${String(i).padStart(2, "0")}.ts`,
      `/** Column definitions batch ${i}. */
export interface TaskColumnDef${i} {
  id: string;
  header: string;
  width: number;
  sortable: boolean;
}

export const TASK_COLUMNS_${i}: TaskColumnDef${i}[] = [
${rows}
];

export function formatCell${i}(value: unknown): string {
  if (value == null) return "—";
  if (typeof value === "number") return value.toLocaleString();
  return String(value).slice(0, 120);
}

export function compareColumn${i}(a: unknown, b: unknown): number {
  return String(a).localeCompare(String(b));
}
`
    );
  }

  for (let i = 0; i < 12; i++) {
    write(
      `packages/ui/src/tasks/table/hooks/use-task-table-${i}.ts`,
      `import { useMemo } from "react";

export function useTaskTableState${i}(storageKey: string) {
  return useMemo(
    () => ({
      storageKey,
      sorting: [{ id: "number", desc: true }],
      filters: { status: [], priority: [] },
      pageIndex: 0,
      hookId: ${i},
    }),
    [storageKey]
  );
}
`
    );
  }

  for (let i = 0; i < 8; i++) {
    write(
      `packages/ui/src/tasks/table/filters/filter-chip-${i}.tsx`,
      `export function FilterChip${i}({ label, active }: { label: string; active: boolean }) {
  return { label, active, variant: active ? "default" : "outline", chipId: ${i} };
}
`
    );
  }

  console.log("Generated large task-table PR fixture");
}

if (mode === "medium") {
  for (let i = 0; i < 18; i++) {
    write(
      `packages/ui/src/docs/tree/node-${String(i).padStart(2, "0")}.ts`,
      `export interface DocTreeNode${i} {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode${i}[];
}

export function buildDocSubtree${i}(root: string): DocTreeNode${i} {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: ${i % 5},
    children: [],
  };
}
`
    );
  }
  write(
    "packages/ui/src/docs/tree/build-tree.ts",
    `/** Nested document tree builder for Atlas Console sidebar. */
export function buildDocumentTree(paths: string[]) {
  const root = { name: ".sfab", path: ".sfab", children: [] as unknown[] };
  for (const p of paths) {
    root.children.push({ path: p, name: p.split("/").pop() });
  }
  return root;
}
`
  );
  console.log("Generated medium docs-tree PR fixture");
}

if (mode === "small") {
  write(
    ".github/workflows/ci.yml",
    `# Atlas Console CI
name: CI
on:
  push:
    branches: [main]
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - run: pnpm install --frozen-lockfile || true
      - run: echo "Staging deploy gate restored — MERIDIAN-11"
`
  );
  console.log("Generated small CI fix PR fixture");
}

if (mode === "onboarding") {
  write(
    "apps/console/src/routes/onboarding/welcome.md",
    `# Welcome to Atlas Console

Meridian Labs teams use Atlas to plan work, review code, and keep docs in sync with GitHub.

## Get started

1. Link your GitHub organization
2. Import a repository
3. Invite teammates from **Settings → Members**
`
  );
  write(
    "apps/console/src/routes/onboarding/checklist.ts",
    `export const ONBOARDING_STEPS = [
  { id: "link-github", title: "Connect GitHub", description: "Install the Meridian GitHub App" },
  { id: "import-repo", title: "Import a repository", description: "Choose the default branch" },
  { id: "invite-team", title: "Invite your team", description: "Send invites from org settings" },
] as const;
`
  );
  console.log("Generated onboarding copy fixture");
}
