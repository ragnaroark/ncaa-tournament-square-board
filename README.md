# NCAA Tournament Square Board

A static web app that tracks NCAA Tournament results on a 10×10 squares board. Designed for phones first: find your square, see what it has paid, and follow results as they come in.

## Features

- **Board** with one fill colour per square for its highest round won and a dot for every win
- **Your square**: mark a square as yours and it stays pinned at the top with its running total (saved on your device)
- **Name search** that highlights matching squares, even when a name appears more than once
- **Round filter** that doubles as the payout schedule ($100 for the Round of 64 up to $4,000 for the Championship)
- **Results** newest first, grouped by day, each with both scores, the winning square's owner and the payout
- **Leaders** with the pot total, squares paid, and a ranked list with per-round payout bars
- **Square details** in a bottom sheet: total winnings and every win with its round, score and payout
- Fit / Large board sizes on phones; two-column layout on desktop

## How It Works

1. Column headers hold the last digit of the winning team's score and row headers the last digit of the losing team's score. The digits are shuffled, not 0–9 in order.
2. When a game ends, the square at that column and row wins the payout for that round.
3. A square can win several times; its fill shows the highest round and the dots show each win.

## Technologies Used

- HTML5, CSS3 and vanilla JavaScript, no build step and no framework
- Google Fonts (Barlow, Barlow Condensed) with system fallbacks

## How to Use

1. Open `index.html` in a web browser.
2. Tap a square to see its wins and total, and tap "This is my square" to pin it.
3. Use the search field to find a name, and the round filter to focus on one round.
4. Switch to Results for the latest games or Leaders for the standings.

## Updating Results

Append new games to `ncaaGames[]` in `games.js`, following the existing object shape. Nothing else needs to change.
