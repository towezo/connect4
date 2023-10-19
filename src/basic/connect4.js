import './connect4.css';

var playerRed = "R";
var playerYellow = "Y"
var currPlayer = playerRed;

var gameOver = false;
var board;
var currCollumns; 

var rows = 6;
var columns = 7;


function setGame() {
     board = []; // Initialize an empty game board array.
     currCollumns = [5, 5, 5, 5, 5, 5, 5];

    // Create rows and columns.
    for (let r = 0; r < rows; r++) {
        let row = []; // Initialize an empty row array for each row.

        for (let c = 0; c < columns; c++) {
            row.push(''); // Add empty cells to the row.
            
            const tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click",setPiece);
            document.getElementById("board").append(tile); // Append the tile div to the "board" element.
        }

        board.push(row); // Add the row to the game board.
    }

    return board; // Return the game board array.
}

function setPiece(){
    if (gameOver){
        return;
    }

    let coords = this.id.split("-"); 
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currCollumns[c];
    if(r < 0) {
    return;
    }

    board[r][c]= currPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
    }

    r -= 1;
    currCollumns[c] = r;

    checkWinner();
}

function checkWinner() {
}

function setWinner(r, c) {
}

function Connect4() {
    window.onload = function(){
        setGame();
    }

  return (
    <div className="Connect4">
        <body >
            <h1>Connect 4 </h1>
            <h2 id="winner"></h2>
        <div id="board">
        </div>
         </body>
    
    </div>
  );
}

export default Connect4;
