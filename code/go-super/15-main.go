/*
 * @Description: map数组
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 17:35:10
 * @FilePath: \code\go-super\15-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"sort"
)

func main() {
	//元素为map类型切片
	var userinfo = make([]map[string]string, 3, 10)
	fmt.Println("userinfo=", userinfo)
	fmt.Println("userinfo[0]=", userinfo[0])
	//长度
	fmt.Println("len(userinfo)=", len(userinfo))
	//容量
	fmt.Println("cap(userinfo)=", cap(userinfo))

	//赋值
	if userinfo[0] == nil { //判断是否为nil
		userinfo[0] = make(map[string]string, 10)
		userinfo[0]["username"] = "admin"
		userinfo[0]["password"] = "123456"
	}
	fmt.Println("userinfo[0]=", userinfo[0])
	fmt.Println("userinfo=", userinfo)

	if userinfo[1] == nil { //判断是否为nil
		userinfo[1] = make(map[string]string, 10)
		userinfo[1]["username"] = "admin1"
		userinfo[1]["password"] = "1234561"

	}
	fmt.Println("userinfo[1]=", userinfo[1])
	fmt.Println("userinfo=", userinfo)

	if userinfo[2] == nil { //判断是否为nil
		userinfo[2] = make(map[string]string, 10)
		userinfo[2]["username"] = "admin2"
		userinfo[2]["password"] = "1234562"
	}
	fmt.Println("userinfo[2]=", userinfo[2])
	fmt.Println("userinfo=", userinfo)

	fmt.Println("=====================================")
	//切片遍历
	var keySlice []int // key
	for k, v := range userinfo {
		fmt.Println(k, v)
		keySlice = append(keySlice, k)
	}

	//排序
	sort.Ints(keySlice)
	fmt.Println("keySlice=", keySlice)

	//遍历
	for _, v := range keySlice {
		fmt.Println(v, userinfo[v])

	}

}
