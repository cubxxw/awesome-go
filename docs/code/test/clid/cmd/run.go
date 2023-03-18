/*
Copyright © 2023 xiongxinwei

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
	"os"
	"strconv"
	"strings"

	"github.com/spf13/cobra"
)

// runCmd represents the run command
var runCmd = &cobra.Command{
	Use:   "run",
	Short: "Run the application",
	Long:  `A longer description that spans multiple lines and likely contains examples.`,
	Args:  cobra.MinimumNArgs(1),

	/* 	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("Running application...")
		fmt.Println("Arguments:", args)
	}, */

	Run: func(cmd *cobra.Command, args []string) {
		// 打印接收的参数
		fmt.Println("args:", args)
		fmt.Println("Running application...")
		var argList []string
		for _, arg := range args {
			myArg := args[1] // assuming the argument is the first one
			myArg = strings.ReplaceAll(myArg, "$", "\\$")
			if strings.HasPrefix(arg, "$") {
				envValue := os.Getenv(strings.TrimPrefix(arg, "$"))
				argList = append(argList, envValue)
			} else {
				unquoted, err := strconv.Unquote(arg)
				if err != nil {
					argList = append(argList, arg)
				} else {
					argList = append(argList, unquoted)
				}
			}
		}
		fmt.Println("Arguments:", argList)
	},
}

func init() {
	rootCmd.AddCommand(runCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// runCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// runCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
