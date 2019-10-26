/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
const cloneMartix = JSON.parse(JSON.stringify(matrix));

    const n = matrix.length;

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            matrix[x][y] = cloneMartix[n - y - 1][x];
        }
    }
};