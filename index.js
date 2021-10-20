const express = require('express');
const Quotes = require('inspirational-quotes');
const path =require('path');



const server = express();


//setting template engine
server.set('views',path.join(__dirname,'/views'))
server.set('view engine','ejs');

server.use(express.static(__dirname));

//get request for quotes 
server.get("/", (req , res) => {
    const thought = Quotes.getQuote();
    return res.render('card',{
        txt :thought.text,
        author :thought.author
    })  
});

//setting up server on port
server.listen(3000, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("server running");
    }
   
});