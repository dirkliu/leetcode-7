package main

import (
	"fmt"
	"sort"
)

// 11ms, 6.6mb
// func frequencySort(s string) string {
// 	strMap := make(map[rune][]rune)
// 	strs := []string{}
// 	for _, value := range s {
// 		strMap[value] = append(strMap[value], value)
// 	}
// 	for _, v := range strMap {
// 		strs = append(strs, string(v))
// 	}

// 	for i := 0; i < len(strs)-1; i++ {
// 		for j := i + 1; j < len(strs); j++ {
// 			if len(strs[i]) < len(strs[j]) {
// 				strs[i], strs[j] = strs[j], strs[i]
// 			}
// 		}
// 	}

// 	str := ""
// 	for _, value := range strs {
// 		str += value
// 	}
// 	return str
// }
// 11ms end

// 0ms
type pairs struct {
	c   int32
	cnt int
}
type sortArray []pairs

func (s sortArray) Len() int {
	return len(s)
}

func (s sortArray) Less(i, j int) bool {
	return s[i].cnt > s[j].cnt
}

func (s sortArray) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func frequencySort(s string) string {
	cntMap := make(map[int32]*pairs)
	for _, c := range s {
		if p, ok := cntMap[c]; ok {
			p.c = c
			p.cnt++
		} else {
			cntMap[c] = &pairs{c: c, cnt: 1}
		}
	}

	sorted := sortArray{}
	for _, v := range cntMap {
		sorted = append(sorted, *v)
	}

	sort.Sort(sorted)
	res := strings.Builder{}

	for _, v := range sorted {
		for v.cnt > 0 {
			v.cnt--
			res.WriteByte(byte(v.c))
		}
	}
	return res.String()
}

// 0ms end

func main() {
	str := frequencySort("ccaaaaa221333bbba")
	fmt.Printf("字符串转换：%s", str)
	// s := []rune{"1eer"}
	// s = append(s, "s")
	// fmt.Println(s)
}
