'use strict';

class LoginController {
  index(req, res, next) {
    res.render('login');
  }
}

module.exports = LoginController;