/*
 * @Description: bufio按行读取文件
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 17:55:39
 * @FilePath: \code\go-super\53-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	//bufio按行读取文件  如果文件太大，会导致内存溢出，所以不推荐使用
	byteString, err := ioutil.ReadFile("./51-main.go") //返回的是一个字节切片
	if err != nil {
		fmt.Println("文件读取失败", err)
		return
	}
	fmt.Println(string(byteString))
}
