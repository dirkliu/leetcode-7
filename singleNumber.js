/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 示例 1:
 * 输入: [2,2,1]
 * 输出: 1
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * @param {number[]} nums
 * @return {number}
 **/
// 172ms
/*var singleNumber = function(nums) {
    while (nums.length) {
        var num = nums.pop()
        var index = nums.indexOf(num)
        if (index > -1) {
          nums.splice(index, 1)      
        } else {
            return num
        }
    }
};*/
// 68ms
var singleNumber = function(nums) {
    var a = 0
    for (var i = 0; i < nums.length; i++) {
        a ^= nums[i]
    }
    return a
};
