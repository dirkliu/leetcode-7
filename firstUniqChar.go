/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 案例：
 * s = "leetcode" 返回 0.
 * s = "loveleetcode", 返回 2.
 * @param {string} s
 * @return {number}
 */
package main

import (
	"fmt"
	"strings"
)

func firstUniqChar(s string) int {
	for index, value := range s {
		if strings.Index(s, string(value)) == strings.LastIndex(s, string(value)) {
			return index
		}
	}
	return -1
}

func main() {
	index := firstUniqChar("acacdffg")
	fmt.Printf("第一个唯一字符串:%d", index)
}
