/* 测试用例 */
package main

import (
	"fmt"
	"path/filepath"
)

const (
	B = 1 << (iota * 10)
	KB
	MB
	GB
	TB
	PB
)

const defavltNum = 100

func main() {
	fmt.Printf("B = %d", B)
	fmt.Printf("KB = %d", KB)
	fmt.Printf("MB = %d", MB)
	fmt.Printf("GB = %d", GB)
	fmt.Printf("TB = %d", TB)
	fmt.Printf("PB = %d", PB)
	fmt.Println()

	fmt.Printf("defavltNum = %d", defavltNum)
	fmt.Println()

	fmt.Println("filepath.Abs(\".\")")
	fmt.Println(filepath.Abs("."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"..\")")
	fmt.Println(filepath.Abs(".."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../..\")")
	fmt.Println(filepath.Abs("../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../..\")")
	fmt.Println(filepath.Abs("../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../..\")")
	fmt.Println(filepath.Abs("../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../..\")")
	fmt.Println(filepath.Abs("../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../../../../../../.."))
	fmt.Println()

	fmt.Println("filepath.Abs(\"../../../../../../../../../../../../../../../../..\")")
	fmt.Println(filepath.Abs("../../../../../../../../../../../../../../../../../../.."))
	fmt.Println()

}
