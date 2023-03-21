/*
 * @Description: 自定义错误
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 16:45:55
 * @FilePath: \code\go-super\14-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"errors"
	"fmt"
)

func readConf(name string) (err error) {
	if name == "config.ini" {
		//"读取"
		return nil
	} else {
		//返回一个自定义错误
		return errors.New("读取文件错误")
	}
	fmt.Println(name)
	return
}

func test02() {
	err := readConf("config.ini")
	if err != nil {
		//如果发生错误，就输出错误并且终止程序，此时使用panic
		panic(err)
	}
	//不发生错误
	fmt.Println("test02()继续执行...")
}
func mian() {
	//测试
	test02()
}
