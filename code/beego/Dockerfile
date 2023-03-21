FROM library/golang:1.18

RUN go env -w GOPROXY=https://proxy.golang.com.cn,https://goproxy.cn,direct
# Godep for vendoring
RUN go get github.com/tools/godep

# Recompile the standard library without CGO
RUN CGO_ENABLED=0 go install -a std

ENV APP_DIR $GOPATHD:\文档\最近的\awesome-golang\docs\code\beego
RUN mkdir -p $APP_DIR

# Set the entrypoint
ENTRYPOINT (cd $APP_DIR && ./D:\文档\最近的\awesome-golang\docs\code\beego)
ADD . $APP_DIR

# Compile the binary and statically link
RUN cd $APP_DIR && CGO_ENABLED=0 godep go build -ldflags '-d -w -s'

EXPOSE 9000
