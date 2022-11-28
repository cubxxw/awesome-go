// The principle of opening and closing
package main

import "fmt"

//Abstract bank interface
type Banker interface {
	Deposit()  //deposit
	Withdraw() //Withdrawal
	Transfer() //Transfer
}

//Implement the bank interface
type Bank struct {
}

//deposit
func (b *Bank) Deposit() {
	fmt.Println("存款成功")
}

//Withdrawal
func (b *Bank) Withdraw() {
	fmt.Println("取款成功")
}

//Transfer
func (b *Bank) Transfer() {
	fmt.Println("转账成功")
}

//We can define another Alipay bank interface
type Alipay struct {
}

//deposit
func (a *Alipay) Deposit() {
	fmt.Println("支付宝存款成功")
}

//Withdrawal
func (a *Alipay) Withdraw() {
	fmt.Println("Alipay withdrawal successful")
}

//Transfer

//Implement an abstraction layer to isolate the different implementation layers so that new implementation layers can be added without modifying the original code, which is the open-close principle
func BankBusiness(bank Bank) {
	bank.Deposit()
}

func main() {
	//The business of deposits
	BankBusiness(&Bank{})
	BankBusiness(&Alipay{})
}
