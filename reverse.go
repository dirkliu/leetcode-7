package main

func reverse(x int) int {
	num := 0
	for x != 0 {
		if (num*10+x%10) > math.MaxInt32 || (num*10+x%10) < math.MinInt32 {
			return 0
		}
		num = num*10 + x%10
		x /= 10
	}
	return num
}

func main() {
}
