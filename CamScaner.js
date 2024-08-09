let obj = JSON.parse($response.body);
obj = {"data":{
  "is_verified" : true,
  "has_vip_access" : false,
  "has_newsletter" : false,
  "has_active_subscription" : false,
  "is_oauth" : true,
  "logged_in" : true,
  "image" : "https://fra1.digitaloceanspaces.com/pharmuni/pharmuni-main/profile_image/user-b41b5b4a-5cec-44f7-babf-6a9fd6863073-user-image-6af88341-cd9f-4819-aa9a-10da7b3cce2f.png?AWSAccessKeyId=24FZNUKRY5LCMGI5ULAO&Signature=AyKazb2dmdCl0kbILZJQHKvd%2FbM%3D&Expires=1723216389",
  "first_name" : null,
  "is_name_verified" : false,
  "social_media_urls" : {
    "instagram_url" : "https://www.instagram.com/pharmuni_com/",
    "linkedin_url" : "https://www.linkedin.com/showcase/pharmuni/",
    "tiktok_url" : "https://www.tiktok.com/@pharmuni_com"
  },
  "last_name" : null,
  "email" : "opalriversideb0708@gmail.com"
}};
$done({body: JSON.stringify(obj)});
