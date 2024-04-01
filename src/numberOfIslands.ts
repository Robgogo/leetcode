/**
 * 200. Number of Islands
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

const numIslands = (grid: string[][]): number => {
  if (grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  const visted: boolean[][] = Array.from(Array(rows), () =>
    Array(cols).fill(false)
  );

  const dfs = (row: number, col: number) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0" ||
      visted[row][col] === true
    ) {
      return;
    }

    visted[row][col] = true;

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1" && !visted[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

/**
 * Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
 * Output: 1
 */

const inputGrid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const numOfIslands = numIslands(inputGrid);

console.log(numOfIslands);
