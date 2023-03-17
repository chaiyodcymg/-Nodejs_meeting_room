const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const  path = require('path');

process.env.TZ = "Asia/Bangkok"
const PORT =  3000
const session = require('express-session')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"secret"
}))
app.use(fileUpload({
    createParentPath: true
}));
const router = require('./routes/route')
app.use(router)

app.listen(PORT, () => {
    console.log('\x1b[34m%s\x1b[0m',`Server running on Port : ${PORT} `)
})
