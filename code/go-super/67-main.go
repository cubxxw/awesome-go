/*
go 泛型（genericity）
*/

package main

import (
	"fmt"
)

// 泛型函数
func genericityFunc[T any](a T) {
	fmt.Println(a)
}

// 泛型接口
type genericityInterface[T any] interface {
	genericityFunc(T)
}

// 泛型结构体
type genericityStruct[T any] struct {
	a T
}

func main() {
	// 泛型函数
	genericityFunc(1)
	genericityFunc("hello")
	genericityFunc(1.1)
	// 泛型接口
	var genericityInterface genericityInterface[int]
	genericityInterface.genericityFunc(1)
	//Generic structs
	var genericityStruct genericityStruct[int]
	genericityStruct.a = 1
	fmt.Println(genericityStruct.a)
}
