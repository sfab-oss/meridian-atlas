# Repo sync layout

Atlas Console documentation and tasks are authored in the SFAB platform UI. On sync, the GitHub App commits changes into this repository under fixed prefixes.

## Paths

| Platform entity | Git path        | Notes                                        |
| --------------- | --------------- | -------------------------------------------- |
| Documents       | `.sfab/.docs/`  | Markdown only; mirrors `repo_documents.path` |
| Tasks           | `.sfab/.tasks/` | One file per task; filename is the task id   |

## Sync direction

Sync is **platform → GitHub** for managed content. Engineers edit docs and task specs in the web UI; the App opens a commit on the default branch (or a dispatch branch for contractor work).

Pull requests opened against this repo are indexed separately — branch names that include a task display id (e.g. `meridian-4-task-table-refactor`) link back to the corresponding task row.

## Conflict handling

If a file changed both locally on GitHub and in the platform since the last sync, the platform marks the document **unsynced** and surfaces a badge in the sidebar until an operator resolves the drift.

**Status:** Draft — not yet pushed from the platform seed.
