/*
 * @Description:interface-super
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 08:51:33
 * @FilePath: \code\go-super\26-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

// 声明/定义一个接口
type Usb interface {
	//声明了两个没有实现的方法
	Start()
	Stop()
}

// 声明/定义一个接口
type Usb2 interface {
	//声明了两个没有实现的方法
	Start()
	Stop()
	Test()
}

// 定义手机的结构体
type Phone struct {
}

// 让Phone 实现 Usb接口的方法
func (p Phone) Start() {
	fmt.Println("手机开始工作。。。")
}

func (p Phone) Stop() {
	fmt.Println("手机停止工作。。。")
}

type Camera struct {
}

// 让Camera 实现   Usb接口的方法
func (c Camera) Start() {
	fmt.Println("相机开始工作~~~。。。")
}

func (c Camera) Stop() {
	fmt.Println("相机停止工作。。。")
}

// 计算机
type Computer struct {
}

// 编写一个方法Working 方法，接收一个Usb接口类型变量
// 只要是实现了 Usb接口 （所谓实现Usb接口，就是指实现了 Usb接口声明所有方法）
func (c Computer) Working(usb Usb) {
	//通过usb接口变量来调用Start和Stop方法
	usb.Start()
	usb.Stop()
}

func main() {
	//测试
	//先创建结构体变量
	computer := Computer{}
	phone := Phone{}
	camera := Camera{}

	//关键点
	computer.Working(phone)
	computer.Working(camera) //实现camera
}
