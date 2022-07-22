const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { name, email, message, phone, surname } = req.body;
  // let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // service: "gmail",
    // host: "smtp.ethereal.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: surname === "" ? "maurogoyeneche@gmail.com" : "",
    subject: `Contacto desde web Aikido de ${name}`,
    text: `Nombre: ${name} \nE-mail: ${email} \nTelefono: ${
      phone || " No agregó número"
    } \nMensaje: ${message}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Hubo un error, vuelva a intentarlo", err });
    } else {
      res.status(200).json({ message: "Mensaje enviado" });
    }
    console.log(data);
  });
};

module.exports = { sendMail };
