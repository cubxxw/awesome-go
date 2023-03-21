package main

import (
	"fmt"

	"github.com/golang-jwt/jwt/v4/test"
)

func main() {
	fmt.Println("Hello, playground")
	fmt.Println(`
		1. 什么是协程？
		2. 协程的特点？
		3. 协程的使用？
		4. 协程的调度？
		5. 协程的调度器？ `)

	//测试
	test.LoadECPrivateKeyFromDisk("")
}
