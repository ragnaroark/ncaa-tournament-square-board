document.addEventListener('DOMContentLoaded', function () {
    // ncaaGames is loaded from games.js

    // ---- Configuration ------------------------------------------------
    const payoutStructure = {
        1: 100,  // Round of 64
        2: 200,  // Round of 32
        3: 400,  // Sweet 16
        4: 800,  // Elite 8
        5: 1600, // Final Four
        6: 4000  // Championship
    };
    const roundInfo = {
        1: { short: 'R64', name: 'Round of 64' },
        2: { short: 'R32', name: 'Round of 32' },
        3: { short: 'S16', name: 'Sweet 16' },
        4: { short: 'E8', name: 'Elite 8' },
        5: { short: 'F4', name: 'Final Four' },
        6: { short: 'Champ', name: 'Championship' }
    };
    const STORAGE_MINE = 'squareboard.mine';
    const STORAGE_VIEW = 'squareboard.view';

    // ---- DOM ----------------------------------------------------------
    const $ = (sel) => document.querySelector(sel);
    const cells = Array.from(document.querySelectorAll('.board-cell'));
    const columnHeaders = Array.from(document.querySelectorAll('.header-cell'));
    const rowHeaders = Array.from(document.querySelectorAll('.row-header'));
    const board = $('#board');
    const gamesContainer = $('#games-container');
    const leadersContainer = $('#leaders-container');

    const money = (n) => '$' + n.toLocaleString();
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const squareName = (id) => cells[id - 1].dataset.name;

    // ---- State --------------------------------------------------------
    let filter = 'all';          // 'all' or '1'..'6'
    let query = '';              // lower-cased search text
    let mine = [];               // cell ids the viewer marked as theirs
    let zoom = 'fit';            // 'fit' | 'large'
    const winnerSquares = {};    // cellId -> [game, ...]
    const roundsPlayed = new Set();

    try { mine = JSON.parse(localStorage.getItem(STORAGE_MINE) || '[]').filter((n) => Number.isInteger(n) && n >= 1 && n <= 100); } catch (e) { mine = []; }
    const saveMine = () => { try { localStorage.setItem(STORAGE_MINE, JSON.stringify(mine)); } catch (e) { /* storage unavailable */ } };

    // ---- Square mapping -----------------------------------------------
    // Column headers and row headers hold shuffled digits; find the cell whose
    // column digit matches the winner's last digit and row digit the loser's.
    function findSquare(winningScore, losingScore) {
        const winDigit = winningScore % 10;
        const loseDigit = losingScore % 10;
        const col = columnHeaders.findIndex((h) => parseInt(h.textContent, 10) === winDigit);
        const row = rowHeaders.findIndex((h) => parseInt(h.textContent, 10) === loseDigit);
        if (col === -1 || row === -1) return null;
        const cellId = row * 10 + col + 1;
        return { element: cells[cellId - 1], cellId, winDigit, loseDigit };
    }
    const colDigitFor = (cellId) => columnHeaders[(cellId - 1) % 10].textContent;
    const rowDigitFor = (cellId) => rowHeaders[Math.floor((cellId - 1) / 10)].textContent;

    function analyzeGames() {
        Object.keys(winnerSquares).forEach((k) => delete winnerSquares[k]);
        roundsPlayed.clear();
        ncaaGames.forEach((game) => {
            const square = findSquare(game.winner.score, game.loser.score);
            if (!square) return;
            game.cellId = square.cellId;
            (winnerSquares[square.cellId] = winnerSquares[square.cellId] || []).push(game);
            roundsPlayed.add(game.round);
        });
    }
    const winsFor = (cellId) => winnerSquares[cellId] || [];
    const calculateSquareWinnings = (cellId) => winsFor(cellId).reduce((sum, g) => sum + (payoutStructure[g.round] || 0), 0);
    const topRound = (cellId) => Math.max(0, ...winsFor(cellId).map((g) => g.round));

    // ---- Round filter (doubles as the payout schedule) ----------------
    function renderRoundFilter(container) {
        let html = `<button type="button" data-round="all" aria-pressed="${filter === 'all'}">All<small>rounds</small></button>`;
        for (let r = 1; r <= 6; r++) {
            html += `<button type="button" data-round="${r}" aria-pressed="${filter === String(r)}" style="--c:var(--r${r})" aria-label="${roundInfo[r].name}, ${money(payoutStructure[r])} per win"><span class="dot"></span>${roundInfo[r].short}<small>${money(payoutStructure[r])}</small></button>`;
        }
        container.innerHTML = html;
        container.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { filter = b.dataset.round; render(); }));
    }

    // ---- Board --------------------------------------------------------
    const cellMatchesQuery = (id) => query !== '' && squareName(id).toLowerCase().includes(query);

    function filterBoardCells() {
        board.classList.toggle('is-large', zoom === 'large');
        cells.forEach((cell, i) => {
            const id = i + 1;
            const wins = winsFor(id);
            const shown = filter === 'all' ? wins : wins.filter((g) => g.round === parseInt(filter, 10));
            cell.className = 'board-cell';
            if (shown.length) cell.classList.add(`round-${filter === 'all' ? topRound(id) : filter}-winner`);
            if (mine.includes(id)) cell.classList.add('is-mine');
            if (query ? !cellMatchesQuery(id) : (filter !== 'all' && !shown.length)) cell.classList.add('filtered-out');
            if (query && cellMatchesQuery(id)) cell.classList.add('is-hit');
            cell.querySelector('.dots').innerHTML = shown.slice(0, 4).map((g) => `<i style="--c:var(--r${g.round})"></i>`).join('');
            const total = calculateSquareWinnings(id);
            cell.setAttribute('aria-label', `Square ${id}, ${squareName(id)}, ${wins.length} win${wins.length === 1 ? '' : 's'}, ${money(total)}`);
        });
    }

    function renderLegend() {
        let html = '';
        for (let r = 1; r <= 6; r++) {
            html += `<span><i style="--c:var(--r${r})"></i>${roundInfo[r].name}${roundsPlayed.has(r) ? '' : ' (upcoming)'}</span>`;
        }
        html += `<span><i style="--c:var(--accent)"></i>Your square</span>`;
        $('#rounds-legend').innerHTML = html;
    }

    function renderSearchHits() {
        const hits = $('#search-hits');
        $('#search').classList.toggle('has-query', query !== '');
        if (!query) { hits.innerHTML = ''; return; }
        const ids = cells.map((_, i) => i + 1).filter(cellMatchesQuery);
        hits.innerHTML = ids.length
            ? ids.map((id) => `<button type="button" data-id="${id}"><b>#${id}</b>${esc(squareName(id))} · ${money(calculateSquareWinnings(id))}</button>`).join('')
            : `<span class="none">No square matches “${esc(query)}”.</span>`;
        hits.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => showSquarePopup(parseInt(b.dataset.id, 10))));
    }

    // ---- "Your square" strip ------------------------------------------
    function renderMineBar() {
        const bar = $('#minebar');
        bar.classList.remove('is-link');
        bar.onclick = null;
        if (!mine.length) {
            bar.innerHTML = `<div class="pin unknown">?</div><div class="text"><b>Which square is yours?</b><span>Tap your name on the board, then “This is my square”.</span></div><button type="button" class="find" id="minebar-find">Find</button>`;
            $('#minebar-find').addEventListener('click', focusSearch);
            return;
        }
        const total = mine.reduce((s, id) => s + calculateSquareWinnings(id), 0);
        const n = mine.reduce((s, id) => s + winsFor(id).length, 0);
        const names = mine.map((id) => `#${id} ${esc(squareName(id))}`).join(' · ');
        bar.innerHTML = `<div class="pin">★</div><div class="text"><b>${names}</b><span>${n} win${n === 1 ? '' : 's'} so far · tap to open</span></div><div class="amount tnum">${money(total)}</div>`;
        bar.classList.add('is-link');
        bar.onclick = () => showSquarePopup(mine[0]);
    }

    // ---- Results (newest first, grouped by date) ----------------------
    function renderGames() {
        const list = ncaaGames.filter((g) => filter === 'all' || g.round === parseInt(filter, 10)).slice().reverse();
        let html = '', day = '';
        list.forEach((g) => {
            if (g.date !== day) { day = g.date; html += `<div class="day-header">${esc(g.date)}</div>`; }
            const owner = g.cellId ? esc(squareName(g.cellId)) : '—';
            const isMine = g.cellId && mine.includes(g.cellId);
            html += `<button type="button" class="game-item${isMine ? ' is-mine' : ''}" data-id="${g.id}" data-cell="${g.cellId || ''}">
                <div class="round-tag"><i style="--c:var(--r${g.round})"></i>${roundInfo[g.round].name}</div>
                <div class="team winner"><span class="seed">${g.winner.seed}</span><span class="team-name">${esc(g.winner.name)}</span><span class="score tnum">${g.winner.score}</span></div>
                <div class="team loser"><span class="seed">${g.loser.seed}</span><span class="team-name">${esc(g.loser.name)}</span><span class="score tnum">${g.loser.score}</span></div>
                <div class="square"><span>Square #${g.cellId || '?'}</span><b>${owner}</b><em>+${money(payoutStructure[g.round])}</em></div>
            </button>`;
        });
        gamesContainer.innerHTML = html || `<div class="empty"><b>No games yet</b>Results will appear here once this round tips off.</div>`;
        gamesContainer.querySelectorAll('.game-item').forEach((b) => b.addEventListener('click', () => {
            const game = ncaaGames.find((g) => g.id === parseInt(b.dataset.id, 10));
            if (game && game.cellId) highlightGameWinner(game, b);
        }));
    }

    function highlightGameWinner(game, clickedElement) {
        document.querySelectorAll('.game-item.active').forEach((el) => el.classList.remove('active'));
        cells.forEach((c) => c.classList.remove('highlight'));
        clickedElement.classList.add('active');
        cells[game.cellId - 1].classList.add('highlight');
        showSquarePopup(game.cellId, game.id);
    }

    // ---- Leaders -------------------------------------------------------
    function generateWinningsList() {
        const rows = cells.map((_, i) => ({ id: i + 1, name: squareName(i + 1), total: calculateSquareWinnings(i + 1), wins: winsFor(i + 1) }))
            .filter((r) => r.total > 0).sort((a, b) => b.total - a.total);
        const pot = rows.reduce((s, r) => s + r.total, 0);
        const max = rows.length ? rows[0].total : 1;
        $('#stats').innerHTML = `<div><b class="tnum">${money(pot)}</b><span>Paid out</span></div><div><b class="tnum">${rows.length}</b><span>Squares paid</span></div><div><b class="tnum">${ncaaGames.length}</b><span>Games played</span></div>`;
        leadersContainer.innerHTML = rows.length ? rows.map((r, i) => `<button type="button" class="leader${mine.includes(r.id) ? ' is-mine' : ''}" data-id="${r.id}">
            <div class="rank">${i + 1}</div>
            <div class="who"><span>${esc(r.name)}</span><small>#${r.id} · ${r.wins.length} win${r.wins.length === 1 ? '' : 's'}</small></div>
            <div class="amount tnum">${money(r.total)}</div>
            <div class="bar" style="width:${Math.max(8, r.total / max * 100)}%">${r.wins.slice().sort((a, b) => b.round - a.round).map((g) => `<i style="--c:var(--r${g.round});flex:${payoutStructure[g.round]}"></i>`).join('')}</div>
        </button>`).join('') : `<div class="empty"><b>No winners yet</b>The leaderboard fills in as games finish.</div>`;
        leadersContainer.querySelectorAll('.leader').forEach((b) => b.addEventListener('click', () => showSquarePopup(parseInt(b.dataset.id, 10))));
    }

    // ---- Square details (bottom sheet) --------------------------------
    let lastFocus = null;
    function showSquarePopup(cellId, highlightGameId) {
        const wins = winsFor(cellId).slice().sort((a, b) => b.round - a.round);
        const col = colDigitFor(cellId), row = rowDigitFor(cellId);
        const isMine = mine.includes(cellId);
        const remaining = 6 - Math.max(0, ...roundsPlayed);
        $('#sheet-num').textContent = '#' + cellId;
        $('#sheet-title').textContent = squareName(cellId);
        $('#sheet-sub').textContent = `Wins when the winner's score ends in ${col} and the loser's ends in ${row}`;
        $('#sheet-body').innerHTML = `
            <div class="total-winnings"><span>Total winnings</span><b class="tnum">${money(calculateSquareWinnings(cellId))}</b></div>
            <button type="button" class="set-mine" id="set-mine" aria-pressed="${isMine}">${isMine ? '★ This is my square' : 'This is my square'}</button>
            ${wins.length
                ? wins.map((g) => `<div class="square-win-item${g.id === highlightGameId ? ' active' : ''}"><i style="--c:var(--r${g.round})"></i><div class="m"><b>${esc(g.winner.name)} ${g.winner.score}, ${esc(g.loser.name)} ${g.loser.score}</b><span>${roundInfo[g.round].name} · ${esc(g.date)}</span></div><div class="p tnum">+${money(payoutStructure[g.round])}</div></div>`).join('')
                : `<div class="empty"><b>No wins yet</b>${remaining > 0 ? `Still ${remaining} round${remaining === 1 ? '' : 's'} left to hit ${col}–${row}.` : 'The tournament is over.'}</div>`}`;
        $('#set-mine').addEventListener('click', () => {
            mine = mine.includes(cellId) ? mine.filter((id) => id !== cellId) : mine.concat(cellId);
            saveMine();
            render();
            showSquarePopup(cellId, highlightGameId);
            toast(mine.includes(cellId) ? `Saved #${cellId} as your square` : `Removed #${cellId}`);
        });
        lightHeaders(cellId);
        if ($('#sheet').getAttribute('aria-hidden') === 'true') {
            lastFocus = document.activeElement;
            $('#sheet').setAttribute('aria-hidden', 'false');
            $('#sheet-scrim').classList.add('is-on');
            document.body.classList.add('sheet-open');
            setTimeout(() => $('#sheet-close').focus(), 50);
        }
    }

    function closePopup() {
        if ($('#sheet').getAttribute('aria-hidden') === 'true') return;
        $('#sheet').setAttribute('aria-hidden', 'true');
        $('#sheet-scrim').classList.remove('is-on');
        document.body.classList.remove('sheet-open');
        lightHeaders(null);
        cells.forEach((c) => c.classList.remove('highlight'));
        document.querySelectorAll('.game-item.active').forEach((el) => el.classList.remove('active'));
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    window.closePopup = closePopup;

    function lightHeaders(cellId) {
        columnHeaders.forEach((h) => h.classList.remove('is-lit'));
        rowHeaders.forEach((h) => h.classList.remove('is-lit'));
        if (!cellId) return;
        columnHeaders[(cellId - 1) % 10].classList.add('is-lit');
        rowHeaders[Math.floor((cellId - 1) / 10)].classList.add('is-lit');
    }

    $('#sheet-close').addEventListener('click', closePopup);
    $('#sheet-scrim').addEventListener('click', closePopup);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePopup(); });
    // Swipe down on the sheet (when its body is scrolled to the top) closes it
    (function () {
        let startY = null;
        const sheet = $('#sheet');
        sheet.addEventListener('touchstart', (e) => { startY = $('#sheet-body').scrollTop === 0 ? e.touches[0].clientY : null; }, { passive: true });
        sheet.addEventListener('touchmove', (e) => { if (startY !== null && e.touches[0].clientY - startY > 70) { startY = null; closePopup(); } }, { passive: true });
    })();

    let toastTimer;
    function toast(message) {
        const el = $('#toast');
        el.textContent = message;
        el.classList.add('is-on');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('is-on'), 1800);
    }

    // ---- Tabs ----------------------------------------------------------
    function showView(view) {
        document.querySelectorAll('.view').forEach((s) => s.classList.toggle('is-on', s.id === 'view-' + view));
        document.querySelectorAll('[role=tab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.view === view)));
        if (window.matchMedia('(min-width: 900px)').matches) {
            // Desktop: the board is always visible; the side column swaps between results and leaders
            $('#view-board').classList.add('is-on');
            if (view === 'board') { $('#view-results').classList.add('is-on'); view = 'results'; }
            document.querySelectorAll('.side-tabs [role=tab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.view === view)));
        } else {
            window.scrollTo({ top: 0 });
        }
        try { localStorage.setItem(STORAGE_VIEW, view); } catch (e) { /* ignore */ }
    }
    document.querySelectorAll('.tabbar [role=tab]').forEach((b) => b.addEventListener('click', () => showView(b.dataset.view)));

    // Desktop-only tabs for the side column
    const sideTabs = document.createElement('div');
    sideTabs.className = 'side-tabs';
    sideTabs.setAttribute('role', 'tablist');
    sideTabs.innerHTML = `<button type="button" role="tab" data-view="results" aria-selected="true">Results</button><button type="button" role="tab" data-view="leaders" aria-selected="false">Leaders</button>`;
    $('.col-side').prepend(sideTabs);
    sideTabs.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => showView(b.dataset.view)));

    function focusSearch() {
        showView('board');
        const input = $('#search-input');
        input.scrollIntoView({ block: 'center', behavior: 'smooth' });
        input.focus({ preventScroll: true });
    }
    $('#btn-find').addEventListener('click', focusSearch);
    $('#search-input').addEventListener('input', (e) => { query = e.target.value.trim().toLowerCase(); filterBoardCells(); renderSearchHits(); });
    $('#search-clear').addEventListener('click', () => { $('#search-input').value = ''; query = ''; filterBoardCells(); renderSearchHits(); $('#search-input').focus(); });
    $('#zoom-fit').addEventListener('click', () => { zoom = 'fit'; $('#zoom-fit').setAttribute('aria-pressed', 'true'); $('#zoom-large').setAttribute('aria-pressed', 'false'); filterBoardCells(); });
    $('#zoom-large').addEventListener('click', () => { zoom = 'large'; $('#zoom-large').setAttribute('aria-pressed', 'true'); $('#zoom-fit').setAttribute('aria-pressed', 'false'); filterBoardCells(); });

    // Cells are buttons: click only, so a scroll gesture over the board never opens the sheet
    cells.forEach((cell) => cell.addEventListener('click', () => showSquarePopup(parseInt(cell.dataset.id, 10))));

    // ---- Render --------------------------------------------------------
    function render() {
        renderRoundFilter($('#round-filter'));
        renderRoundFilter($('#round-filter-results'));
        filterBoardCells();
        renderLegend();
        renderSearchHits();
        renderMineBar();
        renderGames();
        generateWinningsList();
    }

    analyzeGames();
    render();

    const last = ncaaGames[ncaaGames.length - 1];
    $('#topbar-sub').textContent = last
        ? `${ncaaGames.length} games · last: ${last.winner.name} ${last.winner.score}–${last.loser.score} ${last.loser.name}`
        : 'NCAA Tournament · no games yet';

    let startView = 'board';
    try { startView = localStorage.getItem(STORAGE_VIEW) || 'board'; } catch (e) { /* ignore */ }
    showView(window.matchMedia('(min-width: 900px)').matches ? (startView === 'leaders' ? 'leaders' : 'results') : startView);
    window.matchMedia('(min-width: 900px)').addEventListener('change', () => showView('board'));
});
