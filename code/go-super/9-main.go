/*
 * @Description:工厂模式
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 12:21:48
 * @FilePath: \code\go-super\9-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func main() {
	//工厂模式
	fmt.Println("工厂模式")
	var f3 = adder2() //注意这里表示执行方法~
	fmt.Println(f3()) //11
	fmt.Println(f3()) //12

}
