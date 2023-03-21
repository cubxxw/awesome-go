package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	//gin
	//1.创建gin实例
	r := gin.Default()

	//加载模板文件 -- 需要指定每一个模板文件的路径
	r.LoadHTMLGlob("web/*")

	//2.绑定html：http://localhost:8080/index.html
	r.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "这是一个html页面", // 渲染模板
		})
	})

	//创建根路由
	r.GET("/", func(c *gin.Context) {
		c.String(200, "这是一个Get请求")
	})

	//3.设置路由:请求方式,路径,处理函数
	r.GET("/ping", func(c *gin.Context) {
		c.String(200, "这是一个Get ping请求")
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	//r.Run() 启动HTTP服务，默认在 0.0.0.0:8080 启动服务
	r.Run(":8080")

}
