package main

import (
	_ "myproject/routers"

	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}