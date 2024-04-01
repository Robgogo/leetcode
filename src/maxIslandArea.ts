/**
 * 695. Max Area of Island
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 * The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 */

const maxAreaOfIsland = (grid: number[][]): number => {
  if (grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  const dfs = (r: number, c: number) => {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
      return 0;
    }
    grid[r][c] = 0;

    let currentArea = 1;
    for (const [dx, dy] of directions) {
      currentArea += dfs(r + dx, c + dy);
    }

    return currentArea;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  return maxArea;
};
