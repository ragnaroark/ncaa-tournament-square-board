# NCAA Tournament Square Board

A static web application that displays an NCAA Tournament square board with interactive features.

## Features

- Interactive board to track winning squares across different tournament rounds
- Ability to view game results by round and day
- Color-coded indicators for different rounds (Round of 64, Round of 32, Sweet 16, Elite 8, Final Four)
- Special indicator for squares that won multiple Round of 64 games
- Mobile-friendly layout with horizontal scrolling game results
- Highlighting of winning squares when clicking on game results

## How It Works

1. Each square on the board is determined by the last digit of the winning team's score (columns) and the last digit of the losing team's score (rows)
2. Round indicators are displayed on each square:
   - Round of 64: Circle in top left (red circle for multiple wins)
   - Round of 32: Square in top right
   - Sweet 16: Triangle in bottom left
   - Elite 8: Star in bottom right
   - Final Four: Star in center

## Technologies Used

- HTML5, CSS3, and Vanilla JavaScript
- [Tabler](https://tabler.io/) for UI components and styling

## How to Use

1. Open the `index.html` file in a web browser
2. View the square board with round indicators
3. Browse and filter the game results
4. Click on any game to highlight the corresponding winning square

## Mobile View

On mobile devices, the game results appear in a horizontal scrolling format below the board for easier browsing. 