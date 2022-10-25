/*
 * @Description:接口嵌套
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 10:32:49
 * @FilePath: \code\go-super\31-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

type Ainterface interface {
	// A接口
	GetName() string
}

type Binterface interface {
	// B接口
	SetName(string)
}

type Animaler interface {
	// Animaler接口
	Ainterface
	Binterface
}

type Dog struct {
	// Dog
	name string
}

func (d *Dog) GetName() string {
	// 实现A接口
	return d.name
}

func (d *Dog) SetName(name string) {
	// 实现B接口
	d.name = name
}

func main() {
	dog := &Dog{
		name: "Tom",
	}
	var animaler Animaler = dog //animailer嵌套了Ainterface和Binterface
	fmt.Println(animaler.GetName())
	animaler.SetName("dog1")
	fmt.Println(animaler.GetName())
}
