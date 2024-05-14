import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // @ts-ignore
  name: "mail.3alearningsolutions.com",
  host: "mail.3alearningsolutions.com",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@3alearningsolutions.com",
    pass: "Harshit@123",
  },
  pool: true, // Enable connection pooling
});

export const sendGeneratePasswordMail = async ({
  email,
  token,
}: {
  email: string;
  token: string;
}) => {
  try {
    const html = `
        <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generate Password Link - ATS Homekraft</title>
      
    </head>
    <body>
    <p>Click on below link to generate your password of ATS Homekraft.</p><br/>
    <p>Valid upto 15 minutes only</p><br/>
    <a href="${process.env.DOMAIN}/password/${token}">${process.env.DOMAIN}/password/${token}</a>
    </body>
    </html>
        `;
    const mailOptions = {
      from: `"ATS Homekraft" noreply@3alearningsolutions.com`,
      to: `${email}`,
      subject: `Generate Password - ATS Homekraft`,
      html,
    };
    const mailResponse = await transporter.sendMail(mailOptions);
    console.log("Verification code sent:", mailResponse.messageId);
  } catch (error) {
    console.error("Generate Password", error);
    throw error; // Re-throw to propagate the error
  }
};
