/*
 * @Description:互斥锁实现读写锁
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 21:09:32
 * @FilePath: \code\go-super\46-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup
var mutex sync.Mutex

func main() {
	//互斥锁实现读写锁
	/*
		===> 读写锁：可以让多个goroutine同时读取数据，但是只能有一个goroutine写入数据
	*/
	var x int64
	var mutex sync.Mutex
	wg.Add(2)
	for i := 0; i < 10; i++ {
		go func() {
			defer wg.Done()
			mutex.Lock()
			fmt.Println("写入数据")
			x = x + 1
			mutex.Unlock()
		}()
	}

	for i := 0; i < 10; i++ {
		go func() {
			defer wg.Done()
			mutex.RLock()
			fmt.Println("读取数据")
			mutex.RUnlock()
		}()
	}
	wg.Wait()
	println(x)
}
