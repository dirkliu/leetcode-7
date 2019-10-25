package main

import (
	"fmt"
)

func isValidSudoku(board [][]byte) bool {
	const DOT = byte('.')
	for i := 0; i < 9; i++ {
		rowCache := make(map[byte]bool)
		columnCache := make(map[byte]bool)
		for j := 0; j < 9; j++ {
			if rowCache[board[i][j]] {
				return false
			} else if board[i][j] != DOT {
				rowCache[board[i][j]] = true
			}

			if columnCache[board[j][i]] {
				return false
			} else if board[j][i] != DOT {
				columnCache[board[j][i]] = true
			}

			if j%3 == 2 && i%3 == 2 {
				gridCache := make(map[byte]bool)
				for k := i - 2; k <= i; k++ {
					for l := j - 2; l <= j; l++ {
						if gridCache[board[k][l]] {
							return false
						} else if board[k][l] != DOT {
							gridCache[board[k][l]] = true
						}
					}
				}
			}
		}
	}
	return true
}

func main() {
	sudos := [][]byte{
		{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'},
	}
	fmt.Println(isValidSudoku(sudos))
}
