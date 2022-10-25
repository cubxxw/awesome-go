/*
 * @Description:结构体的使用
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 19:04:05
 * @FilePath: \code\go-super\21-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

type PersonList struct {
	Persons []Person
}

func (p Person) String() string {
	// 结构体方法 打印结构体
	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

//修改结构体的值
func (p *Person) SetName(name string) {
	p.Name = name
}

// func (p PersonList) String() string {
// 	retuen nil
// }

func main() {
	person := Person{
		Name: "Tom",
		Age:  20,
	}
	fmt.Println("person=", person)
	persone2 := person
	persone2.Name = "Jack"
	fmt.Println("person=", persone2)

	// persone2 := PersonList{
	// 	Persons: []Person{
	// 		{
	// 			Name: "Tom",
	// 			Age:  20,
	// 		},
	// 		{
	// 			Name: "Jack",
	// 			Age:  30,
	// 		},
	// 	},
	// }
	fmt.Println("person=", persone2)

	//修改结构体的值
	person.SetName("Mike")
	fmt.Println("修改之后person=", person)

	// 调用结构体方法
	fmt.Println(person.String())

	//
}
