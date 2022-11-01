package main

import (
	"fmt"
	"net"
	"time"
)

/*
go

	Here's what the selected code is doing:
	1.Import the socket module.
	2. Create a socket object.
	3. Get the local hostname.
	4. Print the hostname to the console.
	5. Set the default port number.
	6. Bind the socket to the port.
	7. Listen for incoming connections.
	8. Accept an incoming connection.

	客户端

	:param conn: 连接服务器
	:param err: 错误
	:return:
*/
func main() {
	// 客户端
	conn, err := net.Dial("tcp", ":8080")
	if err != nil {
		fmt.Println("连接服务器失败", err)
		return
	}
	fmt.Println("连接服务器成功", conn)

	for {
		// 输入数据切片类型
		fmt.Println("请发送数据 -> 客户端")
		var input []byte
		fmt.Scanln(&input)

		// 给服务器发送数据
		cnt, err := conn.Write([]byte(input))
		if err != nil {
			fmt.Println("给服务器发送数据失败", err)
			return
		}

		fmt.Println("给服务器发送数据成功", cnt)

		// 读取服务器发送的数据
		buf := make([]byte, 1024)
		n, err := conn.Read(buf)
		if err != nil {
			fmt.Println("读取服务器发送的数据失败", err)
			return
		}

		fmt.Println("读取服务器发送的数据成功", string(buf[:n]))

		time.Sleep(time.Second * 2)
	}
	// 关闭连接
	defer conn.Close()
}
