package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func text(n int) {
	//统计素数
	for num := (n-1)*30000000 + 1; num <= n*30000000; num++ {
		flag := true
		for i := 2; i < num; i++ {
			if num%i == 0 {
				flag = false
				break
			}
		}
		if flag {
			fmt.Printf("%d是素数", num)
		}
	}
	wg.Done()
}

func main() {
	// 统计代码执行时间
	start := time.Now().Unix()
	for i := 1; i <= 4; i++ {
		wg.Add(1)
		go text(i)
	}
	wg.Wait()
	// 代码执行
	end := time.Now().Unix()
	fmt.Println("程序执行时间：", end-start) // 程序执行时间： 1.0000001s
}
