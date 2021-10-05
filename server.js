const express = require('express')
const bodyParser = require('body-parser'); 
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.hasHeader('Access-Control-Allow-Origin','*');
    res.hasHeader('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.hasHeader('Access-Control-Allow-Headers','Content-Type');
next();
});

app.get('/',function(req,res){
    res.send('Node Js Challeenge Bootcamp');
});

app.get('/Date',function(req,res){
    var dat= new Date();//con esto mostramos la fecha
    res.send('Date is ' + dat);
});

app.get('/FullName',function(req,res){
    res.send('Gohan Alejandro Ruiz Perez');
});

app.get('/City',function(req,res){
    res.send('Guadalupe');
});

app.get('/School',function(req,res){
    res.send('Instituto Tecnológico de Nuevo León');
});


app.post('/sum1', function(req, res){
    let reqBody = req.body;

    let sum = 0;
    
    for (let num of Object.values(reqBody)){
        sum += parseFloat(num); 
    };

    res.send(sum.toString())
});

app.post('/mult',function(req,res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let num3 = req.body.num3;
    let result = parseFloat(num1) * parseFloat(num2) * parseFloat(num3);
    res.send(result.toString())
});

app.post('/AreaSquare', function(req, res){
    let base = req.body.base ;
    let altura = req.body.altura ;
    
    let result = parseFloat (base) * parseFloat (altura) ;
    
    res.send(result.toString())
});

app.post('/AreaTriangle', function(req, res){
    let base = req.body.base ;
    let altura = req.body.altura ;
    
    let result = (parseFloat (base) * parseFloat (altura))/2 ;
    
    res.send(result.toString())
});

app.listen(port,function(){
        console.log('MY APP IS RUNING AT THE PORT ' + port);
});