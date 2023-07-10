const express = require('express');
const app = express();//express 앱 구동
const ejsMate = require('ejs-mate');//ejs-mate라는 템플릿을 사용하겠다
const path = require('path');

app.engine("ejs", ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));//ejs파일을 사용하는데 default folder -> views
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('clone');
})

app.listen(3000, ()=>{//
    console.log("3000 port");
})
