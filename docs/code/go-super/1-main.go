package main

import "fmt"

var x float64 = 10 //这里的x是全局变量
var y = 13

func main() {
	fmt.Println("hello world!")
	fmt.Println("this is a test!")
	if x := 1; x > 0 {
		fmt.Println("x>0")
	}
	fmt.Println(x)

	//打印x的类型
	fmt.Printf("x type is %T\n", x)

	//打印y的类型
	fmt.Printf("y type is %T\n", y)

	//打印y的十六进制、八进制、二进制
	fmt.Printf("y十六进制：%x\n", y)
	fmt.Printf("y八进制：%o\n", y)
	fmt.Printf("y二进制：%b\n", y)

	//Fprintf和Sprintf区别：
	//Fprintf是将格式化后的字符串输出到指定的io.writer接口类型的变量w中，返回写入的字节数和遇到的任何错误。
	//Sprintf是将格式化后的字符串输出到指定的字符串变量str中，返回写入的字节数和遇到的任何错误。
	//Fprintf和Sprintf的区别在于，Fprintf是将格式化后的字符串输出到指定的io.writer接口类型的变量w中，而Sprintf是将格式化后的字符串输出到指定的字符串变量str中。
	//Fprintf和printf的区别在于，Fprintf是将格式化后的字符串输出到指定的io.writer接口类型的变量w中，而printf是将格式化后的字符串输出到标准输出中。
}
