/*
An elaborate, high quality docstring for the above function:

Args:
	param1: the first parameter.
	param2: the second parameter.

Returns:
	the return value.

Raises:
	KeyError: raises an exception.
*/
// http-server
package main

import (
	"fmt"
	"net/http"
)

func main() {
	//注册路由
	//xxxx/user ===> func1
	//xxxx/name ===> func2
	//xxxx/id ===> func3
	http.HandleFunc("/user", func(writer http.ResponseWriter, request *http.Request) {
		/*
			+ writer: 用于写入响应数据,通过writer.Write()方法写入响应数据返回给客户端
			+ request: 用于获取请求数据,通过request.Method获取请求方式,通过request.URL获取请求路径
		*/
		fmt.Fprintln(writer, "user") //表示向客户端返回数据user
	})

	http.HandleFunc("/name", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writer, "name")
	})

	http.HandleFunc("/id", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writer, "id")
	})

	//启动服务
	fmt.Println("服务启动成功...")
	if err := http.ListenAndServe("127.0.0.1:8080", nil); err != nil {
		defer func() {
			fmt.Println("http server start failed, err:", err)
		}()
		panic(err)
	}

}
