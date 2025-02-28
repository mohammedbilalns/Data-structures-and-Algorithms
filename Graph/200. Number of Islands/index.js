var numIslands = function (grid) {
  let count = 0;

  function dfs(grid, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] == "0"
    ) {
      return;
    }
    grid[i][j] = "0";

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
};
