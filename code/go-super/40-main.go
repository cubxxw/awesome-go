/*
 * @Description:go只读只写管道
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:16:21
 * @FilePath: \code\go-super\40-main.go
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

// 只读管道
func readChan(ch <-chan int) {
	for {
		num := <-ch
		if num == 0 {
			break
		}
		fmt.Println(num)
		time.Sleep(1000 * time.Millisecond)
	}
	wg.Done()
}

// 只写管道
func writeChan(ch chan<- int) {
	for i := 1; i <= 100; i++ {
		ch <- i
		time.Sleep(time.Millisecond * 1000) // 100毫秒就是0.1秒
	}
	close(ch)
	wg.Done()
}

func main() {
	var ch = make(chan int, 1000)
	wg.Add(1)
	go writeChan(ch) // 只写
	wg.Add(1)
	go readChan(ch) // 只读
	wg.Wait()
}
