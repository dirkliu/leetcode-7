/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > 2147483647 || x < -2147483648) {
        return 0
    }
    let y = 0
    let nums = x.toString().split('')
    if (x >= 0) {
        y = +nums.reverse().join('')         
    } else {
        y = +('-' + nums.slice(1).reverse().join(''))
    }
    if (y > 2147483647 || y < -2147483648) {
        return 0
        }
    return y
};