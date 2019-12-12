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

    function runTheKnightsTour() {
        console.log("runProgramButton was clicked.");
    }

    // MAIN EVENT LISTENERS

    chessPieceArray.forEach(function (item) {
        item.addEventListener("click", function () {
            lockDownKnight(this);
        });
    }); 

    whenClicked("runProgramButton", runTheKnightsTour);

});