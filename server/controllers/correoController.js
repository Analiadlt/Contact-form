//importar express y nodeMailer como servidor de correo
const {} = require("express");
const nodeMailer = require("nodemailer");

//definir una función para enviar el correo
const envioCorreo = (req = request, resp = response) => {
  let body = req.body;

  let config = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    post: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const opciones = {
    from: "contact-form",
    subject: body.asunto,
    to: body.email,
    text: body.mensaje,
  };

  config.sendMail(opciones, function (error, result) {
    if (error) return resp.json({ ok: false, msg: error });

    return resp.json({
      ok: true,
      msg: result,
    });
  });
};

module.exports = {
  envioCorreo,
};
