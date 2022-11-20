/*
自定义泛型（genericity）类型
*/

package main

import "fmt"

type MyInt interface {
	int | int64 | int32 | int16 | int8
}

func GetMaxNum[T MyInt](a, b T) T {
	if a > b {
		return a
	}
	return b
}

func main() {
	fmt.Println(GetMaxNum(1, 2))
}
