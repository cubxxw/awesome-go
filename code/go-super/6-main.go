/*
 * @Description:for range
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 11:33:13
 * @FilePath: \code\go-super\6-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func main() {
	fmt.Println("Hello World!")
	var userinfo = map[string]string{
		"username": "admin",
		"password": "123456",
	}
	fmt.Println(userinfo)

	//for range 遍历
	for k, v := range userinfo {
		fmt.Println(k, v)
	}
}
