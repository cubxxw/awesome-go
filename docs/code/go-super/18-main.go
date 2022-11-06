package main

import "fmt"

func text(a int) int {
	a = 20
	return a
}

func main() {
	var a *int
	a = new(int)
	*a = 10
	fmt.Println("a=", a)
	fmt.Println("*a=", *a)
	fmt.Println("a=", &a)

	text(*a)
	fmt.Println("a=", a)
	fmt.Println("a=", *a)
	fmt.Println("a=", &a)

	b := &a
	fmt.Println("b=", b)
	fmt.Println("*b=", *b)
	fmt.Println("&b=", &b)

}
