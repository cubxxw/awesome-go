package main

import (
	"fmt"
	"net/http"
)

func main() {
	//http
	client := http.Client{} //client{}是一个结构体，用于发送http请求

	// 发送get请求
	resp, err := client.Get("http://www.baidu.com")
	if err != nil {
		defer func() {
			if err := recover(); err != nil {
				println(err)
			}
		}()
		panic(err) //panic()函数用于抛出异常
	}
	defer resp.Body.Close() // 关闭请求体

	// 请求头
	fmt.Println("请求头", resp.Header)

	ct := resp.Header.Get("Content-Type")
	data := resp.Header.Get("Date")
	server := resp.Header.Get("Server")

	fmt.Printf("Content-Type: %s\n  Date: %s\n  Server: %s\n", ct, data, server)

	// 获取状态码
	status := resp.StatusCode
	fmt.Println("状态码", status)

	// 获取响应体
	body := resp.Body
	fmt.Println("响应体", body)

	// 获取Url
	url := resp.Request.URL
	fmt.Println("url", url)

	// 拿到请求体
	buf := make([]byte, 1024*4)
	n, err := resp.Body.Read(buf)
	if err != nil {
		panic(err)
	}
	println(string(buf[:n]))
}
