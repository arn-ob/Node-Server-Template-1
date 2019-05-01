const express = require('express');
const app = express();

// pass the instance of our app to the routes.

require('./router/routes.index.js')(app);

app.listen(5050, () => {
    console.log("Server Running")
});

// For Testing Export The
module.exports = app;