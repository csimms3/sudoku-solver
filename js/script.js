


/**
 * Generates an empty sudoku board
 */
function generateBoard() {

    const board = document.querySelector("#board");
    console.log(board);
    for (let i = 0; i < 9; i++) {
        const section = generateBoardSection();
        board.appendChild(section);
    }

}

/**
 * Generates a single 3x3 board section
 */
function generateBoardSection() {
    const section = document.createElement('div');
    section.classList.add('section');

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        section.appendChild(cell);
    }
    return section;
}














generateBoard();