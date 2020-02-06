/*------Constants------*/
const colors = {
    'null': 'white',
    'player 1': 'red', 
    'player -1': 'blue',
};

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


/*------ App's State (Variables)------*/
let board;
let turn;
let winner;
let turnCount = 1;
let isWinner = false;

/*------Cached Element References------*/
// board status
let cells = Array.from(document.querySelectorAll('.board div'));
let gameStatus = document.getElementById('message');

/*------Event Listeners------*/
document.querySelector('.board').addEventListener('click', handleTurn);
document.querySelector('#reset').addEventListener('click', handleReset);
/*------Functions------*/

init();

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    turn = 'x';
    winner = null;
    gameStatus.textContent = "It is X's Turn"
    render();
};


// On-Click function:
// Set up what happens when one of the elements
// is clicked

function handleReset(click) {
    init();
}

function handleTurn(click) {
    let idx = cells.findIndex(function(cell) {
        return cell === click.target;
    });
    if (board[idx] || winner) return;
    board[idx] = turn;
    if (turn === 'x') {
        turn = 'o';
        document.getElementById('message').textContent = "It's O's Turn";
    } else {
        turn = 'x';
        document.getElementById('message').textContent = "It's X's Turn";

    }
    win = checkWinner();
    render();
}


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function checkWinner() {
    for (var i = 0; i < winCombos.length; i++) {
      if (Math.abs(board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]]) === 3) return board[winCombos[i][0]];
    }
    return 'Winner!'
    // if (board.includes('')) return '';
    //return 'T';
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    board.forEach(function(move, index) {
        cells[index].textContent = move;
        cells[index].style.background = colors[cells];
    });
    
}
