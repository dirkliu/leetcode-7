package main

func intersect(nums1 []int, nums2 []int) []int {
	var nums []int
	numsMap := make(map[int]int, len(nums1))
	for _, v := range nums1 {
		if _, ok := numsMap[v]; ok {
			numsMap[v]++
		} else {
			numsMap[v] = 1
		}
	}
	for _, t := range nums2 {
		if _, ok := numsMap[t]; ok {
			if numsMap[t] > 0 {
				nums = append(nums, t)
				numsMap[t]--
			}
		}
	}
	return nums
}

func main() {
}
