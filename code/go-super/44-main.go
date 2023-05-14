/*
 * @Description:Go语言协程异常处理
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:50:10
 * @FilePath: \code\go-super\44-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"time"
)

func test() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("协程出现异常:", err)
		}
	}()
	var a []int
	a[0] = 100 // 这里会出现数组越界异常
}

func test2() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("协程出现异常:", err)
		}
	}()
	var mapping_1 map[int]string
	mapping_1[1] = "hello" // 这里会出现空指针异常
}

func main() {
	go test()
	go test2()
	time.Sleep(time.Second * 3)
}
