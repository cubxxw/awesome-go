/*
 * @Description:空接口转化为其他类型
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 10:52:34
 * @FilePath: \code\go-super\32-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func main() {
	var interface2 interface{}
	fmt.Printf("interface{} type is %T, interface{} value is %v\n", interface2, interface2)

	var a interface{} = "nsddd.top"
	fmt.Printf("a type is %T, a value is %v\n", a, a)
	b := a.(string) //类型断言
	fmt.Printf("b type is %T, b value is %v\n", b, b)

	var c interface{}
	c = 100
	fmt.Printf("c type is %T, c value is %v\n", c, c)
}
