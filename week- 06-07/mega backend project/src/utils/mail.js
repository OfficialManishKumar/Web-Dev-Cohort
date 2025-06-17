import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({path:"C:/Users/hp/Web Dev Cohort/week- 06/mega backend project/.env"})

const mail = function(head,url,buttonText){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${head}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .container {
        max-width: 600px;
        margin: 50px auto;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }
      .header {
        background: #007bff;
        color: white;
        padding: 30px 20px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 30px 20px;
        text-align: center;
      }
      .content p {
        font-size: 20px;
        color: #444;
        font-weight: 700;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        padding: 14px 28px;
        margin: 25px 0;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
        border-radius: 6px;
        font-weight: 600;
        transition: background-color 0.3s ease;
      }
      .button:hover {
        background-color: #0056b3;
      }
      .link-fallback {
        font-size: 13px;
        color: #888;
        margin-top: 20px;
        word-break: break-all;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #aaa;
        padding: 20px;
        border-top: 1px solid #eee;
        background-color: #f1f1f1;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>${head}</h1>
      </div>
      <div class="content">
        <p>Hello😊</p>
        <p>
          Thank you for using our service. To proceed, please click the button below.
        </p>
        <a href=${url} class="button">${buttonText}</a>
        <p>If the button doesn't work, copy and paste the link below into your browser:</p>
        <div class="link-fallback">${url}</div>
      </div>
      <div class="footer">
        &copy; 2025 Foundrly &mdash; All rights reserved<br>
        This link will expire in 15 minutes for your security.
      </div>
    </div>
  </body>
  </html>
`}


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
const sendEmail = async (from,to,subject,html) => {
  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: "Hello!", // plain‑text body
    html: html, // HTML body
  });

  console.log("Message sent:", info.messageId);
};

// Sending Email 

export const emailVerificationEmail = (to,url)=>{
  sendEmail(
    "Officialmanishsaw@gmail.com",
    to,
    "Verify your Email",
    mail(`Verify your Email`,`${url}`,`Verify Your Email`)
  )
}


export const forgetPasswordEmail = (to,url)=>{
  sendEmail(
    "Officialmanishsaw@gmail.com",
    to,
    "Forgot User Password",
    mail("Forget your Password",`${url}`,"Change your password")
  )
}
