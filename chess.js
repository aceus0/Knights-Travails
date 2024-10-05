function knightMoves(start, end) {
  const maxRow = 7;
  const maxCol = 7;

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

  const moves = (knightPos) => {
    const [row, col] = knightPos;
    const validMoves = [];

    knightPossibleMoves.forEach(([dRow, dCol]) => {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (newRow >= 0 && newRow <= maxRow && newCol >= 0 && newCol <= maxCol) {
        validMoves.push([newRow, newCol]);
      }
    });
    return validMoves;
  };

  const findPath = (start, end) => {
    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      const [currentPos, path] = queue.shift();
      const [row, col] = currentPos;

      if (row === end[0] && col == end[1]) {
        console.log(
          `Shortest path found in ${path.length - 1} moves:`,
          JSON.stringify(path)
        );
        return path;
      }

      const nextMoves = moves(currentPos);

      nextMoves.forEach(([newRow, newCol]) => {
        const newPos = [newRow, newCol];
        if (!visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([newPos, [...path, newPos]]);
        }
      });
    }
    console.log("no path");
    return null;
  };

  findPath(start, end);
}

knightMoves([1, 1], [5, 5]);
