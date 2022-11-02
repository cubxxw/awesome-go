package main

import (
	"fmt"
	"net"
)

var n int //统计监听次数
func main() {
	//创建一个监听器
	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		fmt.Println("监听失败")
		return
	}
	defer listener.Close()
	fmt.Println("监听成功...")
	//循环等待客户端连接
	for {
		//监听次数
		fmt.Println("监听次数：", n)
		n++
		fmt.Println("主Go程监听中...")
		//监听客户端连接
		conn, err := listener.Accept() //Accept()会阻塞，直到有客户端连接
		if err != nil {
			fmt.Println("接收客户端连接失败")
			return
		}
		defer conn.Close()

		fmt.Println("接收客户端连接成功")

		//启动协程，处理客户端请求
		go process(conn)
	}
}

// Path: main.go
func process(conn net.Conn) {
	//关闭连接
	defer conn.Close()

	fmt.Println("启动业务~")
	//读取客户端发送的数据
	buf := make([]byte, 1024)
	cnt, err := conn.Read(buf) //Read()会阻塞，直到有数据发送过来
	if err != nil {
		fmt.Println("读取客户端数据失败")
		return
	}
	fmt.Println("服务器读取客户端数据成功")
	fmt.Println(string(buf[:cnt]))

}
