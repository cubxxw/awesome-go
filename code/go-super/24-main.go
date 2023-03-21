/*
 * @Description:json反序列
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 20:01:45
 * @FilePath: \code\go-super\24-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
package main

import (
	"encoding/json"
	"fmt"
)

type Config struct {
	ID      string   `json:"id"`
	Genders []string `json:"性别"`
	Age     int      `json:"年龄"`
	Name    string   `json:"姓名"`
}

type ConfigList struct {
	Configs []Config `json:"configs"`
	Config
	Email string `json:"email"`
}

func main() {
	var c = &ConfigList{}

	//定义一个json
	jsonBody := `{"configs":[{"id":"1","性别":["asfd","asfd"],"年龄":20,"姓名":"Tom"},{"id":"2","性别":["asfd","asfd","asfd"],"年龄":30,"姓名":"Jack"}],"id":"3","性别":["asfd","asfd","asfd","as"],"年龄":40,"姓名":"Rose","email":"\tnsddd.top"}`

	if err := json.Unmarshal([]byte(jsonBody), c); err != nil {
		defer func() {
			if err := recover(); err != nil {
				fmt.Println("json反序列化失败" + err.(string))
			}
		}()

	} else {
		fmt.Println("json反序列化成功")
		fmt.Println(c)
	}
}
