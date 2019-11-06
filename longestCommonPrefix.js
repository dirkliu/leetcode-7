/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。  
 * 示例 1:  
 * 输入: ["flower","flow","flight"]  输出: "fl"  
 * 示例 2:
 * 输入: ["dog","racecar","car"]  输出: ""
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return ''
    }
    let str = '' 
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return str
        }
        str += strs[0][i]
    }   
    return str
};
