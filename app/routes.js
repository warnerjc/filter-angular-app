// Node Server Routes

module.exports = ( app ) => {

    // FRONT END ROUTES
    // route to handle all Angular requests
    app.get('*', function(req, res) {
        res.sendFile('./public/views/index.html');
    })

}