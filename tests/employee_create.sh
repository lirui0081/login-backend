#!/bin/bash
host="http://127.0.0.1:8000"
csrf="7WEbq8GxlDwJQCbBtYtBoq16RpyZYH8f"
sessionid="wp5ww2srl8vmz9todrk3vq3ut93s2wmr"

url="/employee/create"
# phone 不能重复, 用 $RANDOM 随机数测试
form_data="phone=$RANDOM&gender=1&title=worker&password1=123&password2=123&name=xiaoT&roles=1&roles=2&shop=1"


# 创建成功
curl -i "$host$url" -b "sessionid=$sessionid; csrftoken=$csrf" -d "csrfmiddlewaretoken=$csrf&$form_data"> rsp.html
