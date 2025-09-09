(() => {
  'use strict';

  // Elements
  const board = document.getElementById('board');
  const restartBtn = document.getElementById('restartBtn');
  const themeToggle = document.getElementById('themeToggle');
  const difficultySelect = document.getElementById('difficultySelect');
  const difficultyBadge = document.getElementById('difficultyBadge');

  const movesEl = document.getElementById('moves');
  const timeEl = document.getElementById('time');
  const bestEl = document.getElementById('best');

  const statsMoves = document.getElementById('statsMoves');
  const statsTime = document.getElementById('statsTime');
  const statsBest = document.getElementById('statsBest');
  const statsBestRow = document.getElementById('statsBestRow');
  const playAgainBtn = document.getElementById('playAgainBtn');

  // Modal (Bootstrap)
  const winModal = new bootstrap.Modal(document.getElementById('winModal'));

  // Game state
  let gridSize = 4; // default 4x4
  let firstCard = null;
  let secondCard = null;
  let lock = false;
  let matches = 0;
  let totalPairs = 0;
  let moves = 0;
  let timerInterval = null;
  let seconds = 0;

  // Emoji set (16 unique). For 6x6 we reuse some with variants.
  const baseEmojis = [
    '🍎','🍌','🍉','🍇','🍊','🍓','🍒','🥝',
    '🐶','🐱','🦊','🐼','🦄','🐵','🐸','🐰',
    '⚽','🏀','🎾','🏈','🎲','🎯','🎹','🎧',
  ];

  // Utils
  const fmt = (n) => (n < 10 ? '0' + n : '' + n);
  const formatTime = (s) => `${fmt(Math.floor(s / 60))}:${fmt(s % 60)}`;
  const storageKey = (size) => `memory:v1:best:${size}x${size}`;

  function updateBestLabel() {
    const key = storageKey(gridSize);
    const best = localStorage.getItem(key);
    bestEl.textContent = best ? JSON.parse(best).time + ' • ' + JSON.parse(best).moves + ' mv' : '—';
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      seconds += 1;
      timeEl.textContent = formatTime(seconds);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  function resetHUD() {
    moves = 0;
    seconds = 0;
    movesEl.textContent = '0';
    timeEl.textContent = '00:00';
  }

  function shuffleAndBuildDeck(size) {
    const needPairs = (size * size) / 2;
    let symbols = _.shuffle(baseEmojis).slice(0, needPairs);
    // If not enough unique, duplicate with slight variants (not needed with 6x6 given set length, but safe)
    while (symbols.length < needPairs) {
      symbols = symbols.concat(_.shuffle(baseEmojis).slice(0, needPairs - symbols.length));
    }
    const deck = _.shuffle([...symbols, ...symbols]).slice(0, size * size);
    return deck;
  }

  function createCard(symbol, index) {
    const tile = document.createElement('button');
    tile.className = 'card-tile btn p-0 border-0 bg-transparent';
    tile.type = 'button';
    tile.setAttribute('aria-label', 'Carta virada');
    tile.dataset.symbol = symbol;
    tile.dataset.index = index;

    tile.innerHTML = `
      <div class="card-face card-front">🃏</div>
      <div class="card-face card-back"><span class="emoji">${symbol}</span></div>
    `;

    tile.addEventListener('click', () => onTileClick(tile));
    return tile;
  }

  function buildBoard(size) {
    board.innerHTML = '';
    board.style.setProperty('--cols', String(size));
    const deck = shuffleAndBuildDeck(size);
    totalPairs = deck.length / 2;
    matches = 0;
    firstCard = null;
    secondCard = null;
    lock = false;

    const frag = document.createDocumentFragment();
    deck.forEach((sym, i) => frag.appendChild(createCard(sym, i)));
    board.appendChild(frag);
  }

  function incrementMoves() {
    moves += 1;
    movesEl.textContent = String(moves);
  }

  function onTileClick(tile) {
    if (lock) return;
    if (tile.classList.contains('is-flipped')) return;

    // Start timer on first action
    if (!timerInterval && moves === 0 && !firstCard) startTimer();

    tile.classList.add('is-flipped');
    if (!firstCard) {
      firstCard = tile;
      return;
    }
    if (tile === firstCard) return;

    secondCard = tile;
    lock = true;
    incrementMoves();

    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
    if (isMatch) {
      firstCard.classList.add('matched', 'match-pop');
      secondCard.classList.add('matched', 'match-pop');
      setTimeout(() => {
        firstCard?.classList.remove('match-pop');
        secondCard?.classList.remove('match-pop');
      }, 350);
      afterMatch();
    } else {
      // Unflip after delay
      setTimeout(() => {
        firstCard?.classList.remove('is-flipped');
        secondCard?.classList.remove('is-flipped');
        afterMismatch();
      }, 900);
    }
  }

  function afterMatch() {
    matches += 1;
    resetPick();
    if (matches === totalPairs) {
      onWin();
    }
  }

  function afterMismatch() {
    resetPick();
  }

  function resetPick() {
    [firstCard, secondCard] = [null, null];
    lock = false;
  }

  function onWin() {
    stopTimer();
    // Stats
    statsMoves.textContent = String(moves);
    statsTime.textContent = formatTime(seconds);

    // Best by time then moves
    const key = storageKey(gridSize);
    const current = { time: formatTime(seconds), seconds, moves };
    const prev = localStorage.getItem(key);
    let bestText = '—';
    if (!prev) {
      localStorage.setItem(key, JSON.stringify(current));
      bestText = `${current.time} • ${current.moves} mv`;
    } else {
      const prevObj = JSON.parse(prev);
      const isBetter = seconds < prevObj.seconds || (seconds === prevObj.seconds && moves < prevObj.moves);
      if (isBetter) localStorage.setItem(key, JSON.stringify(current));
      const use = isBetter ? current : prevObj;
      bestText = `${use.time} • ${use.moves} mv`;
    }
    statsBest.textContent = bestText;
    statsBestRow.style.display = 'block';
    updateBestLabel();
    winModal.show();
  }

  function restart(size = gridSize) {
    stopTimer();
    resetHUD();
    gridSize = size;
    difficultyBadge.textContent = `${gridSize}×${gridSize}`;
    buildBoard(gridSize);
    updateBestLabel();
  }

  // UI events
  restartBtn.addEventListener('click', () => restart());
  playAgainBtn.addEventListener('click', () => restart());
  difficultySelect.addEventListener('change', (e) => {
    const val = Number(e.target.value);
    restart(val);
  });

  // Theme toggle using Bootstrap color modes
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-bs-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', next);
    localStorage.setItem('memory:v1:theme', next);
  });

  // Init theme
  (function initTheme() {
    const saved = localStorage.getItem('memory:v1:theme');
    if (saved) document.documentElement.setAttribute('data-bs-theme', saved);
  })();

  // Start game
  restart(4);
})();
