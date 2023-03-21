package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func mian() {
	// 统计代码执行时间
	start := time.Now()
	// 代码执行
	wg.Add(1)
	go func() {
		for i := 0; i < 100000000; i++ {
			fmt.Println(i)
		}
		wg.Done()
	}()
	wg.Wait()
	end := time.Now()
	fmt.Println("程序执行时间：", end.Sub(start)) // 程序执行时间： 1.0000001s
}
