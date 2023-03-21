// Dependency reversal principle
package main

import "fmt"

//Drivers Zhang San, Li Si, Wang Wu
//Zhang San-kai Mercedes-Benz
//Li Sikai BMW
//Zhang San Benz
type Zhangsan struct {
}

//Li Si BMW
type Lisi struct {
}

//Zhang San-kai Mercedes-Benz
func (b *Zhangsan) Run() {
	fmt.Println("奔驰在跑")
}

//Mercedes
type Benz struct {
}

//BMW
type Bmw struct {
}

//Mercedes
func (b *Benz) Run() {
	fmt.Println("奔驰在跑")
}

//BMW
func (b *Lisi) Run() {
	fmt.Println("宝马在跑")
}

//Zhang San wants to drive a BMW
func (b *Zhangsan) WantRun() {
	fmt.Println("张三想开宝马")
}

//Li si wants to drive Mercedes
func (b *Lisi) WantRun() {
	fmt.Println("李四想开奔驰")
}

func main() {
	//Zhang San-kai Mercedes-Benz
	zhangsan := &Zhangsan{}
	zhangsan.Run()
	//Li Sikai BMW
	lisi := &Lisi{}
	lisi.Run()

	//Zhang San wants to drive a BMW
	zhangsan.WantRun()
	//Li si wants to drive Mercedes
	lisi.WantRun()
}
