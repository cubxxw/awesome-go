package main

import (
	"fmt"
	"net"
	"strings"
)

func main() {
	// 创建监听
	ip := "127.0.0.1"
	port := 8080
	address := fmt.Sprintf("%s:%d", ip, port) //Sprintf格式化并返回一个字符串而不打印它

	listener, err := net.Listen("tcp", address)

	if err != nil {
		fmt.Println("监听失败", err)
		return
	}
	defer listener.Close()
	fmt.Println("监听成功", address)

	//listerner表示监听器，用于接收客户端的连接请求
	conn, err := listener.Accept() // 表示接受客户端的连接请求
	if err != nil {
		fmt.Println("接受客户端连接失败", err)
		return
	}
	fmt.Println("接受客户端连接成功", conn)

	// 读取客户端发送的数据
	for {
		buf := make([]byte, 1024) // 创建一个切片，用于存储客户端发送的数据
		n, err := conn.Read(buf)  // 读取客户端发送的数据
		if err != nil {
			fmt.Println("读取客户端发送的数据失败", err)
			return
		}
		fmt.Println("读取客户端发送的数据成功", string(buf[:n]))

		// 数据转化为大写
		upper := strings.ToUpper(string(buf[:n]))
		fmt.Println("转化为大写成功", upper)

		// 将数据转化为小写
		lower := strings.ToLower(string(buf[:n]))
		fmt.Println("转化为小写成功", lower)

		// 将数据写回给客户端
		conn.Write([]byte(upper))
		conn.Write([]byte(lower))

		// 给客户端发送数据
		conn.Write([]byte("hello, client"))
	}
	// 关闭连接
	conn.Close()
}
