/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * ******************
 * 示例 1：
 * 输入：grid = [
 *  ["1","1","1","1","0"],
 *  ["1","1","0","1","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","0","0","0"]
 * ]
 * 输出：1
 * ******************
 * 示例 2：
 * 输入：grid = [
 *  ["1","1","0","0","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","1","0","0"],
 *  ["0","0","0","1","1"]
 * ]
 * 输出：3
 * ******************
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  var passedGrid = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) {
      passedGrid[i] = new Array(grid[0].length)
  }

  var count = 0
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (!passedGrid[i][j] && grid[i][j] === '1') {
              count++
              walkGrid(i, j, grid, passedGrid)
          }
      }
  }

  return count
};

var walkGrid = function (i, j, grid, passedGrid) {
  passedGrid[i][j] = 1
  // 查找相邻的点是否可以经过
  if (j < grid[i].length - 1 && grid[i][j + 1] === '1' && !passedGrid[i][j + 1]) {
      walkGrid(i, j + 1, grid, passedGrid)
  }
  if (i < grid.length - 1 && grid[i + 1][j] === '1' && !passedGrid[i + 1][j]) {
      walkGrid(i + 1, j, grid, passedGrid)
  }
  if (j > 0 && grid[i][j - 1] === '1' && !passedGrid[i][j - 1]) {
      walkGrid(i, j - 1, grid, passedGrid)
  }
  if (i > 0 && grid[i - 1][j] === '1' && !passedGrid[i - 1][j]) {
      walkGrid(i - 1, j, grid, passedGrid)
  }
}
