let obj = JSON.parse($response.body);
obj = {"data":{
  "has_vip_access" : true
}};
$done({body: JSON.stringify(obj)});
