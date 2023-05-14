/*
 * @Description:struct-super
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 19:20:01
 * @FilePath: \code\go-super\22-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

type Person struct {
	Name      string
	Age       int
	Hobby     []string
	mapping_1 map[string]string
	slices_1  []string
}

func main() {
	person := Person{
		Name:      "Tom",
		Age:       20,
		Hobby:     []string{"basketball", "football"},
		mapping_1: map[string]string{"a": "b", "c": "d"},
		slices_1:  []string{"a", "b", "c"},
	}
	fmt.Println("person=", person)
	fmt.Println("person=", person.Hobby)
	fmt.Println("person=", person.mapping_1)
	fmt.Println("person=", person.slices_1)

	persone2 := Person{
		Name:      "Jack",
		Age:       30,
		Hobby:     []string{"basketball2", "football2"},
		mapping_1: map[string]string{"a2": "b2", "c2": "d2"},
		slices_1:  make([]string, 30, 30),
	}
	fmt.Println("person=", persone2)
}
