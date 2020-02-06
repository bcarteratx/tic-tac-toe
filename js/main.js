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
let turnCount = 0;
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
    null, null, null,
    null, null, null,
    null, null, null,
    ];
    turn = 1;
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
    let id = click.target.id;
    id = parseInt(id[2]);
    //console.log(id)
    if (board[idx] || winner) return;
    board[idx] = turn;
    if (turn === 1) {
        turn = -1;
        document.getElementById('message').textContent = "It's O's Turn";
    } else {
        turn = 1;
        document.getElementById('message').textContent = "It's X's Turn";

    }
    win = checkWinner();
    if (winner === 1) {
        document.getElementById('message').textContent = "X wins!";
    } else if ( winner === -1) {
        document.getElementById('message').textContent = "O wins!";
    } else {

    }
    // turnCount += 1;
    // if (turnCount >= 9) {
    //     document.getElementById('message').textContent = "It's a Tie!";
    // }
    render();
}


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function checkWinner() {
    
    for (var i = 0; i < winCombos.length; i++) {
       // board[0] = "";
    if (Math.abs(board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]]) === 3) winner = board[winCombos[i][0]];
    }
    return winner;
    
    // if (board.includes('')) return '';
    //return 'T';
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    board.forEach(function(move, index) {
        if (move === 1) {
            move = 'x';
        } if (move === -1) {
            move = 'o';
        }
        cells[index].textContent = move;
        cells[index].style.background = colors[cells];
        //turnCount = 0;
    });
    
}
