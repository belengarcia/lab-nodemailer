const mongoose = require('mongoose');
const User = require('../models/user.model');

module.exports.create = (req, res, next) => {
    res.render('user/form')
}

module.exports.doCreate = (req, res, next) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email : email})
        .then((user) => {
            if(user) {
                res.redirect('/');
            } else {
                const user = new User({
                    name: name,
                    email: email,
                    password: password
                });
            return user.save()
            }
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(error => {
            console.error('no encontrado')
            next(error);
        })
}