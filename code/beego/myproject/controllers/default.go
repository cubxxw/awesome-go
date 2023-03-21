package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}

func (c *MainController) Post() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "3293172751@qq.com"
	c.TplName = "index.tpl"
}

func (c *MainController) Put() {
	c.Ctx.WriteString("put")
}

func (c *MainController) Delete() {
	c.Ctx.WriteString("delete")
}

func (c *MainController) Head() {
	c.Ctx.WriteString("head")
}
