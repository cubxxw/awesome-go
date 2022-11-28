// Factory mode
package main

import "fmt"

//Define a fruit structure
type Fruit struct {
	//................................................................

}

//Define a method of obtaining fruit
func (f *Fruit) GetFruit() string {
	return "fruit"
}

func (f *Fruit) String(name string) string {
	switch name {
	case "apple":
		fmt.Println("我是苹果")
		return "apple"
	case "orange":
		fmt.Println("我是橘子")
		return "orange"
	default:
		fmt.Println("我是水果")
		return "fruit"
	}
}

//Define a fruit method (create a fruit)
func NewFruit(name string) *Fruit {
	fruit := &Fruit{}
	switch name {
	case "apple":
		//Create an apple
	case "orange":
		//Create an orange
	case "banana":
		//Create a banana
	case "pear":
		//Create a pear
	default:
		fmt.Println("没有这个水果")
	}
	return fruit
}

//Business logic
func main() {
	//Create a fruit
	fruit := NewFruit("apple")
	//Get fruit
	fruit.GetFruit()
	//Get the name of the fruit
	fruit.String("apple")

	fruit = NewFruit("orange")
	fruit.GetFruit()
	fruit.String("orange")

	fruit = NewFruit("banana")
	fruit.GetFruit()
	fruit.String("banana")

}
