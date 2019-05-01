class Loggin {

    static async viewRoute(req, res, next) {
      console.log("viewRoute");
      // console.log("Request", req)
      next();
    }
    
}
  
  module.exports = Loggin;