package main

import (
	"fmt"
)

func singleNumber(nums []int) int {
	a := 0
	for _, v := range nums {
		a ^= v
	}
	return a
}

func main() {
	nums := []int{4, 2, 2, 1, 1}
	fmt.Printf("出现一次的元素：%d", singleNumber(nums))
}
