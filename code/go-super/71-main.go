package main

import "fmt"

type MySlice[T int | float64 | string] []T

func (s MySlice[T]) Sum() T {
	var sum T
	for _, v := range s {
		sum += v
	}
	return sum
}

//泛型（genericity）函数
func Add[T int | float64 | string](a, b T) T {
	return a + b
}

func main() {
	s := MySlice[int]{1, 2, 3}
	fmt.Println(s.Sum())

	v := MySlice[float64]{1.1, 2.2, 3.3}
	fmt.Println(v.Sum())

	u := MySlice[string]{"hello", "world"}
	fmt.Println(u.Sum())

	fmt.Println(Add(1, 2))
	fmt.Println(Add(1.1, 2.2))
	fmt.Println(Add("hello", "world"))
}
