package main

import (
	"fmt"
)

func reverseString(s []byte) {
	var n int = len(s) / 2
	for i := 0; i < n; i++ {
		s[i], s[n-i-1] = s[n-i-1], s[i]
	}
}

func main() {
	bytes := []byte{'h', 'e', 'l', 'l', 'o'}
	reverseString(bytes)
	fmt.Println(bytes)
}
