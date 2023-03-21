/*
 * @Description:反射
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 15:59:26
 * @FilePath: \code\go-super\47-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"reflect"
)

type User struct {
	Id   int
	Name string
	Age  int
}

type myInt int // 自定义类型

func (u *User) Hello(x interface{}) {
	v := reflect.TypeOf(x)                                                               //反射获取类型
	fmt.Println("type:", v)                                                              //type: int
	fmt.Println("type is v.Name:", v.Name())                                             // 获取类型名称
	fmt.Println("type is v.Kind:", v.Kind())                                             // 获取类型种类
	fmt.Println("type is v.NumField:", v.NumField())                                     // 获取类型字段数量
	fmt.Println("type is v.NumMethod:", v.NumMethod())                                   // 获取类型方法数量
	fmt.Println("type is v.Field(0):", v.Field(0))                                       // 获取类型字段
	fmt.Println("type is v.Field(0).Name:", v.Field(0).Name)                             // 获取类型字段名称
	fmt.Println("type is v.Field(0).Type:", v.Field(0).Type)                             // 获取类型字段类型
	fmt.Println("type is v.Field(0).Tag:", v.Field(0).Tag)                               // 获取类型字段标签
	fmt.Println("type is v.FieldByIndex([]int{0}):", v.FieldByIndex([]int{0}))           // 获取类型字段
	fmt.Println("type is v.FieldByIndex([]int{0}).Name:", v.FieldByIndex([]int{0}).Name) // 获取类型字段名称
	fmt.Println("type is v.FieldByIndex([]int{0}).Type:", v.FieldByIndex([]int{0}).Type) // 获取类型字段类型
	fmt.Println("type is v.FieldByIndex([]int{0}).Tag:", v.FieldByIndex([]int{0}).Tag)   // 获取类型字段标签
	fmt.Println("type is v.Method(0):", v.Method(0))                                     // 获取类型方法
	fmt.Println("type is v.Method(0).Name:", v.Method(0).Name)                           // 获取类型方法名称

}

func main() {
	u := &User{1, "OK", 12}
	u.Hello("sadf")
}
