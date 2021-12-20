/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  var nums = getNums(root)
  return nums[k - 1]
};

var getNums = function (root) {
  var nums = []
  if (root.left) {
      nums = getNums(root.left)
  }
  nums.push(root.val)

  if (root.right) {
      nums = nums.concat(getNums(root.right))
  }

  return nums
}