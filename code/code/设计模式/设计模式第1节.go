/*
 * @Description: 单一职责原则
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-26 20:08:39
 * @LastEditTime: 2022-10-26 20:15:04
 * @FilePath: \code\设计模式\设计模式第1节.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

type Person struct {
	Name string
}

func (p *Person) Eat() {
}

func (p *Person) Sleep() {
}

func (p *Person) Work() {
}

func (p *Person) Drive() {
}

// Path: 设计模式\设计模式第1节.go
//上面的代码可以设计成单一职责原则

type User struct {
	Name string
}

type Password struct {
	Password string
}

func (p *User) GetInfo() {
	fmt.Println("获取用户信息")
}

func (p *Password) GetInfo() {
	fmt.Println("获取密码信息")
}

func main() {
	p := &Person{}
	p.Eat()
	p.Sleep()
	p.Work()
	p.Drive()

	//单一职责原则
	u := &User{}
	u.GetInfo()
	pwd := &Password{}
	pwd.GetInfo()
}
