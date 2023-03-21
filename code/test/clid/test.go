package main

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var myFlag string

func main() {
	rootCmd := &cobra.Command{
		Use:   "myapp",
		Short: "My awesome CLI application",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Printf("The value of my flag is: %s", myFlag)
		},
	}

	rootCmd.PersistentFlags().StringVarP(&myFlag, "my-flag", "f", "", "Description of my flag")
	rootCmd.PersistentFlags().Lookup("my-flag").NoOptDefVal = os.Getenv("MY_ENV_VAR")

	rootCmd.Execute()
}


