package routers

import (
	"myproject/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/user", &controllers.MainController{})
	beego.Router("/", &controllers.MainController{})
}
