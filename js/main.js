/*------Constants------*/



/*------ App's State (Variables)------*/
const squares = Array.from(document.querySelectorAll('.board div'));
let board;
let turn = 'X';
let winner;

/*------Cached Element References------*/

// game status

/*------Event Listeners------*/


/*------Functions------*/

init();

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    };


// On-Click function:
// Set up what happens when one of the elements
// is clicked

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
}

render();