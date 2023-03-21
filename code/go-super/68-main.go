/*
泛型（genericity） 两个相加
*/

package main

import (
	"fmt"
)

//定义T

// 泛型函数
func genericityFunc[T any](a T, b T) T {
	return a
}

func main() {

	fmt.Println(genericityFunc(1, 2))
	fmt.Println(genericityFunc("hello", "world"))
	fmt.Println(genericityFunc(1.1, 2.2))
}
