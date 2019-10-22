/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let nums = [],
    min = nums1,
    max = nums2
  if(nums1.length > nums2.length) {
    min = nums2
    max = nums1
  }
  min.forEach(num => {
    let index = max.indexOf(num)
    if (index > -1) {
      nums.push(num)
      max.splice(index, 1)
    }
  })
  return nums
}
