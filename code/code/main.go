/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-07 19:59:37
 * @LastEditTime: 2022-10-07 20:57:48
 * @FilePath: \code\main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"container/list"
	"fmt"
	"reflect"
)

func main() {

	//声明list，调用list的方法
	optList()

}

func optList() {
	//第一种声明list方法
	var list1 list.List

	//输出list1
	printList("第一种声明list方法", &list1)

	//填充数据
	list1.PushBack(1)
	list1.PushBack(2)
	list1.PushBack("a")
	list1.PushBack("b")
	list1.PushBack(3.14)
	list1.PushBack(3.1415926)
	list1.PushBack(true)
	list1.PushBack("区块链天才back")
	list1.PushFront("区块链天才front")
	printList("填充数据", &list1)

	//🚀 遍历结果如下：
	iterateList(&list1)
}

// 打印list方法
func printList(info string, list1 *list.List) {
	//info是打印的信息，list1是要打印的list
	fmt.Println(info + " ----- ") //打印信息

	//数据类型是interface{}，所以可以存储任何类型的数据
	//打印数据类型
	fmt.Println("list1的数据类型是：", reflect.TypeOf(list1))
	fmt.Println("list1的长度是：", list1.Len())

	//遍历list
	fmt.Println("list1的第一个元素是：", list1.Front().Value)
}

// 遍历
func iterateList(list1 *list.List) {
	for e := list1.Front(); e != nil; e = e.Next() {
		fmt.Println(e.Value)
	}
	fmt.Println("遍历结束")
}
