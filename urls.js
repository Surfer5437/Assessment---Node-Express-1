const express = require('express');
const axi = require('axios');
const app = express();
const fs = require('fs')
app.use(express.json());

app.use('/', async function(req,res,next){
    
const dataPromises = [];
let urls = [];
fs.readFile('./urls.txt', 'utf8', function(err,data){
    if (err!== null){
        console.error('no file')
    }
    for (let line of data.split('\n')){
        urls.push(line);
    }
    console.log(urls)
for (let i = 0; i < urls.length;i++) {
    dataPromises.push(axi.get(urls[i]))
}
Promise.all(dataPromises)
.then(promArr=>{
    for (const prom of promArr) {
        fs.appendFile('html.txt', prom.data.toString(), (err) => {
            if (err) throw err;
        })
    }
})
.catch(err=>{
    console.log(err)

    return res.json(err)
});
return res.send('err')
})








})

app.use((err, req,res,next) => {
    res.status(err.status || 500);
    return res.json({
        error: err.message,
    });
});

app.listen(3000, function(){
    console.log('Server running on port 3000!')
})
