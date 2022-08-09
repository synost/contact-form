import { createTransport, SendMailOptions, Transporter } from 'nodemailer'
import { Options as TransportOptions, SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Mailer } from 'nodemailer-react'
import { ContactEmail } from './ContactEmail'
import sendgrid from "@sendgrid/mail";

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

const emailsList = {
  ContactEmail,
  
}

/** Instance of mailer to export */
const mailer = Mailer(mailerConfig, emailsList)
async function sendEmail(req, res) {
  try {
    await mailer.send('PasswordEmail', {
      firstName: 'Mathieu',
      brand: 'MyWebsite',
      newAccount: 'true',
      password: 'pass',
    }, {
      to: 'admin@synost.net',
    })
  }
  catch (error) {
      console.log(error);
     return res.status(error.statusCode || 500).json({ error: error.message });
   }
  return res.status(200).json({ error: "" });
}
export default sendEmail;
