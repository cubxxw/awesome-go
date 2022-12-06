// Slice principle
package main

import "fmt"

func main() {
	s := []int{1, 2, 3, 4, 5, 6}
	fmt.Println("s is array:", s)
	s1 := s[0:3]
	fmt.Println("s1 is slice:", s1)
	s2 := s[3:6]
	fmt.Println("s2 is slice:", s2)

	//S1 and s2 share the underlying array
	_ = append(s1, 7)
	fmt.Println("s1 checkout is slice:", s1)
	fmt.Println("s2 checkout is slice:", s2)

	//Print s again
	fmt.Println("s is array:", s)

	//Cut again
	s3 := s1[0:2]
	fmt.Println("s3 is slice:", s3)

	//Add 8 to s3
	s3 = append(s3, 8)
	fmt.Println("s3 checkout is slice:", s3)

	//Print s1
	fmt.Println("s1 checkout is slice:", s1)

	//Print s2
	fmt.Println("s2 checkout is slice:", s2)

	//Print s again
	fmt.Println("s is array:", s)
}
