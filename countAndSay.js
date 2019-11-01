/**
 * @param {number} n
 * @return {string}
 */
 // 80ms
// var countAndSay = function(n) {
//     if (n === 1) {
//       return '1'
//     }
//     var s = countAndSay(n - 1)
//     console.log('s:', s)
//     var charMap = {}
//     var newStr = ''
//     for (var i = 0; i < s.length; i++) {
//       if (!charMap[s[i]]) {
//         charMap[s[i]] = 1
//       }
//       if (i > 0) {
//         if (s[i] === s[i - 1]){
//           charMap[s[i]]++
//         } else {
//           newStr += '' + charMap[s[i - 1]] + s[i - 1]
//           charMap[s[i]] = 1
//         }
//       }

//       if (i === s.length - 1) {
//         newStr += '' + charMap[s[i]] + s[i]
//       }
//     }
//     return newStr
// };
// 80ms end

// 44ms
var countAndSay = function(n) {
  let str = [1];
  let start = 1;
  while (start < n) {
    let newStr = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1] && str[i + 1]) {
        count++;
      } else {
        newStr.push(count, str[i]);
        count = 1;
      }
    }
    // console.log(start, newStr);
    str = newStr;
    start++;
  }

  return str.join("");
};
// 44ms end

console.log('countAndSay2:', countAndSay(3))
