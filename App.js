const express = require('express'); 

const app = express();
const port = 4000;

//app.get('/', (req, res) => res.send('Hello World!')); 
/* .get tells you its a child of the express object
    recieves two arguments, a path ('/') and a call back (the arrow function)
    inside of call back, have two values
        - 
*/

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

//serve static files
app.use("/static", express.static("public"));

//routing in express
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log("Hello World Running!"));