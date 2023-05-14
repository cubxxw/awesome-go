/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 17:52:54
 * @FilePath: \code\go-super\17-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func add() {
	fmt.Println("add()...")

}
func main() {
	//实现一个计算器
	//1.定义一个函数，实现两个数的加减乘除
	//2.定义一个函数，实现两个数的加减乘除
	//3.定义一个函数，实现两个数的加减乘除
	//4.定义一个函数，实现两个数的加减乘除

	var a, b int = 10, 20
	var result int
	result = add(a, b)
	fmt.Println("result=", result)
	add()
}
