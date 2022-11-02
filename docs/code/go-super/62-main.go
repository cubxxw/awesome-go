package main

import "fmt"

func main() {
	fmt.Println(Test0())
}

func Test0() (ret string) {
	defer func() {
		err := recover()
		if err != nil {
			fmt.Println("程序异常退出", err)
			ret = fmt.Sprint(err)
		}
	}()
	return "normal"
	panic("this is a panic")
}
