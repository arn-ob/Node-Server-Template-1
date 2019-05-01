
class BasicController {
  static async register(req, res) {
    res.send('register').status(200);
  }


  static async login(req, res) {
    console.log('login')
    res.send('login').status(200);
  }
}

module.exports = BasicController;