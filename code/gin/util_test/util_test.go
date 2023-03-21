package util_test

import (
	"fmt"
	"testing"
)

func BanchmarkFoo(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Foo() //被测试的函数
	}
}

func TestFoo(t *testing.T) {
	for i := 0; i < 100; i++ {
		Foo()
	}

}

func Foo() {
	//do something
	var s = 0
	s = s * 2
	fmt.Println("s:", s)
}
