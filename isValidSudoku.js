/**
 * @param {character[][]} board
 * @return {boolean}
 */

var sudos = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

// 88ms
// var isValidSudoku = function (board) {
//   for (var i = 0; i < 9; i++) {
//     let rowCache = {}
//     let columnCache = {}
//     for (var j = 0; j < 9; j++) {
//       if (rowCache[board[i][j]]) {
//         return false
//       } else if (board[i][j] !== '.') {
//         rowCache[board[i][j]] = 1
//       }

//       if (columnCache[board[j][i]]) {
//         return false
//       } else if (board[j][i] !== '.') {
//         columnCache[board[j][i]] = 1
//       }

//       if (j % 3 === 2 && i % 3 === 2) {
//         let gridCache = {}
//         for (var k = i - 2; k <= i; k++) {
//           for (var l = j - 2; l <= j; l++) {
//             if (gridCache[board[k][l]]) {
//               return false
//             } else if (board[k][l] !== '.') {
//               gridCache[board[k][l]] = 1
//             }
//           }
//         }
//       }
//     }
//   }
//   return true
// }
// 80ms end

// 60ms
// var isValidSudoku = function(board) {
//   const xSetMap = nineZero.concat(),
//     ySetMap = nineZero.concat(),
//     areaSetMap = nineZero.concat();

//   for (var y = 0; y !== 9; y++) {
//     for (var x = 0; x !== 9; x++) {
//       const value = board[y][x];
//       if (value !== ".") {
//         const bit = 1 << value;

//         if ((xSetMap[x] & bit) !== 0) {
//           return false;
//         }
//         if ((ySetMap[y] & bit) !== 0) {
//           return false;
//         }
//         const area = indexMap[y][x];
//         if ((areaSetMap[area] & bit) !== 0) {
//           return false;
//         }
//         xSetMap[x] |= bit;
//         ySetMap[y] |= bit;
//         areaSetMap[area] |= bit;
//       }
//     }
//   }
//   return true;
// };
// const nineNull = new Array(9).fill(null);
// const nineZero = new Array(9).fill(0);
// const indexMap = nineNull.map((_, y) =>
//   nineZero.concat().map((_, x) => Math.floor(y / 3) * 3 + Math.floor(x / 3))
// );
// 60ms end

// 80ms
// var isValidSudoku = function (board) {
//   for (var i = 0; i < 9; i++) {
//     let rowBits = 0
//     let columnBits = 0
//     for (var j = 0; j < 9; j++) {
//       if (board[i][j] !== '.') {
//         let bit = 1 << +board[i][j] - 1
//         if ((rowBits & bit) !== 0) {
//           return false
//         } else {
//           rowBits |= bit
//         }
//       }

//       if (board[j][i] !== '.') {
//         let bit = 1 << +board[j][i] - 1
//         if ((columnBits & bit) !== 0) {
//           return false
//         } else {
//           columnBits |= bit
//         }
//       }

//       if (j % 3 === 2 && i % 3 === 2) {
//         let gridBits = 0
//         for (var k = i - 2; k <= i; k++) {
//           for (var l = j - 2; l <= j; l++) {
//             if (board[k][l] !== '.') {
//               let bit = 1 << +board[k][l] - 1
//               if ((gridBits & bit) !== 0) {
//                 return false
//               } else {
//                 gridBits |= bit
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return true
// }
// 80ms end
console.log('isValidSudoku:', isValidSudoku(sudos))
