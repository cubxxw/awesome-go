/*
实现ping操作
*/

package main

import (
	"bytes"
	"encoding/binary"
	"flag"
	"fmt"
	"net"
	"os"
	"time"
)

type ICMP struct {
	Type     uint8  //消息类型
	Code     uint8  //类型子码
	Checksum uint16 //校验和
	//标识符和序列号
	ID  uint16 //标识符
	Seq uint16 //序列号
}

var (
	timeout int64
	size    int
	count   int
	icmp    *ICMP = &ICMP{
		Type:     8,
		Code:     0,
		Checksum: 0,
		ID:       1,
		Seq:      1,
	}
)

func main() {
	getCommandArgs()

	//目标ip地址
	desIp := os.Args[len(os.Args)-1] //获取最后一个参数

	//构建请求
	conn, err := net.DialTimeout("ip4:icmp", desIp, time.Duration(timeout)*time.Millisecond)
	if err != nil {
		fmt.Println("请求失败")
		return
	}
	defer conn.Close()
	data := make([]byte, size)
	fmt.Println("正在 Ping", desIp, " 具有 32 字节的数据:", "data:", data)

	var buffer bytes.Buffer
	fmt.Printf("大端：")
	binary.Write(&buffer, binary.BigEndian, &icmp) //写入类型
	fmt.Println("icmp:", icmp)

	var buffer2 bytes.Buffer
	fmt.Printf("小端：")
	binary.Write(&buffer2, binary.LittleEndian, &icmp) //写入类型
	/*
		binary.BigEndian: 大端序
		binary.LittleEndian: 小端序
	*/
	fmt.Println("icmp:", icmp)

	icmp.Checksum = Checksum(buffer.Bytes()) //计算校验和
	fmt.Println("icmp:", icmp)

	//发送请求
	_, err = conn.Write(buffer.Bytes())
	if err != nil {
		fmt.Println("请求失败")
		return
	}

	//接收响应
	buffer.Reset()
	buffer2.Reset()
	_, err = conn.Read(buffer.Bytes())
	if err != nil {
		fmt.Println("请求失败")
		return
	}
	icmp.Checksum = Checksum(buffer2.Bytes()) //计算校验和
	fmt.Println("icmp:", icmp)

	buf := make([]byte, 1024)
	n, err := conn.Read(buf)
	if err != nil {
		fmt.Println("请求失败")
		return
	}
	//解析响应
	//icmp := &ICMP{}
	//binary.Read(&buffer, binary.BigEndian, icmp)
	//fmt.Println("icmp:", icmp)

	//读取响应
	fmt.Printf("来自 %d.%d.%d.%d 的回复: 字节=%d 时间=%d TTL=%d", buf[12], buf[13], buf[14], buf[15], n-28, 0, buf[8])
}

func Checksum(data []byte) uint16 { //定义校验和函数：参数为字节切片，返回值为uint16
	var sum uint32
	for i := 0; i < len(data); i += 2 { //每次取两个字节
		sum += uint32(data[i])<<8 + uint32(data[i+1]) //将每两个字节转换为uint16类型，然后相加
	}
	sum = (sum >> 16) + (sum & 0xffff) //高16位与低16位相加
	sum += sum >> 16                   //将进位的1加到低16位
	return uint16(^sum)                //取反
}

func getCommandArgs() {
	//获取命令行参数
	flag.Int64Var(&timeout, "t", 1000, "请求超时时间，单位毫秒")
	flag.IntVar(&size, "s", 32, "请求数据包大小，单位字节")
	flag.IntVar(&count, "c", 4, "请求次数")
	flag.Parse() //解析命令行参数
}
