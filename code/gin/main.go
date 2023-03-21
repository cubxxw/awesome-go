package main

import (
	"fmt"
	"html/template"
	"net/http"

	"github.com/gin-gonic/gin"
)

type New struct {
	Title   string `json:"this is 新闻标题"`
	Content string `json:"this is 新闻内容"`
}

// 自定义模板函数
func Text(title string) string {
	fmt.Println("title:", title)
	return title + " this is 自定义模板函数Text"
}

func Text2(title string, content string) string {
	fmt.Println("title:", title, "content:", content)
	return title + " " + content + " this is 自定义模板函数Text2"
}

func main() {
	r := gin.Default()

	// 加载自定义模板函数
	r.SetFuncMap(template.FuncMap{
		"Text":  Text,
		"Text2": Text2,
	})

	//html: http://localhost:8080/
	r.LoadHTMLGlob("templates/*") //表示加载templates文件夹下的所有文件
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title":  "this is a title",
			"msg":    "this is a msg",
			"score":  99,                          //score是int类型，表示分数
			"score2": 99.9,                        //score2是float64类型，表示分数
			"score3": "99.9",                      //score3是string类型，表示分数
			"hobby":  []string{"篮球", "足球", "乒乓球"}, //hobby是切片类型，表示爱好  //hobby是切片类型，表示爱好
			"map": map[string]interface{}{ //map是map类型，表示地图
				"address": "北京市海淀区",
				"tel":     "010-12345678",
			},

			//结构体
			"news": &New{
				Title:   "新闻标题",
				Content: "新闻内容",
			},
		})
	})

	//html: http://localhost:8080/news
	r.GET("/news", func(c *gin.Context) {
		c.HTML(http.StatusOK, "news.html", nil)

	})

	// Get传值
	//html: http://localhost:8080/newst?title=新闻标题&content=新闻内容
	r.GET("/newst", func(c *gin.Context) {
		title := c.Query("title")
		content := c.Query("content")

		c.JSON(http.StatusOK, gin.H{
			"title":   title,
			"content": content,
		})
	})
	//Get
	//html: http://localhost:8080/newst2?title=新闻标题&content=新闻内容
	r.GET("/default", func(c *gin.Context) {
		c.HTML(http.StatusOK, "default", gin.H{
			"title":   c.Query("title"),
			"content": c.Query("content"),
		})
	})

	// Post传值
	r.LoadHTMLGlob("/default/index.html")
	//html: http://localhost:8080/newst2
	r.POST("/default", func(c *gin.Context) {
		title := c.PostForm("title")
		content := c.PostForm("content")

		c.HTML(http.StatusOK, "default/index.html", gin.H{
			"title":   title,
			"content": content,
		})
	})

	r.Run()
}
