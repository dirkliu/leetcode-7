package main

import (
	"fmt"
)

func strStr(haystack string, needle string) int {
	hn := len(haystack)
	nn := len(needle)
	if nn == 0 {
		return 0
	}

	if hn < nn {
		return -1
	}

	for i := 0; i <= hn-nn; i++ {
		if needle == haystack[i:i+nn] {
			return i
		}
	}
	return -1
}

func main() {
	index := strStr("llaco", "ac")
	fmt.Printf("出现位置：%d", index)
}
