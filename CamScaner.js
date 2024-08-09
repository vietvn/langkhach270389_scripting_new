let obj = JSON.parse($response.body);
obj = {
  "has_vip_access" : true
};
$done({body: JSON.stringify(obj)});
