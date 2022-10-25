/*
 * @Description: 接口带参数方法
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 10:13:45
 * @FilePath: \code\go-super\30-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

type A interface {
	String() string
	//get和set方法
	GetName() string
	SetName(string)
}

type A1 struct {
	name string
	age  int64
}

func (a *A1) GetName() string {
	//可以是指针接收者，也可以是值接收者
	return a.name
}

func (a *A1) SetName(name string) {
	//必须是指针接收者
	a.name = name
}

func (a *A1) String() string {
	//打印结构体
	return fmt.Sprintf("name=%v age=%v", a.name, a.age)
}

func main() {
	//实现
	a1 := &A1{
		//必须是指针
		name: "Tom",
		age:  20,
	}

	var a A = a1
	fmt.Println(a)
	fmt.Println(a.GetName())
	a.SetName("Jack") //修改结构体的值
	fmt.Println(a.GetName())
	fmt.Println("a=", a)

}
