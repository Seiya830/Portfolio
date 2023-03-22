const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const port = process.env.VUE_APP_SMTP_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.VUE_APP_SMTP_HOST,
    port: process.env.VUE_APP_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.VUE_APP_SMTP_USER,
      pass: process.env.VUE_APP_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "recipient-email@example.com",
    subject: "New message from your website",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
