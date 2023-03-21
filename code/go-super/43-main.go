/*
 * @Description:map
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 21:31:12
 * @FilePath: \code\go-super\43-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"sort"
)

func main() {
	//定义一个map
	var myMap map[int]string
	//初始化map
	myMap = make(map[int]string, 10)
	//赋值
	myMap[1] = "北京"
	myMap[2] = "上海"
	myMap[3] = "广州"
	myMap[4] = "深圳"
	myMap[5] = "杭州"
	myMap[6] = "成都"
	myMap[7] = "重庆"
	myMap[8] = "武汉"
	myMap[9] = "西安"
	myMap[10] = "南京"
	myMap[11] = "苏州"
	myMap[12] = "天津"

	//遍历map
	for k, v := range myMap {
		fmt.Println(k, v)
	}

	//有序遍历map
	//定义一个切片，用来存放map的key
	var keys []int
	//遍历map，将key存放到切片中
	for k := range myMap {
		keys = append(keys, k)
	}
	//对切片进行排序
	sort.Ints(keys)
	//遍历切片，按照key的顺序遍历map
	for _, k := range keys {
		fmt.Println(k, myMap[k])
	}


	//遍历map的key
	for k := range myMap {
}
