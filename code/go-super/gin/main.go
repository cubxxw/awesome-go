// gin
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// 定义结构体
type User struct {
	Username string `json:"用户名"`
	Password string `json:"密码"`
}

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
		username := c.PostForm("username") //当存在POST urlenencoded表单或multipart表单时，PostForm返回指定的键，否则返回空字符串'("")'
		password := c.PostForm("password")
		//返回json数据 : 传入的数据：状态码和空接口类型数据
		c.JSON(http.StatusOK, gin.H{ //gin.H是map[string]interface{}的简写,http.StatusOK是200
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

	// jaon
	r.POST("/json", func(c *gin.Context) {
		//声明结构体
		a := &User{
			Username: "admin",
			Password: "123456",
		}
		c.JSON(http.StatusOK, a)
		//绑定参数
	})

	//相应jsonp数据: http://localhost:3001/jsonp?callback=callback
	r.GET("/jsonp", func(c *gin.Context) {
		//声明结构体
		a := &User{
			Username: "admin",
			Password: "123456",
		}
		//返回jsonp数据
		c.JSONP(http.StatusOK, a)
	})

	//相应xml数据: http://localhost:3001/xml
	r.GET("/xml", func(c *gin.Context) {
		//声明结构体
		a := &User{
			Username: "admin",
			Password: "123456",
		}
		//返回xml数据
		c.XML(http.StatusOK, a)
	})

	//相应yaml数据: http://localhost:3001/yaml
	r.GET("/yaml", func(c *gin.Context) {
		//声明结构体
		a := &User{
			Username: "admin",
			Password: "123456",
		}
		//返回yaml数据
		c.YAML(http.StatusOK, a)
	})

	//对应html数据: http://localhost:3001/html
	r.GET("/html", func(c *gin.Context) {
		//声明结构体
		a := &User{
			Username: "admin",
			Password: "123456",
		}
		//返回html数据
		c.HTML(http.StatusOK, "./web/index.html", gin.H{
			"test": a,
		})
	})

	// r.Run() 启动HTTP服务，默认在 0.0.0.0:8080 启动服务
	r.Run(":3001") //也可以使用这种方式设置端口
}
