/*
 * @Description: interface
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 11:38:47
 * @FilePath: \code\go-super\29-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

type animal interface { //动物接口
	move()
	eat(string)
}

type cat struct { //猫结构体
	name string
	feet int8
}

func (c *cat) move() { //指针接收者实现接口
	fmt.Println("猫动")
}

func (c *cat) eat(food string) {
	fmt.Printf("猫吃%s\n", food)
}

func main() {
	var a = &cat{"tom", 4}
	//注意：接口变量保存的是一个指针，这个指针指向了实现该接口的自定义类型的变量（结构体变量）
	//var a = cat{"tom", 4} 错误写法
	var ai = a
	ai.move()
	ai.eat("fish")

}
