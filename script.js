document.addEventListener('DOMContentLoaded', function() {
    // ncaaGames is loaded from games.js

    // Get HTML elements
    const gamesContainer = document.getElementById('games-container');
    const mobileGamesContainer = document.querySelector('.mobile-games-container');
    const mobileGamesHeader = document.querySelector('.mobile-games-header');
    const desktopGamesTitle = document.querySelector('.col-md-4 .card-title');
    const cells = document.querySelectorAll('.board-cell');
    const roundFilters = document.querySelectorAll('input[name="round-filter"]');
    const boardFilters = document.querySelectorAll('input[name="board-filter"]');

    const roundNames = {
        'all': 'All Games',
        '1': 'Round of 64 Games',
        '2': 'Round of 32 Games',
        '3': 'Sweet 16 Games',
        '4': 'Elite 8 Games',
        '5': 'Final Four Games',
        '6': 'Championship Game'
    };
    
    // Track which squares are winners for each round
    const winnerSquares = {
        round1: {},
        round2: {},
        round3: {},
        round4: {},
        round5: {},
        round6: {}
    };
    
    // Add payout structure
    const payoutStructure = {
        1: 100,  // First Round - $100 per win
        2: 200,  // Second Round - $200 per win
        3: 400,  // Third Round - $400 per win
        4: 800,  // Fourth Round - $800 per win
        5: 1600, // Fifth Round - $1,600 per win
        6: 4000  // Championship - $4,000 per win
    };
    
    // Function to calculate total winnings for a square
    function calculateSquareWinnings(allWins) {
        let total = 0;
        allWins.forEach(win => {
            total += payoutStructure[win.round] || 0;
        });
        return total;
    }
    
    // Function to filter board cells based on selected round
    function filterBoardCells(selectedRound) {
        cells.forEach(cell => {
            // Remove all filtered classes
            cell.classList.remove('filtered-out', 'filtered-in', 'multiple-wins');
            
            // If "All Rounds" is selected, show all cells with their original colors
            if (selectedRound === 'all') {
                // Restore all original winner classes for this cell
                const cellId = parseInt(cell.getAttribute('data-id'));
                Object.keys(winnerSquares).forEach(roundKey => {
                    if (winnerSquares[roundKey][cellId] && winnerSquares[roundKey][cellId].length > 0) {
                        const round = roundKey.replace('round', '');
                        cell.classList.add(`round-${round}-winner`);
                        if (winnerSquares[roundKey][cellId].length > 1) {
                            cell.classList.add('multiple-wins');
                        }
                    }
                });
                return;
            }
            
            // Check if the cell has a win for the selected round
            const cellId = parseInt(cell.getAttribute('data-id'));
            const roundKey = `round${selectedRound}`;
            const winsForRound = winnerSquares[roundKey][cellId];
            
            // Apply filtered classes
            if (winsForRound && winsForRound.length > 0) {
                cell.classList.add('filtered-in');
                // Keep only the background color for the selected round
                cell.classList.remove('round-1-winner', 'round-2-winner', 'round-3-winner', 'round-4-winner', 'round-5-winner', 'round-6-winner');
                cell.classList.add(`round-${selectedRound}-winner`);
                
                // Add multiple-wins class if there are multiple wins in this round
                if (winsForRound.length > 1) {
                    cell.classList.add('multiple-wins');
                }
            } else {
                cell.classList.add('filtered-out');
                // Remove all winner classes for filtered out cells
                cell.classList.remove('round-1-winner', 'round-2-winner', 'round-3-winner', 'round-4-winner', 'round-5-winner', 'round-6-winner');
            }
        });
    }
    
    // Add event listeners for board filters
    boardFilters.forEach(input => {
        input.addEventListener('change', function() {
            const selectedRound = this.value;

            filterBoardCells(selectedRound);
            renderGames(selectedRound);
            renderMobileGames(selectedRound);

            // Update games titles to reflect active filter
            const title = roundNames[selectedRound] || 'All Games';
            if (mobileGamesHeader) mobileGamesHeader.textContent = title;
            if (desktopGamesTitle) desktopGamesTitle.textContent = title;
        });
    });
    
    // Function to get the last digit of a number
    function getLastDigit(number) {
        return number % 10;
    }
    
    // Function to find the square based on winning and losing scores
    function findSquare(winningScore, losingScore) {
        const winLastDigit = getLastDigit(winningScore);
        const loseLastDigit = getLastDigit(losingScore);
        
        // Find the column index (0-based) for the winning score
        const columnHeaders = document.querySelectorAll('.header-cell');
        let columnIndex = -1;
        
        for (let i = 0; i < columnHeaders.length; i++) {
            if (parseInt(columnHeaders[i].textContent) === winLastDigit) {
                columnIndex = i;
                break;
            }
        }
        
        // Find the row index (0-based) for the losing score
        const rowHeaders = document.querySelectorAll('.row-header');
        let rowIndex = -1;
        
        for (let i = 0; i < rowHeaders.length; i++) {
            if (parseInt(rowHeaders[i].textContent) === loseLastDigit) {
                rowIndex = i;
                break;
            }
        }
        
        if (columnIndex !== -1 && rowIndex !== -1) {
            // Calculate the cell ID based on row and column
            // Formula: (row * number of columns) + column + 1
            const cellId = (rowIndex * 10) + columnIndex + 1;
            return {
                element: document.querySelector(`.board-cell[data-id="${cellId}"]`),
                cellId: cellId,
                winDigit: winLastDigit,
                loseDigit: loseLastDigit
            };
        }
        
        return null;
    }
    
    // Function to analyze all games and mark winning squares
    function analyzeGames() {
        // Clear existing winner tracking
        Object.keys(winnerSquares).forEach(key => {
            winnerSquares[key] = {};
        });
        
        // Remove existing winner classes
        cells.forEach(cell => {
            cell.classList.remove('round-1-winner', 'round-2-winner', 'round-3-winner', 'round-4-winner', 'round-5-winner', 'round-6-winner');
        });
        
        // Process all games to identify winning squares for each round
        ncaaGames.forEach(game => {
            const square = findSquare(game.winner.score, game.loser.score);
            if (square) {
                const roundKey = `round${game.round}`;
                
                // Store this square as a winner for this round
                if (!winnerSquares[roundKey][square.cellId]) {
                    winnerSquares[roundKey][square.cellId] = [];
                }
                
                winnerSquares[roundKey][square.cellId].push(game);
                
                // Add the appropriate round winner class
                square.element.classList.add(`round-${game.round}-winner`);
            }
        });
    }
    
    // Function to show popup with square details
    function showSquarePopup(cellId) {
        // Get square name/owner
        const cell = document.querySelector(`.board-cell[data-id="${cellId}"]`);
        const squareName = cell.textContent.trim();
        
        // Get all winning games for this square
        const allWins = [];
        const roundDescriptions = {
            round1: "Round of 64",
            round2: "Round of 32",
            round3: "Sweet 16",
            round4: "Elite 8",
            round5: "Final Four",
            round6: "Championship"
        };
        
        // Collect all wins across all rounds
        Object.keys(winnerSquares).forEach(roundKey => {
            if (winnerSquares[roundKey][cellId]) {
                winnerSquares[roundKey][cellId].forEach(game => {
                    allWins.push({
                        round: game.round,
                        roundName: roundDescriptions[roundKey],
                        winner: game.winner,
                        loser: game.loser,
                        date: game.date,
                        game: game,
                        payout: payoutStructure[game.round]
                    });
                });
            }
        });
        
        // Calculate total winnings
        const totalWinnings = calculateSquareWinnings(allWins);
        
        // Create popup element
        const popup = document.createElement('div');
        popup.className = 'square-popup';
        
        // Create popup content
        let popupContent = `
            <div class="square-popup-header">
                <h3 class="square-popup-title">Square #${cellId}: ${squareName}</h3>
                <button class="square-popup-close" type="button" aria-label="Close popup">&times;</button>
            </div>
            <div class="square-popup-content">
                <h4>Square Details</h4>
                <p>Winning score ends with: ${getColumnsDigitForCell(cellId)}</p>
                <p>Losing score ends with: ${getRowsDigitForCell(cellId)}</p>
                <p class="total-winnings">Total Winnings: $${totalWinnings.toLocaleString()}</p>
            </div>
        `;
        
        // Add wins section
        if (allWins.length > 0) {
            popupContent += `
                <div class="square-popup-content">
                    <h4>Winning Games (${allWins.length})</h4>
                    <ul class="square-wins-list">
            `;
            
            // Sort wins by round (higher rounds first)
            allWins.sort((a, b) => b.round - a.round);
            
            // Add each win with payout
            allWins.forEach(win => {
                popupContent += `
                    <li class="square-win-item round-${win.round}" data-game-id="${win.game.id}">
                        <div class="square-win-teams">
                            ${win.winner.name} vs ${win.loser.name}
                            <span class="square-win-score">(${win.winner.score}-${win.loser.score})</span>
                        </div>
                        <div class="square-win-details">
                            <span class="square-win-date">${win.roundName} · ${win.date}</span>
                            <span class="square-win-payout">+$${win.payout.toLocaleString()}</span>
                        </div>
                    </li>
                `;
            });
            
            popupContent += `
                    </ul>
                </div>
            `;
        } else {
            popupContent += `
                <div class="square-popup-content">
                    <h4>Winning Games</h4>
                    <div class="no-wins-message">No winning games yet for this square.</div>
                </div>
            `;
        }
        
        // Add footer
        popupContent += `
            <div class="square-popup-footer">
                <button class="square-popup-button" onclick="closePopup()">Close</button>
            </div>
        `;
        
        popup.innerHTML = popupContent;
        
        // Create backdrop with improved touch support
        const backdrop = createBackdrop();
        
        // Add popup and backdrop to body
        document.body.appendChild(backdrop);
        document.body.appendChild(popup);
        
        // Ensure close button works with touch
        const closeBtn = popup.querySelector('.square-popup-close');
        closeBtn.addEventListener('click', closePopup);
        closeBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            closePopup();
        });
        
        // Same for the close button in footer if it exists
        const footerCloseBtn = popup.querySelector('.square-popup-button');
        if (footerCloseBtn) {
            footerCloseBtn.addEventListener('click', closePopup);
            footerCloseBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                closePopup();
            });
        }
        
        // Add event listeners for win items with touch support
        const winItems = popup.querySelectorAll('.square-win-item');
        winItems.forEach(item => {
            const handleWinItemClick = function() {
                const gameId = parseInt(this.getAttribute('data-game-id'));
                const game = ncaaGames.find(g => g.id === gameId);
                if (game) {
                    closePopup();
                    
                    // Highlight the game in the games list
                    const gameItem = document.querySelector(`.game-item[data-id="${gameId}"]`);
                    if (gameItem) {
                        gameItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        highlightGameWinner(game, gameItem);
                    } else {
                        // If game is not visible in the current filtered view, change the filter
                        document.querySelector(`input[name="round-filter"][value="${game.round}"]`).click();
                        setTimeout(() => {
                            const newGameItem = document.querySelector(`.game-item[data-id="${gameId}"]`);
                            if (newGameItem) {
                                newGameItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                highlightGameWinner(game, newGameItem);
                            }
                        }, 100);
                    }
                }
            };
            
            item.addEventListener('click', handleWinItemClick);
            item.addEventListener('touchend', function(e) {
                e.preventDefault();
                handleWinItemClick.call(this);
            });
        });
    }
    
    // Helper function to get the column digit for a cell ID
    function getColumnsDigitForCell(cellId) {
        const colIndex = (cellId - 1) % 10;
        const columnHeaders = document.querySelectorAll('.header-cell');
        return columnHeaders[colIndex].textContent;
    }
    
    // Helper function to get the row digit for a cell ID
    function getRowsDigitForCell(cellId) {
        const rowIndex = Math.floor((cellId - 1) / 10);
        const rowHeaders = document.querySelectorAll('.row-header');
        return rowHeaders[rowIndex].textContent;
    }
    
    // Function to close popup
    function closePopup() {
        const popup = document.querySelector('.square-popup');
        const backdrop = document.querySelector('.popup-backdrop');
        
        if (popup) {
            popup.remove();
        }
        
        if (backdrop) {
            backdrop.remove();
        }
    }
    
    // Make closePopup function globally available
    window.closePopup = closePopup;
    
    // Function to create the popup backdrop with touch support
    function createBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.className = 'popup-backdrop';
        
        // Handle both click and touch events
        backdrop.addEventListener('click', closePopup);
        backdrop.addEventListener('touchend', function(e) {
            e.preventDefault();
            closePopup();
        });
        
        return backdrop;
    }
    
    // Function to render games with optional round filter
    function renderGames(roundFilter = 'all') {
        gamesContainer.innerHTML = '';
        
        ncaaGames.forEach(game => {
            // Apply filters
            if (roundFilter !== 'all' && game.round !== parseInt(roundFilter)) {
                return;
            }
            
            // Find winning square for this game
            const square = findSquare(game.winner.score, game.loser.score);
            const squareNumber = square ? square.cellId : null;
            
            // Create game item
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            gameItem.dataset.id = game.id;
            
            // Create winner team
            const winnerTeam = document.createElement('div');
            winnerTeam.classList.add('team', 'winner');
            
            const winnerSeed = document.createElement('span');
            winnerSeed.classList.add('seed');
            winnerSeed.textContent = game.winner.seed;
            
            const winnerLogo = document.createElement('div');
            winnerLogo.classList.add('team-logo');
            if (game.winner.logo) {
                const logoImg = document.createElement('img');
                logoImg.src = game.winner.logo;
                logoImg.alt = game.winner.name;
                winnerLogo.appendChild(logoImg);
            }
            
            const winnerName = document.createElement('div');
            winnerName.classList.add('team-name');
            winnerName.textContent = game.winner.name;
            
            const winnerScore = document.createElement('div');
            winnerScore.classList.add('score');
            winnerScore.textContent = game.winner.score;
            
            winnerTeam.appendChild(winnerSeed);
            winnerTeam.appendChild(winnerLogo);
            winnerTeam.appendChild(winnerName);
            winnerTeam.appendChild(winnerScore);
            
            // Create loser team
            const loserTeam = document.createElement('div');
            loserTeam.classList.add('team');
            
            const loserSeed = document.createElement('span');
            loserSeed.classList.add('seed');
            loserSeed.textContent = game.loser.seed;
            
            const loserLogo = document.createElement('div');
            loserLogo.classList.add('team-logo');
            if (game.loser.logo) {
                const logoImg = document.createElement('img');
                logoImg.src = game.loser.logo;
                logoImg.alt = game.loser.name;
                loserLogo.appendChild(logoImg);
            }
            
            const loserName = document.createElement('div');
            loserName.classList.add('team-name');
            loserName.textContent = game.loser.name;
            
            const loserScore = document.createElement('div');
            loserScore.classList.add('score');
            loserScore.textContent = game.loser.score;
            
            loserTeam.appendChild(loserSeed);
            loserTeam.appendChild(loserLogo);
            loserTeam.appendChild(loserName);
            loserTeam.appendChild(loserScore);
            
            // Add teams to game item
            gameItem.appendChild(winnerTeam);
            gameItem.appendChild(loserTeam);
            
            // Create game meta with square number
            const gameMeta = document.createElement('div');
            gameMeta.classList.add('game-meta');
            
            // Create a container div with flexbox for game info and square number
            const gameMetaContainer = document.createElement('div');
            gameMetaContainer.classList.add('game-meta-container');
            
            // Game info on the left
            const gameInfo = document.createElement('span');
            gameInfo.classList.add('text-muted');
            gameInfo.innerHTML = `${game.name} · ${game.date}`;
            if (game.video) {
                gameInfo.innerHTML += ` · <i class="ti ti-player-play"></i> ${game.video}`;
            }
            
            // Square number on the right
            if (squareNumber !== null) {
                const squareDisplay = document.createElement('span');
                squareDisplay.classList.add('square-number');
                squareDisplay.textContent = `Square #${squareNumber}`;
                
                // Add both to the container
                gameMetaContainer.appendChild(gameInfo);
                gameMetaContainer.appendChild(squareDisplay);
            } else {
                // Just add the game info if no square number
                gameMetaContainer.appendChild(gameInfo);
            }
            
            // Add the container to the game meta
            gameMeta.appendChild(gameMetaContainer);
            
            // Add meta to game item
            gameItem.appendChild(gameMeta);
            
            // Add click event
            gameItem.addEventListener('click', function() {
                highlightGameWinner(game, this);
            });
            
            gamesContainer.appendChild(gameItem);
        });
    }
    
    // Function to render games in the mobile container
    function renderMobileGames(roundFilter = 'all') {
        if (!mobileGamesContainer) return;
        
        mobileGamesContainer.innerHTML = '';
        
        ncaaGames.forEach(game => {
            // Apply round filter
            if (roundFilter !== 'all' && game.round !== parseInt(roundFilter)) {
                return;
            }
            
            // Find winning square for this game
            const square = findSquare(game.winner.score, game.loser.score);
            const squareNumber = square ? square.cellId : null;
            
            // Create mobile game card
            const gameCard = document.createElement('div');
            gameCard.classList.add('mobile-game-card');
            gameCard.dataset.id = game.id;
            
            // Create winner/loser display with winning square
            const matchup = document.createElement('div');
            
            let matchupHTML = `
                <div class="mobile-game-matchup">
                    <div class="mobile-game-teams">
                        <span class="mobile-seed">${game.winner.seed}</span>
                        <strong>${game.winner.name}</strong>
                        <span class="mobile-score">${game.winner.score}</span>
                        <span class="mobile-vs">–</span>
                        <span class="mobile-score">${game.loser.score}</span>
                        <span>${game.loser.name}</span>
                        <span class="mobile-seed">${game.loser.seed}</span>
                    </div>
                    <div class="mobile-game-meta">
                        <span class="text-muted">${game.date}</span>`;

            if (squareNumber !== null) {
                matchupHTML += `<span class="square-number">#${squareNumber}</span>`;
            }

            matchupHTML += `</div></div>`;
            
            matchup.innerHTML = matchupHTML;
            gameCard.appendChild(matchup);
            
            // Add click event
            gameCard.addEventListener('click', function() {
                highlightGameWinner(game, this);
            });
            
            mobileGamesContainer.appendChild(gameCard);
        });
    }
    
    // Function to highlight the winning square when a game is clicked
    function highlightGameWinner(game, clickedElement) {
        // Remove active class from all game items
        document.querySelectorAll('.game-item, .mobile-game-card').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked element
        clickedElement.classList.add('active');
        
        // Find the winning square for this game
        const square = findSquare(game.winner.score, game.loser.score);
        
        // Remove highlight class from all cells
        document.querySelectorAll('.board-cell').forEach(cell => {
            cell.classList.remove('highlight');
        });
        
        // Add highlight class to winning square
        if (square) {
            square.element.classList.add('highlight');
            
            // Scroll to the winning square if needed
            square.element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    // Initial render for desktop and mobile
    const initialRoundFilter = document.querySelector('input[name="board-filter"]:checked')?.value || 'all';
    filterBoardCells(initialRoundFilter);
    renderGames(initialRoundFilter);
    renderMobileGames(initialRoundFilter);
    
    // Analyze all games to mark winning squares
    analyzeGames();
    
    // Add click event to cells to show popup
    cells.forEach(cell => {
        // Add click/touch events for showing popup
        const showPopupHandler = function() {
            const cellId = parseInt(this.getAttribute('data-id'));
            showSquarePopup(cellId);
        };
        
        // Use multiple event types to ensure coverage across devices
        cell.addEventListener('click', showPopupHandler);
        cell.addEventListener('touchend', function(e) {
            e.preventDefault(); // Prevent default touch behavior
            showPopupHandler.call(this);
        });
        
        // Original hover effect code
        cell.addEventListener('mouseenter', function() {
            // Get the cell's data-id value
            const cellId = parseInt(this.getAttribute('data-id'));
            
            // Calculate the row and column (0-based index)
            const row = Math.floor((cellId - 1) / 10);
            const col = (cellId - 1) % 10;
            
            // Get the column and row headers
            const colHeader = document.querySelectorAll('.header-cell')[col];
            const rowHeader = document.querySelectorAll('.row-header')[row];
            
            // Highlight the headers
            colHeader.style.backgroundColor = '#d1ecf1';
            rowHeader.style.backgroundColor = '#d1ecf1';
            
            // Cell hover is now handled by CSS :hover for consistency
        });
        
        cell.addEventListener('mouseleave', function() {
            // Get the cell's data-id value
            const cellId = parseInt(this.getAttribute('data-id'));
            
            // Calculate the row and column (0-based index)
            const row = Math.floor((cellId - 1) / 10);
            const col = (cellId - 1) % 10;
            
            // Get the column and row headers
            const colHeader = document.querySelectorAll('.header-cell')[col];
            const rowHeader = document.querySelectorAll('.row-header')[row];
            
            // Reset the headers' background color
            colHeader.style.backgroundColor = '';
            rowHeader.style.backgroundColor = '';
            
            // Cell hover reset is now handled by CSS :hover for consistency
        });
    });

    // Function to generate winnings list
    function generateWinningsList() {
        const squareWinnings = {};
        const squareNames = {};
        
        // Get all square names first
        document.querySelectorAll('.board-cell').forEach(cell => {
            const cellId = parseInt(cell.getAttribute('data-id'));
            squareNames[cellId] = cell.textContent.trim();
            squareWinnings[cellId] = 0;
        });
        
        // Calculate winnings for each square
        Object.keys(winnerSquares).forEach(roundKey => {
            const round = parseInt(roundKey.replace('round', ''));
            Object.keys(winnerSquares[roundKey]).forEach(cellId => {
                const wins = winnerSquares[roundKey][cellId];
                if (wins) {
                    squareWinnings[cellId] += (wins.length * payoutStructure[round]);
                }
            });
        });
        
        // Create popup for the list
        const popup = document.createElement('div');
        popup.className = 'square-popup winnings-list-popup';
        
        // Sort squares by winnings (highest to lowest)
        const sortedSquares = Object.keys(squareWinnings)
            .map(cellId => ({
                id: cellId,
                name: squareNames[cellId],
                winnings: squareWinnings[cellId]
            }))
            .sort((a, b) => b.winnings - a.winnings);
        
        // Calculate total winnings
        const totalWinnings = sortedSquares.reduce((sum, square) => sum + square.winnings, 0);
        
        // Create popup content
        let popupContent = `
            <div class="square-popup-header">
                <h3 class="square-popup-title">Square Winnings Summary</h3>
                <button class="square-popup-close" type="button" aria-label="Close popup">&times;</button>
            </div>
            <div class="square-popup-content">
                <div class="winnings-list">
                    <table class="winnings-table">
                        <thead>
                            <tr>
                                <th>Square #</th>
                                <th>Name</th>
                                <th>Total Winnings</th>
                            </tr>
                        </thead>
                        <tbody>
        `;
        
        sortedSquares.forEach(square => {
            if (square.winnings > 0) {
                popupContent += `
                    <tr>
                        <td>${square.id}</td>
                        <td>${square.name}</td>
                        <td>$${square.winnings.toLocaleString()}</td>
                    </tr>
                `;
            }
        });
        
        // Add total row
        popupContent += `
                <tr class="total-row">
                    <td colspan="2"><strong>TOTAL WINNINGS</strong></td>
                    <td><strong>$${totalWinnings.toLocaleString()}</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    <div class="square-popup-footer">
        <button class="square-popup-button" onclick="closePopup()">Close</button>
    </div>
    `;
        
        popup.innerHTML = popupContent;
        
        // Create and add backdrop
        const backdrop = createBackdrop();
        document.body.appendChild(backdrop);
        document.body.appendChild(popup);
        
        // Add event listeners for close button
        const closeBtn = popup.querySelector('.square-popup-close');
        closeBtn.addEventListener('click', closePopup);
        closeBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            closePopup();
        });
    }

    // Add button to card header
    const cardHeader = document.querySelector('.card-header');
    const winningsButton = document.createElement('button');
    winningsButton.className = 'btn btn-sm btn-primary float-end';
    winningsButton.textContent = 'View All Winnings';
    winningsButton.addEventListener('click', generateWinningsList);
    cardHeader.appendChild(winningsButton);
}); 