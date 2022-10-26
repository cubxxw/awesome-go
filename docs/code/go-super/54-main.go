/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 18:09:29
 * @FilePath: \code\go-super\54-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

/*
bufio读取文件
1. 只读方式打开文件 file, err := os.Open("test.txt")
2. 创建一个 *Reader 是带缓冲的 reader := bufio.NewReader(file)
3. 循环的调用 reader.ReadString('\n') 读取文件的内容
4. 关闭文件 defer file.Close()
*/

/*
复制文件方法：
1. 打开源文件 srcFile, err := os.Open("test.txt")
2. 创建目标文件 dstFile, err := os.Create("test_copy.txt")
3. 创建一个 *Reader 是带缓冲的 reader := bufio.NewReader(srcFile)
4. 创建一个 *Writer 是带缓冲的 writer := bufio.NewWriter(dstFile)
5. 循环的调用 reader.ReadString('\n') 读取文件的内容
6. 调用 writer.WriteString(str) 将读取到的内容写入到目标文件中
7. 调用 writer.Flush() 将缓冲区的内容写入到目标文件中
8. 关闭文件 defer srcFile.Close()
*/

func main() {
	//复制文件
	srcFile, err := os.Open("test.txt")
	if err != nil {
		fmt.Println("文件打开失败", err)
		return
	}
	dstFile, err := os.Create("test_copy.txt")
	if err != nil {
		fmt.Println("文件创建失败", err)
		return
	}
	reader := bufio.NewReader(srcFile)
	writer := bufio.NewWriter(dstFile)
	for {
		str, err := reader.ReadString(srcFile) //默认读取到换行符
		if err == io.EOF {
			break
		}
		writer.WriteString(str)
	}
	writer.Flush()
	defer srcFile.Close()
	defer dstFile.Close()
}
