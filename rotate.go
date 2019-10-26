package main

import (
	"fmt"
)

func rotate(matrix [][]int) {
	clone := [][]int{}
	n := len(matrix)
	fmt.Printf("n %d:\n", n)
	for i := 0; i < n; i++ {
		clone = append(clone, []int{})
		for j := 0; j < n; j++ {
			clone[i] = append(clone[i], matrix[i][j])
		}
	}
	for x := 0; x < n; x++ {
		for y := 0; y < n; y++ {
			fmt.Printf("x=%d, y=%d, x1=%d, y1=%d, num=%d\n", x, y, n-y-1, x, clone[0][0])
			matrix[x][y] = clone[n-y-1][x]
		}
	}
}

func main() {
	matrix := [][]int{
		{1, 1, 1},
		{2, 2, 2},
		{3, 3, 3},
	}
	rotate(matrix)
	fmt.Println(matrix)
}
