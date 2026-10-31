# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS web app that tracks NCAA March Madness tournament game results on a 10x10 "square board." Each cell on the board is owned by a participant. When a game finishes, the winning square is determined by the last digit of the winner's score (column) and the last digit of the loser's score (row). Winners earn payouts that increase by round.

The UI is mobile-first: a single column with a bottom tab bar (Board / Results / Leaders) on phones, and a board column plus a sticky Results/Leaders column from 900px up. Light theme only.

## Running

No build step — open `index.html` in a browser. No framework; the only external resource is Google Fonts (Barlow and Barlow Condensed), with system fallbacks.

## Architecture

**Four files, one page:**

- `index.html` — Page shell and the 10x10 board markup (hardcoded cell names/owners as `<button class="board-cell" data-id data-name>` and the shuffled header digits). Also holds the empty containers that `script.js` fills: round filter, search, "your square" strip, results list, leaders list, bottom sheet, tab bar.
- `games.js` — **Game data only.** Contains the `ncaaGames[]` array as a global. Each entry has: `id`, `round`, `name`, `date`, `day`, `winner` (name, seed, score, logo), `loser` (same shape). Append objects in the order games were played; the UI shows them newest first. This is the only file to edit when adding new game results. (`logo` is currently unused by the UI.)
- `script.js` — Single `DOMContentLoaded` handler containing all rendering/interaction logic:
  - `payoutStructure` / `roundInfo` — Dollar amounts and labels per round.
  - `findSquare(winScore, loseScore)` — Maps scores to a board cell by matching last digits against header/row digits in the DOM.
  - `analyzeGames()` — Builds `winnerSquares` (cellId → games) and stamps `game.cellId`.
  - `renderRoundFilter()` — Seven-segment round filter that also shows the payout per round; one state (`filter`) drives the board and the results list.
  - `filterBoardCells()` — Applies `round-N-winner` (cell fill = highest round won, or the filtered round), win dots, `is-mine`, `filtered-out`, `is-hit` (search match) and the Fit/Large zoom class.
  - `renderSearchHits()` — Name search chips; matching cells are highlighted and the rest dimmed.
  - `renderMineBar()` — "Your square" strip; the viewer's squares are stored in `localStorage` (`squareboard.mine`).
  - `renderGames()` — Results list, newest first, grouped by date, each card showing both scores, the winning square's owner and payout.
  - `generateWinningsList()` — Leaders tab: pot total, squares paid, ranked list with per-round payout bars.
  - `showSquarePopup(cellId, gameId?)` / `closePopup()` — Bottom sheet (`role="dialog"`) with total winnings, "This is my square" toggle and the list of wins. Scroll-locked, closes on Escape, scrim tap, swipe down or the close button.
  - `showView(view)` — Tab switching; on desktop the board is always visible and the side column swaps between Results and Leaders.
- `styles.css` — CSS custom properties in `:root` for colours (one token set for rounds: `--rN` solid, `--rN-tint` fill), fonts and spacing. Board uses CSS Grid with `display: contents` rows. Breakpoints: `min-width: 900px` for the two-column desktop layout; `orientation: landscape` on phones sizes cells from the viewport height.

## Key Concepts

- **Square mapping:** Column headers and row headers contain shuffled single digits (0–9). `findSquare()` reads the actual header/row text, so the digits in `index.html` are the source of truth.
- **Round colours:** Cells use one tint for their highest round plus one solid dot per win. The same six tokens colour the legend, filter dots, result cards, sheet and leader bars. Green is reserved for money and orange for "your square".
- **Touch handling:** Interactive elements are real `<button>`s with `click` handlers only. Do not add `touchend` handlers; they fire after scroll gestures and were the cause of popups opening on swipe.
- **Game data is separate:** Games live in `games.js` as a global `ncaaGames` array. To add results, append objects to this file following the existing shape.

## Updating for a New Tournament

1. Replace `ncaaGames[]` contents in `games.js` with new game data (keep the same object shape).
2. Update board cell names in `index.html`: change both the `data-name` attribute and the `<span class="name">` text of each `.board-cell`.
3. Update column/row header digits in `index.html` (the shuffled single digits).
4. Adjust `payoutStructure` in `script.js` if payout amounts change.

## Design notes

`design/mobile-critique/` holds the mobile design review that led to this layout (report, screenshots, and the mockup it was built from).
