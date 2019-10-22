package main

import (
	"fmt"
)

func moveZeros(nums []int) []int {
	lastZero := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[lastZero] = nums[i]
			lastZero++
		}
	}
	for j := lastZero; j < len(nums); j++ {
		nums[j] = 0
	}
	return nums
}

func main() {
	nums := []int{1, 0, 0, 0, 2, 0, 3, 4, 3, 0}
	fmt.Println(moveZeros(nums))
}
