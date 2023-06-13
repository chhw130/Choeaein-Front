import axios from "axios";
var CryptoJS = require("crypto-js");
const Cache = require("memory-cache");

function makeSignature() {
  const date = Date.now().toString();
  const uri = process.env.NEXT_PUBLIC_SERVICE_ID;
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
  const url2 = `/sms/v2/services/${uri}/messages`;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);
  return { url, signature, accessKey, date };
}

export default async function sendMessageCode(num) {
  const phoneNumber = "01062848167";

  const { url, signature, accessKey, date } = makeSignature();

  console.log(signature, url, accessKey, date);
  Cache.del(phoneNumber);

  //인증번호 생성
  const verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;

  Cache.put(phoneNumber, verifyCode.toString());

  axios({
    method: "POST",
    json: true,
    url: url,
    headers: {
      "Content-Type": "application/json",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": date,
      "x-ncp-apigw-signature-v2": signature,
    },
    data: {
      type: "SMS",
      contentType: "COMM",
      countryCode: "82",
      from: "01062848167",
      content: `[Milli] 인증번호 [${verifyCode}]를 입력해주세요.`,
      messages: [
        {
          to: `${phoneNumber}`,
        },
      ],
    },
  });
}
