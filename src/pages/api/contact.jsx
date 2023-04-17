



import nodemailer from "nodemailer";

// /api/filename

export default async (req, res) => {
  const { name, email, message, categories } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMIAL_PASSWORD_TOKEN,
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "info@bk-design.ch, mufaqar@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Categories: </strong> ${categories}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};