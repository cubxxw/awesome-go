/*
 * @Description:异常处理
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 16:35:18
 * @FilePath: \code\go-super\13-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func fn1(a int, b int) int {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("有错误 err", err)
		}
	}()
	return a / b
}

func main() {
	fmt.Println(fn1(10, 0))
	fmt.Println("end	main")
}
