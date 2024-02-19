import type { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_CONTACT_DOMAIN || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, phone, message } = req.body;

  console.log("Data: ", req.body);

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: `${name} <contact@indiacanadasociety.ca>`,
    to: `aadar100@gmail.com`,
    subject: `Contact Form Response From: ${name}`,
    text: `Hello,

Name: ${name}
Email: ${email}
Phone: ${phone}

Message: ${message}`,
  };

  try {
    const emailResponse = await client.messages.create(DOMAIN, messageData);
    console.log(emailResponse);
  } catch (err: any) {
    console.error("Error sending email: ", err);
  }

  res.status(200).json({ submitted: true });
}
