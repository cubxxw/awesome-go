/*
 * @Description:select 多路复用
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:38:39
 * @FilePath: \code\go-super\41-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
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
	//int和int64的区别: int是根据操作系统的位数来决定的，32位系统就是int32，64位系统就是int64
	ch1 := make(chan int, 100)
	ch2 := make(chan int, 100)

	//循环输入管道
	for i := 0; i < 100; i++ {
		ch1 <- i
		ch2 <- i
	}

	wg.Add(1)
	go func() {
		for {
			select {
			case v := <-ch1:
				fmt.Println("读取管道1", v)
			case v := <-ch2:
				fmt.Println("读取管道2", v)
			}
		}
		wg.Done()
	}()
	time.Sleep(time.Second * 3)
	wg.Wait()

}
