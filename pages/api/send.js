const nodemailer = require("nodemailer"); // Require the Nodemailer package
async function sendEmail(req, res) {
  // SMTP config
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email", //
    port: 587,
    auth: {
      user: "general.cormier@ethereal.email", // Your Ethereal Email address
      pass: "dt1S4TTmFB22ybsY9s", // Your Ethereal Email password
    },
  }); // Send the email
  try {
    let info = await transporter.sendMail({
      from: '"Contact TheReplay78" <no-reply@contact.synost.com>',
      to: "admin@synost.net", // Test email address
      subject: `${req.body.subject}`,
      text: "Here's a text version of the email.",
      html: `<!DOCTYPE html PUBLIC "-W3CDTD XHTML 1.0 TransitionalEN" "http:www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="fr">
      <head>
        <meta charset="utf-8">

        <title>Contact TheReplay78</title>
        <meta name="description" content="Quelqu'un vous a envoyé un message">
        <meta name="author" content="Synost">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Tu as recu un mail de ${req.body.firstname} ${req.body.lastname}, leur mail est : ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    });
  }
  catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
 }

return res.status(200).json({ error: "" });
}

export default sendEmail;
