let gameActive = false;
let playerIsCross;

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
    if (!gameActive) {
        return;
    }
    const cellId = e.target.id;
    const cellIdNumber = parseInt(cellId.slice(4));
    let row = Math.floor(cellIdNumber / 3);
    let column = cellIdNumber % 3;

    if (gameBoard[row][column] === 0) {
        console.log(`Placing player mark at row ${row}, column ${column}`);
        gameBoard[row][column] = 1;
        // e.target.style.backgroundColor = "blue";
        if (playerIsCross) {
            e.target.innerHTML = '<img src="cross-blue-100-100.svg" alt="cross glyph" width="100" height="100">';
        } else {
            e.target.innerHTML = '<img src="nought-red-100-100.svg" alt="nought glyph" width="100" height="100">';
        }
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
                    // document.getElementById(`cell${row * 3 + column}`).style.backgroundColor = "red";
                    if (playerIsCross) {
                        document.getElementById(`cell${row * 3 + column}`).innerHTML =
                            '<img src="nought-red-100-100.svg" alt="nought glyph" width="100" height="100">';
                    } else {
                        document.getElementById(`cell${row * 3 + column}`).innerHTML =
                            '<img src="cross-blue-100-100.svg" alt="cross glyph" width="100" height="100">';
                    }
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

function dismissModal() {
    document.getElementById("modal-background").style.display = "none";
}

function displayModal() {
    document.getElementById("modal-background").style.display = "flex";
}

function chooseCross() {
    playerIsCross = true;
    gameActive = true;

    dismissModal();
}

function chooseNought() {
    playerIsCross = false;
    gameActive = true;

    dismissModal();
}

function playAgain() {
    // reset board state here
    gameActive = true;

    dismissModal();
}

document.getElementById("choose-cross").addEventListener("click", chooseCross);
document.getElementById("choose-nought").addEventListener("click", chooseNought);
document.getElementById("play-again").addEventListener("click", playAgain);
document.getElementById("board-id").addEventListener("click", playerMoveHandler);
