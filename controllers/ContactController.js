const db = require("../models/index.js");
const nodemailer = require("nodemailer");

class ContactController {

    submitContactForm(req, res) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "congoserver@gmail.com",
                pass: process.env.GMAIL_PASSWORD,
            }
        });

        let mailOptions = {
            from: "congoserver@gmail.com",
            to: req.body.email,
            subject: req.body.subject,
            text: req.body.message,
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                // Used only to fulfill axios promise
                db.Books.findAll({})
                    .then((books) => {
                        res.json(books);
                    });
            }
        });
    }
}

module.exports = ContactController;