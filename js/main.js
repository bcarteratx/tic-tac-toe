/*------Constants------*/
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

/*------Cached Element References------*/
// board status
const squares = Array.from(document.querySelectorAll('.board div'));

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
    turn = 'X'
    render();
    };

    
// On-Click function:
// Set up what happens when one of the elements
// is clicked

function handleReset(click) {
    init();
}

function handleTurn(click) {
    let idx = squares.findIndex(function(square) {
        return square === click.target;
    });
    board[idx] = turn;
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }
    render();
}
// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function checkWinner() {
    
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    board.forEach(function(move, index) {
        squares[index].textContent = move;
    });
}
