// NPM packages
var path = require("path");

// Export function to serve up html files from server
module.exports = function(app){   
    // Serve up the survey.html file when user hits /survey url
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // Serve up home.html file if user is on any page other than /survey
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    
    // Attempt tp get static files in Public folder to work - Ignore code
    // app.use("/home.html", express.static(path.join(__dirname, "/public")))
};