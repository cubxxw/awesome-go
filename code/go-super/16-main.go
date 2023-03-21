/*
 * @Description: 封装排序
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 17:44:59
 * @FilePath: \code\go-super\16-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package mian

import "fmt"

func sortIndex(arr []int) []int {
	var index = make([]int, len(arr))
	for i := 0; i < len(arr); i++ {
		index[i] = i
	}
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[index[i]] > arr[index[j]] {
				index[i], index[j] = index[j], index[i]
			}
		}
	}
	return index
}

//编写一个函数封装sort
func sortInAsc(arr []int) []int {

	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[i] > arr[j] {
				arr[i], arr[j] = arr[j], arr[i]
			}
		}
	}
}

func main() {
	//调用方法
	var arr = []int{1, 3, 2, 5, 4}
	var index = sortIndex(arr)
	for i := 0; i < len(index); i++ {
		fmt.Println(arr[index[i]])
	}

}
