/*
 * @Description:闭包的解决方法
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 12:18:14
 * @FilePath: \code\go-super\8-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func adder() func(int) int {
	//func(int) int 代表这个函数接收一个int类型的参数，返回一个int类型的值
	var x int = 10
	return func(y int) int {
		x += y
		return x
	}
}

//工厂模式
//工厂模式是一种创建型设计模式，它提供了一种创建对象的最佳方式。
//创建一个工厂模式

func adder2() func() int {
	var x int = 10
	return func() int {
		return x
	}
}

func main() {
	//定义一个闭包，作用是返回一个函数，这个函数可以累加，每次累加的值是上次累加的值加上本次传入的值

	var add = func(x, y int) int {
		return x + y
	}
	//调用闭包
	var result = add(1, 2)
	println(result)

	//调用adder函数，返回一个闭包
	fmt.Println("调用adder函数，返回一个闭包")
	var f = adder()   //注意这里表示执行方法~
	fmt.Println(f(1)) //11
	fmt.Println(f(2)) //13
	fmt.Println(f(3)) //16

	//调用adder2函数，返回一个闭包
	fmt.Println("调用adder2函数，返回一个闭包")
	var f2 = adder2()
	fmt.Println(f2()) //11
	fmt.Println(f2()) //12
	fmt.Println(f2()) //13

	//工厂模式
	fmt.Println("工厂模式")
	var f3 = adder2()
	fmt.Println(f3()) //11
	fmt.Println(f3()) //12
	fmt.Println(f3()) //13

}
