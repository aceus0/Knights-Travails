// 0 will repersent squares that haven't been visited,
// 1 will visited squares,
// 2 will be possible moves,
// 5 will be where the knight it presently.
// 10 will be the goal square

function knightMoves(start, end) {
  const boardGraph = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const maxRow = 7;
  const maxCol = 7;

  boardGraph[start[0]][start[1]] = 5;
  boardGraph[end[0]][end[1]] = 10;

  const moves = (knightPos) => {
    const knightPossibleMoves = [
      [-2, -1],
      [-2, 1],
      [2, -1],
      [2, 1],
      [-1, -2],
      [1, -2],
      [-1, 2],
      [1, 2],
    ];

    const [row, col] = knightPos;

    knightPossibleMoves.forEach(([dRow, dCol]) => {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (newRow >= 0 && newRow <= maxRow && newCol >= 0 && newCol <= maxCol) {
        boardGraph[newRow][newCol] = 2;
      }
    });

    console.table(boardGraph);
  };

  const findPath = (knightPos, movesCount) => {
    const [row, col] = knightPos;

    if (row === end[0] && col == end[1]) {
      minMoves = Math.min(minMoves, movesCount);
      return;
    }

    boardGraph[row][col] = 1;
  };

  moves(start);
}

knightMoves([1, 1], [5, 5]);
