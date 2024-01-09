let currentPlayer = 'X';
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (!board[row][col]) {
    board[row][col] = currentPlayer;
    document.querySelector(`.board .cell:nth-child(${3 * row + col + 1})`).textContent = currentPlayer;
    
    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetBoard();
      return;
    }
    
    if (checkDraw()) {
      alert('It\'s a draw!');
      resetBoard();
      return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) return true;
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) return true;
  }
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return true;
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) return true;
  return false;
}

function checkDraw() {
  for (let row of board) {
    for (let cell of row) {
      if (!cell) return false;
    }
  }
  return true;
}

function resetBoard() {
  board.forEach((row, i) => {
    row.forEach((_, j) => {
      board[i][j] = '';
      document.querySelector(`.board .cell:nth-child(${3 * i + j + 1})`).textContent = '';
    });
  });
  currentPlayer = 'X';
}
