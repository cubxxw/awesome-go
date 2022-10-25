/*
 * @Description:类型断言 -- 接口类型转换
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 09:50:52
 * @FilePath: \code\go-super\28-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

//定义一个方法，可以传入任何类型的数据，就然后根据不同的类型，做不同的事情
func showType(x interface{}) {
	switch v := x.(type) { //v就是x的类型
	case string:
		fmt.Printf("x is a string, value is %v", v)
	case int:
		fmt.Printf("x is a int, value is %v", v)
	case bool:
		fmt.Printf("x is a bool, value is %v", v)
	default:
		fmt.Println("unsupport type!")
	}
}

//使用switch语句，可以判断一个变量是什么类型
func switch2(x interface{}) {
	switch x.(type) {
	case string:
		fmt.Println("x is a string")
	case int:
		fmt.Println("x is a int")
	case bool:
		fmt.Println("x is a bool")
	default:
		fmt.Println("unsupport type!")
	}
}

//if-else类型断言
func Prints(x interface{}) {
	if v, ok := x.(int); ok {
		fmt.Printf("x is a int, value is %v", v)
	} else if v, ok := x.(string); ok {
		fmt.Printf("x is a string, value is %v", v)
	} else {
		fmt.Println("unsupport type!")
	}
}

func init() {
	Prints("123")
	fmt.Println()

	switch2(100)

	//接口类型转string
	var a interface{}
	a = "2123"
	//b := a.(int) //这里会报错，因为a是interface{}类型，不能直接转换为int类型
	b := a.(int) //这里会报错，因为a是interface{}类型，不能直接转换为int类型
	fmt.Printf("b type is %T, b=%v", b, b)
}

func main() {

	var a interface{}
	a = 10
	if v, ok := a.(float64); ok {
		fmt.Println("转换成功,a=", v)
	} else {
		fmt.Println("转换失败")
	}
	a = 10.4
	if v, ok := a.(float64); ok {
		fmt.Println("转换成功,a=", v)
	} else {
		fmt.Println("转换失败")
	}

}
