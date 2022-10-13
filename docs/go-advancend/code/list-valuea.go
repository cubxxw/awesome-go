/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-07 21:11:14
 * @LastEditTime: 2022-10-07 21:28:32
 * @FilePath: \code\list-valuea.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"container/list"
	"fmt"
)

func main() {
	fmt.Println("hello world")
	copyList()
}

func copyList() {
	list1 := list.New()
	printList2("刚声明的list1", list1)

	//赋值
	list1.PushBack(1)
	list1.PushBack(2)
	list1.PushBack(3)
	list1.PushBack(4)
	list1.PushBack("a")
	list1.PushBack("bcd")

	printList2("赋值后的list1", list1)

	//顺序遍历
	traverseList2("顺序遍历", list1)
	//反向遍历
	traverseListReverse2("反向遍历", list1)

	fmt.Println("下面是list2,拷贝list1")

	//将list1复制到list2
	list2 := list1
	list2.PushBack("list2")
	printList2("复制后的list2", list2)

	//顺序遍历list2
	traverseList2("遍历list2", list2)

}

func printList2(info string, list1 *list.List) {
	fmt.Println("list1 len:", list1.Len())
	fmt.Println("list1 front:", list1.Front())
}

// 顺序遍历
func traverseList2(info string, list1 *list.List) {
	for e := list1.Front(); e != nil; e = e.Next() {
		fmt.Println(e.Value)
	}
}

// 反向遍历
func traverseListReverse2(info string, list1 *list.List) {
	for e := list1.Back(); e != nil; e = e.Prev() {
		fmt.Println(e.Value)
	}
}
