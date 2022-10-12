import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();


// set up express app
const app = express();

// serves up our static files in the public folder
app.use(express.static('public'));
// routes the client to the address
// req, res is apart of the express api, request and response but you can call it whatever
app.get('/getmapbox', (req, res) =>{
    res.json({token:process.env.ACCESS_TOKEN})
})

// starts the server

app.listen(process.env.PORT, () =>{
    console.log('cooking things up at port ' + process.env.PORT);
})
