

// Basic Route List
module.exports = function(app) {
    app.use('/api/basic', require('./routes.basic'));
};