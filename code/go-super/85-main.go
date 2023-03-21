package main

import "fmt"

//Abstract layer
type Fruit interface {
	String(name string) string
}

//Implementation layer
type Apple struct {
}

func (apple *Apple) String(name string) string {
	fmt.Println("apple")
	return "apple"
}

type Orange struct {
}

func (orange *Orange) String(name string) string {
	fmt.Println("orange")
	return "orange"
}

type Banana struct {
}

func (banana *Banana) String(name string) string {
	fmt.Println("banana")
	return "banana"
}

type Pear struct {
}

func (pear *Pear) String(name string) string {
	fmt.Println("pear")
	return "pear"
}

//Factory floor
type Factory struct {
}

func (factory *Factory) GetFruit(name string) Fruit {
	var fruit Fruit
	switch name {
	case "apple":
		fruit = &Apple{}
	case "orange":
		fruit = &Orange{}
	case "banana":
		fruit = &Banana{}
	case "pear":
		fruit = &Pear{}
	}
	return fruit
}

//Business logic layer
func main() {
	Factory := &Factory{}
	apple := Factory.GetFruit("apple")
	apple.String("apple")

	orange := Factory.GetFruit("orange")
	orange.String("orange")

	banana := Factory.GetFruit("banana")
	banana.String("banana")
}
