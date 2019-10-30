/**
 * 451. 根据字符出现频率排序
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
 * 示例 1:
 * 输入: "tree", 输出： "eert"， 解释：'e'出现两次，'r'和't'都只出现一次。因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var sMap = {}
    var sArr = []
    for (var i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = 1
            sArr.push(s[i])
        } else {
            sMap[s[i]]++
        }
    }
    return sArr.sort((a, b) => {
        return sMap[b] - sMap[a]
    }).map(item => item.repeat(sMap[item])).join('')
};
console.log(frequencySort('loveleetcode'))
