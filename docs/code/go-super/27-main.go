/*
 * @Description: null interface
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 09:20:23
 * @FilePath: \code\go-super\27-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

//空接口
type A interface{}

func show(a interface{}) {
	fmt.Printf("type:%T value:%v", a, a) //type:interface {} value:100
}

func main() {
	var a A
	b := "hello"
	a = b                //表示a可以接收任意类型的数据
	fmt.Println("a=", a) //a= hello

	var num = 20
	a = num //表示空接口可以接收任意类型的数值
	fmt.Printf("a type is %T, a value is %v\n", a, a)

	var stu = struct {
		name string
		age  int
	}{
		name: "tom",
		age:  20,
	}

	a = stu
	fmt.Printf("a type is %T, a value is %v\n", a, a) //a type is struct { name string; age int }, a value is {tom 20}

	show(100) //type:int value:100

	//fmt.Println("a.name=", a.name) //空接口没有字段，不能直接访问字段"

	//map  interface
	var userinfo = map[string]interface{}{
		"username": "admin",
		"password": "123456",
		"age":      20,
	}
	fmt.Println("userinfo=", userinfo)

	var m1 = make(map[string]interface{})
	m1["username"] = userinfo["username"]
	m1["password"] = userinfo["password"]
	m1["age"] = userinfo["age"]
	m1["hobby"] = 123
	fmt.Println("m1=", m1)
	fmt.Printf("userinfo[\"username\"] = %T", userinfo["username"])

	//切片
	var slice1 = []interface{}{1, 2, 3, 4, 5, "hello", true}
	fmt.Printf("a type is %T, a value is %v\n", slice1, slice1) //a type is []interface {}, a value is [1 2 3 4 5 hello true]
}
