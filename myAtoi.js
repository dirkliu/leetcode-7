/**
 * @param {string} str
 * @return {number}
 */
 // 88ms
// var myAtoi = function(str) {
//     let num = +str.replace(/^\s*([\+\-]*\d+)([^\d].*)*$/, '$1')
//     console.log('num', num)
//     if (num < -2147483648) {
//         return -2147483648
//     }
//     if (num > 2147483647) {
//         return 2147483647
//     }
//     return num || 0
// };

// 66ms
var myAtoi = function(str) {
    const max = Math.pow(2, 31) - 1,
          min = -Math.pow(2, 31);
  let res = parseInt(str);
  if(res > max) return max;
  if(res < min) return min;
  return res || 0;
};

myAtoi("words and 987")