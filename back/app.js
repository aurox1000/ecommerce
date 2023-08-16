var express = require ('express'); 
var mongoose = require ('mongoose'); 
var port = process.env.port || 4201;

var app = express();


var cliente_router = require('./routes/cliente'); 

mongoose.connect('mongodb://127.0.0.1:27017/tienda')
.then(()=>{
    app.listen(port, function(){
        console.log('Server Corriendo ' + port); 

    });
})
.catch((err) =>{
console.log(err);
});

app.use('/api', cliente_router);

module.exports = app; 