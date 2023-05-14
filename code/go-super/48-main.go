/*
 * @Description:反射获取任意类型的值
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 16:26:52
 * @FilePath: \code\go-super\48-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"reflect"
)

type myInt int

type User struct {
	Id   int
	Name string
	Age  int
}

func (u *User) Hello(x interface{}) {
	v := reflect.ValueOf(x) //反射获取值
	fmt.Println("x = ", x)
	fmt.Printf("类型名称:%v, 类型种类:%v, 类型值:%v", v, v.Type(), v.Kind())
	fmt.Println()
	//类型种类指的是值的类型，比如int，string，bool，struct，array，slice，map，chan，func，interface，ptr，unsafe.Pointer
}

func main() {
	u := &User{1, "OK", 12}
	u.Hello(u)

	u.Hello(123)
	u.Hello(12.123)

	var i = [3]int{1, 2, 3} // i是数组
	u.Hello(i)

	var y = []int{1, 2, 3} // y是切片
	u.Hello(y)

	var m = map[string]int{"a": 1, "b": 2} // m是map
	u.Hello(m)

}
