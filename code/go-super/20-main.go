/*
 * @Description:结构体
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 18:49:02
 * @FilePath: \code\go-super\20-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

type Person struct {
	Name  string
	Age   int
	Email string
}

func main() {
	var p1 Person
	p1.Name = "Tom"
	p1.Age = 20
	p1.Email = "3293172751@qq.com"
	fmt.Println("p1=", p1)

	p2 := Person{"Jack", 30, "xiongxinwei@mail.com"}
	fmt.Println("p2=", p2)

	p3 := &Person{Name: "Mary", Age: 40, Email: "cub@nsddd.top"}
	fmt.Println("p3=", p3)

	p4 := new(Person)
	p4.Name = "Mike"
	p4.Age = 50
	p4.Email = "xxw@nsddd.top"
	fmt.Println("p4=", p4)

	fmt.Println("p1.Email =", p1.Email)
	fmt.Println("p2.Email =", p2.Email)
	fmt.Println("p3.Email =", p3.Email)
	fmt.Println("p4.Email =", p4.Email)

	p1.Email = "x@nsddd.top"            //修改 p1 的 Email
	fmt.Println("p1.Email =", p1.Email) //p1.Email = x@nsddd.top

	//结构体的匿名字段
	type Address struct {
		Province string
		City     string
	}
	type User struct {
		Name string
	}
	type Student struct {
		Name string
		Address
		User
	}
	var s1 Student
	s1.Name = "Tom"
	s1.Province = "北京"
	s1.City = "北京"
	s1.User.Name = "Jack"
	fmt.Println("s1=", s1)

}
