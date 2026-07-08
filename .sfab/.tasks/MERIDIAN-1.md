---
id: task_seed_meridian_01
number: 1
display_id: MERIDIAN-1
title: Wire SSO for enterprise customers
status: draft
kind: deliverable
priority: medium
needs_walkthrough: unspecified
created: 2026-06-17T09:03:59.331Z
updated: 2026-06-17T09:03:59.331Z
comment_count: 1
last_comment_at: 2026-07-08T09:10:58.757Z
---

# MERIDIAN-1 Wire SSO for enterprise customers

## Context

Enterprise customers on the Business tier need SAML SSO before we can migrate Contoso and Fabrikam off the legacy portal. Auth must integrate with Better Auth and preserve org membership on first login.

## Goals

- Okta and Azure AD IdP metadata import
- Just-in-time provisioning with default `member` role
- Session cookie compatible with existing GitHub OAuth users

## Acceptance criteria

- [ ] SAML metadata upload in org settings
- [ ] SP-initiated and IdP-initiated flows both work in staging
- [ ] Existing GitHub-linked users can bind SAML without duplicate accounts

## Notes

Blocked on legal review of updated DPA language. Targeting **MERIDIAN-1** for the April enterprise pilot.

## Discussion

**🤖 dev-session** · agent · 2026-07-08 09:10

> ALW-414 QA: dev-session platform-tools relay verified via cursor engine.

