/*
 * @Description:文件读取
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 19:21:49
 * @FilePath: \code\go-super\52-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"fmt"
	"io"
	"os"
)

/*
**读取文件的方法一：**
1. 打开文件 fileObj, err := os.Open("文件路径")
2. 读取文件内容 reader := bufio.NewReader(fileObj)
3. 循环读取文件内容 for {
		str, err := reader.ReadString('')
		if err == io.EOF {
			break
		}
		fmt.Print(str)
	}
4. 关闭文件 fileObj.Close()

**读取文件的方法二： bufio包的ReadFile()函数**
1. 读取文件内容 content, err := ioutil.ReadFile("文件路径")
2. 打印文件内容 fmt.Println(string(content))


*/

func main() {
	file, err := os.Open("./51-main.go")
	defer file.Close()
	if err != nil {
		fmt.Println("文件打开失败", err)
		return
	}
	fmt.Println("文件打开成功")

	//创建一个切片 用来存储读取的内容
	buf := make([]byte, 1024*2)
	//循环读取文件内容
	for {
		n, err := file.Read(buf)
		if err == io.EOF { //EOF是文件读取结束的标志，当读取到文件末尾时，会返回EOF
			break
		}
		if err != nil {
			fmt.Println("文件读取失败", err)
			return
		}
		// //如果读取的内容小于1024字节，就结束循环
		// if n < 1024*2 {
		// 	break
		// }
		fmt.Println(string(buf[:n]))

	}

}
