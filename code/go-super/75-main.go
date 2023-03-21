package main

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"log"
	"net"
	"os"
	"time"
)

// ICMP 数据包结构体
type ICMP struct {
	Type     uint8
	Code     uint8
	Checksum uint16
	ID       uint16
	Seq      uint16
}

// CheckSum 校验和计算
func CheckSum(data []byte) uint16 {
	var (
		sum    uint32
		length = len(data)
		index  int
	)
	for length > 1 {
		sum += uint32(data[index])<<8 + uint32(data[index+1])
		index += 2
		length -= 2
	}
	if length > 0 {
		sum += uint32(data[index])
	}
	sum += (sum >> 16)
	return uint16(^sum)
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Please input a valid domain or ip")
		return
	}
	domain := os.Args[1]
	var raddr, _ = net.ResolveIPAddr("ip", domain)
	fmt.Println("Target IP: " + raddr.String())

	//构建发送的ICMP包
	icmp := ICMP{
		Type:     8,
		Code:     0,
		Checksum: 0, //默认校验和为0，后面计算再写入
		ID:       0,
		Seq:      0,
	}

	//新建buffer将包内数据写入，以计算校验和并将校验和并存入icmp结构体中
	var buffer bytes.Buffer
	binary.Write(&buffer, binary.BigEndian, icmp)
	icmp.Checksum = CheckSum(buffer.Bytes())
	buffer.Reset()
	//与目的ip地址建立连接，第二个参数为空则默认为本地ip，第三个参数为目的ip
	con, err := net.DialIP("ip4:icmp", nil, raddr)
	if err != nil {
		log.Fatal(err)
	}
	//主函数接术后关闭连接
	defer con.Close()
	//构建buffer将要发送的数据存入
	var sendBuffer bytes.Buffer
	binary.Write(&sendBuffer, binary.BigEndian, icmp)
	if _, err := con.Write(sendBuffer.Bytes()); err != nil {
		log.Fatal(err)
	}
	//开始计算时间
	timeStart := time.Now()
	//设置读取超时时间为2s
	con.SetReadDeadline((time.Now().Add(time.Second * 2)))
	//构建接受的比特数组
	rec := make([]byte, 1024)
	//读取连接返回的数据，将数据放入rec中
	recCnt, err := con.Read(rec)
	if err != nil {
		log.Fatal(err)
	}
	//设置结束时间，计算两次时间之差为ping的时间
	timeEnd := time.Now()
	durationTime := timeEnd.Sub(timeStart).Nanoseconds() / 1e6
	//显示结果
	fmt.Printf("%d bytes from %s: seq=%d time=%dms\n", recCnt, raddr.String(), icmp.Seq, durationTime)
}
