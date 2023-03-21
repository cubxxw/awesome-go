/* gin框架 */
package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	//创建路由
	r := gin.Default()
	//定义路由
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	//启动服务
	r.Run()
}
