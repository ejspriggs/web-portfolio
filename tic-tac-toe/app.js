const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function checkVictory(row, column) {
    // row
    if (gameBoard[row][0] === gameBoard[row][1] &&
        gameBoard[row][1] === gameBoard[row][2]) {
        return true;
    }
    // column
    if (gameBoard[0][column] === gameBoard[1][column] &&
        gameBoard[1][column] === gameBoard[2][column]) {
        return true;
    }
    // major diagonal, if needed
    if (row === column &&
        gameBoard[0][0] === gameBoard[1][1] &&
        gameBoard[1][1] === gameBoard[2][2]) {
        return true;
    }
    // minor diagonal, if needed
    if (row + column === 2 &&
        gameBoard[0][2] === gameBoard[1][1] &&
        gameBoard[1][1] === gameBoard[2][0]) {
        return true;
    }
    return false;
}

function playerMoveHandler(e) {
    const cellId = e.target.id;
    const cellIdNumber = parseInt(cellId.slice(4));
    let row = Math.floor(cellIdNumber / 3);
    let column = cellIdNumber % 3;

    if (gameBoard[row][column] === 0) {
        console.log(`Placing player mark at row ${row}, column ${column}`);
        gameBoard[row][column] = 1;
        e.target.style.backgroundColor = "blue";
        if (checkVictory(row, column)) {
            console.log("Player victory!");
            return;
        }
    } else {
        console.log(`Invalid move attempt at row ${row}, column ${column}.`);
        return;
    }

    const computerChoiceCount = gameBoard.flat().filter(x => x === 0).length;

    if (computerChoiceCount === 0) {
        console.log("Cat's game.");
        return;
    } else {
        zerosUntilComputerChoice = Math.floor(Math.random() * computerChoiceCount);
        for (let i = 0; i < 9; i++) {
            row = Math.floor(i / 3);
            column = i % 3;
            if (gameBoard[row][column] === 0) {
                if (zerosUntilComputerChoice > 0) {
                    zerosUntilComputerChoice--;
                } else {
                    console.log(`Placing computer mark at row ${row}, column ${column}`);
                    gameBoard[row][column] = 2;
                    document.getElementById(`cell${row * 3 + column}`).style.backgroundColor = "red";
                    if (checkVictory(row, column)) {
                        console.log("Computer victory. :(");
                        return;
                    }
                    break;
                }
            }
        }
    }
    return;
}

allCells = document.querySelectorAll(".cell");

for (let cell of allCells) {
    cell.addEventListener("click", playerMoveHandler);
}