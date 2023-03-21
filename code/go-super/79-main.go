// The principle of opening and closing
// Path: 79-main.go
package main

import (
	"fmt"
)

// The principle of opening and closing
type Banker struct {
}

// Deposit business
func (b *Banker) Deposit() {
	fmt.Println("存款成功")
}

// Withdrawal business
func (b *Banker) Withdraw() {
	fmt.Println("取款成功")
}

// Transfer business
func (b *Banker) Transfer() {
	fmt.Println("转账成功")
}

func main() {
	b := &Banker{}

	b.Deposit()
	b.Withdraw()
	b.Transfer()

}
