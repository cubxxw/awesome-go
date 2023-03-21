/*
 * @Description: tcp服务端
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-29 21:48:14
 * @FilePath: \go-super\55-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

func main() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("程序异常退出", err)
		}
	}()
	//定义map
	s := map[string]int{
		"张三": 18,
		"李四": 19,
		"王五": 20,
	}
	//遍历map
	for k, v := range s {
		fmt.Println(k, v)
	}
	/*
		容量和长度的区别：
		1. 容量是指切片的容量，长度是指切片的长度
		2. 容量是指数组的容量，长度是指数组的长度
		3. 容量是指map的容量，长度是指map的长度

	*/
	//定义map
	m := make(map[string]int, 10)
	m["a"] = 1
	m["b"] = 2
	m["c"] = 3

	//遍历map
	for k, v := range m {
		fmt.Println(k, v)
	}

	//make一个map
	m1 := make(map[string]int, 0)
	m1["a"] = 1
	m1["b"] = 2
	m1["c"] = 3

	//遍历map
	for k, v := range m1 {
		fmt.Println(k, v)
	}

	//new一个map
	m2 := new(map[string]int)
	(*m2)["a"] = 1
	(*m2)["b"] = 2
	(*m2)["c"] = 3

}
