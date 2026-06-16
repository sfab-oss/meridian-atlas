# Meridian Atlas

Public fixture repository for **Atlas Console** local development at Meridian Labs.

This repo simulates a customer monorepo linked to the SFAB platform. Pull requests here are synced into local D1 during `pnpm dev:reset:local` so engineers can test PR lists, large diffs, and review UI against real GitHub data.

## Structure

```text
apps/console/          Web client (fixture stubs)
packages/ui/           Shared table and docs components
.github/workflows/     CI
```

## Pull requests (seed sync)

| Branch | Task | Typical size |
| --- | --- | --- |
| `meridian-4-task-table-refactor` | MERIDIAN-4 | ~70 files, ~3k+ lines |
| `meridian-5-docs-sidebar-tree` | MERIDIAN-5 | ~20 files |
| `meridian-11-fix-staging-deploy` | MERIDIAN-11 | CI hotfix |
| `meridian-8-onboarding-copy` | MERIDIAN-8 | merged |
| `experiment/graphql-api-spike` | — | closed experiment |

Branch names use the seeded org slug (`meridian`) so tasks auto-link in the platform.

## Onboarding

1. Install the **sfab-dev** GitHub App on this repository (or the `sfab-oss` org).
2. Set `DEV_SEED_INSTALLATION_ID` in `apps/platform/.dev.seed.vars`.
3. Run `pnpm dev:reset:local` from the SFAB monorepo.

- ADR-0014 engine e2e smoke (ALW-238).
