//NPM Packages 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http")
// var fs = require("fs")

//Create Express Server
var app = express();

// Set port 
var PORT = process.env.PORT || 3000;

// Attempt to have static files displayed from app/public
app.use(express.static(path.join(__dirname, "app/public")))

// Insert code from Body-Parser npm page 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))

// Require the apiRoutes.js and htmlRoutes.js files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listen to Port being used, confirm working server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

//////////////////////////////////////////////////////////////////////////////////////
// ** Below is code attempting to make static files in the Public folder work     **//
// ** CSS files and all images were being served as type/HTML with an error       **//
// ** code of 304 and was not working. Added all CSS within HTML files themselves **//
// ** to get it to work. Ignore code below.                                       **//
//////////////////////////////////////////////////////////////////////////////////////

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     var path = req.url;
  
//     switch (path) {
//     case "/survey":
//       return renderSurveyPage(req, res);
//     default:
//       return renderHomePage(req, res);
//     }
//   }

// function renderHomePage(req, res) {
//     fs.readFile(__dirname + "/../public/style.css", function(err, data) {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/css" });
//         res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
//       }
//       else {
//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.end(data);
//       }
//     });
//   }







