const nodemailer = require("nodemailer"); // Require the Nodemailer package
async function main() {
  // SMTP config
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu", //
    port: 587,
    auth: {
      user: "contact@streato.com", // Your Ethereal Email address
      pass: "Streato4723!", // Your Ethereal Email password
    },
  }); // Send the email
  let info = await transporter.sendMail({
    from: '"James Swanson" <contact@streato.com>',
    to: "admin@synost.net", // Test email address
    subject: "I love SMTPOP!",
    text: "Here's a text version of the email.",
    html: "Here's an <strong>HTML version</strong> of the email.",
  });
  console.log("Message sent: %s", info.messageId); // Output message ID
  console.log("View email: %s", nodemailer.getTestMessageUrl(info)); // URL to preview email
}
// Catch any errors and output them to the console
main().catch(console.error);
