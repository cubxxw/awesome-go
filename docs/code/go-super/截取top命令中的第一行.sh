# 截取toc命令中的第一行
# 用法：toc1.sh filename

# 用sed命令截取第一行
sed -n '1p' $1

# 截取top中的load average
# 用法：loadavg.sh filename
top | grep -i load | awk '{print $10,$11,$12}'