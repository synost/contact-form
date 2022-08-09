import nodemailer from 'nodemailer-react'

async function sendEmail(req, res, ) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'lea81@ethereal.email',
          pass: 'cU7mJqBdUAAQEDtVyv'
      }
    });
    let info = await transporter.sendMail({
      from: '"James Swanson" <foo@example.com>',
      to: "rickie.gutkowski59@ethereal.email", // Test email address
      subject: "I love SMTP!",
      text: "Here's a text version of the email.",
      html: "Here's an <strong>HTML version</strong> of the email.",
    });
  }
  catch (error) {
      console.log(error);
     return res.status(error.statusCode || 500).json({ error: error.message });
   }
  return res.status(200).json({ error: "" });
}
export default sendEmail;
