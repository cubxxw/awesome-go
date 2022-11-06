package util

/* 测试用例，必须以util_test命名 */

import (
	"fmt"
	"testing"
)

var commTestData []commStruct

// 定义全局变量，用于测试
type commStruct struct {
	// 代码块
	Group    string
	SizeStr  string //输入
	Expected int64  //期望值
	Expected string //期望值
}

// 功能测试：主要验证功能是否正常
func TestParseSize(t *testing.T) {
	testData := commTestData
	for _, v := range testData {
		if v.Group == "ParseSize" {
			actual := ParseSize(v.SizeStr)
			if actual != v.Expected {
				t.Errorf("ParseSize(%s) = %d, expected %d", v.SizeStr, actual, v.Expected)
			}
		}
	}
}

// 模糊测试
func TestFuzzy(t *testing.T) {
	fmt.Println("util_test.go")
}

// 精确测试
func TestExact(t *testing.T) {
	fmt.Println("util_test.go")
}

// 性能测试
func Benchmark(b *testing.B) {
	fmt.Println("util_test.go")
}

// 基准测试
func Benchmark(b *testing.B) {
	fmt.Println("util_test.go")
}

// TestMain函数，用于测试前的初始化
func TestMain(m *testing.M) {
	initCommonData()
}

func initCommonData() {
	commTestData = []commStruct{ //测试数据
		{"ParseSize", "1", 1, "1"},
		{"ParseSize", "1k", 1024, "1k"},
		{"ParseSize", "1m", 1024 * 1024, "1m"},
		{"ParseSize", "1g", 1024 * 1024 * 1024, "1g"},
		{"ParseSize", "1t", 1024 * 1024 * 1024 * 1024, "1t"},
		{"ParseSize", "1p", 1024 * 1024 * 1024 * 1024 * 1024, "1p"},
		{"ParseSize", "1e", 1024 * 1024 * 1024 * 1024 * 1024 * 1024, "1e"},
		{"ParseSize", "1z", 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024, "1z"},
	}
	m.Run()
}
