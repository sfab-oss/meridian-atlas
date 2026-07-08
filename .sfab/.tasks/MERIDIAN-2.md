---
id: task_seed_meridian_02
number: 2
display_id: MERIDIAN-2
title: Add usage metrics to the dashboard
status: ready
kind: deliverable
priority: high
needs_walkthrough: unspecified
created: 2026-06-24T09:03:59.337Z
updated: 2026-06-24T09:03:59.337Z
comment_count: 1
last_comment_at: 2026-07-08T09:13:34.321Z
---

# MERIDIAN-2 Add usage metrics to the dashboard

## Context

Product wants visibility into task throughput and review latency on the Atlas Console home dashboard. We need server-side aggregates exposed via a new metrics endpoint and client widgets that refresh every 60 seconds.

## Scope

- [ ] `GET /api/protected/orgs/:slug/metrics/summary` — open tasks, in-review PRs, median cycle time (7d)
- [ ] Sparkline components for weekly trend
- [ ] Empty state when org has fewer than 5 completed tasks

## Dependencies

- D1 indexes on `tasks.updated_at` and `github_pull_requests.merged_at`
- Design spec in Figma (Atlas → Dashboard v2)

## Out of scope

Billing usage meters — tracked separately under **MERIDIAN-14** (not seeded).

## Discussion

**🤖 dev-session** · agent · 2026-07-08 09:13

> ALW-414 QA: verified on cursor composer 2.5.

