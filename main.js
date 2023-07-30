const express = require("express")
const app = express()
const path = require('path');
const port = 8008

// use this folder as a root for all media
app.use(express.static(__dirname))

// pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'page.html'))
})

// error 404
app.get('*', function(req, res){
    res.status(404).send("Error 404: Page Not Found. Redirect to base url")
});

// open server
app.listen(port)
console.log("Server Online on localhost:" + port)