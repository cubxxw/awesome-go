// gin
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	//创建gin实例
	r := gin.Default()
	//设置路由:请求方式,路径,处理函数
	r.GET("/ping", func(c *gin.Context) {
		c.String(200, "这是一个Get ping请求")
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	//Post请求: http://localhost:8080/login 表示向服务器发送登录请求
	r.POST("/login", func(c *gin.Context) {
		c.String(200, "登录成功,这是一个Post请求")
		//获取参数
		username := c.PostForm("username")
		password := c.PostForm("password")
		//返回json数据
		c.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	//Put请求: http://localhost:8080/put 表示向服务器发送修改请求
	r.PUT("/put", func(c *gin.Context) {
		c.String(200, "修改成功,这是一个Put请求")
		//获取参数
		username := c.PostForm("username")
		password := c.PostForm("password")
		//返回json数据
		c.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	//Delete请求: http://localhost:8080/delete 表示向服务器发送删除请求
	r.DELETE("/delete", func(c *gin.Context) {
		c.String(200, "删除成功,这是一个Delete请求")
		//获取参数
		username := c.PostForm("username")
		password := c.PostForm("password")
		//返回json数据
		c.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	//监听端口

	// r.Run() 启动HTTP服务，默认在 0.0.0.0:8080 启动服务
	r.Run(":3000") //也可以使用这种方式设置端口
}
