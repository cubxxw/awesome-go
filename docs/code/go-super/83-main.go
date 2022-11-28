// Merge reuse principle
package main

import "fmt"

//Define a kitten structure and realize the method of eating and sleeping.
type Cat struct {
	//...
}

//kitten eats
func (c *Cat) Eat() {
	fmt.Println("CatA eat")
}

type CatB struct {
	//继承Cat
	Cat
}

//kitten sleeps
func (c *CatB) Sleep() {
	fmt.Println("CatB sleep")
}

// 组合复用原则(使用组合/聚合关系代替继承关系)
type CatC struct {
	//组合Cat
	C  *Cat  //组合一个Cat类型的指针
	CB *CatB //组合一个CatB类型的指针
}

//kitten eats
func (c *CatC) Eat() {
	c.C.Eat() //调用Cat的Eat方法
	fmt.Println("CatC eat")
}

func main() {
	Cat := &Cat{}
	//kitten eats
	Cat.Eat()

	fmt.Println("=================继承=================")
	CatB := &CatB{}
	//kitten eats
	CatB.Eat()
	//kitten sleeps
	CatB.Sleep()

	fmt.Println("=================组合=================")
	CatC := &CatC{}
	//kitten eats
	CatC.Eat()
	//kitten sleeps
	CatC.CB.Sleep()

	CatC.C.Eat()
}
