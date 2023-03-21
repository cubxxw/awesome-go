// Slice principle
package main

import "fmt"

func main() {
	s := []int{1, 2, 3, 4, 5, 6}
	ss := [5]int{1, 2, 3, 4, 5}

	// 打印 s 的类型
	fmt.Printf("s is %T \r ", s)

	// 打印 ss 的类型
	fmt.Printf("ss is %T \r ", ss)

	fmt.Println("s is array:", s)
	s1 := s[0:3]
	fmt.Println("s1 is slice:", s1)
	s2 := s[3:6]
	fmt.Println("s2 is slice:", s2)

	//S1 and s2 share the underlying array
	s1 = append([]int{}, s1...)
	fmt.Println("s1 checkout is slice:", s1)
	fmt.Println("s2 checkout is slice:", s2)
	fmt.Println("s is array:", s)

	s = append(s, 7, 4, 5, 21, 3, 3)
	fmt.Println("s is array:", s)
}
