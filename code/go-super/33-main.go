/*
 * @Description:goruntine
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 21:31:22
 * @FilePath: \code\go-super\33-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	//交叉打印两个数组
	//1.定义两个数组
	var a = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}
	var b = []interface{}{6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16}
	fmt.Printf("b=%T, b=%v\n", b, b)

	var e interface{} = "hello"
	fmt.Printf("e=%T, e=%v\n", e, e)

	var c = []interface{}{"a", "b", "c", 12, 32, "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}
	fmt.Printf("c is type %T,c=%v\n", c, c)

	//2.定义一个函数，实现两个数组的交叉打印
	wg.Add(1) //等待组计数器+1
	go func() {
		for i := 0; i < len(a); i++ {
			fmt.Println("a=", a[i])
			time.Sleep(1 * time.Second)
		}
		wg.Done() //等待组计数器-1
	}()

	wg.Add(1) //等待组计数器+1
	go func() {
		for i := 0; i < len(b); i++ {
			fmt.Println("b=", b[i])
			time.Sleep(1 * time.Second)
		}
		wg.Done() //等待组计数器-1
	}()

	wg.Add(1) //等待组计数器+1
	go func() {
		for i := 0; i < len(c); i++ {
			fmt.Println("c=", c[i])
			time.Sleep(1 * time.Second)
		}
		wg.Done() //等待组计数器-1
	}()

	wg.Wait()
	fmt.Println("主线程退出")
}
