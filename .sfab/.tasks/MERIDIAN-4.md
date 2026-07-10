---
id: task_seed_meridian_04
number: 4
display_id: MERIDIAN-4
title: Refactor task table virtualization and filters
status: ready
kind: deliverable
priority: medium
needs_walkthrough: unspecified
created: 2026-06-30T03:15:08.837Z
updated: 2026-07-10T03:22:26.439Z
comment_count: 0
assignee_id: mipr6u5ykI3ua72XtkgC_
---

# MERIDIAN-4 Refactor task table virtualization and filters

## Context

The task table now handles 2k+ rows for our largest design partner. We need windowed rendering, column resize persistence, and filter chips that survive navigation.

## In progress

- [x] Extract table shell into `packages/ui/src/tasks/table/`
- [x] Virtual row renderer with overscan
- [x] Persist sort + filter state in localStorage
- [ ] Column width drag handles
- [ ] Keyboard roving tabindex on rows

## Pull request

Open PR on `meridian-atlas`: **Refactor task table virtualization and filters** (~48 files, ~3.2k LOC). Use it to stress-test PR file tree and diff loading.

## Review checklist

1. Scroll 2k-row fixture — no layout thrash in Performance panel
2. Resize browser to 390px width — horizontal scroll preserves status badges
3. Clear filters resets to default sort (number desc)
