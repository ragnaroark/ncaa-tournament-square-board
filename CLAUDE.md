# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS web app that tracks NCAA March Madness tournament game results on a 10x10 "square board." Each cell on the board is owned by a participant. When a game finishes, the winning square is determined by the last digit of the winner's score (column) and the last digit of the loser's score (row). Winners earn payouts that increase by round.

## Running

No build step — open `index.html` in a browser. No dependencies to install (Tabler CSS/JS loaded via CDN).

## Architecture

**Four files, one page:**

- `index.html` — The 10x10 board grid (hardcoded cell names/owners and randomized header digits), round filter tabs, game list sidebar, mobile game cards, and legend. Board cells use `data-id` (1–100) for lookup. Loads `games.js` before `script.js`.
- `games.js` — **Game data only.** Contains the `ncaaGames[]` array as a global. Each entry has: `id`, `round`, `name`, `date`, `day`, `winner` (name, seed, score, logo), `loser` (same shape), and `video`/`videoTimestamp`. This is the only file to edit when adding new game results.
- `script.js` — Single `DOMContentLoaded` handler containing all rendering/interaction logic:
  - `payoutStructure` — Dollar amounts per round.
  - `findSquare(winScore, loseScore)` — Maps scores to a board cell by matching last digits against header/row values.
  - `analyzeGames()` — Iterates all games, calls `findSquare`, and applies `round-N-winner` CSS classes + tracks wins in `winnerSquares` object.
  - `renderGames()` / `renderMobileGames()` — Builds the game list UI (desktop sidebar and mobile horizontal scroll).
  - `filterBoardCells(round)` — Shows/hides round indicators on cells based on selected tab.
  - `showSquarePopup(cellId)` — Modal showing a cell's wins and total payout.
  - `generateWinningsList()` — Summary popup of all participants' winnings.
- `styles.css` — CSS custom properties in `:root` for board dimensions, round colors, and indicator sizes. Board uses CSS Grid. Responsive: desktop has sidebar game list; mobile uses horizontal scroll cards.

## Key Concepts

- **Square mapping:** Column headers and row headers contain randomized single digits (0–9). The board is NOT in 0-9 sequential order — the digit positions are shuffled. `findSquare()` looks up the actual header/row text to find the correct cell.
- **Round indicators:** Each cell can show up to 6 round indicators (circles, squares, triangles, stars) positioned in different corners via CSS pseudo-elements and the `round-N-winner` classes.
- **Game data is separate:** Games live in `games.js` as a global `ncaaGames` array. To add results, append objects to this file following the existing shape.
- **Touch support:** All interactive elements (popups, game clicks, backdrop dismiss) have both `click` and `touchend` handlers for mobile.

## Updating for a New Tournament

1. Replace `ncaaGames[]` contents in `games.js` with new game data (keep the same object shape).
2. Update board cell names in `index.html` if participants change.
3. Update column/row header digits in `index.html` (the randomized single digits).
4. Adjust `payoutStructure` if payout amounts change.
