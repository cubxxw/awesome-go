package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	//Go语言几种退出程序的方式
	//1. os.Exit() 退出程序
	//2. panic() 抛出异常
	//3. return 退出函数
	//4. defer + recover() 捕获异常
	//5. runtime.Goexit() 退出当前协程
	//6. os.Kill 杀死进程
	//7. os.Interrupt 中断进程
	//8. block 跳出循环
	//9. continue  跳出当前循环 继续下一次循环

	fmt.Println("main() 开始的部分")
	go func() {
		fmt.Println("go func() 开始的部分")
		func() {
			fmt.Println("func() 开始的部分")
			go func() {
				fmt.Println("最里面go func() 开始的部分")
				//中断进程
				os.Exit(0)

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
