/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var t = s.replace(/\W/g, '').toLowerCase()
    var n = t.length
    
    for (var i = 0; i < n / 2; i++) {
        if (t[i] !== t[n - 1 - i]) {
            return false    
        }
    }
    return true
};
