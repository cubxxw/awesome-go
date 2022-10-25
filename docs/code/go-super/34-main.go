/*
 * @Description:go
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 11:48:48
 * @FilePath: \code\go-super\34-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

// import包的时候，如果包名是以.开头的，那么就是引入当前包
// import . "fmt
// 给包起别名，引入包的时候，就可以使用别名来调用包中的函数
// import f "fmt"
// 引入包的时候，不直接引入包，而是引入包中的某个函数
// import "fmt"
// f := fmt.Println
// f("hello world")
//直接使用println打印,不需要引入包
// println("hello world")
//直接使用print打印,不需要引入包

import "fmt"

var p = fmt.Println

func main() {
	p("hello world")

}
