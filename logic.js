let players = ['x', 'o'];
let activePlayer = 0;
let aP = activePlayer;

let board = [
    ['', '', '',],
    ['', '', '',],    
    ['', '', '',],
  ];

function startGame() {
  board = [
    ['', '', '',],
    ['', '', '',],    
    ['', '', '',],
  ];
  aP = players[0];
  renderBoard(board); 
};

function iterationSum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i].length;
  }

  return result;
};

function click(row, column) {
  board[row][column] = aP;
  renderBoard(board);
  for (let i = 0; i < iterationSum(board); i++) {
    if (
      board[0][0] === aP && board[0][1] === aP && board[0][2] === aP 
      || board[1][0] === aP && board[1][1] === aP && board[1][2] === aP 
      || board[2][0] === aP && board[2][1] === aP && board[2][2] === aP 
      || board[0][0] === aP && board[1][0] === aP && board[2][0] === aP 
      || board[0][1] === aP && board[1][1] === aP && board[2][1] === aP 
      || board[0][2] === aP && board[1][2] === aP && board[2][2] === aP 
      || board[0][0] === aP && board[1][1] === aP && board[2][2] === aP 
      || board[0][2] === aP && board[1][1] === aP && board[2][0] === aP
    ) {
    showWinner(players.indexOf(aP))
    } else {
      if (aP === players[0]) {
        aP = players[1];
      } else if (aP = players[1]) {
        aP = players[0];
      }
    }
  }
};