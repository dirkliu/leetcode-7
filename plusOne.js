/**给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
* 最高位数字存放在数组的首位，数组中每个元素只存储单个数字。
* 你可以假设除了整数 0 之外，这个整数不会以零开头。
* 示例1
* 输入: [1,2,3]
* 输出: [1,2,4]
* 解释: 输入数组表示数字 123。
* 示例2
* 输入: [4,3,2,1]
* 输出: [4,3,2,2]
* 解释: 输入数组表示数字 4321。
* @param {number[]} digits
* @return {number[]}
**/
// 76ms
// var plusOne = function(digits) {
//   var carry = 1
//   for (var i = digits.length - 1; i >= 0; i--) {
//     digits[i] = digits[i] + carry
//     if (digits[i] > 9) {
//       carry = 1
//       digits[i] -= 10
//     } else {
//       carry = 0
//       break
//     }
//   }
//   if (carry) {
//     digits.unshift(1)
//   }
//   return digits
// }

var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      digits[i]++
      break
    }
  }
  if (i === -1) {
    digits.unshift(1)
  }
  return digits
}

console.log('digits test:', plusOne([4, 3, 4, 1]))
