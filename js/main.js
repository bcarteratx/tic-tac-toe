/*------Constants------*/



/*------ App's State (Variables)------*/
let board;
let turn = 'X';
let winner;

/*------Cached Element References------*/
const squares = Array.from(document.querySelectorAll('.board div'));
// game status

/*------Event Listeners------*/
document.querySelector('.board').addEventListener('click', handleTurn);

/*------Functions------*/

init();

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
    };

    
// On-Click function:
// Set up what happens when one of the elements
// is clicked
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
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


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    board.forEach(function(move, index) {
        squares[index].textContent = move;
    });
}
