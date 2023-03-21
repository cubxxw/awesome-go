/*
 * @Description: 接口的的实现
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-29 19:15:23
 * @LastEditTime: 2022-10-29 20:12:22
 * @FilePath: \code\interface\main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

// 定义一个接口 -- 吃
type Eater interface {
	Eat()
}

// 定义一个接口 -- 睡
type Sleeper interface {
	Sleep(foodName string)
}

// 定义一个接口 -- 即吃又睡
type EaterSleeper interface {
	Eater
	Sleeper
}

// 定义一个结构体 -- 人
type Human struct {
	name string
}

// 定义一个结构体 -- 狗
type Dog struct {
	name string
}

// 定义一个结构体 -- 含羞草
type ShyClover struct {
	name string
}

// 狗实现了吃的方法
func (d Dog) Eat() {
	fmt.Println("我是:" + d.name + "我实现了吃的方法：吃肉")
}

// 人实现了吃和睡的方法
func (h Human) Eat() {
	fmt.Println("我是:"+h.name+"我实现了吃的方法：吃肉", "我实现了睡的方法：睡觉")
}

// 人实现了吃和睡的方法
func (h Human) Sleep(foodName string) {
	fmt.Println("我是:"+h.name+"我实现了吃的方法：吃肉", "我实现了睡的方法：睡觉"+"我吃的是："+foodName)
}

// 含羞草实现了睡的方法
func (s ShyClover) Sleep(foodName string) {
	fmt.Println("我是:"+s.name+"我实现了睡的方法：睡觉", "我吃的是："+foodName)
}

func main() {
	var eater Eater
	var sleeper Sleeper
	var eaterSleeper EaterSleeper

	eater = Dog{"小狗"}
	eater.Eat()

	sleeper = ShyClover{"含羞草"} //error: cannot use ShyClover literal (type ShyClover) as type Sleeper in assignment: ShyClover does not implement Sleeper (missing Sleep method)
	sleeper.Sleep("小鸡")

	eaterSleeper = Human{"小人"}
	eaterSleeper.Eat()
	eaterSleeper.Sleep("小鸡")
	for i, v := range []interface{}{eater, sleeper, eaterSleeper} {
		// 判断接口是否实现了某个接口
		switch v.(type) {
		case Eater:
			fmt.Println(i, "是Eater")
		case Sleeper:
			fmt.Println(i, "是Sleeper")
		case EaterSleeper:
			fmt.Println(i, "是EaterSleeper")
		}
	}
}
