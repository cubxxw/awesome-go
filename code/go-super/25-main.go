/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 11:38:42
 * @FilePath: \code\go-super\25-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

type User interface {
	// Photo接口
	start()
	end()
}

type Photo struct {
	// Photo结构体
	name string
}

// 实现接口
func (p Photo) start() {
	fmt.Println("start")
}

func (p Photo) end() {
	fmt.Println("end")
}

//接口的实现方式
//1.结构体实现接口
//2.结构体指针实现接口

func main() {
	var user User
	user = Photo{"photo"}
	user.start()

	Photo := &Photo{"smile"}
	var c1 User = Photo //接口变量指向结构体指针
	c1.start()
	Photo.start()
	Photo.end()
}
