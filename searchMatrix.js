var nums = [[1,1]]

var searchMatrix = function(matrix, target) {
  function search (nums, start, end, target) {
    if (start === end) {
        return nums[start] === target
    } else if (start > end) {
      return false
    }

    var mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
        return true
    } else if (nums[mid] < target) {
        return search(nums, mid + 1, end, target)
    } else {
        return search(nums, start, mid - 1, target)
    }
  }

  for (let i = 0; i < matrix.length; i++) {
      if (search(matrix[i], 0, matrix[i].length - 1, target)) {
          return true
      }
  }

  return false
};

var flag = searchMatrix(nums, 0)
console.log('flag:', flag)