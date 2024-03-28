var obj = JSON.parse($response.body);

obj= [
{
"currency":"USD",
"subscription_id":"2000000510526219",
"purchased":"2024-03-28T13:28:18.000Z",
"expires_ms":1711636098000,
"expires":"2024-03-28T14:28:18.000Z",
"store_key":"apple",
"created":"2024-03-28T13:27:24.629Z",
"dated_receipt_id":"1711632498000_2000000557944974",
"receipt_id":"2000000557944974",
"product_id":"com.studycat.sa.fe.t7d_12m.a60m15_202305_1",
"app_id":"com.studycat.sa",
"is_free_trial":false,
"test":false,
"app_shortcode":"SA_FE",
"price":59.99,
"purchased_ms":1711632498000,
"type":"renewal",
"Items":[{"latest_expired_receipt_info":{"original_transaction_id":"2000000510526219","transaction_id":"2000000557944974","product_id":"com.studycat.sa.fe.t7d_12m.a60m15_202305_1","expires_date_formatted":"2024-03-28T14:28:18.000Z","expires_ms":1711636098000,"purchaseToken":"2000000510526219","expirationTime":1711636098000}}]
    }];
$done({body: JSON.stringify(obj)});

// Descriptionsp
