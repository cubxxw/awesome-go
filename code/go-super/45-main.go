/*
 * @Description:资源竞争死锁
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 18:26:07
 * @FilePath: \code\go-super\45-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"sync"
	"time"
)

var mutex sync.Mutex // 定义一个互斥锁变量
var wg sync.WaitGroup
var count int

func test() {
	mutex.Lock() // 加锁
	count++
	fmt.Println("the count is ", count)
	time.Sleep(100 * time.Millisecond)
	mutex.Unlock() // 解锁
	wg.Done()
}

func test2() {
	mutex.Lock() // 加锁
	count++
	fmt.Println("the count is ", count)
	time.Sleep(100 * time.Millisecond)
	mutex.Unlock() // 解锁
	wg.Done()
}

func main() {
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go test()
		go test2()
	}
	wg.Wait()
}

/*
互斥锁是一种常用的同步机制，用于在多个线程中对共享资源进行访问控制。互斥锁的原理是：当一个线程访问共享资源时，其他线程不能访问该共享资源，直到该线程访问完毕。互斥锁可以保证共享资源在同一时刻只被一个线程访问，从而避免了资源的竞争和不一致性。
互斥锁的使用方法如下：
1. 定义一个互斥锁变量
2. 在需要加锁的地方加锁
3. 在需要解锁的地方解锁

var mutex sync.Mutex // 定义一个互斥锁变量
mutex.Lock() // 加锁
这里面进行操作
mutex.Unlock() // 解锁
*/
