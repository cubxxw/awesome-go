package main

import (
	"fmt"
	"runtime"
	"time"
)

func a() {
	for i := 1; i < 10; i++ {
		fmt.Println("A:", i)
		//等待一秒
		time.Sleep(time.Second)
	}
}

func b() {
	for i := 1; i < 10; i++ {
		fmt.Println("B:", i)
		//等待一秒
		time.Sleep(time.Second)
	}
}

func main() {
	runtime.GOMAXPROCS(1)
	go a()
	go b()
	time.Sleep(time.Second * 10)
}
