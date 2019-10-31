/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 示例 1:
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 示例 2:
 * 输入: s = "rat", t = "car"
 * 输出: false
**/

package main

import (
	"fmt"
)

// 16ms
// func isAnagram(s string, t string) bool {
// 	if len(s) != len(t) {
// 		return false
// 	}

// 	sMap := make(map[byte]int)
// 	tMap := make(map[byte]int)
// 	for i := 0; i < len(s); i++ {
// 		fmt.Printf("s[i]: %c, t[i]: %c\n", s[i], t[i])
// 		fmt.Println(sMap)
// 		fmt.Println(tMap)
// 		if _, ok := sMap[s[i]]; !ok {
// 			sMap[s[i]] = 1
// 		} else {
// 			sMap[s[i]]++
// 		}

// 		if _, ok := tMap[t[i]]; !ok {
// 			tMap[t[i]] = 1
// 		} else {
// 			tMap[t[i]]++
// 		}
// 	}

// 	for name, value := range sMap {
// 		fmt.Printf("name: %c, value: %d\n", name, value)
// 		if value != tMap[name] {
// 			return false
// 		} else {
// 			delete(tMap, name)
// 		}
// 	}

// 	for name, value := range tMap {
// 		if value != sMap[name] {
// 			return false
// 		}
// 	}
// 	return true
// }
// 16ms end

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sMap := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		if _, ok := sMap[s[i]]; !ok {
			sMap[s[i]] = 1
		} else {
			sMap[s[i]]++
		}

		if _, ok := sMap[t[i]]; !ok {
			sMap[t[i]] = -1
		} else {
			sMap[t[i]]--
		}
	}

	for _, value := range sMap {
		if value != 0 {
			return false
		}
	}
	return true
}

func main() {
	isAn := isAnagram("aacc", "ccac")
	fmt.Println(isAn)
}
