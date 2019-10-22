package main

import (
	"fmt"
)

func plusOne(digits []int) []int {
	var i int
	for i = len(digits) - 1; i >= 0; i-- {
		if digits[i] == 9 {
			digits[i] = 0
		} else {
			digits[i]++
			break
		}
	}

	if i == -1 {
		digits = append([]int{1}, digits...)
	}

	return digits
}

func main() {
	nums := []int{5, 4, 3, 2, 9, 9, 9}
	fmt.Println(plusOne(nums))
}
