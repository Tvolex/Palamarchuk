const config = require ('./config');
const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const cookieParser = require ('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    secret: 'aw53Sw32sdWRg56WDSD1321',
    resave: false,
    saveUninitialized: true
}));



// view engine setup
app.set('views', path.join(__dirname, '../view'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(path.join(__dirname, '../public')));

app.listen(config.port, function(){
    console.log('Server start on port ' + config.port);
});
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.use(function(req, res, next) {
    res.status(404)
        .json({error : "404"});
});
module.exports = app;

