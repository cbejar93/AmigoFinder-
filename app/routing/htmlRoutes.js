var path = require("path");

module.exports = function(app) {
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html" ));
    })
// This is the url where the survey page lives and reads the survey.html 
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}