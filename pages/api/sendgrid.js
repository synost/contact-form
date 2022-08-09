import { Mailer } from 'nodemailer-react'

const mailerConfig = {
  transport: {
    host: 'smtp.zoho.eu',
    port: 587,
    secure: true,
    auth: { user: 'contact@streato.com', pass: 'Streato4723!' },
  },
  defaults: {
    from: { name: 'Streato', address: 'contact@streato.com' },
  },
}

let mailOptions = {
  from: 'contact@streato.com',
  to: 'admin@synost.net',
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

const mailer = Mailer(mailerConfig)

async function sendEmail(req, res, ) {
  try {
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
