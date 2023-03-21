package main

import (
	"fmt"
	"os"
)

func main() {
	var num int = 0

	fmt.Printf("Enter number:")
	fmt.Scanf("%d", &num)

	if num > 0 {
		fmt.Printf("n > 0  Program terminated\n")
		os.Exit(0)
	} else if num < 0 {
		fmt.Printf("n < 0  Program terminated\n")
	}
	fmt.Printf("Program finished normally\n")
}
