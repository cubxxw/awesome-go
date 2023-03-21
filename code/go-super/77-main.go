/* 
发送 dns 请求
*/

package main

import (
	"fmt"
	"net"
)

type Header struct {
	ID      uint16	// 事物ID，占2个字节
	Flags   uint16	// 标志位，占2个字节
	QdCount uint16	// 问题数，占2个字节
	AnCount uint16	// 回答数，占2个字节
	NsCount uint16	// 授权数，占2个字节
	ArCount uint16	// 附加数，占2个字节
}

type DNS struct {
	Header  Header // 12字节
	Queries []Query	// 问题区
	Answers []Answer // 回答区
}

func (header *Header) SetFlags(qr, opcode, aa, tc, rd, ra, z, rcode uint16) {
	header.Flags = qr<<15 + opcode<<11 + aa<<10 + tc<<9 + rd<<8 + ra<<7 + z<<4 + rcode
	//rcode 是 4 位，所以不需要左移
}

// query
type Query struct {
	Name  string
	Type  uint16
	Class uint16
}

// answer
func ParseDomainName(domainName string) []byte {
	var domain []byte
	for _, v := range domainName {
		domain = append(domain, byte(v))
	}
	return domain
}

func main() {
	//发送dns请求
	//第一个参数是网络类型，第二个参数是dns服务器地址
	aa

	