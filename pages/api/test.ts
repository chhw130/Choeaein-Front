import { NextApiRequest, NextApiResponse } from "next";
import sendMessageCode from "../../utils/phone/SendPhoneMessage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({ status: 456 });
  }
  if (req.method === "POST") {
    sendMessageCode();
    res.status(200).json({ number: 123 });
  }
}
