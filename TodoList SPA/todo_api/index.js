var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todosRoutes = require('./routes/todos');

//bodyparser is used to acess data from url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
    res.sendFile("index.html");
});

app.use('/api/todos',todosRoutes);

app.listen(port,function () {
   console.log("APP IS RUNNING ON PORT " + port); 
});