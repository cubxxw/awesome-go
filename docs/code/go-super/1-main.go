package main

import "fmt"

var x float64 = 10 //这里的x是全局变量
var y = 10

func main() {
	fmt.Println("hello world!")
	fmt.Println("this is a test!")
	if x := 1; x > 0 {
		fmt.Println("x>0")
	}
	fmt.Println(x)

	//打印x的类型
	fmt.Printf("x type is %T\n", x)

	//打印y的类型
	fmt.Printf("y type is %T\n", y)
}
