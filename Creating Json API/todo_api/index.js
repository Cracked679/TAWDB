var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todosRoutes = require('./routes/todos');

//bodyparser is used to acess data from url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send("HI FROM ROOT ROUTE.");
});

app.use('/api/todos',todosRoutes);

app.listen(port,function () {
   console.log("APP IS RUNNING ON PORT " + port); 
});