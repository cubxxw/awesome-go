/*
 * @Description:Go语言协程统计素数
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 15:30:53
 * @FilePath: \code\go-super\38-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package mian

import (
	"math"
	"time"
)

func primeNum(intChan chan int, primeChan chan int, exitChan chan bool) {
	for num := range intChan {
		flag := true
		for i := 2; i < int(math.Sqrt(float64(num))); i++ {
			if num%i == 0 {
				flag = false
				break
			}
		}
		if flag {
			primeChan <- num
		}

	}
}

func main() {
	start := time.Now()
	// 1.统计2-200000之间的素数的个数

}
