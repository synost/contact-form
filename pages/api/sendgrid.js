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
    await mailer.send(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  }
  catch (error) {
      console.log(error);
     return res.status(error.statusCode || 500).json({ error: error.message });
   }
  return res.status(200).json({ error: "" });
}
export default sendEmail;
