/*
Copyright © 2022 xiongxinwei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package cmd

import (
	"fmt"
	"strconv"

	"github.com/spf13/cobra"
)

// versionCmd represents the version command
var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "关于版本信息短描述",
	Long:  `关于版本信息长描述`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("version called")
		author, _ := cmd.Flags().GetString("author")
		fmt.Println("作者是：", author)

		var x int
		//string 转换为 int
		for _, v := range args {
			tmp, _ := strconv.Atoi(v)
			x += tmp
		}
		fmt.Println("x is ", x)
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)

	testCmd.AddCommand(versionCmd)

	// 添加参数
	versionCmd.Flags().StringP("author", "n", "default", "name") //名称，简写，默认值，描述

}
