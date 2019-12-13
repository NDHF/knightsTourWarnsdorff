console.log(
    "THE KNIGHTS TOUR \n" +
    "USING THE WARNSDORFF HEURISTIC \n" +
    "2019 NICHOLAS BERNHARD"
);

document.addEventListener("DOMContentLoaded", function () {

    // QUALITY-OF-LIFE FUNCTIONS

    function getById(id) {
        return document.getElementById(id);
    }

    function whenClicked(id, functionToRun) {
        getById(id).addEventListener("click", functionToRun);
    }

    // GLOBALS

    let allChessPieces = document.getElementsByClassName("chessPiece");
    let chessPieceArray = Array.from(allChessPieces);
    let lockdownMode = false;
    let isFunctionRunning = false;

    function lockDownKnight(variable) {
        if (lockdownMode === false) {
            lockdownMode = true;
            variable.classList.add("pieceLockedDown");
            console.log(variable.classList);
        } else if (lockdownMode === true) {
            chessPieceArray.forEach(function (item) {
                item.classList.remove("pieceLockedDown");
            });
            variable.classList.add("pieceLockedDown");
            console.log(variable.classList);
        }
    }

    function runTheKnightsTour(startingX, startingY) {
        console.log("runProgramButton was clicked.");
        let counter = 0;
        // A MULTIDIMENSIONAL ARRAY.
        // INTERNAL ARRAYS ARE ROWS.
        // NUMBERS ARE INDIVIDUAL CELLS.
        // 0 MEANS THE CELL HAS NEVER BEEN OCCUPIED.
        // 1 MEANS THE CELL HAS BEEN OCCUPIED.
        let chessBoardArray = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ];
        let currentCellX = startingX;
        let currentCellY = startingY;
        function checkForAvailableMoves(x, y) {
            console.log("Y: " + y);
            console.log("X: " + x);
            // This function will check for available knight's moves,
            // Moving clockwise from the top.
            let move1 = {x: x - 1, y: y - 2};
            let move2 = {x: x + 1, y: y - 2};
            let move3 = {x: x + 2, y: y - 1};
            let move4 = {x: x + 2, y: y + 1};
            let move5 = {x: x + 1, y: y + 2};
            let move6 = {x: x - 1, y: y + 2};
            let move7 = {x: x - 2, y: y + 1};
            let move8 = {x: x - 2, y: y - 1};

            let arrayOfMoves = [
                move1, move2, move3, move4,
                move5, move6, move7, move8
            ];
            let possibleMovesArray = [];
            function checkMove(moveItem, index) {
                let yIsOnTheBoard = chessBoardArray[moveItem.y] !== undefined;
                let xIsOnTheBoard = (yIsOnTheBoard && chessBoardArray[moveItem.y][moveItem.x] !== undefined);
                let cellIsOnTheBoard = (yIsOnTheBoard && xIsOnTheBoard);
                let moveIsValid = (cellIsOnTheBoard && chessBoardArray[moveItem.y][moveItem.x] === 0);

                    if (moveIsValid) {
                        console.log("POSSIBLE MOVE: ");
                        console.log(moveItem);
                        console.log(index);
                        possibleMovesArray.push(moveItem);
                    }
            };
            arrayOfMoves.forEach(checkMove);
        }
        checkForAvailableMoves(currentCellX, currentCellY);
    }

    // MAIN EVENT LISTENERS

    chessPieceArray.forEach(function (item) {
        item.addEventListener("click", function () {
            lockDownKnight(this);
        });
    }); 

    whenClicked("runProgramButton", function () {
        runTheKnightsTour(7, 4);
    });

});