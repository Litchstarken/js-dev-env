// here we are configurating a web-server that serves the files in our source directory

import express from "express";
import path from "path";
// this will be used to open the website in the browser
import open from "open";
import webpack from "webpack"
import config from "../webpack.config.dev"

// por that we are going to use
const port = 3000;
// instance of express
const app = express();
const compiler = webpack(config);

// tell express to use webpack as a middleware so we pass the compiler
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}))

// which routes we should handle
// here we are requesting a route '/'
// then we are sending the file that we specify '../src/index.html'
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Declaring our routing
// here we are opening the app at the address on the selected port
app.listen(port, function(err){
    if(err){
        // eslint-disable-next-line no-console
        console.log(err)
    }else {
        open('http://localhost:' + port);
    }
})
// in the terminal we use the following expression to run the server
// node folder/file.js
// node buildScripts/srcServer.js 

// when we are deploying the server with localtunnel
// we can setup a custom subdomain to avoid random names
// lt --port 3000 --subdomain anynamehere