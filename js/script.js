/**
 * script.js
 * 
 * Contains code for displaying and updating the board, calls functions in sudoku.js to handle
 *  actual sudoku gameplay
 */



/**
 * Generates an empty sudoku board
 *  - each 3x3 section enumerated from 0 to 8
 *  - cells enumerated from 0 to 80
 */
function generateBoard() {

    const board = document.querySelector("#board");
    console.log(board);
    for (let i=0; i < 9; i++) {
        const section = document.createElement('div');
        section.classList.add('section');
        section.setAttribute('id', "section" + i);

        //fill individual 3x3 section
        for (let j=0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', "cell" + (9*i + j));
            cell.classList.add('cell');
            section.appendChild(cell);
        }
        
        board.appendChild(section);
    }

}


/**
 * 
 * @param {number} value 
 * @param {number} cellPos
 * 
 * Inserts value into cell at positon cellPos
 */
function insertValue(value, cellPos) {
    const cell = document.querySelector("#cell" + cellPos);
    cell.textContent = value;
}

/**
 * 
 * @param {number[81]} boardList - sudoku board in array form
 * 
 * Loads the sudoku array into the displayed board
 */
function loadBoard(boardList) {
    for (let i = 0; i<81; i++) {
        const cell = document.querySelector("#cell" + i);
            cell.textContent = boardList[i];
    }
}


/**
 * Clears the current board
 */
function clearBoard() {
    for (let i = 0; i<81; i++) {
        insertValue("", i);
    }
}



// BEGIN FUNCTION CALLS

generateBoard();

board2 = []
for (let i = 0; i<81; i++) {
    board2.push(i%9+1);
}


loadBoard(board2);

