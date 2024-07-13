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
    html: `<body style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
    <h1 style="color: #008080;">Información de contacto</h1>
    <p>Hola, mi nombre es <span style="font-weight: bold;">${name}</span> y me pongo en 
    contacto contigo.
     Puedes contactarme por correo electrónico a
      <a href="mailto:${email}" style="color: #008080; text-decoration: none;">${email}</a>,
       por teléfono al 
     <span style="color: #008080; font-weight: bold;">${phone}</span>, 
    o enviarme un mensaje directo a través de este correo electrónico.</p>
    <p>Si tienes alguna pregunta o comentario, no dudes en contactarme.
     Espero tener la oportunidad de hablar contigo pronto.</p>
     <p>Esta es mi consulta : ${message}</p>
    <p>Gracias,</p>
    <p><span style="font-weight: bold;">${name}</span></p>
  </body>`,
    // text: `Nombre: ${name} \nE-mail: ${email} \nTelefono: ${
    //   phone || " No agregó número"
    // } \nMensaje: ${message}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Hubo un error, vuelva a intentarlo", err });
    } else {
      res.status(200).json({ message: "Mensaje enviado" });
    }
  });
};

module.exports = { sendMail };
