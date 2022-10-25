/*
 * @Description:channel管道
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 15:10:34
 * @FilePath: \code\go-super\37-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
)

func main() {
	//创建一个管道
	ch := make(chan int, 10) //管道的容量是10

	//给管l道中写入数据
	ch <- 10
	ch <- 20
	ch <- 30
	ch <- 40

	fmt.Println("len(ch) = ", len(ch))
	fmt.Println("cap(ch) = ", cap(ch))
	fmt.Println("ch = ", ch)

	//从管道中读取数据
	num := <-ch
	fmt.Println("num = ", num)   //10
	fmt.Println("再读取一个数据", <-ch) //20
	fmt.Println("再读取一个数据", <-ch) //30
	fmt.Println("再读取一个数据", <-ch) //40
	//fmt.Println("再读取一个数据", <-ch) //error: all goroutines are asleep - deadlock!

	//继续批量存储数据
	ch <- 50
	ch <- 150
	ch <- 250
	fmt.Println("len(ch) = ", len(ch))
	fmt.Println("cap(ch) = ", cap(ch))
	fmt.Println("ch = ", ch)

	//关闭unbuffered channel
	close(ch)
	for {
		val, ok := <-ch
		if !ok {
			fmt.Println("读取完毕")
			break
		} else {
			fmt.Println("var = ", val) //不断读取管道中的数据
		}
	}
}
