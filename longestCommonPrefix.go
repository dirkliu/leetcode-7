/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"]  输出: "fl"
 * 示例 2:
 * 输入: ["dog","racecar","car"]  输出: ""
 */
package main

import (
	"fmt"
)

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	str := ""
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < len(strs); j++ {
			if i >= len(strs[j]) || strs[0][i] != strs[j][i] {
				return str
			}
		}
		str += string(strs[0][i])
	}
	return str
}

func main() {
	strs := []string{"test1", "testify", "tesd"}
	fmt.Println(longestCommonPrefix(strs))
}
