const User = require("../models/users");

exports.getUsers = (req, res, next) => {
  User.findAll().then((users) => {
    res.json(users);
  });
};

exports.PostUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phonenumber;
  User.create({
    name: name,
    email: email,
    phoneNo: phoneNumber,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  // console.log(req.body);
  User.findByPk(req.body.id)
    .then((user) => {
      return user.destroy();
    })
    .then((user) => {
        console.log(user);
      res.json(req.body.id);
    })
    .catch((err) => console.log(res));
};
