//Tile ID's
let tileOne = document.getElementById('tileOne');
let tileTwo = document.getElementById('tileTwo');
let tileThree = document.getElementById('tileThree');
let tileFour = document.getElementById('tileFour');
let tileFive = document.getElementById('tileFive');
let tileSix = document.getElementById('tileSix');
let tileSeven = document.getElementById('tileSeven');
let tileEight = document.getElementById('tileEight');
let tileNine = document.getElementById('tileNine');

let tiles = document.getElementsByClassName('tile');

//three in a row classes
//diagonals
let leftDiagonal = document.getElementsByClassName('leftDiagonal');
let rightDiagonal = document.getElementsByClassName('rightDiagonal');
//verticals
let leftVertical = document.getElementsByClassName('leftVertical');
let middleVertical = document.getElementsByClassName('middleVertical');
let rightVertical = document.getElementsByClassName('rightVertical');
//horizontals
let topHorizontal = document.getElementsByClassName('topHorizontal');
let middleHorizontal = document.getElementsByClassName('middleHorizontal');
let bottomHorizontal = document.getElementsByClassName('bottomHorizontal');

let playerOneWins = document.getElementById('player-one-wins');
let playerTwoWins = document.getElementById('player-two-wins');

let playerOneWinCount = 0;
let playerTwoWinCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('#game-tiles div');
    let currentPlayer = 'X';

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (!tile.textContent) {
                tile.textContent = currentPlayer;
                tile.classList.add(currentPlayer); // Add class 'X' or 'O' to the tile
                
                checkForWin();
                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
            }
        });
    });

    function checkForWin() {
        const winCombinations = [
            [tileOne, tileTwo, tileThree],
            [tileFour, tileFive, tileSix],
            [tileSeven, tileEight, tileNine],
            [tileOne, tileFour, tileSeven],
            [tileTwo, tileFive, tileEight],
            [tileThree, tileSix, tileNine],
            [tileOne, tileFive, tileNine],
            [tileThree, tileFive, tileSeven]
        ];
    
        let winDetected = false;
    
        winCombinations.forEach(combo => {
            if (combo[0].textContent && combo[0].textContent === combo[1].textContent && combo[0].textContent === combo[2].textContent) {
    highlightWin(combo); // Highlight the winning tiles
    alert(`Player ${combo[0].textContent} wins!`);
                if (combo[0].textContent === 'X') {
                    playerOneWinCount++;
                    playerOneWins.textContent = playerOneWinCount;
                } else {
                    playerTwoWinCount++;
                    playerTwoWins.textContent = playerTwoWinCount;
                }
                winDetected = true;
                resetGame();
            }
        });
    
        if (!winDetected) {
            // Check for a draw only if no win was detected
            const allTilesFilled = Array.from(tiles).every(tile => tile.textContent !== '');
            if (allTilesFilled) {
                alert("It's a draw!");
                resetGame();
            }
        }
    }
    function highlightWin(combo) {
        combo.forEach(tile => {
            tile.classList.add('win'); // Add a 'win' class that changes the background or border
        });
    }
    
    function resetGame() {
        tiles.forEach(tile => {
            tile.textContent = ''; // Clear the text content of each tile
            tile.classList.remove('X', 'O'); // Remove both 'X' and 'O' classes from each tile
        });
        currentPlayer = 'X'; // Reset the currentPlayer to 'X'
        // Any additional reset logic here
    }

});
