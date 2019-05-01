
class Authentication {

  static async authenticate(req, res, next) {
    console.log("authenticate")
    next();
  }

  static async isAdmin(req, res, next) {
    console.log("isAdmin")
    next();
  }
}

module.exports = Authentication;