package main

import "fmt"

type Student struct {
	Name string
	Age  int
	id   int
}

func main() {
	//定义结构体
	s := Student{
		Name: "张三",
		Age:  18,
		id:   1,
	}

	//打印结构体
	fmt.Println(s)
	//打印结构体的字段
	fmt.Println(s.Name)
	fmt.Println(s.Age)
	fmt.Println(s.id)
	//定义结构体
	s1 := Student{
		Name: "李四",
		Age:  19,
		id:   2,
	}
	//打印结构体
	fmt.Println(s1)
	//打印结构体的字段
	fmt.Println(s1.Name)
	fmt.Println(s1.Age)
	fmt.Println(s1.id)
	//定义结构体
	s2 := Student{
		Name: "王五",
		Age:  20,
		id:   3,
	}
	//打印结构体
	fmt.Println(s2)
	//打印结构体的字段
	fmt.Println(s2.Name)
	fmt.Println(s2.Age)
	fmt.Println(s2.id)
}
