package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("main() 开始的部分")
	go func() {
		fmt.Println("go func() 开始的部分")
		func() {
			fmt.Println("func() 开始的部分")
			go func() {
				fmt.Println("最里面go func() 开始的部分")
				//defer异常捕获
				defer func() {
					if err := recover(); err != nil {
						fmt.Println("最里面go func() defer异常捕获", err)
					}
				}()
				panic("最里面go func() 抛出异常退出")
				fmt.Println("最里面go func() 结束的部分")
			}()
			//等待2s
			time.Sleep(2 * time.Second)
			fmt.Println("func() 结束的部分")
		}()
		fmt.Println("go func() 结束的部分")
	}()
	//等待5s
	time.Sleep(time.Second * 5)
	fmt.Println("main() 结束的部分")
}
