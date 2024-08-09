let obj = JSON.parse($response.body);
obj={
  "canceled" : null,
  "cancel_at" : null,
  "description" : null,
  "show_upgrade" : false,
  "is_apple_subscription" : false,
  "next_billing_amount" : null,
  "show_payment_method" : false,
  "plan_name" : "Premium",
  "currency" : null,
  "next_billing_date" : null
};
$done({body: JSON.stringify(obj)});
