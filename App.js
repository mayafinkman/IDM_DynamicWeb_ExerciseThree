const express = require('express'); 

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!')); 
/* .get tells you its a child of the express object
    recieves two arguments, a path ('/') and a call back (the arrow function)
    inside of call back, have two values
        - 
*/

app.listen(port, () => console.log("Hello World Running!"));