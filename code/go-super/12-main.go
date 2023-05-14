/*
 * @Description:异常处理
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 16:29:01
 * @FilePath: \code\go-super\12-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func fn1() {
	fmt.Println("fn1")
}

func fn2() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("有错误 err", err)
		}
	}()
	panic("fn2")
}

func main() {
	fn1()
	fn2()
	fmt.Println("end	main")
}
