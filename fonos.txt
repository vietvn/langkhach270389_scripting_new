let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

// Case 1: Response từ production.fonos.dev/authentication
if (url.includes("fonos.dev/authentication") && obj && obj.user) {
  obj.user.subscription = "premium";
  obj.user.webSubscription = {
    plan: "premium",
    expiredAt: "2099-12-31T23:59:59.000Z"
  };
  obj.user.credits = 999;
  obj.user.firstPassword = false;
  obj.user.subscribeBefore = true;
  obj.user.tester = true;
}
$done({ body: JSON.stringify(obj) });
