


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
 * Adds specified number (1-9) to specified square
 */

function insertValue(value, cellNum) {
    const cell = document.querySelector("#cell" + cellNum);
    cell.textContent = value;
}


/**
 * Clears the current board
 */
function clearBoard() {
    for (let i = 0; i<81; i++) {
        insertValue("", i);
    }
}





generateBoard();

for (let i = 0; i<81; i++) {
    insertValue("6", i);
}

clearBoard();