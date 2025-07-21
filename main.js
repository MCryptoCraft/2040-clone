const board = document.getElementById("game-board");

function createTile(value = "") {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.textContent = value;
  return tile;
}

function initBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    board.appendChild(createTile());
  }
}

window.onload = initBoard;
