/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 19:37:14
 * @FilePath: \code\go-super\23-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
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
	configList := ConfigList{
		Configs: []Config{
			{
				ID:      "1",
				Genders: []string{"asfd", "asfd"},
				Age:     20,
				Name:    "Tom",
			},
			{
				ID:      "2",
				Genders: []string{"asfd", "asfd", "asfd"},
				Age:     30,
				Name:    "Jack",
			},
		},
		Config: Config{
			ID:      "3",
			Genders: []string{"asfd", "asfd", "asfd", "as"},
			Age:     40,
			Name:    "Rose",
		},
		Email: "	nsddd.top",
	}
	fmt.Println(configList)

	//遍历
	for _, configList := range configList.Configs {
		fmt.Println(configList)
	}

	//json
	jsonBody, err := json.Marshal(configList)
	if err != nil {
		fmt.Println("err=", err)
	}
	fmt.Println("jsonBody=", string(jsonBody))
}
