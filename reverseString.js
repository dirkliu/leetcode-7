/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     var n = s.length
//     for (var i = 0; i < parseInt(n / 2); i++) {
//         var tmp = s[i]
//         s[i] = s[n - 1 -i]
//         s[n - 1 -i] = tmp
//     }
// };

// 144ms
// var reverseString = function(s) {
//     var n = s.length
//     for (var i = 0; i < parseInt(n / 2); i++) {
//         [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]]
//     }
// };

// 96ms
var reverseString = function(s) {
  s.reverse()
};
