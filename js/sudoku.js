/**
 * sudoku.js
 * 
 * Contains the actual sudoku logic and handles gameplay
 */

const board = [

        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,

        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,

        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
]

const board2 = []

for (let i = 0; i<81; i++) {
    board2.push(i%9+1);
}


/**
 * 
 * @param {number[81]} sudoku board
 * 
 * returns True is board is solved, False otherwise
 */
function boardSolved(board) {
    for (let i=0; i<81; i++) {
        if (!(board[i] <= 9 && board[i] >= 1))
            return false;
    }
    return true;
}

console.log(boardSolved(board2));