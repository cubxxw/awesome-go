/*
 * @Description:defer
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 16:13:14
 * @FilePath: \code\go-super\11-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import "fmt"

func f1() int {
	defer func() {
		fmt.Println("f1 defer")
	}()

	fmt.Println("f1")
	return 1
}

func f2() (r int) {
	t := 5
	defer func() {
		t = t + 5
	}()
	return t
}

func f3() (r int) {
	defer func(r int) {
		r = r + 5
	}(r)
	return 1
}

func f4() (r int) {
	t := 5
	defer func() {
		t = t + 5
	}()
	return t
}

func main() {
	fmt.Println("Hello World!")
	fmt.Println(f1())       //f1 f1 defer 1
	fmt.Println(f2())       //5
	fmt.Println(f3())       //1
	fmt.Println(f4())       //5
	fmt.Println("main end") //main end

}
