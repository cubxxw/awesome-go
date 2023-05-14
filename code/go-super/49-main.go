/*
 * @Description:接口
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 16:36:40
 * @FilePath: \code\go-super\49-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"reflect"
)

func main() {
	var x interface{} = 1
	v := reflect.ValueOf(x) //反射获取值
	fmt.Printf("类型名称:%v, 类型种类:%v, 类型值:%v\n", v, v.Type(), v.Kind())

	var y interface{} = [4]interface{}{1, 2, 3, "sad"}
	v1 := reflect.ValueOf(y) //反射获取值
	fmt.Printf("类型名称:%v, 类型种类:%v, 类型值:%v\n", v1, v1.Type(), v1.Kind())

	//把y转换成切片
	s := y.([]interface{})
	fmt.Println(s)
	fmt.Printf("类型名称:%v, 类型种类:%v, 类型值:%v\n", s, reflect.TypeOf(s), reflect.TypeOf(s).Kind())
	var z []interface{} = y.([]interface{})
	fmt.Println(z)
	fmt.Printf("类型名称:%v, 类型种类:%v, 类型值:%v\n", z, reflect.TypeOf(z), reflect.TypeOf(z).Kind())
}
