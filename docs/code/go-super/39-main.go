/*
 * @Description:go 管道
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 16:55:49
 * @FilePath: \code\go-super\39-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

func main() {
	ch1 := make(chan string, 3)
	ch1 <- "a" //写入管道
	a := <-ch1 //读取管道
	fmt.Println("读取管道", a)

	ch2 := make(chan<- string, 3) //管道只能写入
	ch2 <- "b"                    //写入管道
	// b := <-ch2                 //读取管道
	// fmt.Println("读取管道", b) //读取管道

	ch3 := make(<-chan string, 3) //管道只能读取
	// ch3 <- "c" //写入管道
	c := <-ch3             //读取管道
	fmt.Println("读取管道", c) //读取管道
}
