#!/bin/bash
host="http://127.0.0.1:8000"
csrf="7WEbq8GxlDwJQCbBtYtBoq16RpyZYH8f"
sessionid="wp5ww2srl8vmz9todrk3vq3ut93s2wmr"

url="/inventory/create"
form_data="shop=1&task_type=1&executor=1&shelves=1&shelves=2"


# 创建成功
curl -i "$host$url" -b "sessionid=$sessionid; csrftoken=$csrf" -d "csrfmiddlewaretoken=$csrf&$form_data"> rsp.html
