import { createTransport, SendMailOptions, Transporter } from 'nodemailer'
import { Options as TransportOptions, SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Mailer } from 'nodemailer-react'
import { PasswordEmail } from './PasswordEmail'
import { ReminderEmail } from './ReminderEmail'
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
  //     to: "youremail@gmail.com", // Your email where you'll receive emails
  //     from: "anotheremail@gmail.com", // your website email address here
  //     subject: `[Lead from website] : ${req.body.subject}`,
  //     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  //     <html lang="en">
  //     <head>
  //       <meta charset="utf-8">

  //       <title>The HTML5 Herald</title>
  //       <meta name="description" content="The HTML5 Herald">
  //       <meta name="author" content="SitePoint">
  //     <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

  //       <link rel="stylesheet" href="css/styles.css?v=1.0">

  //     </head>

  //     <body>
  //       <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
  //             </div>
  //             <div class="container" style="margin-left: 20px;margin-right: 20px;">
  //             <h3>You've got a new mail from ${req.body.firstname} ${req.body.lastname}, their email is: ✉️${req.body.email} </h3>
  //             <div style="font-size: 16px;">
  //             <p>Message:</p>
  //             <p>${req.body.message}</p>
  //             <br>
  //             </div>
  //             <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
  //             <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
  //             <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
  //               <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
  //               <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
  //               <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
  //               <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
  //               <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
  //               <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

  //             </div>
  //             </div>
  //     </body>
  //     </html>`,
  //   });
  // } catch (error) {
  //   // console.log(error);
  //   return res.status(error.statusCode || 500).json({ error: error.message });
  // }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
