const express = require('express');
const app = express();//express 앱 구동

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.listen(3000, ()=>{//
    console.log("3000 port");
})
