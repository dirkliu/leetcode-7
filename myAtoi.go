package main

import (
	"fmt"
)

func myAtoi(str string) int {
	if str == "" {
		return 0
	}
	bytes := []byte{}
	for index, value := range str {
		fmt.Printf("index: %d, value: %c \n", index, value)
		if value >= '0' && value <= '9' {
			bytes[index] = value
		} else if len(bytes) == 0 {
			if value == '-' || value == '+' {
				bytes[index] = value
			} else if value == ' ' {
				continue
			} else {
				return 0
			}
		} else {
			break
		}
	}

	fmt.Println(bytes)
	return 0
}

func main() {
	// fmt.Printf("字符串转整型: %d", int("-1"-'0'))
	myAtoi("   -123456")
}
