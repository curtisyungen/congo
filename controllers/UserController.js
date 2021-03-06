const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    loginUser(req, res) {

        db.Users.findOne({
            where: {
                email: req.query.email,
            }
        })
        .then((user) => {
            bcrypt.compare(req.query.password, user.password, function(err, result) {
                if (result === true) {
                    res.json(user);
                }
                else {
                    res.json("Incorrect password.");
                }
            });
        });        
    }

    createNewUser(req, res) {

        bcrypt.genSalt(11, function (err, salt) {
            if (err) {
                return console.log(err);
            }

            bcrypt.hash(req.body.password, salt, function(err, hash) {
                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                })
                .then((user) => {
                    res.json(user);
                })
                .catch((err) => {
                    console.log(err);
                });
            });
        });
    }

    findExistingUser(req, res) {
        db.Users.findAll({
            where: {
                email: req.params.email,
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    submitNewPassword(req, res) {
        bcrypt.genSalt(11, function (err, salt) {
            if (err) {
                return console.log(err);
            }

            bcrypt.hash(req.body.password, salt, function(err, hash) {
                db.Users.update(
                    {password: hash},
                    {where: {
                        email: req.body.email,
                    }})
                    .then((user) => {
                        res.json(user);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        });
    }
}

module.exports = UserController;