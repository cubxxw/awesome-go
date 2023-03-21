package main

import "fmt"

//====> abstract layer <========
type Car interface {
	Run()
}

type Driver interface {
	Drive(car Car)
}

//====> Implementation layer <========
type BenZ struct {
	//...
}

func (benz *BenZ) Run() {
	fmt.Println("Benz is running...")
}

type Bmw struct {
	//...
}

func (bmw *Bmw) Run() {
	fmt.Println("Bmw is running...")
}

type Zhang_3 struct {
	//...
}

func (zhang3 *Zhang_3) Drive(car Car) {
	fmt.Println("Zhang3 drive -->", car)
	car.Run()
}

type Li_4 struct {
	//...
}

func (li4 *Li_4) Drive(car Car) {
	fmt.Println("li4 drive -->", car)
	car.Run()
}

type Wangwu struct {
	//...
}

func (wangwu *Wangwu) Drive(car Car) {
	fmt.Println("wangwu drive -->", car)
	car.Run()
}

//====> Business logic layer <=========
func main() {
	//Zhang 3 drives BMW
	var bmw Car = &Bmw{}

	//In 4 Mercedes drives
	var benz Car = &BenZ{}

	var zhang3 Driver = &Zhang_3{}
	zhang3.Drive(bmw)

	//Zhang San wants to drive a BMW
	zhang3.Drive(benz)

	var li4 Driver
	li4 = &Li_4{}
	li4.Drive(benz)

	//Li si wants to drive Mercedes
	li4.Drive(bmw)

	var wangwu Driver = &Wangwu{}
	wangwu.Drive(benz)
	wangwu.Drive(bmw)
}
